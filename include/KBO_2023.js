var xRange = ["2023-03-31", "2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05", "2023-04-06", "2023-04-07", "2023-04-08", "2023-04-09", "2023-04-10", "2023-04-11", "2023-04-12", "2023-04-13", "2023-04-14", "2023-04-15", "2023-04-16", "2023-04-17", "2023-04-18", "2023-04-19", "2023-04-20", "2023-04-21", "2023-04-22", "2023-04-23", "2023-04-24", "2023-04-25", "2023-04-26", "2023-04-27", "2023-04-28", "2023-04-29", "2023-04-30", "2023-05-01", "2023-05-02", "2023-05-03", "2023-05-04", "2023-05-05", "2023-05-06"];
var PS1= {
  x: xRange,
  y: [0.5,0.5388769,0.5010729,0.5010729,0.5398891,0.4997768,0.5307139999999999,0.576653,0.5502407,0.592431,0.592431,0.6161519999999999,0.622413,0.5533642,0.49403400000000003,0.4553334999999999,0.5044122999999999,0.5044122999999999,0.5429952,0.5108715,0.5517812999999999,0.602814,0.6490319999999999,0.653637,0.653637,0.649492,0.6089019999999999,0.572867,0.5307993,0.48238800000000004,0.5237069999999999,0.5237069999999999,0.5566018,0.50685,0.445706,0.44768699999999995,0.45039199999999996],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PS2= {
  x: xRange,
  y: [0.5,0.4711257,0.5095599,0.5095599,0.48105269999999994,0.4777255,0.4784789,0.439945,0.4026344,0.4410624000000001,0.4410624000000001,0.47318350000000003,0.4280182,0.46369,0.4256386,0.4589536,0.41602330000000004,0.41602330000000004,0.4447018,0.39189589999999996,0.4184697,0.46192429999999995,0.5127784000000001,0.5532407,0.5532407,0.5560876,0.5925590000000001,0.6274419999999999,0.663314,0.66053,0.688663,0.688663,0.7334769999999999,0.6898139999999999,0.6962010000000001,0.698027,0.698024],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PS3= {
  x: xRange,
  y: [0.5,0.45838539999999994,0.49189809999999995,0.49189809999999995,0.5200381,0.5235441000000001,0.4787176,0.43520919999999996,0.3991701,0.35864409999999997,0.35864409999999997,0.32529870000000005,0.2840967,0.3243494,0.36046290000000003,0.3201125,0.3543861,0.3543861,0.39050120000000005,0.43289720000000004,0.3893239,0.35123619999999994,0.3071449,0.2721886,0.2721886,0.26876300000000003,0.30445130000000004,0.3357675,0.3745819,0.412003,0.44676160000000004,0.44676160000000004,0.39518410000000004,0.3505857,0.42108200000000007,0.4194364,0.420697],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PS4= {
  x: xRange,
  y: [0.5,0.5249159999999999,0.554373,0.554373,0.5092591000000001,0.542827,0.5033706,0.459579,0.4253822,0.37886119999999995,0.37886119999999995,0.3460919,0.3489036,0.39874050000000005,0.44340880000000005,0.4791850000000001,0.5107647999999999,0.5107647999999999,0.46274669999999996,0.421354,0.463235,0.42671169999999997,0.3935252,0.3591307000000001,0.3591307000000001,0.3903994,0.46104329999999993,0.49997,0.45585020000000004,0.45290119999999995,0.41012439999999994,0.41012439999999994,0.4579244,0.5072099,0.4391425,0.3961853999999999,0.35786830000000003],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PS5= {
  x: xRange,
  y: [0.5,0.4739209,0.44174410000000003,0.44174410000000003,0.403778,0.4060065,0.44560450000000007,0.3977779,0.36092119999999994,0.3176968,0.3176968,0.35514520000000005,0.31698919999999997,0.3594369,0.3655977,0.413052,0.35972580000000004,0.35972580000000004,0.3107661,0.34887470000000004,0.302091,0.2682007,0.23470580000000002,0.2674826,0.2674826,0.2637281,0.2254078,0.19310290000000002,0.1648107,0.13907201,0.11070321,0.11070321,0.08881850000000001,0.11400031999999999,0.14147389,0.1428626,0.14475821],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PS6= {
  x: xRange,
  y: [0.5,0.46460019999999996,0.501506,0.501506,0.5065829000000001,0.5032312999999999,0.5041877,0.4672466,0.4994293,0.4697984000000001,0.4697984000000001,0.4233679,0.45470549999999993,0.3957253,0.34632299999999994,0.307133,0.27072730000000006,0.27072730000000006,0.2394482,0.2725856,0.24433760000000002,0.2693973,0.3054816,0.33804090000000003,0.33804090000000003,0.2887131,0.3342932,0.3820396000000001,0.42530589999999996,0.478148,0.5281653,0.5281653,0.47505850000000005,0.5375072999999999,0.54384,0.5414014,0.5417197],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PS7= {
  x: xRange,
  y: [0.5,0.5350488,0.49967149999999994,0.49967149999999994,0.49784660000000003,0.4994421,0.5006703,0.5466052,0.5855035999999999,0.557795,0.557795,0.535471,0.5071205,0.558217,0.555322,0.5121478,0.5609040000000001,0.5609040000000001,0.600654,0.636485,0.5934590000000001,0.5550390000000001,0.5189136,0.5258012,0.5258012,0.49503410000000003,0.429139,0.3855322,0.3431157,0.2974367,0.2584008,0.2584008,0.3098195,0.27427650000000003,0.2340489,0.237614,0.23899650000000003],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PS8= {
  x: xRange,
  y: [0.5,0.46134830000000004,0.49775640000000004,0.49775640000000004,0.5275798,0.49753539999999996,0.5449963000000001,0.5820821,0.6102625,0.6339622,0.6339622,0.6035493,0.6415557,0.6285926000000001,0.6803525,0.7106483,0.6741447,0.6741447,0.6458410000000001,0.6798229000000001,0.7212806999999999,0.7537716999999998,0.7903326,0.7599475,0.7599475,0.7899620999999999,0.7595719000000001,0.7908294,0.7581329000000001,0.7218097,0.67629,0.67629,0.715835,0.7552091000000001,0.7572175000000001,0.7614162,0.7617137999999999],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PS9= {
  x: xRange,
  y: [0.5,0.5331824000000001,0.5011178,0.5011178,0.4737259,0.5142152999999999,0.48028669999999996,0.5219536,0.5586896,0.6013435,0.6013435,0.6438973,0.6855335,0.6428339,0.6140389999999999,0.6512409,0.7033280000000001,0.7033280000000001,0.7437658,0.7182907000000001,0.6825923999999999,0.6477693000000001,0.5980559999999999,0.5504664,0.5504664,0.604032,0.5538898999999999,0.5094961,0.5472773999999999,0.581867,0.6214870000000001,0.6214870000000001,0.5799110000000001,0.5436553,0.5500658,0.5513519,0.5520371],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PS10= {
  x: xRange,
  y: [0.5,0.5385961,0.5012995,0.5012995,0.5402477,0.5356961,0.5329743,0.5729485999999999,0.6077671000000001,0.6484081,0.6484081,0.6778451,0.7106658,0.675051,0.7148211,0.6921959,0.645585,0.645585,0.618582,0.5869228,0.6334303000000001,0.6631368000000001,0.6900317,0.7200650999999999,0.7200650999999999,0.6937889,0.7307424,0.7029552,0.7368131,0.7738467000000001,0.7357003,0.7357003,0.6873683,0.7208948,0.7712219,0.8040204,0.8337926999999999],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPS = [PS1, PS2, PS3, PS4, PS5, PS6, PS7, PS8, PS9, PS10]

var KS1= {
  x: xRange,
  y: [0.1,0.114791,0.10131899999999999,0.10131899999999999,0.114225,0.0982741,0.110869,0.131906,0.115948,0.132743,0.132743,0.14363299999999998,0.141297,0.11156100000000001,0.0858274,0.0716648,0.0867713,0.0867713,0.0992278,0.0882286,0.105961,0.12405799999999999,0.14469,0.148899,0.148899,0.146174,0.126524,0.10803399999999999,0.08918229999999999,0.0718096,0.087715,0.087715,0.09966280000000001,0.07911810000000001,0.0591994,0.0577783,0.0559562],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var KS2= {
  x: xRange,
  y: [0.1,0.0893516,0.10124799999999999,0.10124799999999999,0.0912178,0.0904541,0.0903421,0.075572,0.061400699999999996,0.0714008,0.0714008,0.08059100000000001,0.0613247,0.0767991,0.0625053,0.0728425,0.0593001,0.0593001,0.0677082,0.053241000000000004,0.0600796,0.0699094,0.0831266,0.09858299999999999,0.09858299999999999,0.09754389999999999,0.116332,0.13492,0.156199,0.153697,0.175402,0.175402,0.208998,0.170084,0.171816,0.166085,0.16261299999999998],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var KS3= {
  x: xRange,
  y: [0.1,0.0830757,0.0942569,0.0942569,0.109001,0.10927200000000001,0.0913429,0.0731421,0.0591546,0.047376800000000004,0.047376800000000004,0.0389373,0.0296587,0.0382788,0.045323800000000004,0.0361318,0.04402520000000001,0.04402520000000001,0.0516987,0.0636236,0.050775299999999995,0.0413284,0.029779200000000002,0.0244183,0.0244183,0.024172199999999998,0.029640700000000002,0.0357218,0.0446189,0.0521164,0.060921800000000005,0.060921800000000005,0.0483896,0.0385731,0.050869,0.0505394,0.0467325],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var KS4= {
  x: xRange,
  y: [0.1,0.110656,0.12415,0.12415,0.104176,0.118379,0.10099899999999999,0.0812255,0.0670494,0.052904099999999996,0.052904099999999996,0.043454,0.0405233,0.056506499999999994,0.0680079,0.0781734,0.09163049999999999,0.09163049999999999,0.071769,0.059316,0.0727633,0.0595237,0.0477689,0.0392534,0.0392534,0.0460375,0.0650519,0.07662229999999999,0.0629067,0.06316569999999999,0.052211099999999996,0.052211099999999996,0.0651273,0.0791769,0.0553734,0.0430743,0.0333965],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var KS5= {
  x: xRange,
  y: [0.1,0.0887347,0.078502,0.078502,0.06435060000000001,0.066008,0.08006100000000001,0.060965,0.0490457,0.0383255,0.0383255,0.0445345,0.035034699999999995,0.0470601,0.047127600000000006,0.05956020000000001,0.0446367,0.0446367,0.035186,0.042338999999999995,0.031650500000000005,0.0258552,0.0196454,0.0237311,0.0237311,0.0227062,0.018435899999999998,0.014695999999999999,0.010787699999999999,0.008000410000000001,0.00546501,0.00546501,0.00427724,0.00587192,0.00823059,0.0075517,0.00734381],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var KS6= {
  x: xRange,
  y: [0.1,0.085106,0.100151,0.100151,0.102338,0.102346,0.102412,0.0853998,0.0948919,0.080715,0.080715,0.0653194,0.06952180000000001,0.057512,0.043755699999999995,0.0341138,0.0285471,0.0285471,0.0218931,0.0285302,0.0231336,0.027038200000000002,0.0319546,0.0376291,0.0376291,0.026803800000000003,0.0373719,0.0461227,0.058416499999999996,0.0711658,0.08988299999999999,0.08988299999999999,0.0701782,0.0899363,0.089771,0.0870464,0.0841247],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var KS7= {
  x: xRange,
  y: [0.1,0.115615,0.10046799999999999,0.10046799999999999,0.0985102,0.0988768,0.0977151,0.11867299999999999,0.135889,0.115646,0.115646,0.10405700000000001,0.08637260000000001,0.11513200000000001,0.11248200000000001,0.0899498,0.112673,0.112673,0.130414,0.153181,0.126469,0.105105,0.0872046,0.09928,0.09928,0.08532,0.06516,0.05506,0.04369,0.03408,0.0277,0.0277,0.03651,0.02876,0.02223,0.02091,0.02036],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var KS8= {
  x: xRange,
  y: [0.1,0.0833874,0.0994168,0.0994168,0.11139600000000001,0.0978919,0.119208,0.13400700000000001,0.14740799999999998,0.156722,0.156722,0.13591799999999998,0.15170799999999998,0.14957,0.181545,0.20551599999999998,0.175347,0.175347,0.15331799999999998,0.17801799999999998,0.20615599999999998,0.236184,0.266855,0.233879,0.233879,0.26173599999999997,0.231994,0.26474400000000003,0.22822900000000002,0.193176,0.16039899999999999,0.16039899999999999,0.18731799999999998,0.22253799999999999,0.218192,0.212893,0.20627],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var KS9= {
  x: xRange,
  y: [0.1,0.11302,0.0995789,0.0995789,0.08731860000000001,0.10393100000000001,0.09233770000000001,0.106539,0.12120600000000001,0.135988,0.135988,0.158532,0.180523,0.159195,0.137679,0.159604,0.198976,0.198976,0.22922599999999999,0.20965599999999998,0.175285,0.149872,0.11579,0.0938824,0.0938824,0.114536,0.09732690000000001,0.0796801,0.0936144,0.106664,0.128403,0.128403,0.107771,0.0902783,0.0892958,0.0875099,0.0842701],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var KS10= {
  x: xRange,
  y: [0.1,0.11626299999999999,0.100909,0.100909,0.117466,0.114567,0.114713,0.132571,0.148007,0.16817900000000002,0.16817900000000002,0.185025,0.204036,0.188386,0.215746,0.192444,0.15809299999999998,0.15809299999999998,0.139559,0.123867,0.147727,0.161126,0.17318599999999998,0.200444,0.200444,0.174971,0.21216200000000002,0.184399,0.212356,0.246125,0.2119,0.2119,0.171767,0.195663,0.23502299999999998,0.266613,0.29893200000000003],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataKS = [KS1, KS2, KS3, KS4, KS5, KS6, KS7, KS8, KS9, KS10]

var PO1= {
  x: xRange,
  y: [0.1,0.0957579,0.0866248,0.0866248,0.0968791,0.08671290000000001,0.093689,0.105001,0.0975317,0.108029,0.108029,0.115714,0.11574200000000001,0.09692719999999999,0.0848576,0.0761102,0.087207,0.087207,0.09606239999999999,0.08752389999999999,0.09925129999999999,0.111784,0.12628899999999998,0.139401,0.139401,0.14069600000000002,0.128126,0.11619600000000001,0.10347799999999999,0.0902204,0.100455,0.100455,0.112347,0.09608190000000001,0.0787206,0.0792117,0.0776138],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var PO2= {
  x: xRange,
  y: [0.1,0.0813657,0.0909449,0.0909449,0.0848468,0.0854309,0.0836089,0.0751654,0.0657702,0.0738226,0.0738226,0.0817488,0.0702301,0.0794621,0.0712267,0.0794768,0.0684644,0.0684644,0.0745446,0.062782,0.0685404,0.0797714,0.0929418,0.0988507,0.0988507,0.0981277,0.10919799999999999,0.12015799999999999,0.129973,0.128748,0.135413,0.135413,0.14733200000000002,0.137246,0.13663,0.13777799999999998,0.140527],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var PO3= {
  x: xRange,
  y: [0.1,0.08297270000000001,0.0908924,0.0908924,0.0980041,0.0970211,0.087404,0.0757906,0.0652629,0.056997,0.056997,0.049898000000000005,0.040404699999999995,0.050171400000000005,0.0584126,0.0485253,0.0553693,0.0553693,0.0636708,0.0725059,0.0625529,0.0538971,0.0456692,0.0368314,0.0368314,0.0351845,0.0413863,0.047716,0.0572279,0.0642931,0.0737356,0.0737356,0.060873199999999995,0.0508324,0.0658677,0.06546479999999999,0.0631553],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var PO4= {
  x: xRange,
  y: [0.1,0.102979,0.109694,0.109694,0.09721010000000001,0.106032,0.09680280000000001,0.08470280000000001,0.0743036,0.0621859,0.0621859,0.0556403,0.054554700000000005,0.067956,0.0791239,0.0896253,0.09584129999999999,0.09584129999999999,0.0846492,0.07301479999999999,0.0835842,0.07426229999999999,0.0653588,0.0549299,0.0549299,0.061757700000000006,0.0790391,0.0899337,0.0786352,0.07777,0.0664362,0.0664362,0.0779473,0.09020700000000001,0.0714151,0.0614639,0.051469799999999996],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var PO5= {
  x: xRange,
  y: [0.1,0.09092700000000001,0.0823872,0.0823872,0.07420439999999999,0.0736046,0.0839235,0.0719021,0.0615747,0.0511618,0.0511618,0.0584758,0.048555,0.0580578,0.0615024,0.0736498,0.0602733,0.0602733,0.047714,0.057281000000000006,0.045039499999999996,0.0386648,0.0317046,0.041608900000000004,0.041608900000000004,0.0400738,0.0336141,0.026034,0.0213023,0.0165796,0.012505,0.012505,0.008992759999999999,0.012348099999999999,0.0162894,0.0167683,0.0164262],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var PO6= {
  x: xRange,
  y: [0.1,0.0914393,0.101875,0.101875,0.103639,0.100901,0.10256299999999999,0.09052729999999999,0.0979264,0.08907620000000001,0.08907620000000001,0.0753413,0.0842189,0.0698629,0.0592555,0.0490025,0.0415487,0.0415487,0.0356286,0.041310299999999994,0.0351746,0.0405705,0.0475756,0.05186060000000001,0.05186060000000001,0.041488699999999996,0.05186109999999999,0.062382299999999995,0.0724555,0.0843022,0.09890729999999999,0.09890729999999999,0.0871998,0.101515,0.10423700000000001,0.10130299999999999,0.10151299999999999],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var PO7= {
  x: xRange,
  y: [0.1,0.113878,0.104138,0.104138,0.102988,0.10409600000000001,0.103974,0.116405,0.126803,0.116949,0.116949,0.110389,0.0984689,0.11557,0.11446799999999999,0.10104,0.116747,0.116747,0.126786,0.140539,0.126991,0.113315,0.101505,0.11154,0.11154,0.100012,0.0826545,0.0734233,0.061812,0.0509125,0.04175,0.04175,0.0526233,0.0451958,0.0355933,0.0364858,0.037022],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var PO8= {
  x: xRange,
  y: [0.1,0.0970445,0.107509,0.107509,0.11489700000000001,0.10777700000000001,0.120562,0.13004200000000002,0.13881,0.144647,0.144647,0.134106,0.142749,0.143407,0.155089,0.161962,0.150727,0.150727,0.141846,0.153926,0.166609,0.174701,0.184429,0.175226,0.175226,0.18333400000000002,0.17565599999999998,0.187567,0.177799,0.16518,0.150511,0.150511,0.163701,0.17474900000000002,0.18166400000000002,0.181521,0.182712],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var PO9= {
  x: xRange,
  y: [0.1,0.11973,0.11023899999999999,0.11023899999999999,0.10330600000000001,0.11428,0.10433200000000001,0.114634,0.12578899999999998,0.138964,0.138964,0.151647,0.16377799999999998,0.151859,0.138573,0.150854,0.167415,0.167415,0.18326,0.17303900000000003,0.16142600000000001,0.15010600000000002,0.133149,0.113151,0.113151,0.131975,0.116561,0.10267899999999999,0.113328,0.125634,0.138371,0.138371,0.12282799999999999,0.111846,0.113704,0.112993,0.113854],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var PO10= {
  x: xRange,
  y: [0.1,0.123906,0.11569600000000001,0.11569600000000001,0.124025,0.12414399999999999,0.123141,0.13583,0.146229,0.158168,0.158168,0.16703900000000002,0.18129900000000002,0.16672599999999999,0.17749099999999998,0.16975400000000002,0.156408,0.156408,0.145838,0.138079,0.150832,0.162928,0.171378,0.17660099999999998,0.17660099999999998,0.16735099999999997,0.18190299999999998,0.17391099999999998,0.183989,0.19636099999999998,0.181916,0.181916,0.166155,0.17997900000000003,0.19587900000000003,0.20701099999999997,0.215707],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataPO = [PO1, PO2, PO3, PO4, PO5, PO6, PO7, PO8, PO9, PO10]

var SP1= {
  x: xRange,
  y: [0.1,0.104778,0.0973693,0.0973693,0.10618799999999999,0.10051600000000001,0.10424399999999999,0.11330899999999999,0.107413,0.118409,0.118409,0.120249,0.12279200000000001,0.111447,0.10160899999999999,0.0915035,0.10168700000000001,0.10168700000000001,0.111616,0.103437,0.111595,0.121708,0.130825,0.13085,0.13085,0.13048,0.12529,0.11903,0.11007,0.10051,0.10791,0.10791,0.11619,0.1037,0.0919,0.09186,0.09417],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var SP2= {
  x: xRange,
  y: [0.1,0.0933082,0.10074200000000001,0.10074200000000001,0.09535129999999999,0.09350370000000001,0.0939482,0.0862188,0.078697,0.0879513,0.0879513,0.0967098,0.0851475,0.0936283,0.0855708,0.0932558,0.08566629999999999,0.08566629999999999,0.0906748,0.0791322,0.0836705,0.0929485,0.105495,0.111916,0.111916,0.114637,0.121725,0.125147,0.132403,0.131187,0.132514,0.132514,0.138449,0.134936,0.138991,0.14223,0.140981],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var SP3= {
  x: xRange,
  y: [0.1,0.09182649999999999,0.09983030000000001,0.09983030000000001,0.10317799999999999,0.10362600000000001,0.09557620000000001,0.0891632,0.0806343,0.0719903,0.0719903,0.0657473,0.054588199999999996,0.0644325,0.0723998,0.06471479999999999,0.07251729999999999,0.07251729999999999,0.08030319999999999,0.08876350000000001,0.078299,0.0712487,0.061968999999999996,0.0524187,0.0524187,0.0508093,0.058776800000000004,0.066982,0.0744033,0.083448,0.0912365,0.0912365,0.07929699999999999,0.06871970000000001,0.0825635,0.0840365,0.0855932],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var SP4= {
  x: xRange,
  y: [0.1,0.103281,0.109075,0.109075,0.100439,0.107575,0.099652,0.09212479999999999,0.0873067,0.0769092,0.0769092,0.0695153,0.071976,0.08082270000000001,0.0912858,0.0983383,0.10397200000000001,0.10397200000000001,0.0957755,0.0871115,0.09415549999999999,0.0878535,0.0808818,0.07329569999999999,0.07329569999999999,0.07974300000000001,0.09498530000000001,0.103866,0.0925733,0.0916685,0.0836033,0.0836033,0.09300979999999999,0.10391,0.09103399999999999,0.08155369999999999,0.072125],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var SP5= {
  x: xRange,
  y: [0.1,0.0963277,0.08865719999999999,0.08865719999999999,0.08255620000000001,0.0808185,0.0900518,0.08015560000000001,0.0750693,0.06419,0.06419,0.0712731,0.064134,0.07272,0.07346,0.08425,0.07344,0.07344,0.06187,0.07101,0.06124,0.05277,0.04484,0.05412,0.05412,0.0531,0.04419,0.03882,0.03164,0.02619,0.02079,0.02079,0.01541,0.02076,0.0263,0.02641,0.02825],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var SP6= {
  x: xRange,
  y: [0.1,0.0934713,0.10167,0.10167,0.100735,0.10071,0.09998399999999999,0.0945604,0.10243100000000001,0.0970362,0.0970362,0.08851930000000001,0.09551879999999999,0.0816853,0.071369,0.0637037,0.0536187,0.0536187,0.0476625,0.0550098,0.0490638,0.055169499999999996,0.06324020000000001,0.0679982,0.0679982,0.0583737,0.06791130000000001,0.0792313,0.0880522,0.098925,0.109007,0.109007,0.0962885,0.112166,0.11314,0.11431,0.114571],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var SP7= {
  x: xRange,
  y: [0.1,0.106255,0.101476,0.101476,0.10038200000000001,0.10117799999999999,0.102434,0.109547,0.117955,0.113054,0.113054,0.11050299999999999,0.106419,0.11492,0.11476,0.10746,0.11495,0.11495,0.12285,0.12763,0.12157,0.11505,0.10789,0.11222700000000001,0.11222700000000001,0.108266,0.0932968,0.0851095,0.073976,0.0653653,0.0553537,0.0553537,0.0670522,0.0587317,0.050451800000000005,0.051924700000000004,0.050966000000000004],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var SP8= {
  x: xRange,
  y: [0.1,0.09403270000000001,0.098979,0.098979,0.10556,0.0997692,0.108919,0.115183,0.120738,0.12402,0.12402,0.120256,0.13089,0.125794,0.13302799999999998,0.134722,0.132375,0.132375,0.127144,0.134195,0.138321,0.140292,0.142602,0.141572,0.141572,0.14124899999999999,0.14155299999999998,0.140512,0.142574,0.141646,0.135258,0.135258,0.13924799999999998,0.143739,0.144198,0.148322,0.153497],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var SP9= {
  x: xRange,
  y: [0.1,0.107444,0.10095299999999999,0.10095299999999999,0.0975853,0.10415799999999999,0.0972008,0.107114,0.110386,0.120794,0.120794,0.128275,0.135267,0.127086,0.125193,0.12996,0.134585,0.134585,0.136016,0.133781,0.134926,0.132328,0.126103,0.117348,0.117348,0.126363,0.11655299999999999,0.106754,0.115993,0.121477,0.128147,0.128147,0.121446,0.115298,0.118372,0.11716399999999999,0.11963299999999999],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var SP10= {
  x: xRange,
  y: [0.1,0.109276,0.10124799999999999,0.10124799999999999,0.108026,0.108145,0.107991,0.11262299999999999,0.11937,0.125647,0.125647,0.12895299999999998,0.133268,0.127464,0.131325,0.132093,0.127189,0.127189,0.126089,0.11993,0.127159,0.130632,0.136155,0.138255,0.138255,0.136979,0.13572,0.134549,0.138315,0.13958399999999999,0.136182,0.136182,0.133609,0.13804,0.14305,0.14219,0.140215],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataSP = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]

var WINS1= {
  x: xRange,
  y: [72.0,72.5943,72.0567,72.0567,72.6039,72.0263,72.4386,73.1751,72.7457,73.456,73.456,73.8306,73.8631,72.8179,71.9442,71.3597,72.1037,72.1037,72.6524,72.1426,72.811,73.5134,74.199,74.2186,74.2186,74.1963,73.5925,73.0646,72.495,71.8176,72.4652,72.4652,72.9836,72.1818,71.3445,71.3445,71.3421],
  mode: "lines",
  name: "두산",
  line: {color:"#000080", width: 4}
};
var WINS2= {
  x: xRange,
  y: [72.0,71.5899,72.1276,72.1276,71.7454,71.6684,71.6983,71.1049,70.5338,71.1118,71.1118,71.5823,70.9422,71.4994,70.8983,71.3969,70.7916,70.7916,71.2354,70.4346,70.8455,71.4446,72.1873,72.8021,72.8021,72.7765,73.3422,73.8522,74.4269,74.4188,74.9684,74.9684,75.6506,74.921,74.927,74.92,74.9144],
  mode: "lines",
  name: "롯데",
  line: {color:"#87ceeb", width: 4}
};
var WINS3= {
  x: xRange,
  y: [72.0,71.3643,71.8408,71.8408,72.283,72.3376,71.6533,70.997,70.4548,69.8589,69.8589,69.3198,68.632,69.2713,69.9093,69.2704,69.8304,69.8304,70.4097,71.0028,70.3774,69.7897,69.1259,68.5367,68.5367,68.5131,69.0892,69.6244,70.2489,70.8316,71.3871,71.3871,70.6977,70.0187,70.9487,70.9367,70.9299],
  mode: "lines",
  name: "삼성",
  line: {color:"#074ca1", width: 4}
};
var WINS4= {
  x: xRange,
  y: [72.0,72.4147,72.8869,72.8869,72.1905,72.678,72.0709,71.445,70.8552,70.1553,70.1553,69.6701,69.6816,70.4999,71.1419,71.7153,72.1631,72.1631,71.4903,70.8239,71.4858,70.968,70.4681,69.9261,69.9261,70.4425,71.4509,72.0216,71.4175,71.4269,70.8804,70.8804,71.5918,72.2313,71.2023,70.5902,70.024],
  mode: "lines",
  name: "키움",
  line: {color:"#820024", width: 4}
};
var WINS5= {
  x: xRange,
  y: [72.0,71.5852,71.1126,71.1126,70.5203,70.5765,71.1864,70.4324,69.8611,69.2154,69.2154,69.7555,69.1816,69.8115,69.9425,70.693,69.838,69.838,69.1596,69.7174,69.0045,68.4516,67.8477,68.4288,68.4288,68.3792,67.6434,67.0394,66.431,65.835,65.1626,65.1626,64.5196,65.2512,66.0763,66.078,66.0765],
  mode: "lines",
  name: "한화",
  line: {color:"#ff6600", width: 4}
};
var WINS6= {
  x: xRange,
  y: [72.0,71.4449,72.0111,72.0111,72.0799,72.0444,72.0563,71.5033,72.0267,71.5584,71.5584,70.8669,71.3447,70.4432,69.6633,69.0272,68.3776,68.3776,67.7915,68.4703,67.9193,68.4354,69.0686,69.5916,69.5916,68.7816,69.6074,70.3262,70.976,71.7207,72.5171,72.5171,71.8323,72.6234,72.645,72.6371,72.6314],
  mode: "lines",
  name: "KIA",
  line: {color:"#ea0029", width: 4}
};
var WINS7= {
  x: xRange,
  y: [72.0,72.4189,71.8868,71.8868,71.8524,71.8709,71.8873,72.5708,73.1724,72.7324,72.7324,72.3784,71.9241,72.7249,72.6708,72.024,72.7921,72.7921,73.3794,73.938,73.3051,72.6934,72.1309,72.2231,72.2231,71.7654,70.8262,70.2643,69.6264,68.9935,68.3622,68.3622,69.2149,68.642,67.9397,67.9478,67.9501],
  mode: "lines",
  name: "KT",
  line: {color:"#000000", width: 4}
};
var WINS8= {
  x: xRange,
  y: [72.0,71.3969,71.9283,71.9283,72.4143,71.9515,72.6458,73.2476,73.6861,73.9888,73.9888,73.5775,74.1269,73.9581,74.7053,75.2179,74.6342,74.6342,74.1532,74.6989,75.4088,75.9899,76.6187,76.0755,76.0755,76.6257,76.0145,76.5802,75.9972,75.3449,74.6404,74.6404,75.2982,75.9162,75.9256,75.9221,75.9183],
  mode: "lines",
  name: "LG",
  line: {color:"#c30452", width: 4}
};
var WINS9= {
  x: xRange,
  y: [72.0,72.5129,72.0371,72.0371,71.5868,72.1815,71.7161,72.3047,72.8753,73.5019,73.5019,74.1441,74.8545,74.1438,73.6507,74.2607,75.1392,75.1392,75.8317,75.3299,74.7731,74.1719,73.4051,72.7465,72.7465,73.5088,72.761,72.0863,72.6548,73.1927,73.8239,73.8239,73.2507,72.7109,72.7076,72.7055,72.7022],
  mode: "lines",
  name: "NC",
  line: {color:"#315288", width: 4}
};
var WINS10= {
  x: xRange,
  y: [72.0,72.5552,71.9893,71.9893,72.6008,72.5419,72.5243,73.0965,73.6663,74.2984,74.2984,74.7523,75.3268,74.7079,75.3518,74.9132,74.2087,74.2087,73.7757,73.3203,73.9485,74.4208,74.8271,75.3296,75.3296,74.8897,75.5507,75.0184,75.6037,76.2956,75.67,75.67,74.838,75.3809,76.1609,76.7956,77.3887],
  mode: "lines",
  name: "SSG",
  line: {color:"#ff0000", width: 4}
};
var dataWINS = [WINS1, WINS2, WINS3, WINS4, WINS5, WINS6, WINS7, WINS8, WINS9, WINS10]