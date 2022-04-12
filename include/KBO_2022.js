var xRange = ["2022-04-01", "2022-04-02", "2022-04-03", "2022-04-04", "2022-04-05", "2022-04-06", "2022-04-07", "2022-04-08", "2022-04-09", "2022-04-10", "2022-04-11", "2022-04-12"];
var PS1= {
  x: xRange,
  y: [0.5,0.5137518000000001,0.548318,0.548318,0.5095632999999999,0.4639257,0.4938485000000001,0.5376734000000001,0.4994692,0.5425559,0.5425559,0.5770140000000001],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5,0.5210468,0.4916202999999999,0.4916202999999999,0.527598,0.4933198,0.5209705,0.4809124999999999,0.5240136,0.4918475,0.4918475,0.44965629999999995],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.5,0.4600927,0.4922856,0.4922856,0.5256540000000001,0.564283,0.5265073,0.5115331999999999,0.45557220000000004,0.4168921,0.4168921,0.45986119999999997],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.5,0.4584152,0.48718180000000005,0.48718180000000005,0.464389,0.4285636,0.3989035000000001,0.39321470000000003,0.43558319999999995,0.4755705,0.4755705,0.5406578],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5,0.46793010000000007,0.4356692,0.4356692,0.39922379999999996,0.3610739,0.3260037,0.2883129,0.3257716,0.3508529,0.3508529,0.3153639],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.5,0.46478289999999994,0.4289683,0.4289683,0.46438160000000006,0.4845296,0.5178122,0.4748117,0.4560772,0.4144097,0.4144097,0.4438617000000001],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.5,0.536835,0.502189,0.502189,0.47005870000000005,0.43816450000000007,0.4113581,0.4518309,0.394353,0.3579029000000001,0.3579029000000001,0.3216457],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.5,0.5460839999999999,0.584639,0.584639,0.6170939999999999,0.648504,0.6925381999999999,0.672237,0.7106317000000001,0.7447828,0.7447828,0.7254139999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.5,0.47650309999999996,0.43637770000000004,0.43637770000000004,0.4042527,0.44934149999999995,0.4178058,0.4389842,0.4223447,0.396202,0.396202,0.32840790000000003],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5,0.554559,0.592752,0.592752,0.6177860000000001,0.6682973,0.6942527000000001,0.7504905000000001,0.7761834999999999,0.8089850000000002,0.8089850000000002,0.8381173000000001],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.1,0.11342100000000001,0.126211,0.126211,0.106358,0.0853328,0.0946386,0.110985,0.0912298,0.103566,0.103566,0.114604],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.1,0.112574,0.101283,0.101283,0.11288799999999999,0.0954801,0.105827,0.0861616,0.100629,0.08150779999999999,0.08150779999999999,0.06435],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.1,0.0863526,0.10047299999999999,0.10047299999999999,0.111185,0.126629,0.104754,0.09514159999999999,0.0724716,0.0574888,0.0574888,0.06599819999999999],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.1,0.08446229999999999,0.0951676,0.0951676,0.0833068,0.0699239,0.058776300000000004,0.056806800000000005,0.0660395,0.0743407,0.0743407,0.09420379999999999],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.1,0.0858604,0.074458,0.074458,0.0630123,0.0509164,0.040126,0.0316463,0.0371555,0.03984,0.03984,0.0313505],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.1,0.0859533,0.0707695,0.0707695,0.0822281,0.0870602,0.0966822,0.0778581,0.06922640000000001,0.0538603,0.0538603,0.058043599999999994],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.1,0.11308,0.096548,0.096548,0.0833168,0.0711726,0.058740299999999995,0.0703131,0.0516804,0.0404285,0.0404285,0.030343099999999998],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.1,0.116738,0.13314,0.13314,0.151566,0.165703,0.19074400000000002,0.173995,0.196932,0.21517799999999998,0.21517799999999998,0.18788],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.1,0.08465719999999999,0.0683854,0.0683854,0.059732799999999996,0.0714327,0.0578703,0.0638471,0.055754700000000004,0.047313100000000004,0.047313100000000004,0.0310158],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.1,0.116902,0.133564,0.133564,0.146406,0.17635,0.191842,0.23324599999999998,0.258881,0.286477,0.286477,0.32221099999999997],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.1,0.0945558,0.10246200000000001,0.10246200000000001,0.09205129999999999,0.0826124,0.0884059,0.09875940000000001,0.09141940000000001,0.0997769,0.0997769,0.10967],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.1,0.0985458,0.09081959999999999,0.09081959999999999,0.10035100000000001,0.08982770000000001,0.09791649999999999,0.0870765,0.0982256,0.0911867,0.0911867,0.0778388],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1,0.08493110000000001,0.0935318,0.0935318,0.10207,0.112736,0.0999093,0.0967166,0.0816399,0.0715834,0.0715834,0.0812065],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.1,0.0869832,0.0926479,0.0926479,0.088834,0.0775496,0.0706132,0.0710416,0.0782453,0.08848879999999999,0.08848879999999999,0.107468],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.1,0.08957760000000001,0.0815957,0.0815957,0.0713557,0.0611333,0.053643500000000004,0.044013199999999995,0.051661000000000006,0.057669700000000004,0.057669700000000004,0.0487679],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.1,0.0898034,0.08188899999999999,0.08188899999999999,0.09001690000000001,0.09576459999999999,0.103606,0.0911526,0.08483379999999999,0.07261569999999999,0.07261569999999999,0.0799321],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.1,0.112947,0.102839,0.102839,0.0929544,0.08326620000000001,0.0766145,0.08500229999999999,0.0698394,0.0603317,0.0603317,0.04998520000000001],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.1,0.11726299999999999,0.12973700000000002,0.12973700000000002,0.139794,0.147899,0.159106,0.155143,0.16934900000000003,0.18069200000000002,0.18069200000000002,0.17680900000000002],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.1,0.09902219999999999,0.08910290000000001,0.08910290000000001,0.07748060000000001,0.08911110000000001,0.0814915,0.0852934,0.0810839,0.0715365,0.0715365,0.055636000000000005],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.1,0.12637,0.135375,0.135375,0.145092,0.1601,0.168694,0.185801,0.193703,0.20611900000000002,0.20611900000000002,0.212686],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.1,0.103349,0.11221600000000001,0.11221600000000001,0.103823,0.0961448,0.101796,0.11052700000000001,0.104054,0.115292,0.115292,0.123304],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.1,0.10580200000000001,0.09830370000000001,0.09830370000000001,0.105669,0.101707,0.106095,0.09933040000000001,0.10903299999999999,0.10286200000000001,0.10286200000000001,0.0935955],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.1,0.09423450000000001,0.099206,0.099206,0.10628,0.111744,0.108263,0.105723,0.0954427,0.0894707,0.0894707,0.0975265],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.1,0.0928743,0.0990665,0.0990665,0.09423899999999999,0.0891503,0.0812238,0.0804896,0.09152370000000001,0.10062399999999999,0.10062399999999999,0.115839],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.1,0.09535469999999999,0.0875735,0.0875735,0.08282020000000001,0.074371,0.0675512,0.0597059,0.0683868,0.07260470000000001,0.07260470000000001,0.0654463],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.1,0.0933742,0.0863458,0.0863458,0.09580229999999999,0.09832379999999999,0.10531299999999999,0.100589,0.09592700000000001,0.087214,0.087214,0.094359],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.1,0.105227,0.10072,0.10072,0.09526219999999999,0.0899867,0.0847778,0.0945286,0.0825207,0.0746117,0.0746117,0.06732],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.1,0.106491,0.114111,0.114111,0.11718100000000001,0.124476,0.131756,0.12779,0.134599,0.13818,0.13818,0.14238],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.1,0.096786,0.08893229999999999,0.08893229999999999,0.08153300000000001,0.091785,0.08610870000000001,0.0893419,0.08807129999999999,0.0845117,0.0845117,0.0672963],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.1,0.10650799999999999,0.113526,0.113526,0.11739100000000001,0.122312,0.127115,0.131975,0.130442,0.134629,0.134629,0.132933],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [72.0,72.476,72.9725,72.9725,72.4224,71.6891,72.1739,72.8,72.2437,72.8099,72.8099,73.3816],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.0,72.5533,72.1023,72.1023,72.616,72.0981,72.5492,71.9306,72.5519,72.0065,72.0065,71.3792],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.0,71.5063,72.0498,72.0498,72.5496,73.1246,72.5407,72.2783,71.4298,70.8457,70.8457,71.4899],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [72.0,71.4468,71.8988,71.8988,71.5055,70.9684,70.5048,70.4531,71.0852,71.6798,71.6798,72.6057],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0,71.5238,71.0272,71.0272,70.4932,69.8616,69.3079,68.6125,69.2292,69.6433,69.6433,69.0463],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [72.0,71.4257,70.8413,70.8413,71.3988,71.7154,72.2105,71.5879,71.278,70.6075,70.6075,71.0594],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.0,72.4938,71.9491,71.9491,71.4723,71.0016,70.5405,71.1884,70.2245,69.6509,69.6509,69.0094],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [72.0,72.5743,73.1588,73.1588,73.6815,74.1707,74.8344,74.499,75.12899999999999,75.7147,75.7147,75.3003],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0,71.4257,70.8319,70.8319,70.295,71.0354,70.5347,70.8414,70.5497,70.1167,70.1167,69.0837],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.0,72.5743,73.1683,73.1683,73.5658,74.335,74.8034,75.8087,76.279,76.9251,76.9251,77.6446],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]