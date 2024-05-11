var xRange = ["2024-03-22", "2024-03-23", "2024-03-24", "2024-03-25", "2024-03-26", "2024-03-27", "2024-03-28", "2024-03-29", "2024-03-30", "2024-03-31", "2024-04-01", "2024-04-02", "2024-04-03", "2024-04-04", "2024-04-05", "2024-04-06", "2024-04-07", "2024-04-08", "2024-04-09", "2024-04-10", "2024-04-11", "2024-04-12", "2024-04-13", "2024-04-14", "2024-04-15", "2024-04-16", "2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20", "2024-04-21", "2024-04-22", "2024-04-23", "2024-04-24", "2024-04-25", "2024-04-26", "2024-04-27", "2024-04-28", "2024-04-29", "2024-04-30", "2024-05-01", "2024-05-02", "2024-05-03", "2024-05-04", "2024-05-05", "2024-05-06", "2024-05-07", "2024-05-08", "2024-05-09", "2024-05-10", "2024-05-11"];
var PS1= {
  x: xRange,
  y: [0.48431199999999996,0.4494075,0.482648,0.482648,0.519439,0.5439740000000001,0.523873,0.490568,0.5159703,0.49385199999999996,0.49385199999999996,0.462139,0.43162900000000004,0.391582,0.432275,0.394012,0.35940120000000003,0.35940120000000003,0.40966400000000003,0.433846,0.40099300000000004,0.3569275,0.39553800000000006,0.440495,0.440495,0.400541,0.35986599999999996,0.358889,0.39061599999999996,0.39101800000000003,0.38034599999999996,0.38034599999999996,0.415204,0.378908,0.410556,0.448934,0.409892,0.44982,0.44982,0.47929900000000003,0.43884,0.3946,0.42892800000000003,0.46078699999999995,0.46078699999999995,0.46078699999999995,0.505137,0.5477011,0.5845412,0.615997,0.611664],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.515479,0.48265699999999995,0.4535907,0.4535907,0.42358559999999995,0.3834186,0.3970865,0.427127,0.38374620000000004,0.35814870000000004,0.35814870000000004,0.38842410000000005,0.3902937,0.3515208,0.3179648,0.3511145,0.380025,0.380025,0.346815,0.3095021,0.2722625,0.21713290000000002,0.1895811,0.16374662,0.16374662,0.13774483,0.11621677,0.1760869,0.19383209999999998,0.20164239999999997,0.2142177,0.2142177,0.21961689999999998,0.188498,0.2075982,0.18685849999999998,0.16681768,0.14771647,0.14771647,0.12179593000000001,0.10053560000000002,0.11373651,0.13665992,0.15868346,0.15868346,0.15868346,0.15787634999999997,0.17765235000000001,0.1985047,0.16857421000000003,0.14207429],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.514274,0.545312,0.5826709999999999,0.5826709999999999,0.552881,0.5434831999999999,0.5232758000000001,0.4909761,0.4444218,0.41459589999999996,0.41459589999999996,0.3752129,0.3733778,0.321316,0.28820819999999997,0.3162378,0.3494761,0.3494761,0.4117711,0.449925,0.48420599999999997,0.42230300000000004,0.386777,0.42453199999999996,0.42453199999999996,0.451791,0.49778,0.5427497,0.514839,0.5542469,0.59536,0.59536,0.6282880000000001,0.66327,0.625601,0.659948,0.6940219999999999,0.729117,0.729117,0.6995319999999999,0.736287,0.766354,0.734661,0.7058939999999999,0.7058939999999999,0.7058939999999999,0.704642,0.664775,0.695743,0.6617139999999999,0.6998139999999999],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.488779,0.4562565,0.4556171,0.4556171,0.42665949999999997,0.39013169999999997,0.3996602,0.3615699,0.3850124,0.419474,0.419474,0.45486800000000005,0.45612699999999995,0.505042,0.536011,0.570627,0.605361,0.605361,0.547666,0.5208655999999999,0.56179,0.618931,0.651901,0.6818310000000001,0.6818310000000001,0.707786,0.6700360000000001,0.60064,0.573722,0.570474,0.5825130000000001,0.5825130000000001,0.5453001000000001,0.5091319999999999,0.47332199999999996,0.426939,0.389364,0.35571,0.35571,0.392592,0.42793699999999996,0.397037,0.37025699999999995,0.34378699999999995,0.34378699999999995,0.34378699999999995,0.303599,0.270875,0.23295760000000001,0.2066031,0.2354703],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5013699,0.469708,0.5054248,0.5054248,0.535591,0.565516,0.610168,0.6412019999999999,0.6615911999999999,0.6971395,0.6971395,0.662805,0.660258,0.699513,0.6722539999999999,0.644005,0.621525,0.621525,0.583279,0.553951,0.5950369999999999,0.570201,0.5317280999999999,0.48648199999999997,0.48648199999999997,0.530351,0.499539,0.491169,0.5182180000000001,0.479899,0.436099,0.436099,0.409115,0.382465,0.35329800000000006,0.3107568,0.343475,0.304674,0.304674,0.33311300000000005,0.2932227,0.2566739,0.28754430000000003,0.26098370000000004,0.26098370000000004,0.26098370000000004,0.26341349999999997,0.2390584,0.20633919999999997,0.22716419999999998,0.1934698],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.4886834,0.5207419999999999,0.52057,0.52057,0.548742,0.588901,0.578721,0.613966,0.591321,0.6212759999999999,0.6212759999999999,0.5941219999999999,0.6298480000000001,0.6654019999999999,0.69422,0.658735,0.61609,0.61609,0.657393,0.685088,0.708032,0.7625808000000001,0.7938082000000001,0.8257760000000001,0.8257760000000001,0.800399,0.8374347999999999,0.7901827,0.8089307000000001,0.8304258,0.8071091,0.8071091,0.8358625999999999,0.8581847,0.8813508,0.8654997999999999,0.8484956,0.8693946,0.8693946,0.8464619999999999,0.8664728,0.8458816,0.8221392,0.8491962,0.8491962,0.8491962,0.8470544999999999,0.8703255999999999,0.8532349,0.8247245,0.8232924],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.516698,0.4866608,0.450484,0.450484,0.4181647,0.3898691,0.4069656,0.37705089999999997,0.35562800000000006,0.3197306,0.3197306,0.34617879999999995,0.3152595,0.2616535,0.2940614,0.2597122,0.22705010000000003,0.22705010000000003,0.2858009,0.2595446,0.23229049999999998,0.2351456,0.20047790000000001,0.1638723,0.1638723,0.13764542000000002,0.15927877000000001,0.2214461,0.2020605,0.2013668,0.1786536,0.1786536,0.2006912,0.22688360000000002,0.2548991,0.2224626,0.2517488,0.222327,0.222327,0.253322,0.22284189999999998,0.2532218,0.2792461,0.30869610000000003,0.30869610000000003,0.30869610000000003,0.30797620000000003,0.33781199999999995,0.36793400000000004,0.33295,0.331115],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.47913120000000003,0.5110844,0.4767435,0.4767435,0.510355,0.5130256,0.5383325,0.5706706,0.5465897,0.5007566,0.5007566,0.46940709999999997,0.499395,0.548231,0.5056116,0.542695,0.576694,0.576694,0.515638,0.488199,0.457007,0.521956,0.480105,0.429644,0.429644,0.458888,0.500431,0.42504400000000003,0.46438300000000005,0.467874,0.5127659,0.5127659,0.47929099999999997,0.45082199999999994,0.498201,0.5270187000000001,0.5605269,0.523958,0.523958,0.48759699999999995,0.526753,0.5758419,0.5457122,0.5169519,0.5169519,0.5169519,0.473789,0.510405,0.5449585,0.5836351000000001,0.6184780000000001],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.49928419999999996,0.5324519999999999,0.4970294,0.4970294,0.527355,0.566966,0.555269,0.524669,0.5686559999999999,0.600116,0.600116,0.637482,0.608356,0.590552,0.623362,0.661863,0.698915,0.698915,0.628346,0.6564160000000001,0.682161,0.7524069999999999,0.7860906,0.7560939999999999,0.7560939999999999,0.719226,0.752474,0.719758,0.696446,0.668135,0.702302,0.702302,0.679755,0.7166,0.696187,0.722545,0.746581,0.774656,0.774656,0.7944464,0.761578,0.7287210000000001,0.762155,0.7989172999999999,0.7989172999999999,0.7989172999999999,0.7979461,0.77715,0.749008,0.774288,0.741532],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5119882,0.54572,0.57522,0.57522,0.537228,0.514715,0.46664910000000004,0.5022002999999999,0.547064,0.57491,0.57491,0.6093609999999999,0.635456,0.665187,0.6360319999999999,0.600998,0.565463,0.565463,0.6136269999999999,0.642663,0.6062219999999999,0.5424142000000001,0.583993,0.627527,0.627527,0.6556289999999999,0.606943,0.674035,0.636953,0.634918,0.590634,0.590634,0.586876,0.625236,0.598986,0.629037,0.589077,0.622626,0.622626,0.5918414,0.625531,0.667932,0.632698,0.5961027,0.5961027,0.5961027,0.638565,0.604246,0.5667791,0.604349,0.60309],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.0928626,0.07922520000000001,0.090339,0.090339,0.10817399999999999,0.11600799999999999,0.105135,0.08838270000000001,0.09823530000000001,0.0875243,0.0875243,0.0752029,0.0648767,0.0506713,0.0620017,0.053026000000000004,0.044376599999999995,0.044376599999999995,0.059159899999999994,0.0645125,0.0526227,0.0390532,0.043538400000000005,0.051643299999999996,0.051643299999999996,0.043643,0.0331714,0.038123699999999996,0.0432194,0.0438874,0.0428233,0.0428233,0.047763400000000004,0.0374446,0.042811800000000004,0.0505142,0.042307399999999995,0.0457396,0.0457396,0.0560998,0.0444453,0.0366757,0.0454684,0.051067299999999996,0.051067299999999996,0.051067299999999996,0.0605825,0.07219310000000001,0.08925219999999999,0.10297,0.101796],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.10574,0.09048129999999999,0.0789236,0.0789236,0.07022,0.0563468,0.060453,0.0679316,0.0550264,0.0460098,0.0460098,0.054281899999999994,0.0543871,0.0431349,0.035448600000000004,0.0429408,0.0492271,0.0492271,0.044272799999999994,0.033928,0.027076399999999997,0.0162304,0.012088199999999999,0.009228819999999999,0.009228819999999999,0.00695273,0.005243769999999999,0.010977899999999999,0.0134993,0.0140888,0.016871300000000002,0.016871300000000002,0.0165688,0.0115189,0.0143404,0.0111755,0.00976668,0.006623970000000001,0.006623970000000001,0.00540043,0.00383979,0.00477551,0.00672842,0.00866896,0.00866896,0.00866896,0.00786805,0.00983775,0.0125775,0.00998891,0.00710449],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.104503,0.119893,0.138191,0.138191,0.120294,0.116309,0.108202,0.09387209999999999,0.07479569999999999,0.0623606,0.0623606,0.0526132,0.0510412,0.0374671,0.0304438,0.037616500000000004,0.0436436,0.0436436,0.0624738,0.0713713,0.0804231,0.056473800000000005,0.043329700000000006,0.050141899999999996,0.050141899999999996,0.057900299999999995,0.0673866,0.09140770000000001,0.0822975,0.0934809,0.11422399999999999,0.11422399999999999,0.127674,0.13731100000000002,0.11259200000000001,0.132505,0.153707,0.164894,0.164894,0.15254700000000002,0.16927099999999998,0.20228900000000002,0.182053,0.15535,0.15535,0.15535,0.15407700000000002,0.129353,0.152979,0.133093,0.153924],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.09560479999999999,0.0824847,0.0825663,0.0825663,0.0728003,0.0574997,0.061538999999999996,0.050496400000000004,0.056263900000000006,0.0635522,0.0635522,0.0760137,0.0750612,0.0877781,0.10062700000000001,0.11379,0.134502,0.134502,0.11101899999999999,0.0965866,0.111264,0.126562,0.13602,0.149787,0.149787,0.17072900000000002,0.14258200000000001,0.113901,0.103617,0.102514,0.10572100000000001,0.10572100000000001,0.08870510000000001,0.0696711,0.0585451,0.0470195,0.040792600000000005,0.0295451,0.0295451,0.038432600000000004,0.0440654,0.0371999,0.0360524,0.0290256,0.0290256,0.0290256,0.0229173,0.0192645,0.014792999999999999,0.0128877,0.0160223],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.09932110000000001,0.08647,0.0997988,0.0997988,0.112761,0.124655,0.14999700000000002,0.166646,0.180578,0.199414,0.199414,0.177171,0.17344299999999999,0.192804,0.172701,0.158656,0.14085899999999998,0.14085899999999998,0.12793,0.10934799999999999,0.126051,0.10261100000000001,0.08122109999999999,0.0635325,0.0635325,0.079015,0.0661308,0.0736169,0.0822639,0.0666605,0.056361999999999995,0.056361999999999995,0.049348,0.038548,0.0330513,0.024586,0.0314199,0.022553800000000002,0.022553800000000002,0.028501500000000003,0.0212133,0.0171316,0.022887800000000003,0.0182643,0.0182643,0.0182643,0.017453,0.0157791,0.012066700000000001,0.0151193,0.0111648],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.0958408,0.10921299999999999,0.10799700000000001,0.10799700000000001,0.121059,0.137665,0.133484,0.150025,0.136251,0.150143,0.150143,0.13469299999999998,0.157287,0.16857599999999998,0.19363,0.165499,0.141488,0.141488,0.172044,0.18825599999999998,0.202222,0.237719,0.260145,0.292643,0.292643,0.261724,0.305015,0.260455,0.29201,0.318791,0.28345400000000004,0.28345400000000004,0.321667,0.344339,0.39555,0.35302,0.319946,0.339863,0.339863,0.310174,0.331876,0.298717,0.276915,0.30726,0.30726,0.30726,0.306602,0.348097,0.323272,0.28292,0.282595],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.107269,0.0937641,0.0790199,0.0790199,0.0666085,0.056706599999999996,0.06324600000000001,0.0540337,0.0474008,0.037706500000000004,0.037706500000000004,0.043886400000000006,0.0367882,0.0245002,0.030071,0.0242512,0.0190833,0.0190833,0.0311585,0.0253133,0.019844300000000002,0.0177991,0.0124271,0.0083781,0.0083781,0.00721592,0.00762307,0.0155047,0.0138248,0.0136712,0.0119279,0.0119279,0.0134091,0.0153994,0.0179427,0.015078399999999999,0.0183724,0.0125693,0.0125693,0.0172601,0.013438,0.0166554,0.0213471,0.025084899999999997,0.025084899999999997,0.025084899999999997,0.025106100000000003,0.028735,0.035786399999999996,0.0280243,0.0286969],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.09262129999999999,0.105428,0.09006,0.09006,0.101747,0.106005,0.114596,0.129768,0.11587399999999999,0.0954667,0.0954667,0.08203370000000001,0.0910103,0.10595299999999999,0.08830260000000001,0.104177,0.1209,0.1209,0.096783,0.0848432,0.0725851,0.086741,0.0645368,0.050983,0.050983,0.0592303,0.0683405,0.0541879,0.066928,0.06475109999999999,0.08255290000000001,0.08255290000000001,0.0697051,0.0560503,0.069027,0.0769807,0.0897769,0.0685132,0.0685132,0.0622705,0.0704259,0.08720290000000001,0.0825692,0.0696729,0.0696729,0.0696729,0.056224399999999994,0.0661954,0.0787905,0.0961651,0.11008899999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.100121,0.11413200000000001,0.09853790000000001,0.09853790000000001,0.111886,0.12687700000000002,0.120851,0.10457899999999999,0.12190899999999999,0.135361,0.135361,0.16227,0.14076,0.122544,0.138881,0.16908,0.19312700000000002,0.19312700000000002,0.1513,0.16786700000000002,0.17962,0.224675,0.245548,0.206077,0.206077,0.180056,0.199777,0.189543,0.17197400000000002,0.15251,0.175305,0.175305,0.157413,0.172088,0.153255,0.170914,0.19298,0.20262,0.20262,0.23261700000000002,0.193101,0.168347,0.20755400000000002,0.238708,0.238708,0.238708,0.23477,0.210362,0.19233099999999997,0.21431099999999997,0.18479900000000002],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.106117,0.118909,0.134566,0.134566,0.11445,0.10192899999999999,0.0824965,0.09426530000000001,0.113667,0.122462,0.122462,0.141834,0.155346,0.166572,0.147893,0.130963,0.11279399999999999,0.11279399999999999,0.143859,0.157974,0.12829100000000002,0.0921352,0.101146,0.117585,0.117585,0.13353299999999999,0.10473,0.152282,0.130366,0.129645,0.110759,0.110759,0.10774700000000001,0.11763,0.102885,0.118206,0.10093,0.107077,0.107077,0.0966974,0.10832399999999999,0.131005,0.118424,0.0968987,0.0968987,0.0968987,0.1144,0.10018200000000001,0.08815110000000001,0.104521,0.10381],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.0954574,0.08579479999999999,0.094761,0.094761,0.105876,0.109922,0.107165,0.09696729999999999,0.103305,0.0974257,0.0974257,0.0887471,0.0804133,0.0672287,0.0779183,0.06883399999999999,0.0611034,0.0611034,0.07398010000000001,0.0805675,0.06947729999999999,0.0593068,0.0649116,0.0763467,0.0763467,0.065067,0.054568599999999995,0.0569763,0.0667206,0.0663126,0.0618167,0.0618167,0.0705366,0.0587854,0.0681682,0.0762758,0.0657026,0.0732804,0.0732804,0.0835202,0.0699647,0.0592743,0.0712816,0.0765527,0.0765527,0.0765527,0.0896875,0.10126700000000001,0.114338,0.12253,0.121764],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.10567,0.09350870000000001,0.08720639999999999,0.08720639999999999,0.07929,0.0683232,0.071127,0.0788284,0.0670636,0.060640200000000005,0.060640200000000005,0.0683281,0.0674229,0.0570951,0.050801400000000003,0.0588292,0.0638929,0.0638929,0.0581172,0.048972,0.0416936,0.0290696,0.022881799999999997,0.0194212,0.0194212,0.0149173,0.012286199999999999,0.0215421,0.0242207,0.0261712,0.028608699999999997,0.028608699999999997,0.0290412,0.0234311,0.0277296,0.0230445,0.0206233,0.015795999999999998,0.015795999999999998,0.0125196,0.00920021,0.0109745,0.014801600000000002,0.017821,0.017821,0.017821,0.016711900000000002,0.0208923,0.0251425,0.0194111,0.015575499999999999],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.10229700000000001,0.11111700000000001,0.123469,0.123469,0.11425600000000001,0.11367100000000001,0.10818799999999999,0.0981679,0.0848743,0.0766794,0.0766794,0.0669768,0.0662988,0.0540229,0.0450762,0.051813500000000005,0.060136400000000007,0.060136400000000007,0.0767962,0.0844787,0.09470690000000001,0.0746662,0.06430029999999999,0.07407810000000001,0.07407810000000001,0.0795097,0.0921834,0.107602,0.0986825,0.111189,0.121496,0.121496,0.134776,0.146319,0.138088,0.146315,0.15734299999999998,0.16868599999999997,0.16868599999999997,0.157883,0.17039900000000002,0.179611,0.168607,0.16102,0.16102,0.16102,0.160043,0.145827,0.155911,0.141267,0.153346],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.0969352,0.0901753,0.08863370000000001,0.08863370000000001,0.0801097,0.07049029999999999,0.07225100000000001,0.0625236,0.0685761,0.0767778,0.0767778,0.08598629999999999,0.08680879999999999,0.0967819,0.106403,0.11748,0.126878,0.126878,0.109721,0.102503,0.114826,0.131068,0.14318,0.150523,0.150523,0.157721,0.143118,0.123289,0.11577299999999999,0.116666,0.118959,0.118959,0.107215,0.09418889999999999,0.0861649,0.0718705,0.0620874,0.0522049,0.0522049,0.0608174,0.0679846,0.0618101,0.057007600000000005,0.049064399999999994,0.049064399999999994,0.049064399999999994,0.0406027,0.0344855,0.029587,0.0240023,0.027797699999999998],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.101259,0.09111,0.101381,0.101381,0.109059,0.117475,0.129793,0.13794399999999998,0.146032,0.158016,0.158016,0.147589,0.145457,0.157196,0.148719,0.139424,0.132631,0.132631,0.12233,0.11389200000000001,0.122609,0.114409,0.101419,0.0874375,0.0874375,0.098485,0.0912692,0.0901631,0.0984561,0.08795950000000001,0.076108,0.076108,0.069202,0.062642,0.0557787,0.046453999999999995,0.0519101,0.0424562,0.0424562,0.049668500000000004,0.039386700000000004,0.0322484,0.0400622,0.0345357,0.0345357,0.0345357,0.034317,0.029850900000000003,0.0246733,0.0273107,0.0219252],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.0960292,0.106767,0.106693,0.106693,0.114021,0.125165,0.121376,0.131495,0.123359,0.132907,0.132907,0.124617,0.13464299999999998,0.146564,0.15355,0.142521,0.13198200000000002,0.13198200000000002,0.144126,0.152064,0.15781799999999999,0.176341,0.184445,0.19281700000000002,0.19281700000000002,0.18633599999999997,0.196715,0.182985,0.18738,0.19364900000000002,0.185246,0.185246,0.19311299999999998,0.20149099999999998,0.20033,0.20107,0.20056400000000002,0.20777700000000002,0.20777700000000002,0.202116,0.206714,0.20155299999999998,0.191795,0.20476,0.20476,0.20476,0.20024799999999998,0.206503,0.19819799999999999,0.19358,0.188785],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.104231,0.0959359,0.0860201,0.0860201,0.0769015,0.0716634,0.074224,0.0654763,0.0635092,0.0521435,0.0521435,0.058073599999999996,0.0520518,0.0388998,0.044349,0.0389288,0.032566700000000004,0.032566700000000004,0.045051499999999994,0.0394467,0.0333257,0.0324309,0.0250229,0.018921900000000002,0.018921900000000002,0.0143341,0.0175469,0.0290853,0.0268252,0.0253588,0.0225021,0.0225021,0.0267409,0.0291906,0.0356673,0.0291616,0.0341976,0.027440700000000002,0.027440700000000002,0.0335199,0.028311999999999997,0.0324346,0.0389329,0.0451851,0.0451851,0.0451851,0.043553900000000006,0.051045,0.0564036,0.0503457,0.048333100000000004],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.0948987,0.10375200000000001,0.09408,0.09408,0.10252299999999999,0.104805,0.111374,0.12162200000000001,0.112956,0.0997833,0.0997833,0.09195629999999999,0.09997969999999999,0.11404700000000001,0.10069700000000001,0.11157299999999999,0.1208,0.1208,0.10573700000000001,0.0975268,0.0884649,0.103529,0.0904632,0.07417699999999999,0.07417699999999999,0.07988970000000001,0.09164950000000001,0.0754321,0.08657200000000001,0.08803889999999999,0.10251700000000001,0.10251700000000001,0.0916849,0.0834297,0.09719299999999999,0.10425899999999999,0.113093,0.0993168,0.0993168,0.0914095,0.0993241,0.11371700000000001,0.106821,0.10043700000000001,0.10043700000000001,0.10043700000000001,0.08628559999999999,0.0981546,0.10712,0.118815,0.130731],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.100039,0.10883799999999999,0.09806209999999999,0.09806209999999999,0.107844,0.11620299999999999,0.114869,0.10608100000000001,0.119551,0.127699,0.127699,0.1388,0.12795,0.122286,0.134439,0.14568,0.156603,0.156603,0.13528,0.141953,0.15094,0.172615,0.186192,0.17563299999999998,0.17563299999999998,0.162404,0.176173,0.163617,0.157206,0.1502,0.159745,0.159745,0.154947,0.166052,0.162205,0.16624599999999998,0.17406,0.18368,0.18368,0.190773,0.17869900000000002,0.16453299999999998,0.17837599999999998,0.191452,0.191452,0.191452,0.19399,0.18678799999999998,0.17552900000000002,0.17982900000000002,0.168791],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.103183,0.113001,0.119694,0.119694,0.11012,0.102281,0.0896335,0.100895,0.110773,0.11792799999999999,0.11792799999999999,0.128926,0.138974,0.14587799999999998,0.138047,0.12491700000000001,0.113406,0.113406,0.128861,0.138596,0.126139,0.106565,0.117184,0.130645,0.130645,0.14133700000000002,0.12449,0.149308,0.138164,0.134455,0.123001,0.123001,0.12274299999999999,0.13447,0.128675,0.135304,0.12042,0.129363,0.129363,0.11777299999999999,0.130016,0.143845,0.13231600000000002,0.119171,0.119171,0.119171,0.13456,0.125188,0.11309899999999999,0.12290899999999999,0.12295],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.0974,0.08999,0.09807,0.09807,0.10443,0.108,0.10454,0.09926,0.1039,0.09947,0.09947,0.09499,0.08855,0.08106,0.08789,0.0798,0.0738,0.0738,0.08301,0.08912,0.08391,0.0737,0.0816,0.09211,0.09211,0.08244,0.07317,0.07398,0.08074,0.08079,0.07654,0.07654,0.0873,0.07796,0.08726,0.09642,0.08393,0.09473,0.09473,0.10163,0.09269,0.07984,0.08725,0.09799,0.09799,0.09799,0.10784,0.11808,0.12524,0.12939,0.12615],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.10221,0.09771,0.091,0.091,0.08525,0.07666,0.07946,0.08676,0.07847,0.07258,0.07258,0.07969,0.08066,0.07105,0.06444,0.07117,0.07886,0.07886,0.0704,0.06157,0.05337,0.04299,0.03611,0.03011,0.03011,0.02463,0.02007,0.03383,0.03659,0.0376,0.04218,0.04218,0.04408,0.03564,0.04099,0.03461,0.03065,0.02711,0.02711,0.02181,0.01685,0.0203,0.02389,0.03004,0.03004,0.03004,0.02913,0.03359,0.03803,0.03142,0.02553],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.10189,0.10943,0.11252,0.11252,0.1092,0.10935,0.10544,0.09955,0.09148,0.08662,0.08662,0.07825,0.07613,0.06598,0.05964,0.06539,0.0705,0.0705,0.08467,0.09343,0.10118,0.08821,0.08114,0.08918,0.08918,0.09547,0.10569,0.1155,0.10824,0.11888,0.12589,0.12589,0.13136,0.13919,0.13483,0.14056,0.14623,0.15223,0.15223,0.1478,0.1522,0.15172,0.15045,0.14991,0.14991,0.14991,0.14832,0.14259,0.14617,0.14008,0.14479],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.09851,0.09109,0.09209,0.09209,0.08667,0.08119,0.08028,0.07351,0.07829,0.08367,0.08367,0.09284,0.09245,0.10358,0.11006,0.11701,0.12,0.12,0.10969,0.10621,0.11455,0.12698,0.13535,0.14041,0.14041,0.14187,0.13961,0.12588,0.12134,0.11892,0.12055,0.12055,0.11435,0.10795,0.10076,0.08823,0.08106,0.07309,0.07309,0.07989,0.08935,0.08089,0.07498,0.07052,0.07052,0.07052,0.05925,0.05317,0.04374,0.03683,0.04526],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.10095,0.09327,0.10084,0.10084,0.10612,0.11144,0.11856,0.12335,0.12496,0.13223,0.13223,0.12633,0.12636,0.13314,0.12989,0.12654,0.12348,0.12348,0.11585,0.11272,0.11859,0.11938,0.11222,0.1023,0.1023,0.11095,0.10459,0.1014,0.10903,0.10142,0.0902,0.0902,0.08498,0.07838,0.07311,0.06195,0.06872,0.0589,0.0589,0.06585,0.05724,0.04974,0.05592,0.05071,0.05071,0.05071,0.05062,0.04504,0.03886,0.04269,0.03494],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.10082,0.10312,0.10283,0.10283,0.10778,0.11536,0.1137,0.12015,0.1171,0.12205,0.12205,0.11837,0.12193,0.12991,0.1311,0.12813,0.12174,0.12174,0.12689,0.13089,0.13384,0.13845,0.14434,0.14425,0.14425,0.14523,0.14374,0.14279,0.14048,0.13609,0.13973,0.13973,0.13608,0.13912,0.12863,0.13901,0.14181,0.14369,0.14369,0.14531,0.14324,0.14768,0.14965,0.14555,0.14555,0.14555,0.14831,0.14068,0.14432,0.14635,0.14482],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.10064,0.09937,0.09098,0.09098,0.08401,0.07832,0.0837,0.07671,0.07098,0.06402,0.06402,0.07037,0.06355,0.0525,0.05947,0.05128,0.04496,0.04496,0.0569,0.05047,0.04523,0.04576,0.03805,0.03057,0.03057,0.02511,0.02804,0.04251,0.03737,0.03743,0.03405,0.03405,0.03847,0.04546,0.0512,0.04285,0.05,0.04298,0.04298,0.05044,0.04284,0.05028,0.05584,0.06196,0.06196,0.06196,0.06147,0.06943,0.07571,0.06746,0.06578],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.09713,0.10237,0.09821,0.09821,0.10315,0.10448,0.10931,0.11329,0.10922,0.10482,0.10482,0.09677,0.10481,0.11254,0.10462,0.11188,0.11835,0.11835,0.10583,0.10001,0.09472,0.11068,0.10364,0.09113,0.09113,0.09772,0.10839,0.08837,0.09775,0.10008,0.10792,0.10792,0.10344,0.09655,0.10909,0.11607,0.12278,0.11775,0.11775,0.10515,0.11628,0.12786,0.12002,0.11178,0.11178,0.11178,0.10477,0.11284,0.12068,0.12724,0.13575],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.09958,0.10577,0.10107,0.10107,0.10542,0.1123,0.10878,0.10514,0.11461,0.11926,0.11926,0.12218,0.12177,0.1203,0.12515,0.12836,0.13279,0.13279,0.12412,0.12877,0.13174,0.14028,0.14436,0.14852,0.14852,0.14149,0.149,0.14147,0.1378,0.13644,0.13796,0.13796,0.13567,0.14596,0.14465,0.1476,0.14862,0.15505,0.15505,0.15292,0.15377,0.14933,0.14665,0.15178,0.15178,0.15178,0.15284,0.15395,0.14617,0.14996,0.15003],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.10087,0.10788,0.11239,0.11239,0.10797,0.1029,0.09623,0.10228,0.11099,0.11528,0.11528,0.12021,0.12379,0.12994,0.12774,0.12044,0.11552,0.11552,0.12264,0.12681,0.12287,0.11357,0.12319,0.13142,0.13142,0.13509,0.1277,0.13427,0.13066,0.13235,0.12498,0.12498,0.12427,0.13379,0.12948,0.1327,0.1262,0.13447,0.13447,0.1292,0.13554,0.14236,0.13535,0.12976,0.12976,0.12976,0.13745,0.13063,0.12108,0.12858,0.12695],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [71.7203,71.1726,71.7195,71.7195,72.2875,72.6565,72.3505,71.8523,72.2257,71.8873,71.8873,71.4148,70.9566,70.3774,70.9855,70.4212,69.9306,69.9306,70.6818,71.0482,70.5555,69.9031,70.4851,71.196,71.196,70.6845,70.0616,70.0075,70.4497,70.4731,70.352,70.352,70.7868,70.2715,70.6816,71.2504,70.7322,71.2931,71.2931,71.725,71.2005,70.6184,71.0437,71.4358,71.4358,71.4358,72.0093,72.5507,73.0869,73.5497,73.5108],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.2325,71.6974,71.2524,71.2524,70.8388,70.1884,70.385,70.8755,70.2238,69.7837,69.7837,70.2928,70.3131,69.7486,69.2037,69.7695,70.2322,70.2322,69.6803,69.0728,68.5095,67.4757,66.8866,66.3808,66.3808,65.7891,65.2011,66.7105,67.1542,67.2237,67.6056,67.6056,67.6328,67.022,67.4042,67.0104,66.6105,66.1723,66.1723,65.5449,64.9934,65.4545,66.013,66.5596,66.5596,66.5596,66.5507,67.0176,67.5087,66.9323,66.3874],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.1953,72.691,73.2621,73.2621,72.7694,72.6703,72.3479,71.8591,71.1606,70.7107,70.7107,70.084,70.0643,69.2571,68.7221,69.2111,69.7629,69.7629,70.6943,71.2683,71.8031,70.8777,70.3655,70.9827,70.9827,71.45,72.0674,72.6448,72.2118,72.7537,73.3471,73.3471,73.786,74.2612,73.6437,74.205,74.7137,75.2287,75.2287,74.8094,75.3703,75.9152,75.3348,74.832,74.832,74.832,74.8023,74.1767,74.6669,74.2149,74.772],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [71.8397,71.3336,71.3206,71.3206,70.8656,70.2873,70.4314,69.8591,70.2575,70.766,70.766,71.3197,71.3462,72.0664,72.5446,73.0391,73.5894,73.5894,72.7118,72.3306,72.9465,73.7472,74.2647,74.7602,74.7602,75.2594,74.6131,73.4563,73.0918,73.0295,73.1859,73.1859,72.6248,72.0657,71.5325,70.9518,70.4717,69.9584,69.9584,70.5252,71.078,70.6261,70.2371,69.7943,69.7943,69.7943,69.221,68.7285,68.1647,67.7193,68.2868],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0226,71.5324,72.074,72.074,72.5368,73.0073,73.6946,74.1691,74.5217,75.0782,75.0782,74.5057,74.4654,75.1032,74.6415,74.2301,73.8391,73.8391,73.2416,72.8073,73.3826,73.0194,72.436,71.8564,71.8564,72.5512,72.1097,71.9038,72.2774,71.7115,71.1557,71.1557,70.7336,70.3076,69.8391,69.2759,69.7611,69.2197,69.2197,69.6735,69.1125,68.5386,69.0558,68.5626,68.5626,68.5626,68.59,68.1863,67.6652,68.1032,67.5495],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [71.8246,72.3496,72.3284,72.3284,72.75,73.3746,73.223,73.7221,73.374,73.8493,73.8493,73.3921,73.9847,74.5275,75.0296,74.4009,73.7729,73.7729,74.3765,74.808,75.2127,76.1551,76.7912,77.4404,77.4404,76.9648,77.7482,76.6346,77.0329,77.485,76.9342,76.9342,77.5021,78.0388,78.6136,78.1456,77.6862,78.2244,78.2244,77.6591,78.1313,77.6028,77.0276,77.5221,77.5221,77.5221,77.5144,78.0452,77.612,77.0562,77.0435],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.2785,71.8119,71.2483,71.2483,70.7343,70.3115,70.608,70.1261,69.7913,69.2269,69.2269,69.6413,69.1525,68.2565,68.8255,68.2245,67.6271,67.6271,68.7053,68.2707,67.8131,67.8317,67.2027,66.4356,66.4356,65.881,66.4526,67.7076,67.2953,67.3081,66.8927,66.8927,67.3442,67.803,68.2997,67.8028,68.351,67.8327,67.8327,68.4342,67.9845,68.5129,68.9138,69.3508,69.3508,69.3508,69.3553,69.7983,70.2659,69.8164,69.8459],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [71.6738,72.1952,71.6528,71.6528,72.151,72.2426,72.556,73.0904,72.6949,72.0624,72.0624,71.5562,71.9964,72.745,72.0886,72.6483,73.1677,73.1677,72.258,71.866,71.4204,72.3462,71.7353,71.0479,71.0479,71.5752,72.1199,70.9898,71.5664,71.5718,72.2072,72.2072,71.7328,71.3081,71.9013,72.357,72.8172,72.3004,72.3004,71.8699,72.4179,73.0241,72.643,72.2171,72.2171,72.2171,71.653,72.1028,72.5737,73.1464,73.6493],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0056,72.5091,71.9798,71.9798,72.4665,73.0301,72.871,72.3618,73.0316,73.5022,73.5022,74.1349,73.641,73.359,73.8702,74.4998,75.0804,75.0804,73.93,74.3578,74.783,75.9733,76.5967,75.9965,75.9965,75.4381,75.9784,75.3539,74.9279,74.4954,75.0097,75.0097,74.6473,75.1723,74.7738,75.223,75.6264,76.0957,76.0957,76.5051,75.923,75.3406,75.9022,76.4782,76.4782,76.4782,76.4777,76.0267,75.5599,76.0116,75.4988],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.207,72.7073,73.162,73.162,72.6,72.2314,71.5328,72.0845,72.719,73.1333,73.1333,73.6584,74.0798,74.5595,74.0886,73.5554,72.9978,72.9978,73.7204,74.1702,73.5736,72.6705,73.2362,73.9034,73.9034,74.4066,73.648,74.5912,73.9926,73.9482,73.3098,73.3098,73.2096,73.7498,73.3104,73.7782,73.2301,73.6748,73.6748,73.2537,73.7886,74.3668,73.8291,73.2474,73.2474,73.2474,73.8263,73.3671,72.8961,73.4501,73.4559],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]