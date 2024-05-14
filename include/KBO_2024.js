var xRange = ["2024-03-22", "2024-03-23", "2024-03-24", "2024-03-25", "2024-03-26", "2024-03-27", "2024-03-28", "2024-03-29", "2024-03-30", "2024-03-31", "2024-04-01", "2024-04-02", "2024-04-03", "2024-04-04", "2024-04-05", "2024-04-06", "2024-04-07", "2024-04-08", "2024-04-09", "2024-04-10", "2024-04-11", "2024-04-12", "2024-04-13", "2024-04-14", "2024-04-15", "2024-04-16", "2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20", "2024-04-21", "2024-04-22", "2024-04-23", "2024-04-24", "2024-04-25", "2024-04-26", "2024-04-27", "2024-04-28", "2024-04-29", "2024-04-30", "2024-05-01", "2024-05-02", "2024-05-03", "2024-05-04", "2024-05-05", "2024-05-06", "2024-05-07", "2024-05-08", "2024-05-09", "2024-05-10", "2024-05-11", "2024-05-12", "2024-05-13", "2024-05-14"];
var PS1= {
  x: xRange,
  y: [0.48431199999999996,0.4477929,0.486415,0.486415,0.512165,0.547001,0.5252290000000001,0.49034,0.5202811,0.49399099999999996,0.49399099999999996,0.458261,0.42455,0.3916,0.432494,0.391291,0.3592343,0.3592343,0.3908596,0.42233,0.38107300000000005,0.3544925,0.39586800000000005,0.443045,0.443045,0.40154300000000004,0.35951099999999997,0.32354299999999997,0.377895,0.37630699999999995,0.36111699999999997,0.36111699999999997,0.396266,0.358594,0.410441,0.45462300000000005,0.40907699999999997,0.46516,0.46516,0.5084190000000001,0.44683300000000004,0.40172699999999995,0.44451599999999997,0.48511699999999996,0.48511699999999996,0.48511699999999996,0.544601,0.5931379000000001,0.6307077000000001,0.668754,0.6649051000000001,0.741133,0.741133,0.775907],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.515479,0.4850738,0.45506739999999996,0.45506739999999996,0.41833020000000004,0.38140949999999996,0.3915444,0.423556,0.37481970000000003,0.34921339999999995,0.34921339999999995,0.38306339999999994,0.38121629999999995,0.35475599999999996,0.31942349999999997,0.35295099999999996,0.38059979999999993,0.38059979999999993,0.3308406,0.2880925,0.2428779,0.2179926,0.1872912,0.16521618999999999,0.16521618999999999,0.13479805,0.11821551999999999,0.13914855,0.15533669,0.15411939,0.16417092,0.16417092,0.16633566,0.13466287,0.15512645,0.13125069,0.1098941,0.09680369999999999,0.09680369999999999,0.0752525,0.0587131,0.0662124,0.08591969999999999,0.11097180000000001,0.11097180000000001,0.11097180000000001,0.10879069999999999,0.12722297999999999,0.16051411,0.12318855,0.1027543,0.081105,0.081105,0.0649275],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.514274,0.546648,0.580499,0.580499,0.546659,0.5452907,0.525023,0.4885138,0.4402817,0.4067155,0.4067155,0.36458470000000004,0.36436029999999997,0.3221005,0.28858629999999996,0.316317,0.34691449999999996,0.34691449999999996,0.39272830000000003,0.427917,0.463657,0.42611,0.385628,0.42498800000000003,0.42498800000000003,0.452624,0.500327,0.5410644,0.500816,0.5453932,0.589146,0.589146,0.631595,0.67993,0.63808,0.6764539999999999,0.733346,0.7712960000000001,0.7712960000000001,0.738657,0.78273,0.815529,0.785195,0.744733,0.744733,0.744733,0.741834,0.7094119999999999,0.7444769999999999,0.70147,0.737483,0.780333,0.780333,0.730992],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.488779,0.4571733,0.4588516,0.4588516,0.41970910000000006,0.38411120000000004,0.4012391,0.36383669999999996,0.3866422,0.42651900000000004,0.42651900000000004,0.459619,0.46256699999999995,0.501893,0.5332635000000001,0.571289,0.604068,0.604068,0.573083,0.543143,0.588545,0.616828,0.654207,0.681519,0.681519,0.707376,0.6742339999999999,0.63591,0.58364,0.5837692000000001,0.601781,0.601781,0.5634372,0.527532,0.47308900000000004,0.419794,0.35948,0.31760900000000003,0.31760900000000003,0.350173,0.386564,0.346978,0.321255,0.290016,0.290016,0.290016,0.2382148,0.20195756999999998,0.16860176,0.13844879000000002,0.16312201,0.1315879,0.1315879,0.15792710999999998],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5013699,0.4637737,0.5027232,0.5027232,0.5337219999999999,0.569047,0.612874,0.6424,0.6657369000000001,0.7045897999999999,0.7045897999999999,0.6751214,0.6700410000000001,0.6988730000000001,0.671854,0.645184,0.6186740000000001,0.6186740000000001,0.59551,0.563524,0.608127,0.569241,0.5281885000000001,0.48928099999999997,0.48928099999999997,0.52895,0.496904,0.505331,0.5464313,0.506534,0.46266300000000005,0.46266300000000005,0.42379199999999995,0.38116300000000003,0.33333,0.2813676,0.317206,0.26701739999999996,0.26701739999999996,0.30381,0.2551737,0.2229091,0.2545748,0.222775,0.222775,0.222775,0.2286237,0.18993648000000002,0.14387759,0.15781289,0.1217035,0.13945571,0.13945571,0.13980047999999998],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.4886834,0.5202030000000001,0.5172761,0.5172761,0.552995,0.586526,0.574693,0.613972,0.593368,0.623667,0.623667,0.591801,0.629325,0.6613239999999999,0.6945039999999999,0.6601060000000001,0.6206430000000001,0.6206430000000001,0.657135,0.6883630000000001,0.7199873,0.7612926,0.7934471,0.8230392,0.8230392,0.8010274000000001,0.836688,0.8197881,0.8442856,0.8720517,0.8390619,0.8390619,0.8728078,0.8968145,0.9233799,0.9101777000000001,0.8951203999999999,0.9142274,0.9142274,0.8909028,0.9105864,0.8897797000000001,0.8700062,0.8972121000000001,0.8972121000000001,0.8972121000000001,0.8943405999999999,0.9164816,0.8995860000000001,0.8748117,0.8733984,0.8628283,0.8628283,0.8385330000000001],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.516698,0.48873,0.45185729999999996,0.45185729999999996,0.4220471,0.3908811,0.4100304,0.37411979999999995,0.35362839999999995,0.3133755,0.3133755,0.3343436,0.3026118,0.2648072,0.2949292,0.2591772,0.22859989999999997,0.22859989999999997,0.259501,0.2315047,0.2083582,0.2366465,0.2035673,0.16260762,0.16260762,0.1385233,0.16034876,0.18551489999999998,0.15831428,0.16166385,0.13320832,0.13320832,0.15261519,0.17358677,0.21323889999999998,0.17898743000000003,0.2042803,0.1705502,0.1705502,0.20675870999999998,0.17100116999999998,0.20560567,0.2302729,0.26321459999999997,0.26321459999999997,0.26321459999999997,0.2630115,0.2954,0.32733599999999996,0.284907,0.27547099999999997,0.19708053,0.19708053,0.22282690000000002],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.47913120000000003,0.512923,0.47783620000000004,0.47783620000000004,0.5156816000000001,0.5138951,0.5399965,0.576964,0.5507946,0.5072222999999999,0.5072222999999999,0.47621739999999996,0.511201,0.546735,0.5055352000000001,0.543527,0.579051,0.579051,0.551388,0.5178837000000001,0.49042199999999997,0.5234875,0.48092300000000004,0.426915,0.426915,0.46167800000000003,0.497531,0.447366,0.49608599999999997,0.496761,0.5464682,0.5464682,0.5082019999999999,0.46935699999999997,0.5341091,0.5702963,0.6174485,0.5777939000000001,0.5777939000000001,0.524718,0.5899778,0.6342522,0.6053694000000001,0.5859131,0.5859131,0.5859131,0.534613,0.576654,0.6092704999999999,0.6621589999999999,0.7016910000000001,0.735367,0.735367,0.6848230000000001],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.49928419999999996,0.534409,0.498276,0.498276,0.534369,0.569083,0.553146,0.527066,0.569964,0.60376,0.60376,0.646554,0.616289,0.590947,0.620391,0.664045,0.699643,0.699643,0.655885,0.68792,0.7093980000000001,0.7530972,0.7837976,0.7556189999999999,0.7556189999999999,0.7180139999999999,0.752966,0.7561410000000001,0.734483,0.702695,0.7549260000000001,0.7549260000000001,0.736156,0.778993,0.75981,0.78423,0.8118134,0.8361614999999999,0.8361614999999999,0.8627514,0.827133,0.7998289999999999,0.8470663,0.8787773,0.8787773,0.8787773,0.8767360000000001,0.8601342999999999,0.8353364999999999,0.8624457000000001,0.840692,0.8062360000000001,0.8062360000000001,0.806193],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5119882,0.543273,0.571199,0.571199,0.544322,0.5127561,0.466225,0.499231,0.544483,0.570946,0.570946,0.610434,0.637839,0.6669639999999999,0.639019,0.596113,0.562573,0.562573,0.5930690000000001,0.6293230000000001,0.587555,0.5408122,0.587083,0.627771,0.627771,0.6554660000000001,0.603274,0.646193,0.602712,0.600706,0.5474583000000001,0.5474583000000001,0.5487916,0.5993671,0.5593946,0.5928199,0.542334,0.5833807999999999,0.5833807999999999,0.53856,0.5712870999999999,0.6171787000000001,0.5558246,0.52127,0.52127,0.52127,0.5692336,0.529663,0.480292,0.5260009999999999,0.5187809999999999,0.524873,0.524873,0.5780697],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.0928626,0.0794792,0.0921307,0.0921307,0.10294299999999999,0.115188,0.10447799999999999,0.0889669,0.09942909999999999,0.0854908,0.0854908,0.0740504,0.0612963,0.0516815,0.0626609,0.052841099999999995,0.0444103,0.0444103,0.0536125,0.0588528,0.0465176,0.038408899999999996,0.0432009,0.0518614,0.0518614,0.042866400000000006,0.0335361,0.028706,0.0375551,0.0372721,0.033848,0.033848,0.0393865,0.0283991,0.035163,0.042707600000000005,0.0332491,0.0380257,0.0380257,0.050725900000000004,0.035585399999999996,0.0293387,0.037813,0.0426968,0.0426968,0.0426968,0.055341,0.0676239,0.0840927,0.10058,0.0974411,0.13761,0.13761,0.17319400000000001],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.10574,0.0932486,0.0800531,0.0800531,0.0677425,0.055819799999999996,0.0585604,0.0663156,0.051054300000000004,0.0447914,0.0447914,0.052656999999999995,0.0509695,0.041919399999999996,0.0360305,0.0432043,0.0496341,0.0496341,0.039576,0.029271799999999997,0.0213933,0.0163151,0.012108599999999999,0.00922279,0.00922279,0.00647255,0.00558382,0.00683385,0.00845589,0.00774929,0.00935592,0.00935592,0.00945456,0.00561037,0.00655705,0.00505769,0.0035256,0.00259551,0.00259551,0.0017662200000000002,0.0011942,0.00181975,0.00242764,0.0032210000000000003,0.0032210000000000003,0.0032210000000000003,0.00303236,0.00430748,0.006611509999999999,0.00413375,0.00283567,0.00222203,0.00222203,0.00165156],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.104503,0.12045,0.134881,0.134881,0.118471,0.118235,0.108744,0.0915103,0.0745189,0.0598121,0.0598121,0.0506523,0.0481382,0.036916199999999996,0.031341100000000004,0.0366161,0.0427037,0.0427037,0.0562476,0.0649715,0.07098600000000001,0.0568662,0.04204600000000001,0.049142,0.049142,0.0592405,0.0689103,0.08389139999999999,0.0710587,0.0818242,0.100901,0.100901,0.116396,0.126573,0.102582,0.118224,0.15110700000000002,0.16400599999999999,0.16400599999999999,0.147803,0.174709,0.215057,0.19172099999999997,0.147989,0.147989,0.147989,0.146217,0.12056299999999999,0.150344,0.12200899999999999,0.145584,0.174561,0.174561,0.146848],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.09560479999999999,0.0823693,0.08424559999999999,0.08424559999999999,0.0690159,0.0582361,0.0622374,0.0514894,0.05597100000000001,0.06551409999999999,0.06551409999999999,0.07659060000000001,0.0766035,0.08688629999999999,0.0992615,0.117829,0.133965,0.133965,0.120014,0.104466,0.11937600000000001,0.12715200000000002,0.138993,0.151559,0.151559,0.17188099999999998,0.140099,0.12259600000000001,0.100165,0.0981142,0.10615100000000001,0.10615100000000001,0.0852252,0.064764,0.0483806,0.0374675,0.0274212,0.0185708,0.0185708,0.0236078,0.028115300000000003,0.0237385,0.0217209,0.0163853,0.0163853,0.0163853,0.011456,0.00781137,0.00690876,0.00478859,0.00623701,0.0045604,0.0045604,0.00586691],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.09932110000000001,0.08571799999999999,0.0995452,0.0995452,0.1131,0.125341,0.14987,0.167132,0.183631,0.204223,0.204223,0.182196,0.178106,0.19397099999999998,0.170635,0.157215,0.141772,0.141772,0.130306,0.112728,0.128087,0.102948,0.0814405,0.0654167,0.0654167,0.0784344,0.0667888,0.0713665,0.0841123,0.0677339,0.057053900000000005,0.057053900000000005,0.046214399999999996,0.0331747,0.0236298,0.017261500000000003,0.0214637,0.0137827,0.0137827,0.0194288,0.012913699999999998,0.0107206,0.014045,0.0102356,0.0102356,0.0102356,0.010244000000000001,0.0074081799999999995,0.0050181900000000005,0.005505789999999999,0.0037006,0.00466611,0.00466611,0.00544568],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.0958408,0.107828,0.10818299999999999,0.10818299999999999,0.12349299999999999,0.13683399999999998,0.131934,0.151094,0.137052,0.150834,0.150834,0.132279,0.155331,0.16749099999999997,0.19452599999999998,0.165241,0.143294,0.143294,0.170253,0.188571,0.20694700000000002,0.237015,0.25703400000000004,0.291432,0.291432,0.26435,0.30757,0.283607,0.327045,0.37093699999999996,0.31189900000000004,0.31189900000000004,0.362851,0.393949,0.46249199999999996,0.415882,0.370749,0.38792800000000005,0.38792800000000005,0.341921,0.38163,0.331073,0.300603,0.34133800000000003,0.34133800000000003,0.34133800000000003,0.3385,0.39178199999999996,0.359109,0.301097,0.304357,0.277095,0.277095,0.250801],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.107269,0.0946007,0.0793884,0.0793884,0.0695935,0.0588963,0.0638189,0.052566999999999996,0.046054899999999996,0.0361977,0.0361977,0.041584300000000005,0.0335564,0.025126999999999997,0.0305292,0.024389699999999997,0.020706,0.020706,0.025681999999999996,0.0199899,0.0160214,0.017653099999999998,0.0128285,0.00849392,0.00849392,0.0067261000000000005,0.008210760000000001,0.010266800000000001,0.00841698,0.00815535,0.006487519999999999,0.006487519999999999,0.00726129,0.008619070000000001,0.010698800000000001,0.00815673,0.0100459,0.006229500000000001,0.006229500000000001,0.00941941,0.006443869999999999,0.00948077,0.011881099999999999,0.0134355,0.0134355,0.0134355,0.013428699999999998,0.0160533,0.0214371,0.0160556,0.0161798,0.00879623,0.00879623,0.0111018],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.09262129999999999,0.10410799999999999,0.0911108,0.0911108,0.104389,0.105044,0.117332,0.130548,0.115771,0.0951053,0.0951053,0.0840421,0.09366,0.107506,0.0872482,0.10490200000000001,0.121055,0.121055,0.11167200000000001,0.09576870000000001,0.078544,0.08714450000000001,0.0666261,0.049759399999999995,0.049759399999999995,0.0605608,0.0672734,0.0553092,0.0696017,0.0675265,0.08532219999999999,0.08532219999999999,0.07103,0.0534674,0.06659609999999999,0.0761673,0.0928015,0.0688439,0.0688439,0.057395699999999994,0.07368279999999999,0.0922912,0.0849134,0.0711901,0.0711901,0.0711901,0.0549019,0.065862,0.0813435,0.103345,0.124023,0.136351,0.136351,0.115916],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.100121,0.113987,0.09888200000000001,0.09888200000000001,0.114315,0.126558,0.120412,0.10573,0.124361,0.138328,0.138328,0.165233,0.144924,0.12351200000000001,0.139386,0.169519,0.19200099999999998,0.19200099999999998,0.16605,0.182355,0.196937,0.224749,0.24479700000000001,0.206542,0.206542,0.177508,0.198593,0.21046700000000002,0.190071,0.158829,0.20426,0.20426,0.179352,0.19653299999999999,0.171994,0.195279,0.22292299999999998,0.22842900000000002,0.22842900000000002,0.287039,0.21751900000000002,0.198557,0.26529,0.299078,0.299078,0.299078,0.29973,0.265105,0.236794,0.284457,0.244147,0.198571,0.198571,0.214521],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.106117,0.11821100000000001,0.13158,0.13158,0.11693700000000001,0.0998491,0.0826132,0.09464610000000001,0.112158,0.11970399999999999,0.11970399999999999,0.140715,0.157415,0.16498900000000002,0.148381,0.128243,0.110459,0.110459,0.126589,0.14302600000000001,0.115191,0.0917482,0.100925,0.11657200000000001,0.11657200000000001,0.131961,0.103435,0.126956,0.103518,0.10185899999999999,0.08472129999999999,0.08472129999999999,0.0828286,0.0889111,0.0719056,0.08379690000000001,0.06671479999999999,0.0715898,0.0715898,0.0608933,0.0682071,0.08792370000000001,0.0695856,0.0544306,0.0544306,0.0544306,0.0671486,0.0534836,0.0483424,0.058028500000000004,0.0554954,0.055567399999999996,0.055567399999999996,0.0746547],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.0954574,0.0871808,0.0950593,0.0950593,0.104067,0.112762,0.10665200000000001,0.0970231,0.104351,0.0952992,0.0952992,0.08555959999999999,0.0781437,0.0677785,0.0790291,0.0678489,0.0595397,0.0595397,0.0679875,0.0757172,0.0636524,0.0571611,0.06563909999999999,0.0752486,0.0752486,0.0653936,0.0558439,0.048103999999999994,0.0599149,0.0612179,0.054432,0.054432,0.06424350000000001,0.053160900000000004,0.065887,0.0749124,0.0612409,0.0719043,0.0719043,0.0844541,0.0654846,0.0553713,0.066737,0.0761932,0.0761932,0.0761932,0.092509,0.106536,0.11887700000000001,0.13104,0.126959,0.15213,0.15213,0.171896],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.10567,0.0951814,0.0882069,0.0882069,0.0777275,0.0667802,0.0708096,0.0779444,0.0655457,0.0590886,0.0590886,0.066403,0.06692050000000001,0.0591906,0.0502195,0.0591757,0.0652759,0.0652759,0.05433399999999999,0.0442882,0.0355267,0.029184899999999996,0.023541399999999997,0.0183772,0.0183772,0.0141674,0.011866199999999999,0.0149962,0.0176341,0.0175307,0.019374100000000002,0.019374100000000002,0.0191354,0.0141396,0.0178729,0.0127823,0.0100044,0.007304489999999999,0.007304489999999999,0.005563780000000001,0.0038758,0.00475025,0.00649236,0.009399,0.009399,0.009399,0.00881764,0.0111625,0.0152985,0.0111662,0.00842433,0.0053279700000000004,0.0053279700000000004,0.00431844],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.10229700000000001,0.11293,0.123669,0.123669,0.112189,0.113475,0.106716,0.09764969999999999,0.08404110000000001,0.0749579,0.0749579,0.06376770000000001,0.0627618,0.0524538,0.044578900000000005,0.0522439,0.0592563,0.0592563,0.0699924,0.0782385,0.08659399999999999,0.0755738,0.063884,0.073278,0.073278,0.0806795,0.09178969999999999,0.104379,0.09628129999999999,0.108196,0.119479,0.119479,0.136674,0.152347,0.13882799999999998,0.149276,0.170313,0.18144400000000002,0.18144400000000002,0.167987,0.18689099999999997,0.19633299999999998,0.186209,0.17107099999999997,0.17107099999999997,0.17107099999999997,0.168233,0.156967,0.169956,0.146701,0.161936,0.173489,0.173489,0.154622],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.0969352,0.0873707,0.0886744,0.0886744,0.0782341,0.0677939,0.07255260000000001,0.06299060000000001,0.068909,0.0787959,0.0787959,0.0858894,0.0882265,0.09923370000000001,0.106129,0.11743100000000001,0.126635,0.126635,0.11966600000000001,0.110344,0.121654,0.130518,0.14008700000000002,0.14866100000000002,0.14866100000000002,0.157949,0.146311,0.131734,0.117865,0.117096,0.119799,0.119799,0.110575,0.09503600000000001,0.0830394,0.0651825,0.0500788,0.0389692,0.0389692,0.047102200000000004,0.0522747,0.0446815,0.0406591,0.0339647,0.0339647,0.0339647,0.024834000000000002,0.020258599999999998,0.015641199999999997,0.0123414,0.014593,0.0101296,0.0101296,0.0132331],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.101259,0.09151200000000001,0.100055,0.100055,0.10789,0.118049,0.13067,0.140898,0.145339,0.158467,0.158467,0.150054,0.146184,0.156009,0.147865,0.140495,0.130158,0.130158,0.12378399999999999,0.11449200000000001,0.127353,0.114072,0.10094,0.0890533,0.0890533,0.0993256,0.0903512,0.0927835,0.10657799999999999,0.0941261,0.0807961,0.0807961,0.0715356,0.057415299999999996,0.048950200000000006,0.036408499999999996,0.0426263,0.0300773,0.0300773,0.0377312,0.0280063,0.0237194,0.029705,0.0237244,0.0237244,0.0237244,0.024326,0.018501800000000002,0.0130118,0.0145842,0.009599400000000001,0.0108839,0.0108839,0.013224300000000001],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.0960292,0.10568200000000001,0.104927,0.104927,0.11494700000000001,0.123836,0.121196,0.131356,0.123638,0.134576,0.134576,0.127341,0.134659,0.144179,0.152524,0.142489,0.13278600000000002,0.13278600000000002,0.14316700000000002,0.152869,0.16231299999999999,0.174995,0.186156,0.194108,0.194108,0.18289,0.19556,0.191433,0.196255,0.203013,0.196871,0.196871,0.20136900000000002,0.209221,0.209068,0.21284799999999998,0.21776099999999998,0.222702,0.222702,0.221259,0.22196,0.216447,0.214147,0.227902,0.227902,0.227902,0.22638,0.224378,0.218801,0.214823,0.21018299999999998,0.204195,0.204195,0.19153900000000001],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.104231,0.09628930000000001,0.0871816,0.0871816,0.0781465,0.0713337,0.07513109999999999,0.066113,0.061335100000000004,0.05145229999999999,0.05145229999999999,0.056105699999999994,0.049143599999999996,0.039333,0.0453408,0.0378003,0.032744,0.032744,0.039238,0.0333101,0.0279386,0.0318569,0.0258515,0.0180361,0.0180361,0.0151839,0.0177992,0.022023200000000003,0.017832999999999998,0.0184846,0.0147425,0.0147425,0.017958699999999998,0.0192009,0.0257212,0.0198933,0.0229441,0.0167205,0.0167205,0.0232206,0.0164061,0.0215892,0.0258289,0.0311145,0.0311145,0.0311145,0.0300013,0.0360867,0.0429329,0.0342444,0.0322002,0.0196438,0.0196438,0.024448200000000003],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.0948987,0.103382,0.0942092,0.0942092,0.104421,0.10470600000000001,0.110148,0.12198200000000001,0.115519,0.101385,0.101385,0.09388790000000001,0.10504,0.11107399999999999,0.101722,0.11080799999999999,0.122005,0.122005,0.113088,0.103231,0.095066,0.10534600000000001,0.08998389999999999,0.07419060000000001,0.07419060000000001,0.0824592,0.0923866,0.0783008,0.0939083,0.09388350000000001,0.10829799999999999,0.10829799999999999,0.0985,0.0838726,0.105014,0.113343,0.124818,0.108436,0.108436,0.0940043,0.11150700000000001,0.12678899999999999,0.11876700000000001,0.11148,0.11148,0.11148,0.0946081,0.10866799999999999,0.11941600000000001,0.135175,0.147507,0.158409,0.158409,0.140864],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.100039,0.108883,0.09884799999999999,0.09884799999999999,0.109755,0.11922200000000001,0.11474799999999999,0.1064,0.119739,0.127492,0.127492,0.13919700000000002,0.131306,0.122278,0.133314,0.147291,0.15778899999999998,0.15778899999999998,0.14396,0.152765,0.16034299999999999,0.173561,0.185853,0.179108,0.179108,0.163322,0.174787,0.177953,0.16883900000000002,0.160471,0.17831,0.17831,0.172598,0.193267,0.193656,0.19691099999999997,0.200967,0.214021,0.214021,0.22256099999999998,0.20923099999999997,0.191803,0.20979,0.226242,0.226242,0.226242,0.22665,0.226325,0.20784599999999998,0.210313,0.200923,0.18071900000000002,0.18071900000000002,0.184509],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.103183,0.111589,0.11917,0.11917,0.11262299999999999,0.102041,0.09137680000000001,0.09764389999999999,0.111582,0.11848600000000001,0.11848600000000001,0.131795,0.137615,0.148471,0.139279,0.12441700000000001,0.11381100000000001,0.11381100000000001,0.124781,0.134744,0.119559,0.10773200000000001,0.118065,0.129938,0.129938,0.138629,0.123305,0.138294,0.124892,0.125981,0.107899,0.107899,0.107411,0.122339,0.111964,0.11844299999999999,0.0992452,0.10842,0.10842,0.0961167,0.104363,0.11851600000000001,0.10166399999999999,0.0889094,0.0889094,0.0889094,0.103641,0.0911164,0.0782176,0.0896115,0.08767459999999999,0.0850726,0.0850726,0.101345],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.0974,0.09048,0.09819,0.09819,0.1013,0.10734,0.10552,0.09792,0.10507,0.10131,0.10131,0.09324,0.08647,0.08154,0.08852,0.07884,0.07358,0.07358,0.08037,0.08752,0.0789,0.0734,0.08183,0.09344,0.09344,0.08215,0.07266,0.06648,0.07717,0.07877,0.07355,0.07355,0.07993,0.07329,0.08622,0.09557,0.08458,0.09833,0.09833,0.10902,0.09243,0.08187,0.09081,0.10319,0.10319,0.10319,0.11741,0.1321,0.1394,0.14468,0.14495,0.15494,0.15494,0.16055],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.10221,0.09801,0.09107,0.09107,0.08516,0.07753,0.07966,0.08612,0.07643,0.07091,0.07091,0.0786,0.07619,0.07186,0.06414,0.0713,0.07749,0.07749,0.0675,0.05933,0.0477,0.043,0.03551,0.03156,0.03156,0.02353,0.02072,0.02454,0.02822,0.02771,0.03141,0.03141,0.0316,0.02408,0.02962,0.02339,0.0191,0.01528,0.01528,0.01178,0.00869,0.00991,0.01413,0.01869,0.01869,0.01869,0.01858,0.02224,0.02842,0.02047,0.01646,0.01238,0.01238,0.0096],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.10189,0.10548,0.11378,0.11378,0.10909,0.10975,0.10495,0.09953,0.08983,0.08537,0.08537,0.07611,0.076,0.06842,0.05933,0.06462,0.0717,0.0717,0.08184,0.08739,0.09648,0.08876,0.08219,0.09001,0.09001,0.09481,0.10678,0.11628,0.10573,0.11629,0.12536,0.12536,0.13619,0.14757,0.14344,0.15219,0.1589,0.1721,0.1721,0.16636,0.1681,0.16677,0.166,0.16559,0.16559,0.16559,0.16617,0.16207,0.1623,0.1557,0.1586,0.16184,0.16184,0.15271],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.09851,0.09338,0.09285,0.09285,0.08574,0.07782,0.08277,0.07471,0.07849,0.08627,0.08627,0.0945,0.09477,0.10239,0.10822,0.11642,0.12221,0.12221,0.11371,0.11188,0.12064,0.1274,0.13525,0.13886,0.13886,0.14315,0.13979,0.13393,0.12336,0.12214,0.12718,0.12718,0.11764,0.11435,0.10383,0.08745,0.07415,0.06102,0.06102,0.06934,0.07823,0.06775,0.06263,0.05631,0.05631,0.05631,0.0452,0.03712,0.02849,0.0228,0.02803,0.02134,0.02134,0.02538],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.10095,0.09211,0.10063,0.10063,0.10497,0.1145,0.1197,0.12279,0.12481,0.13214,0.13214,0.12885,0.12873,0.1319,0.1326,0.12748,0.12386,0.12386,0.11923,0.11493,0.12378,0.11848,0.11005,0.10317,0.10317,0.11192,0.10488,0.10662,0.11552,0.10765,0.09687,0.09687,0.08843,0.07928,0.06853,0.05596,0.06176,0.05029,0.05029,0.05871,0.04682,0.03902,0.04686,0.04064,0.04064,0.04064,0.04113,0.03268,0.02415,0.02737,0.01977,0.02222,0.02222,0.02287],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.10082,0.10391,0.10325,0.10325,0.10879,0.11529,0.11273,0.1197,0.11909,0.12264,0.12264,0.11728,0.12153,0.12808,0.13153,0.12857,0.12329,0.12329,0.12677,0.12993,0.13526,0.13977,0.14509,0.14191,0.14191,0.14491,0.1422,0.14406,0.14035,0.13358,0.1402,0.1402,0.13898,0.13481,0.1215,0.13245,0.14218,0.14374,0.14374,0.15115,0.145,0.15379,0.15735,0.15184,0.15184,0.15184,0.15238,0.14227,0.14703,0.15785,0.1553,0.15809,0.15809,0.15823],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.10064,0.09783,0.08981,0.08981,0.08646,0.07881,0.08158,0.07639,0.07124,0.06263,0.06263,0.06686,0.06104,0.05292,0.0584,0.05182,0.04318,0.04318,0.05105,0.04474,0.03921,0.04636,0.03859,0.03027,0.03027,0.02428,0.02853,0.03398,0.02952,0.03013,0.0236,0.0236,0.02788,0.03177,0.04121,0.03246,0.03797,0.03022,0.03022,0.03862,0.02995,0.03694,0.04335,0.05057,0.05057,0.05057,0.0521,0.05796,0.06457,0.05424,0.05209,0.03458,0.03458,0.03961],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.09713,0.10439,0.09776,0.09776,0.10501,0.10345,0.10926,0.11507,0.11229,0.1047,0.1047,0.09845,0.10707,0.11223,0.10546,0.11196,0.11837,0.11837,0.11213,0.10703,0.10294,0.11028,0.10235,0.09037,0.09037,0.09794,0.10677,0.09551,0.10681,0.10765,0.11832,0.11832,0.11098,0.10395,0.12158,0.12947,0.13941,0.13056,0.13056,0.11829,0.13406,0.14335,0.13765,0.13643,0.13643,0.13643,0.12377,0.13499,0.13832,0.14775,0.15379,0.15967,0.15967,0.14809],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.09958,0.10582,0.10023,0.10023,0.10543,0.11331,0.11012,0.106,0.11327,0.12031,0.12031,0.12677,0.12213,0.12045,0.12434,0.1293,0.13156,0.13156,0.12811,0.13169,0.13521,0.1406,0.14514,0.1473,0.1473,0.14164,0.14909,0.14448,0.147,0.14792,0.14761,0.14761,0.14894,0.15747,0.15823,0.16,0.16221,0.16978,0.16978,0.15841,0.17045,0.16546,0.1608,0.16149,0.16149,0.16149,0.15859,0.16315,0.16494,0.1578,0.16182,0.16433,0.16433,0.16046],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.10087,0.10859,0.11243,0.11243,0.10805,0.1022,0.09371,0.10177,0.10948,0.11372,0.11372,0.11934,0.12607,0.13021,0.12746,0.11969,0.11476,0.11476,0.11929,0.12556,0.11988,0.11195,0.124,0.13311,0.13311,0.13567,0.12858,0.13412,0.12632,0.12816,0.1159,0.1159,0.11943,0.13343,0.12584,0.13106,0.11974,0.12868,0.12868,0.11832,0.12627,0.13514,0.12042,0.11525,0.11525,0.11525,0.12467,0.11542,0.10238,0.11134,0.10919,0.11061,0.11061,0.1225],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [71.7203,71.189,71.7461,71.7461,72.1731,72.7042,72.3385,71.8604,72.286,71.8717,71.8717,71.3554,70.869,70.385,71.0012,70.3987,69.9177,69.9177,70.3856,70.8656,70.2762,69.8784,70.4943,71.1918,71.1918,70.6775,70.0693,69.5161,70.2916,70.3025,70.1051,70.1051,70.5619,70.0112,70.6324,71.3342,70.7059,71.4833,71.4833,72.0695,71.332,70.7523,71.2553,71.6999,71.6999,71.6999,72.4883,73.1164,73.655,74.2806,74.259,75.4816,75.4816,76.1296],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.2325,71.7535,71.2762,71.2762,70.7244,70.183,70.3191,70.8115,70.061,69.6697,69.6697,70.2042,70.1889,69.7664,69.2007,69.7767,70.2187,70.2187,69.4478,68.7432,67.9983,67.4764,66.8867,66.4105,66.4105,65.7339,65.1893,65.8531,66.2613,66.2204,66.5633,66.5633,66.5244,65.7492,66.198,65.6832,65.1457,64.7119,64.7119,64.062,63.3276,63.7915,64.499,65.2909,65.2909,65.2909,65.2334,65.7882,66.6945,65.9231,65.3709,64.8082,64.8082,64.2342],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.1953,72.6999,73.2122,73.2122,72.6999,72.6802,72.3719,71.8148,71.1129,70.5993,70.5993,69.9504,69.9022,69.2693,68.726,69.2127,69.7397,69.7397,70.413,70.9721,71.5053,70.9361,70.3392,70.9792,70.9792,71.4567,72.0975,72.6305,72.0705,72.6407,73.2998,73.2998,73.8874,74.5224,73.7903,74.4196,75.3143,75.9701,75.9701,75.4142,76.2307,76.8372,76.2059,75.3616,75.3616,75.3616,75.3516,74.7902,75.4046,74.7726,75.4147,76.1706,76.1706,75.3959],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [71.8397,71.331,71.3758,71.3758,70.7639,70.226,70.4592,69.8815,70.256,70.8815,70.8815,71.3772,71.4168,72.0397,72.5189,73.0855,73.5753,73.5753,73.1132,72.6671,73.3261,73.7162,74.2931,74.7432,74.7432,75.2525,74.643,73.9874,73.2588,73.2253,73.5282,73.5282,72.9074,72.3202,71.5103,70.8786,70.0313,69.3848,69.3848,69.9216,70.5524,70.01,69.5323,68.9645,68.9645,68.9645,68.1477,67.4982,66.9154,66.341,67.013,66.4163,66.4163,67.0943],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0226,71.4736,72.0472,72.0472,72.4958,73.0453,73.7212,74.2148,74.5767,75.2136,75.2136,74.6807,74.6295,75.0982,74.6446,74.2282,73.8201,73.8201,73.4182,72.9725,73.6286,73.0196,72.4336,71.8968,71.8968,72.5553,72.0979,72.1513,72.7069,72.1079,71.5571,71.5571,70.9702,70.3208,69.5063,68.7662,69.4033,68.5934,68.5934,69.2361,68.5644,67.9755,68.5366,67.8693,67.8693,67.8693,67.9794,67.2855,66.3786,66.8083,66.0102,66.5621,66.5621,66.6473],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [71.8246,72.3117,72.2714,72.2714,72.8144,73.3233,73.1585,73.7433,73.417,73.8871,73.8871,73.3823,73.9628,74.4956,75.0245,74.422,73.8304,73.8304,74.3926,74.8932,75.4194,76.1424,76.7522,77.4101,77.4101,76.9961,77.7616,77.2789,77.8594,78.5521,77.7107,77.7107,78.4558,79.1062,79.9823,79.5129,78.9891,79.593,79.593,78.7988,79.5107,78.7266,78.0965,78.7576,78.7576,78.7576,78.722,79.399,78.8643,78.1739,78.2276,77.9877,77.9877,77.4109],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.2785,71.834,71.2639,71.2639,70.83,70.3257,70.6439,70.0749,69.7644,69.0842,69.0842,69.4985,68.934,68.2941,68.8465,68.219,67.6385,67.6385,68.2939,67.776,67.3426,67.8643,67.2156,66.4212,66.4212,65.9059,66.4461,66.9868,66.4057,66.4339,65.7671,65.7671,66.2858,66.8014,67.5295,66.9095,67.4682,66.8004,66.8004,67.6073,66.9695,67.7204,68.0993,68.6081,68.6081,68.6081,68.6234,69.1287,69.712,69.1743,69.1147,67.9178,67.9178,68.4358],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [71.6738,72.2041,71.6941,71.6941,72.2546,72.2364,72.6247,73.1627,72.7617,72.1213,72.1213,71.6537,72.1961,72.722,72.0871,72.6531,73.1961,73.1961,72.7546,72.2907,71.8977,72.3595,71.7395,71.022,71.022,71.5926,72.0925,71.3536,72.0302,72.0044,72.7192,72.7192,72.1574,71.5769,72.3598,72.936,73.5469,73.0239,73.0239,72.3372,73.2781,73.8825,73.421,73.0527,73.0527,73.0527,72.3909,72.9354,73.4294,74.1959,74.8103,75.3337,75.3337,74.6392],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0056,72.5189,71.9887,71.9887,72.5424,73.0736,72.8447,72.4022,73.0928,73.5851,73.5851,74.2289,73.7649,73.3673,73.8382,74.517,75.0792,75.0792,74.374,74.8651,75.2781,75.9671,76.5756,76.0138,76.0138,75.4373,75.975,76.0342,75.6017,75.0265,75.9911,75.9911,75.5409,76.2368,75.7854,76.3218,76.8362,77.3324,77.3324,78.0405,77.1865,76.6261,77.5656,78.1868,78.1868,78.1868,78.207,77.7429,77.1575,77.8933,77.3546,76.7057,76.7057,76.7064],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.207,72.6841,73.1243,73.1243,72.7014,72.2022,71.5181,72.0339,72.6715,73.0865,73.0865,73.6687,74.1357,74.5625,74.1121,73.4872,72.9843,72.9843,73.4071,73.9544,73.3277,72.6399,73.2702,73.9113,73.9113,74.3922,73.6279,74.208,73.514,73.4864,72.7584,72.7584,72.7088,73.355,72.7057,73.238,72.559,73.1068,73.1068,72.5129,73.0481,73.678,72.7885,72.2086,72.2086,72.2086,72.8563,72.3156,71.7886,72.4371,72.4249,72.6163,72.6163,73.3064],
  mode: "lines",
  name: "SSG",
  line: {color:"#ffb81c", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]