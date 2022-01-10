var graph_data = {};
var chart_obj = false;
var par_view_mode = false;
function country_ranker_graf(maxHeight) {
  if (maxHeight < 100){
    maxHeight = 100;
  }
  let data = graph_data['Data'];
  var country_list = [];
  var country_name = [];
  var rank = [];
  var country_rank = [];
  let start_time_idx = graph_data['DataHeader'].indexOf('StartTime');
  let country_idx = graph_data['DataHeader'].indexOf('Country');
  let count_idx = graph_data['DataHeader'].indexOf('Count');
  data.sort((a, b) => {
      return b[start_time_idx] - a[start_time_idx];
  });
  if (par_view_mode) {
    start_time = 0;
    data.some((value,idx) => {
      if (idx == 0) {
        start_time = value[start_time_idx];
      } else {
        if (start_time != value[start_time_idx]){
          return true;
        }
      }
      if (population[value[country_idx]]) {
        var p = value[count_idx]/(population[value[country_idx]][4]/1000);
        country_rank.push({Country: value[country_idx],Count: Math.round(p * 100) / 100});
      }
    });
    country_rank.sort((a, b) => {
        return b.Count - a.Count;
    });
    country_rank.some((value,idx) => {
      if (population[value['Country']]) {
        country_list.push(value['Country']);
        country_name.push(population[value['Country']][2]);
        rank.push([]);
      }
      if (rank.length > 50) {
        return true;
      }
    });
  } else {
    data.some((value,idx) => {
      if (population[value[country_idx]]) {
        country_list.push(value[country_idx]);
        country_name.push(population[value[country_idx]][2]);
      } else {
        country_list.push(value[country_idx]);
        country_name.push(value[country_idx]);
      }
      rank.push([]);
      if (idx >= 50) {
        return true;
      }
    });
  }
  data.sort((a, b) => {
      return a[start_time_idx] - b[start_time_idx];
  });
  data.forEach((value) => {
    var idx = country_list.indexOf(value[country_idx]);
    if (idx != -1) {
      if (par_view_mode){
        if (population[value[country_idx]]) {
          var p = value[count_idx]/(population[value[country_idx]][4]/1000);
          rank[idx].push([value[start_time_idx]*1000,Math.round(p * 100) / 100]);
        }
      } else {
        rank[idx].push([value[start_time_idx]*1000,value[count_idx]]);
      }
    }
  });
  // グラフ用JSON
  var title = "Number of people by country in ScoreSaber's top 20000";
  if (par_view_mode){
    title += ' (Per 1,000,000 population)';
  }
  var graf_json = {
    title: {
      text: title
    },
    //範囲セレクター
    rangeSelector: {
      selected: 5
    },
    legend: {
      enabled: true,
      align: 'left',
      backgroundColor: '#EFFFC5',
      borderColor: 'black',
      borderWidth: 2,
      layout: 'vertical',
      verticalAlign: 'top',
      y: 0,
      shadow: true,
      maxHeight: maxHeight
    }, 
    chart: {
      renderTo: 'container' ,
      zoomType: 'x'
    },
    //横軸の設定
    xAxis: {
        type: 'datetime',
    },
    //縦軸の設定
    yAxis: [{
        reversed: false,
        opposite: false,
      }
    ]
  }
  var series_data = [];
  var idx = 0;
  var decimal = 0;
  if (par_view_mode){
    decimal = 2;
  }
  country_list.forEach((value) => {
    //データ
    series_data.push(
      {
        yAxis: 0,
        data: rank[idx],
        name: country_name[idx],
        lineWidth:3,
        tooltip: {
          valueDecimals: decimal,
        }
      });
    idx += 1;
  });
  graf_json.series = series_data;
  
  // Create the chart
  return new Highcharts.stockChart('container', graf_json);
}

window.addEventListener('load', () => {
  ///メイン処理
  Highcharts.setOptions({
    global: {
      useUTC: false
    }
  });
  const container = document.querySelector('#container');
  const data_url = './json/ss_data_get3.json';
  const request_timeout = 310000; //msec
  const httpRequest = new XMLHttpRequest();
  const heightApply_button = document.querySelector('#heightApply');
  const autoheight_button = document.querySelector('#autoheight');
  const view_mode = document.querySelector('#view_mode');
  const height_input = document.querySelector('#heightInput');
  container.innerHTML = "<H1>Loading data...</H1>";
  httpRequest.onreadystatechange = function() {       //アロー関数にするとthis参照が変わるので動かない
    if(this.readyState == 4) {
      if (this.status == 200) {
        container.innerHTML = ""
        graph_data = this.response;
        let a = document.documentElement.clientHeight - 120;
        if (a < 100){
          a = 100;
        }
        container.style.height = a.toString() + "px";
        height_input.value = a.toString();
        chart_obj = country_ranker_graf(a - 100);
      } else {
        container.innerHTML = "<H1>Cannot load data due to server error</H1>"
      }
    }
  }
  httpRequest.open('GET', data_url, true);
  httpRequest.timeout = request_timeout;
  httpRequest.responseType = 'json';
  httpRequest.send();
  httpRequest.addEventListener('progress',(e) => {
    container.innerHTML = "<H1>Loading data: " + Math.floor(e.loaded / 1024) + "KByte</H1>";
  });
  heightApply_button.addEventListener('click', (evt) => {
    evt.preventDefault();
    chart_obj.destroy();
    let a = parseInt(height_input.value, 10);
    if (a < 100){
      a = 100;
    }
    container.style.height = a.toString() + "px";
    height_input.value = a.toString();
    chart_obj = country_ranker_graf(a - 100);
  });
  autoheight_button.addEventListener('click', (evt) => {
    evt.preventDefault();
    chart_obj.destroy();
    let a = document.documentElement.clientHeight - 120;
    if (a < 100){
      a = 100;
    }
    container.style.height = a.toString() + "px";
    height_input.value = a.toString();
    chart_obj = country_ranker_graf(a - 100);
  });
  view_mode.addEventListener('click', (evt) => {
    evt.preventDefault();
    chart_obj.destroy();
    par_view_mode = !par_view_mode;
    if (par_view_mode) {
      view_mode.innerHTML = "Comparison of number of people(人数比較)";
    } else {
      view_mode.innerHTML = "Comparison per million population(人口百万人当たり)";
    }
    let a = document.documentElement.clientHeight - 120;
    if (a < 100){
      a = 100;
    }
    chart_obj = country_ranker_graf(a - 100);
  });
});