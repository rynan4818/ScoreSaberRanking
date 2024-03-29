//https://population.un.org/wpp/Download/Standard/Population/
var population = {
"af":["AFG",4,"Afghanistan",38041.757,38928.341],
"al":["ALB",8,"Albania",2880.913,2877.8],
"dz":["DZA",12,"Algeria",43053.054,43851.043],
"as":["ASM",16,"American Samoa",55.312,55.197],
"ad":["AND",20,"Andorra",77.146,77.265],
"ao":["AGO",24,"Angola",31825.299,32866.268],
"ai":["AIA",660,"Anguilla",14.872,15.002],
"ag":["ATG",28,"Antigua and Barbuda",97.115,97.928],
"ar":["ARG",32,"Argentina",44780.675,45195.777],
"am":["ARM",51,"Armenia",2957.728,2963.234],
"aw":["ABW",533,"Aruba",106.31,106.766],
"au":["AUS",36,"Australia",25203.2,25499.881],
"at":["AUT",40,"Austria",8955.108,9006.4],
"az":["AZE",31,"Azerbaijan",10047.719,10139.175],
"bs":["BHS",44,"Bahamas",389.486,393.248],
"bh":["BHR",48,"Bahrain",1641.164,1701.583],
"bd":["BGD",50,"Bangladesh",163046.173,164689.383],
"bb":["BRB",52,"Barbados",287.021,287.371],
"by":["BLR",112,"Belarus",9452.409,9449.321],
"be":["BEL",56,"Belgium",11539.326,11589.616],
"bz":["BLZ",84,"Belize",390.351,397.621],
"bj":["BEN",204,"Benin",11801.151,12123.198],
"bm":["BMU",60,"Bermuda",62.508,62.273],
"bt":["BTN",64,"Bhutan",763.094,771.612],
"bo":["BOL",68,"Bolivia (Plurinational State of)",11513.102,11673.029],
"ba":["BIH",70,"Bosnia and Herzegovina",3300.998,3280.815],
"bw":["BWA",72,"Botswana",2303.703,2351.625],
"br":["BRA",76,"Brazil",211049.519,212559.409],
"vg":["VGB",92,"British Virgin Islands",30.033,30.237],
"bn":["BRN",96,"Brunei Darussalam",433.296,437.483],
"bg":["BGR",100,"Bulgaria",7000.117,6948.445],
"bf":["BFA",854,"Burkina Faso",20321.383,20903.278],
"bi":["BDI",108,"Burundi",11530.577,11890.781],
"cv":["CPV",132,"Cabo Verde",549.936,555.988],
"kh":["KHM",116,"Cambodia",16486.542,16718.971],
"cm":["CMR",120,"Cameroon",25876.387,26545.864],
"ca":["CAN",124,"Canada",37411.038,37742.157],
"ky":["CYM",136,"Cayman Islands",64.948,65.72],
"cf":["CAF",140,"Central African Republic",4745.179,4829.764],
"td":["TCD",148,"Chad",15946.882,16425.859],
"cl":["CHL",152,"Chile",18952.035,19116.209],
"cn":["CHN",156,"China",1433783.692,1439323.774],
"hk":["HKG",344,"China, Hong Kong SAR",7436.157,7496.988],
"mo":["MAC",446,"China, Macao SAR",640.446,649.342],
"tw":["TWN",158,"China, Taiwan Province of China",23773.881,23816.775],
"co":["COL",170,"Colombia",50339.443,50882.884],
"km":["COM",174,"Comoros",850.891,869.595],
"cg":["COG",178,"Congo",5380.504,5518.092],
"ck":["COK",184,"Cook Islands",17.547,17.564],
"cr":["CRI",188,"Costa Rica",5047.561,5094.114],
"ci":["CIV",384,"Côte d'Ivoire",25716.554,26378.275],
"hr":["HRV",191,"Croatia",4130.299,4105.268],
"cu":["CUB",192,"Cuba",11333.484,11326.616],
"cy":["CYP",196,"Cyprus",1198.574,1207.361],
"cz":["CZE",203,"Czechia",10689.213,10708.982],
"kp":["PRK",408,"Dem. People's Republic of Korea",25666.158,25778.815],
"zr":["ZAR",180,"Democratic Republic of the Congo",86790.568,89561.404],
"dk":["DNK",208,"Denmark",5771.877,5792.203],
"dj":["DJI",262,"Djibouti",973.557,988.002],
"dm":["DMA",212,"Dominica",71.808,71.991],
"do":["DOM",214,"Dominican Republic",10738.957,10847.904],
"ec":["ECU",218,"Ecuador",17373.657,17643.06],
"eg":["EGY",818,"Egypt",100388.076,102334.403],
"sv":["SLV",222,"El Salvador",6453.55,6486.201],
"gq":["GNQ",226,"Equatorial Guinea",1355.982,1402.985],
"er":["ERI",232,"Eritrea",3497.117,3546.427],
"ee":["EST",233,"Estonia",1325.649,1326.539],
"sz":["SWZ",748,"Eswatini",1148.133,1160.164],
"et":["ETH",231,"Ethiopia",112078.727,114963.583],
"fk":["FLK",238,"Falkland Islands (Malvinas)",3.372,3.483],
"fo":["FRO",234,"Faroe Islands",48.677,48.865],
"fj":["FJI",242,"Fiji",889.955,896.444],
"fi":["FIN",246,"Finland",5532.159,5540.718],
"fr":["FRA",250,"France",65129.731,65273.512],
"gf":["GUF",254,"French Guiana",290.823,298.682],
"pf":["PYF",258,"French Polynesia",279.285,280.904],
"ga":["GAB",266,"Gabon",2172.578,2225.728],
"gm":["GMB",270,"Gambia",2347.696,2416.664],
"ge":["GEO",268,"Georgia",3996.762,3989.175],
"de":["DEU",276,"Germany",83517.046,83783.945],
"gh":["GHA",288,"Ghana",30417.858,31072.945],
"gi":["GIB",292,"Gibraltar",33.706,33.691],
"gr":["GRC",300,"Greece",10473.452,10423.056],
"gl":["GRL",304,"Greenland",56.66,56.772],
"gd":["GRD",308,"Grenada",112.002,112.519],
"gp":["GLP",312,"Guadeloupe",400.048,400.127],
"gu":["GUM",316,"Guam",167.295,168.783],
"gt":["GTM",320,"Guatemala",17581.476,17915.567],
"gn":["GIN",324,"Guinea",12771.246,13132.792],
"gw":["GNB",624,"Guinea-Bissau",1920.917,1967.998],
"gy":["GUY",328,"Guyana",782.775,786.559],
"ht":["HTI",332,"Haiti",11263.079,11402.533],
"va":["VAT",336,"Holy See",0.815,0.809],
"hn":["HND",340,"Honduras",9746.115,9904.608],
"hu":["HUN",348,"Hungary",9684.68,9660.35],
"is":["ISL",352,"Iceland",339.037,341.25],
"in":["IND",356,"India",1366417.756,1380004.385],
"id":["IDN",360,"Indonesia",270625.567,273523.621],
"ir":["IRN",364,"Iran (Islamic Republic of)",82913.893,83992.953],
"iq":["IRQ",368,"Iraq",39309.789,40222.503],
"ie":["IRL",372,"Ireland",4882.498,4937.796],
"il":["ISR",376,"Israel",8519.373,8655.541],
"it":["ITA",380,"Italy",60550.092,60461.828],
"jm":["JAM",388,"Jamaica",2948.277,2961.161],
"jp":["JPN",392,"Japan",126860.299,126476.458],
"jo":["JOR",400,"Jordan",10101.697,10203.14],
"kz":["KAZ",398,"Kazakhstan",18551.428,18776.707],
"ke":["KEN",404,"Kenya",52573.967,53771.3],
"ki":["KIR",296,"Kiribati",117.608,119.446],
"kw":["KWT",414,"Kuwait",4207.077,4270.563],
"kg":["KGZ",417,"Kyrgyzstan",6415.851,6524.191],
"la":["LAO",418,"Lao People's Democratic Republic",7169.456,7275.556],
"lv":["LVA",428,"Latvia",1906.74,1886.202],
"lb":["LBN",422,"Lebanon",6855.709,6825.442],
"ls":["LSO",426,"Lesotho",2125.267,2142.252],
"lr":["LBR",430,"Liberia",4937.374,5057.677],
"ly":["LBY",434,"Libya",6777.453,6871.287],
"li":["LIE",438,"Liechtenstein",38.02,38.137],
"lt":["LTU",440,"Lithuania",2759.631,2722.291],
"lu":["LUX",442,"Luxembourg",615.73,625.976],
"mg":["MDG",450,"Madagascar",26969.306,27691.019],
"mw":["MWI",454,"Malawi",18628.749,19129.955],
"my":["MYS",458,"Malaysia",31949.789,32365.998],
"mv":["MDV",462,"Maldives",530.957,540.542],
"ml":["MLI",466,"Mali",19658.023,20250.834],
"mt":["MLT",470,"Malta",440.377,441.539],
"mh":["MHL",584,"Marshall Islands",58.791,59.194],
"mq":["MTQ",474,"Martinique",375.557,375.265],
"mr":["MRT",478,"Mauritania",4525.698,4649.66],
"mu":["MUS",480,"Mauritius",1269.67,1271.767],
"yt":["MYT",175,"Mayotte",266.153,272.813],
"mx":["MEX",484,"Mexico",127575.529,128932.753],
"fm":["FSM",583,"Micronesia (Fed. States of)",113.811,115.021],
"mc":["MCO",492,"Monaco",38.967,39.244],
"mn":["MNG",496,"Mongolia",3225.166,3278.292],
"ms":["MSR",500,"Montserrat",4.991,4.999],
"ma":["MAR",504,"Morocco",36471.766,36910.558],
"mz":["MOZ",508,"Mozambique",30366.043,31255.435],
"mm":["MMR",104,"Myanmar",54045.422,54409.794],
"na":["NAM",516,"Namibia",2494.524,2540.916],
"nr":["NRU",520,"Nauru",10.764,10.834],
"np":["NPL",524,"Nepal",28608.715,29136.808],
"nl":["NLD",528,"Netherlands",17097.123,17134.873],
"nc":["NCL",540,"New Caledonia",282.757,285.491],
"nz":["NZL",554,"New Zealand",4783.062,4822.233],
"ni":["NIC",558,"Nicaragua",6545.503,6624.554],
"ne":["NER",562,"Niger",23310.719,24206.636],
"ng":["NGA",566,"Nigeria",200963.603,206139.587],
"nu":["NIU",570,"Niue",1.614,1.618],
"mk":["MKD",807,"North Macedonia",2083.458,2083.38],
"mp":["MNP",580,"Northern Mariana Islands",57.213,57.557],
"no":["NOR",578,"Norway",5378.859,5421.242],
"om":["OMN",512,"Oman",4974.992,5106.622],
"pk":["PAK",586,"Pakistan",216565.317,220892.331],
"pw":["PLW",585,"Palau",18.001,18.092],
"pa":["PAN",591,"Panama",4246.44,4314.768],
"pg":["PNG",598,"Papua New Guinea",8776.119,8947.027],
"py":["PRY",600,"Paraguay",7044.639,7132.53],
"pe":["PER",604,"Peru",32510.462,32971.846],
"ph":["PHL",608,"Philippines",108116.622,109581.085],
"pl":["POL",616,"Poland",37887.771,37846.605],
"pt":["PRT",620,"Portugal",10226.178,10196.707],
"pr":["PRI",630,"Puerto Rico",2933.404,2860.84],
"qa":["QAT",634,"Qatar",2832.071,2881.06],
"kr":["KOR",410,"Republic of Korea",51225.321,51269.183],
"md":["MDA",498,"Republic of Moldova",4043.258,4033.963],
"re":["REU",638,"Réunion",888.932,895.308],
"ro":["ROM",642,"Romania",19364.558,19237.682],
"ru":["RUS",643,"Russian Federation",145872.26,145934.46],
"rw":["RWA",646,"Rwanda",12626.938,12952.209],
"sh":["SHN",654,"Saint Helena",6.061,6.071],
"kn":["KNA",659,"Saint Kitts and Nevis",52.834,53.192],
"lc":["LCA",662,"Saint Lucia",182.795,183.629],
"pm":["SPM",666,"Saint Pierre and Miquelon",5.821,5.795],
"vc":["VCT",670,"Saint Vincent and the Grenadines",110.593,110.947],
"ws":["WSM",882,"Samoa",197.093,198.41],
"sm":["SMR",674,"San Marino",33.864,33.938],
"st":["STP",678,"Sao Tome and Principe",215.048,219.161],
"sa":["SAU",682,"Saudi Arabia",34268.529,34813.867],
"sn":["SEN",686,"Senegal",16296.362,16743.93],
"sc":["SYC",690,"Seychelles",97.741,98.34],
"sl":["SLE",694,"Sierra Leone",7813.207,7976.985],
"sg":["SGP",702,"Singapore",5804.343,5850.343],
"sk":["SVK",703,"Slovakia",5457.012,5459.643],
"si":["SVN",705,"Slovenia",2078.654,2078.932],
"sb":["SLB",90,"Solomon Islands",669.821,686.878],
"so":["SOM",706,"Somalia",15442.906,15893.219],
"za":["ZAF",710,"South Africa",58558.267,59308.69],
"es":["ESP",724,"Spain",46736.782,46754.783],
"lk":["LKA",144,"Sri Lanka",21323.734,21413.25],
"sr":["SUR",740,"Suriname",581.363,586.634],
"se":["SWE",752,"Sweden",10036.391,10099.27],
"ch":["CHE",756,"Switzerland",8591.361,8654.618],
"sy":["SYR",760,"Syrian Arab Republic",17070.132,17500.657],
"tj":["TJK",762,"Tajikistan",9321.023,9537.642],
"th":["THA",764,"Thailand",69625.581,69799.978],
"tp":["TMP",626,"Timor-Leste",1293.12,1318.442],
"tg":["TGO",768,"Togo",8082.359,8278.737],
"tk":["TKL",772,"Tokelau",1.33,1.35],
"to":["TON",776,"Tonga",104.497,105.697],
"tt":["TTO",780,"Trinidad and Tobago",1394.969,1399.491],
"tn":["TUN",788,"Tunisia",11694.721,11818.618],
"tr":["TUR",792,"Turkey",83429.607,84339.067],
"tm":["TKM",795,"Turkmenistan",5942.094,6031.187],
"tc":["TCA",796,"Turks and Caicos Islands",38.194,38.718],
"tv":["TUV",798,"Tuvalu",11.655,11.792],
"ug":["UGA",800,"Uganda",44269.587,45741],
"ua":["UKR",804,"Ukraine",43993.643,43733.759],
"ae":["ARE",784,"United Arab Emirates",9770.526,9890.4],
"gb":["GBR",826,"United Kingdom",67530.161,67886.004],
"tz":["TZA",834,"United Republic of Tanzania",58005.461,59734.213],
"us":["USA",840,"United States of America",329064.917,331002.647],
"vi":["VIR",850,"United States Virgin Islands",104.579,104.423],
"uy":["URY",858,"Uruguay",3461.731,3473.727],
"uz":["UZB",860,"Uzbekistan",32981.715,33469.199],
"vu":["VUT",548,"Vanuatu",299.882,307.15],
"ve":["VEN",862,"Venezuela (Bolivarian Republic of)",28515.829,28435.943],
"vn":["VNM",704,"Viet Nam",96462.108,97338.583],
"wf":["WLF",876,"Wallis and Futuna Islands",11.436,11.246],
"eh":["ESH",732,"Western Sahara",582.458,597.33],
"ye":["YEM",887,"Yemen",29161.922,29825.968],
"zm":["ZMB",894,"Zambia",17861.034,18383.956],
"zw":["ZWE",716,"Zimbabwe",14645.473,14862.927]
};
