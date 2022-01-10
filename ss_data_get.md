# ScoreSaberランキング履歴データ取得API

[ScoreSaberの各種データのグラフ・テーブル表示](https://beatsaber.rynan.com/scoresaber/) で作成したデータベースからのグラフ・テーブル表示用JSONを取得するためのAPI解説です。

取得したデータの利用に私からの制限は特にありませんが、ScoreSaber利用上の常識の範囲内で使用してください。
個人記録グラフデータ取得(ss_data_get.php)は10秒5回、60秒10回が上限のアクセス制限があります。その他は10秒2回、60秒4回の制限があります。サーバ契約が弱小＆データベースが重いので、これ以上の間隔を開けてアクセスするようにして下さい。

## 個人記録グラフデータ

### API URL
    https://beatsaber.rynan.com/scoresaber/ss_data_get.php?userid=76561198245534518

* userid=整数(ScoreSaberUserID)

    指定しない場合や無効な値の場合はuserid=0になります。値を(int)でキャストしています。

```JSON
{
    "Access10s": 1,     #10秒間のアクセス回数
    "Access60s": 1,     #60秒間のアクセス回数
    "Player": "Rynan",  #最新のプレイヤー名
    "Country": "jp",    #プレイヤーの所属国
    "DataHeader": [     #Data配列のヘッダー
        "GetTime",      #データ取得時刻(UNIXTIME) ※このデータを取得した真の時間
        "Rank",         #グローバルランク
        "CountryRank",  #ローカルランク
        "pp",
        "TotalPlayCount",
        "RankedPlayCount",
        "AverageRankedAccuracy",
        "WeeklyChange",
        "TotalScore",
        "TotalRankedScore",
        "ReplaysWatched"
    ],
    "Data": [           #データの中身
        [
            1573362639,
            2843,
            159,
            435497,
            0,
            0,
            0,
            -60,
            0,
            0,
            0
        ],
        #続きます
    ],
    "MaxDbQueryTime": 240,     #最大DBクエリ時間(μsec)
    "MaxDbQueryId": 0,         #最大DBクエリ時間の処理場所(内部調査用)
    "TotalDbQueryTime": 5795   #合計DBクエリ時間(μsec)
}
```

## 基準日の前後順位記録グラフデータ

### API URL
    https://beatsaber.rynan.com/scoresaber/ss_data_get2.php?userid=76561198245534518&mode=1&ref_time=1685890799&plus_rank=5&minus_rank=5

* userid=整数(ScoreSaberUserID)

    指定しない場合や無効な値の場合はuserid=0になります。値を(int)でキャストしています。
* mode=[1|2] ※未指定時は2(世界ランク)
    * 1 : 国内ランク順位
    * 2 : 世界ランク順位

* ref_time=整数(基準日のUNIXTIME) ※指定時刻以下の最新が対象になります。最小値は1573362001、未指定は最新

* plus_rank=整数(上位順位) ※最小値は1、最大値は50、未指定は5

* minus_rank=整数(下位順位) ※最小値は1、最大値は50、未指定は5

    plus_rankとminus_rankの合計値が50を超えると、minus_rankの値が50になるまで削減されます。

```JSON
{
    "Access10s": 2,     #10秒間のアクセス回数
    "Access60s": 3,     #60秒間のアクセス回数
    "DataHeader": [     #Data配列のヘッダー
        "StartTime",    #データ取得開始時刻(UNIXTIME) ※2万人取得の開始時刻
        "Rank",
        "CountryRank",
        "pp",
        "TotalPlayCount",
        "RankedPlayCount",
        "AverageRankedAccuracy",
        "WeeklyChange",
        "TotalScore",
        "TotalRankedScore",
        "ReplaysWatched"
    ],
    "Users": [
        {
            "UserID": "76561198880912930", #ユーザーID
            "Player": "Prototype_A",       #最新プレーヤー名
            "Country": "jp",               #プレイヤー所属国
            "Data": [                      #データの中身
                [
                    1575073801,
                    19824,
                    919,
                    76483,
                    0,
                    0,
                    0,
                    55137,
                    0,
                    0,
                    0
                ],
                #続きます
            ]
        },
        #人数分続きます
    ]
    "MaxDbQueryTime": 48,     #最大DBクエリ時間(μsec)
    "MaxDbQueryId": 0,        #最大DBクエリ時間の処理場所(内部調査用)
    "TotalDbQueryTime": 181   #合計DBクエリ時間(μsec)
}
```
## ランキングテーブルデータ

### API URL
    https://beatsaber.rynan.com/scoresaber/ss_data_get4.php?ref_time=1685890799&country=jp,kr

* ref_time=整数(基準日のUNIXTIME) ※指定時刻以下の最新が対象になります。最小値は1573362001、未指定は最新

* country=a～z(小文字)2文字 or unknown を複数指定時は,区切り(所属国フィルタ 最大20国まで指定可能) ※指定しない場合はグローバルになります

```JSON
{
    "Access10s": 2,          #10秒間のアクセス回数
    "Access60s": 2,          #60秒間のアクセス回数
    "StartTime": 1685784601, #データ取得開始時刻(UNIXTIME) ※2万人取得の開始時刻
    "Headers": [             #Data配列のヘッダー
        "Player",            #最新のプレイヤー名 ※プレイヤー名は取得時ではなく最新データになります
        "Country",
        "UserID",
        "Rank",
        "CountryRank",
        "pp",
        "WeeklyChange",
        "AverageRankedAccuracy",
        "TotalPlayCount",
        "RankedPlayCount",
        "TotalScore",
        "TotalRankedScore",
        "ReplaysWatched",
        "GetTime"
    ],
    "Data": [
        [
            "Taichidesu",
            "jp",
            "2429129807113296",
            21,
            1,
            1621457,
            0,
            95139,
            3186,
            720,
            3541700024,
            1096585063,
            40176,
            1685784602
        ],
        #続きます
    ],
    "MaxDbQueryTime": 44,     #最大DBクエリ時間(μsec)
    "MaxDbQueryId": 0,        #最大DBクエリ時間の処理場所(内部調査用)
    "TotalDbQueryTime": 34036 #合計DBクエリ時間(μsec)
}
```
## グループグラフデータ

### API URL
    https://beatsaber.rynan.com/scoresaber/ss_data_get5.php?userid=76561198245534518,2429129807113296

* userid=整数を複数指定時は,区切り(ScoreSaberUserID 最大50人まで指定可能)

    指定しない場合や無効な値の場合はuserid=0になります。値を(int)でキャストしています。

```JSON
{
    "Access10s": 2,     #10秒間のアクセス回数
    "Access60s": 2,     #60秒間のアクセス回数
    "DataHeader": [     #Data配列のヘッダー
        "StartTime",    #データ取得開始時刻(UNIXTIME) ※2万人取得の開始時刻
        "Rank",
        "CountryRank",
        "pp",
        "TotalPlayCount",
        "RankedPlayCount",
        "AverageRankedAccuracy",
        "WeeklyChange",
        "TotalScore",
        "TotalRankedScore",
        "ReplaysWatched"
    ],
    "Users": [
        {
            "UserID": "76561198245534518",
            "Player": "Rynan",
            "Country": "jp",
            "Data": [
                [
                    1573362001,
                    2843,
                    159,
                    435497,
                    0,
                    0,
                    0,
                    -60,
                    0,
                    0,
                    0
                ],
                #続きます
           ]
        },
        #人数分続きます
    ],
    "MaxDbQueryTime": 64,     #最大DBクエリ時間(μsec)
    "MaxDbQueryId": 0,        #最大DBクエリ時間の処理場所(内部調査用)
    "TotalDbQueryTime": 2248  #合計DBクエリ時間(μsec)
}
```
## 個人指定日データ

※グラフサイトでは使用していませんが、ピンポイントの日付の指定ユーザのデータが欲しい用途向け、mod用など。

### API URL
    https://beatsaber.rynan.com/scoresaber/ss_data_get3.php?userid=76561198245534518&ref_time=1682953199

* ref_time=整数(基準日のUNIXTIME) ※指定時刻以下の最新が対象になります。最小値は1573362001、未指定は最新

* userid=整数(ScoreSaberUserID)

    指定しない場合や無効な値の場合はuserid=0になります。値を(int)でキャストしています。

```JSON
{
    "Access10s": 1,     #10秒間のアクセス回数
    "Access60s": 1,     #60秒間のアクセス回数
    "Data": {
        "GetTime": 1682870265,
        "Rank": 7614,
        "CountryRank": 532,
        "pp": 471260,
        "TotalPlayCount": 8240,
        "RankedPlayCount": 673,
        "AverageRankedAccuracy": 84884,
        "WeeklyChange": 139,
        "TotalScore": 3972602167,
        "TotalRankedScore": 399494175,
        "ReplaysWatched": 6
    },
    "MaxDbQueryTime": 22493,     #最大DBクエリ時間(μsec)
    "MaxDbQueryId": 0,           #最大DBクエリ時間の処理場所(内部調査用)
    "TotalDbQueryTime": 22493    #合計DBクエリ時間(μsec)
}
```
## アクセス制限時

上記APIはDB負荷対策でアクセス制限をしています。制限時のレスポンスは以下になります。
```JSON
{
    "AccessRestrictionPeriod": "2023-06-04 12:26:59",  #アクセス制限期限
    "Access10s": 3,                                    #10秒間のアクセス回数
    "Access60s": 3                                     #60秒間のアクセス回数
}
```

## CORSについて

上記APIでの取得と利用は(他サイトやローカルHTMLファイルからの)[CORS](https://www.google.co.jp/search?q=CORS)によるブラウザのJavaScriptからアクセス制限に対応するため、レスポンスヘッダとして`Access-Control-Allow-Origin: *`を返すようにしています。なお、ブラウザ以外のプログラム(mod等)からのアクセスには関係ありません。

