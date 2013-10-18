require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
        bootstrapModal: '../bower_components/sass-bootstrap/js/modal',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition'
    },
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});

var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0ArkNjiUO2_erdDljb2VCZkYtdWx4VXRLV2d1NUg3UFE&output=html';

      function init() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true } );
      }


    window.onload = function() { init() };


    function showInfo(data) {     
    
            var R = Raphael("paper", 300, 300);
            var attr = {
                fill: "#333",
                stroke: "#666",
                "stroke-width": 1,
                "stroke-linejoin": "round"
            };
            var msk = {};
            /* Центральный Округ */
            msk.cao = R.path("m 99.523599,164.57063 1.522101,-1.12981 0.27366,0.70444 1.62401,-1.10501 1.65965,-2.87038 2.00476,-1.26489 6.54046,-0.9923 1.40875,-1.1921 0.34072,-0.65029 0.79711,-4.6594 2.4924,-0.32542 0.6502,2.87179 0.54182,-0.10847 1.73384,1.08363 0.27091,-0.2164 0.37928,-0.10847 0.48765,-1.13787 -0.16255,-2.76332 4.17205,0.54182 0.0542,-2.38421 2.32985,1.51752 0.54183,1.46274 0.9275,0.34454 8.44608,2.90636 3.95533,0.16271 1.05681,1.29331 0.56867,1.25306 -3.68442,3.35937 -1.08365,-0.97516 -0.48764,0.43334 -1.02947,1.89664 -0.10837,0.59605 -0.16254,0.70397 -0.65019,0.65029 -2.27567,-0.10847 -0.21673,0.813 0.54182,1.8424 -0.54182,0.64973 2.27567,0.813 3.25095,2.32998 0.81274,1.51697 0.16254,1.08364 -1.30038,2.92602 -2.32985,-2.11358 0.16255,1.30058 -0.48764,0 -0.0542,0.86724 -0.54183,-0.16271 -0.16255,0.59605 -0.3251,-0.27118 -1.73383,0.97516 -1.30039,-2.60061 -0.86692,0.43334 0.81274,1.78816 -1.30038,0.21695 -0.92111,-0.92147 -0.37927,0.37965 -1.30039,-0.59605 -0.32509,0.54182 -0.21673,2.27574 -0.54183,0.10847 -1.02947,-0.65029 -0.21673,0.81245 -0.59601,-0.32487 -3.95532,1.13787 -0.21673,-0.43334 -0.97529,-0.16272 -0.21673,0.81245 -2.1673,-0.92092 -0.37928,0.48758 -0.37927,-0.10847 -2.00476,2.98026 0.0542,0.43334 -0.59601,0.43335 -0.86692,-0.27064 -0.80542,-0.97234 c -5.07173,3.44384 -12.18993,1.2391 -7.05105,-5.63792 0.7142,-0.95579 2.9069,-2.12355 3.52186,-2.38422 0,0 1.65819,-0.68475 2.81067,-4.47532 0.74553,-2.45211 -2.49534,-3.5749 -3.62341,-3.05586 -0.97711,0.44958 -4.17205,3.19666 -4.17205,3.19666 0,0 -2.75306,0.92711 -3.79571,-1.20535 -0.73057,-1.21376 -1.03762,-3.66983 -1.647381,-4.27361 z").attr(attr);
            msk.cao.color = data[0].domination;
            /* Северный Округ*/
            msk.sao = R.path("m 104.19627,105.15203 -2.14868,0.61803 -1.07349,0.6519 -5.894005,4.72065 -1.33423,1.07351 -1.23773,0.6519 -0.0152,-0.0404 -0.066,0.0354 -0.14223,-0.3962 -0.292925,0.25397 -0.13375,0.11517 -0.0288,0.33185 -1.693198,0.72468 0.005,0.0304 -3.493087,0.93637 0.0017,0 -0.0999,-0.005 -1.774478,0.16083 -0.186254,0.0288 -0.03725,-0.008 -0.04405,0.005 -1.554354,-0.37081 -0.34881,1.08536 -0.626418,0.50103 0.494944,1.15764 2.264891,1.96096 1.052102,0.55515 0.08415,1.79662 1.684029,5.04757 0.0029,0.0104 0.886238,2.26895 1.09639,2.49738 0.03758,-2.4e-4 1.803284,4.00797 -0.03064,0.76947 -0.833268,0.28489 0.625674,0.83606 2.265832,-0.14146 0.680791,-0.0973 0.55477,1.14119 -0.765378,0.76505 -0.820162,1.69479 0.126537,2.20365 1.793255,3.7347 1.865885,4.04674 0.06298,0.62017 0.05697,0.0297 0.724982,5.41969 1.821976,4.27526 0.807865,1.43077 0.72573,0.86545 0.27169,0.70552 c 0.54573,-0.39025 1.10272,-0.79534 1.61364,-1.15935 l 1.65595,-2.82254 2.03354,-1.2801 1.31056,-0.17766 0.0813,-0.0111 0,-0.0166 0.0136,0 5.16934,-0.81466 1.31733,-1.15115 0.38097,-0.70785 0.80045,-4.58802 -0.41422,-0.0326 -0.44038,-1.19492 -0.10836,-2.60282 -0.6976,-2.68694 1.57129,-0.47209 -1.36303,-1.18712 -0.47918,-2.59397 -0.73484,-1.60165 -0.083,-4.02184 0.68237,-2.23478 0.29292,-0.53351 -0.81274,-2.84634 -0.32847,-1.36976 -0.21505,-1.73392 0.0779,-2.93765 -1.41551,-6.60318 -0.16255,-2.27908 -0.26076,-2.86495 -0.22689,-0.5198 -0.3251,-0.4572 -1.23773,-0.97527 -0.41313,-0.28785 -0.95497,-0.65699 -1.26992,-0.71621 -1.56282,-1.20385 z").attr(attr);
            msk.sao.color = data[1].domination;
            /* Северный-Западный Округ */
            msk.svao = R.path("m 107.27282,84.809813 -2.28751,1.466335 1.07688,3.283107 -5.31498,1.249608 3.45414,14.343167 0.60686,1.65923 1.55789,1.18912 1.28345,0.72966 0.99668,0.69247 1.61018,1.22986 0.30977,0.44906 0.24005,0.53518 0.0629,0.7699 0.22099,2.37294 0.12889,1.98648 1.42129,6.61109 -0.0704,2.94208 0.20875,1.72119 0.38053,1.56457 0.77026,2.66924 -0.30627,0.52521 -0.67952,2.21154 0.0918,4.04563 0.73301,1.59833 0.47116,2.59397 1.35905,1.18823 -1.56006,0.48315 0.69732,2.67256 0.11097,2.61666 0.43621,1.17406 0.41272,0.0248 2.48941,-0.32646 0.65535,2.87298 0.53557,-0.10954 1.74077,1.08852 0.25877,-0.21263 0.39129,-0.11403 0.48135,-1.14447 -0.15755,-2.75401 4.16878,0.53919 0.0557,-2.37945 2.32839,1.51288 0.54535,1.46106 0.92639,0.34783 0.007,-3.97217 4.05544,-8.89511 0.30625,-1.06465 0.1833,-3.03519 -0.29314,-2.6536 0.48407,0.23355 0.60426,-0.14555 0.53315,-0.26455 0.28829,-1.0139 2.92776,-2.92122 -0.71453,-0.53342 0.75179,-1.05319 -1.19075,-0.64634 0.48277,-0.64033 1.02904,0.35182 0.40659,0.82794 -0.21209,0.21214 0.65761,0.80398 -0.30139,0.14398 -0.0696,0.63211 0.25102,0.52632 0.7649,-0.36268 0.79073,0.45872 1.87459,0.10035 0.59453,0.15542 1.11011,-1.22996 0.30139,-0.52031 0.17483,-0.9463 -0.40659,-3.06518 -4.44615,0.0452 1.88115,-1.66245 -0.10688,-0.30107 2.97158,-3.00907 -0.34351,-0.14399 0.11175,-0.39546 0.94798,0.6529 1.6477,-0.70794 -0.15069,-0.76001 0.75665,-0.61314 -0.0997,-0.20444 0.0169,-0.0133 -1.20387,-1.0159 0,-1.28011 -1.31562,0.0387 -0.81443,-0.77715 0.005,-0.007 -1.68813,-1.4985 -1.40366,-0.95159 -1.33256,-0.64344 -0.80935,-0.18966 -0.21334,-0.40468 -0.88047,-0.71283 -0.38097,0.80769 -1.11752,-0.0459 0,0 -1.49848,-0.0476 -0.97529,-0.9279 -0.40468,-0.0238 -0.66711,0.85678 -3.54389,-0.47579 -3.09348,-0.59434 -4.37694,-1.42739 -2.35525,-0.99902 -4.28212,-1.9997 -0.45208,-0.71284 -0.21165,0.42499 -2.76331,-0.5147 -4.09925,0.76874 0.97528,-4.615714 0.34203,-4.915417 1.37489,-0.04926 -0.2252,-1.583111 0.77549,-0.150701 0.0102,-1.882853 -1.35796,0.05092 -0.15746,-3.782641 3.99596,0.524881 c 0,0 0.008,-0.917434 -0.0745,-1.296982 -0.0826,-0.379548 -0.4758,-1.232618 -0.4758,-1.232618 l -0.85168,0.335217 -0.78395,-0.731424 -3.78263,2.334901 z").attr(attr);
            msk.svao.color = data[2].domination;
            /* Западный Округ */
            msk.zao = R.path("m 66.87065,204.39209 -0.295658,-0.14776 0.03957,-2.72956 -0.197788,-0.31657 -1.503094,0.0791 -2.135984,2.68971 -0.711999,-0.435 0.98889,-0.94915 -0.276891,-0.3957 -0.791107,-0.39571 -0.435102,0.0387 0.197788,1.424 -1.02846,0 -0.23732,0.31656 1.1471,0.59329 -0.63289,1.06758 0.316462,0.43556 -0.553782,0.23687 -0.67246,-0.39516 0.197782,1.02829 -1.107524,0.35586 -1.147101,1.89885 -0.197782,2.33385 -0.23732,0.435 -0.435102,-0.0791 0,0.435 0.672422,0.15829 0.909781,1.77985 0.593313,0.0387 0.553782,0.67243 0.514216,0.15828 1.344883,-0.51469 0.553742,-0.59329 1.740453,0.55399 0.395532,0.71172 -0.158212,0.63314 0.514211,0.83071 0.87021,-0.435 0.711992,1.62157 0.435103,0.55399 0.07915,-0.19813 0.632851,0.39571 2.881803,-3.23706 0.04527,-0.006 0.197783,0.15829 -0.158212,1.62213 1.463518,0.19757 0.237364,-0.435 0.751525,0.0791 0,-0.79141 1.344889,-0.0387 0.870204,0.4743 0.316423,0 1.067997,-2.53143 0.237359,-0.0387 0.118641,-1.06813 0.316461,0 0.197788,-3.59956 -0.197788,-0.43501 -0.39557,0.19758 -0.395531,-1.18657 0.51421,-0.71172 0.395532,-0.27728 -0.07911,-0.79086 -0.593313,-0.0387 -0.23732,-0.79086 0.593319,0 -0.197788,-0.94915 1.819561,-0.19813 0,0.27727 0.672422,-0.0791 -0.11864,-0.27727 0.98885,0.0387 1.30886,0.57059 4.787042,7.60037 -0.170049,1.27512 6.757948,-5.52497 4.63278,-4.16573 4.411475,-5.25047 -2.89097,-2.31669 1.09152,-1.0698 2.82832,-2.79597 1.36006,-1.40297 5.22786,-6.83939 c -2.89921,0.38744 -4.63485,-0.70718 -4.87246,-2.7134 0.33217,-4.13426 3.37192,-6.09952 5.34298,-6.87031 0.54979,-0.38741 0.9652,-0.68423 1.31642,-1.25759 0.60001,-0.98014 1.01516,-2.06488 1.42628,-3.138 0.6927,-2.59827 -2.54536,-3.63001 -3.69397,-3.04238 -1.57359,0.93868 -2.8774,2.35574 -4.25754,3.18517 -0.60098,0.14832 -1.23514,0.11512 -1.85415,0.10681 -2.47202,-0.48696 -2.19138,-3.61551 -3.280595,-5.46907 -0.18828,-0.29941 -1.00609,-0.95579 -1.486355,-1.26129 -0.48027,-0.3055 -0.889495,-0.85506 -1.41043,-1.24136 -0.520945,-0.3863 -1.30498,-0.82739 -2.060255,-1.26848 -0.75527,-0.44109 -2.29985,-0.44552 -3.01078,-0.078 -0.710885,0.36693 -0.759925,0.90487 -0.759925,0.90487 l -0.14764,0.67686 0.048,3.45622 c 0.008,0.54735 -0.0573,1.10079 -0.19199,1.63209 -0.139569,0.54957 -0.309204,1.11131 -0.624,1.58394 -0.433392,0.64974 -0.964283,1.25188 -1.583957,1.72784 -0.50515,0.38796 -1.113235,0.64918 -1.727928,0.81576 -0.525922,0.14279 -1.095166,0.18983 -1.631974,0.0963 -0.500911,-0.0874 -0.986609,-0.31712 -1.391969,-0.62428 -0.730638,-0.55288 -1.513255,-1.12403 -1.967944,-1.91987 -0.148869,-0.26067 -0.05446,-0.61819 0.106808,-0.90321 l 4.5e-5,0 c 0.04101,-0.0725 0.08636,-0.14058 0.133162,-0.2009 0.30443,-0.39239 0.790039,-0.62262 1.247949,-0.81577 0.579239,-0.24462 1.245214,-0.23466 1.823966,-0.47983 0.490264,-0.20809 0.992398,-0.46434 1.343948,-0.86392 0.597846,-0.68073 1.060653,-1.48155 1.439985,-2.30396 0.218752,-0.4743 0.879425,-1.52805 0.769152,-1.73614 l -1.330687,-2.50929 c 0,0 -0.657778,-2.00566 -1.730502,-2.19272 -1.088923,-0.18928 -1.361696,0 -1.88386,0.14998 -2.524809,1.90144 -5.281492,0.62138 -7.341198,0.29941 l -1.050371,1.48156 -0.924098,0.24628 -0.83541,0.13946 -2.956827,0.21142 -0.809625,-0.4577 -2.269966,0.14168 -0.466515,-0.5396 -0.704489,-0.0836 -0.550355,-0.46046 -0.0643,0.7167 0.519231,0.38796 -0.05585,0.56838 0.560599,0.4184 0.06078,0.61875 -0.738962,0.53462 0.0476,0.8606 0.297534,0.63756 0.0425,6.24776 1.487598,5.61076 -0.212515,0.93476 0.552515,0.46765 1.785132,5.78067 -0.807544,0.89214 1.360063,0.59494 3.400253,4.93059 0.04433,-0.0221 2.250828,3.2924 0.892563,3.23042 -0.297534,0.0852 0.552558,0.63756 0.01743,0.0387 -2.174664,1.34099 0.03957,0.90985 -0.711999,0.39571 -0.197782,1.34485 0.830672,0.51415 0.514211,0.71172 0.75153,0.31656 0.355994,0.90986 -1.859094,0.90985 -1.977734,0.59329 -1.819561,-0.43501 -0.672422,-1.46384 -1.819561,0 -0.158212,2.13627 -0.118679,0.435 -1.523903,-0.0498 3.8e-5,0 z").attr(attr);
            msk.zao.color = data[3].domination;
            /* Юго-Западный Округ */
            msk.uzao = R.path("m 116.54877,244.92592 -0.4566,4.54373 -0.72774,3.14906 0.57609,0.0443 -0.55713,4.22937 -0.79093,-0.23023 -0.21346,2.24807 1.81443,1.67027 0.6419,1.59225 0.91395,0.68847 1.15297,1.61162 -0.35555,0.99785 1.63397,1.09359 -0.1354,0.80359 -0.13541,0.80415 -0.8676,0.65859 -0.0296,1.21701 -1.16501,0.68903 -0.75487,-0.49311 -0.0268,1.26737 -4.55201,-3.45788 1.29177,-7.29764 -1.97324,0.19868 -0.75059,-0.47318 -1.72647,1.89718 -1.18655,0.34811 -1.01194,-0.27893 -0.45721,0.66136 2.88368,0.92258 -0.33197,1.41459 -1.74523,-0.28668 -0.35326,0.75212 -1.16652,-0.13338 -0.37856,0.66911 -1.08909,-1.04046 -0.41764,1.04599 -1.20911,-0.33317 0.20795,-1.52693 1.11189,0.0498 -0.15458,-0.72943 0.82129,-0.37302 0.33596,-0.8213 0.25702,-0.61653 -0.86106,-1.20484 -0.7173,-0.79474 -1.21184,-0.74105 -1.70921,-0.41453 -0.16535,-1.17882 -0.78609,-0.73164 -2.770885,0.2175 -0.374305,-1.0781 -1.25855,0.53905 -0.724685,-1.03881 -0.97231,-0.10183 -1.23885,0.29222 -0.758775,1.14561 -0.566425,0.0863 -0.462275,-0.32708 0.17424,-1.6498 -0.55537,-0.48869 0.3469,-1.83575 2.849555,-1.2635 0.619455,0.39626 4.58501,-2.13184 0.619835,-1.26516 3.818665,-3.46453 1.65278,0.50031 1.50277,0.38575 1.03262,-0.0111 0.75888,-0.86115 0.56642,-0.89934 0.3046,-0.83182 -1.31983,-0.65306 0.31344,-1.63042 -1.0079,-0.41066 0.14932,-0.48536 -0.48528,-0.33594 -0.41067,0.22359 -1.41852,-0.63424 0.70925,-1.23195 -0.2613,-0.48537 -0.6346,0.0387 0.22397,-0.29885 -0.67193,-0.18651 0.44796,-0.89602 1.49318,0.41065 1.30657,-0.70951 -0.48528,-1.08252 -0.74663,-0.74659 0.58703,-1.26737 -3.34979,-1.25631 -0.98493,0.44884 -0.71432,-0.79751 -2.021265,-0.90431 -2.180755,-1.54244 -3.19139,-4.62785 -0.849635,-0.0498 -0.0806,-1.36976 -6.484722,-9.5861 c -0.04682,-0.006 -0.937369,0.0996 -0.994567,0.009 l 6.758809,-5.52057 4.63279,-4.16518 4.415235,-5.25102 -2.89478,-2.31337 3.91984,-3.86909 1.36011,-1.40241 5.22295,-6.83331 c 1.31515,-0.15108 2.65921,-0.6528 3.97435,-1.52889 l 0.92036,1.13595 1.41261,2.00788 2.31819,4.60958 0.98036,1.25244 -0.002,0.0111 -0.0193,-0.0221 0.73651,0.79639 -0.0489,1.8341 0.90484,0.44054 1.0516,-0.24462 0.2935,1.58947 -0.66031,1.00283 -0.0245,0.39128 -0.97824,1.10024 -0.41573,0.12231 -0.14674,0.66025 0.34236,0.70951 0.0734,0.85561 1.05159,0.97848 -0.0733,0.24462 -0.78262,-0.0221 0,0.26898 0.1361,0.0985 0.37391,0.15496 0.8115,0.35586 -1.81058,2.74007 0.0926,6.02473 -3.43188,-0.38796 -2.16434,-1.43285 -0.21647,0.75212 0.57361,0.29997 0.2088,0.54901 -0.26832,1.29283 -0.43943,0.81854 -0.47378,0.50805 -0.0235,0.6431 1.22253,0.38298 0.75137,0.0553 -0.31337,1.21812 -0.8895,2.25803 -1.07574,0.43334 -0.25785,0.9176 0.24948,0.32653 0.52608,-0.41231 -0.12623,0.88993 0.51319,0.20532 -0.44473,0.82075 0.0684,0.27395 -0.5635,0.38409 0.0145,1.81306 -1.15578,0.22415 0.48344,1.10909 0.51654,-0.21917 0.42086,0.92867 0.86336,0.006 -0.61298,2.33717 0.76878,0.21971 0.091,0.78367 -0.64774,-0.0221 -0.48761,3.00351 0.34825,0.74659 -0.82374,2.33053 3.87405,1.57622 1.29967,2.79304 -0.0434,0.76493 0.43383,0.0277 0.55919,-0.9481 0.54461,0.83028 0.42605,1.32382 -0.89334,0.64033 -1.86652,1.11961 -1.0221,1.24689 0,0 z").attr(attr);
            msk.uzao.color = data[4].domination;
            /* Южный Округ */
            msk.uao = R.path("m 128.58686,176.7788 -0.21246,2.27078 -0.54506,0.0953 -1.03081,-0.65145 -0.20032,0.81765 -0.6031,-0.32961 -3.97499,1.14689 -0.19183,-0.42051 -0.98718,-0.18169 -0.19245,0.81273 -2.17387,-0.91404 -0.38706,0.48415 -0.39023,-0.11923 -2.00174,2.98882 0.0459,0.43331 -0.59575,0.43697 -0.8485,-0.27299 1.52518,2.18905 2.33401,4.60471 1.69659,2.03942 -0.0556,1.83355 0.90417,0.44053 1.05148,-0.25062 0.28805,1.58346 -0.65378,1.0154 -0.032,0.39128 -0.959,1.10024 -0.44107,0.10919 -0.13418,0.65369 0.35513,0.71607 0.0483,0.86162 1.05804,0.97848 -0.0794,0.24572 -0.7774,-0.0308 0.004,0.28591 0.12961,0.0832 1.19034,0.5189 -1.8128,2.74952 0.0931,6.00428 -3.44525,-0.38962 -2.14381,-1.42821 -0.2193,0.74189 0.58985,0.33167 0.18163,0.55825 -0.26598,1.2707 -0.42231,0.80641 -0.48317,0.50806 -0.0313,0.65211 1.20477,0.37593 0.78788,0.0687 -0.31496,1.20608 -0.88237,2.25257 -1.09234,0.43091 -0.25502,0.93559 0.24806,0.31396 0.5264,-0.40273 -0.12933,0.89177 0.51706,0.211 -0.44428,0.80176 0.0681,0.28763 -0.57119,0.3745 0.0237,1.82682 -1.14629,0.21977 0.46606,1.09617 0.51853,-0.20214 0.41445,0.91165 0.86203,0.0131 -0.6195,2.33006 0.78437,0.23695 0.0892,0.7779 -0.65008,-0.0314 -0.47722,3.02284 0.33972,0.73348 -0.81911,2.33913 3.85507,1.54982 1.31562,2.82752 -0.0525,0.74825 0.43684,0.0277 0.57062,-0.95302 -0.008,-0.9176 0.3979,-0.24905 0.45886,-0.28613 9.46841,1.09692 0.79919,0.28613 0.22351,-0.22359 2.14021,0.16105 1.88453,0.0332 1.78972,-0.51137 1.40028,-0.69235 1.39182,0.30992 0.14731,-0.65361 0.11514,-0.51636 0.083,-0.0592 6.84394,-4.83926 0,0 0.59262,-0.44884 1.11921,0.47928 0.0948,-0.40788 0.25567,-1.09415 0.2743,-0.20643 4.64615,-3.49995 5.66547,-5.56371 1.08196,-0.0609 0.28107,-0.31823 0.18795,-0.21363 -0.28445,-0.74326 0.26074,-0.28115 -0.007,-0.0166 1.5476,-1.65091 0.15112,-0.15792 -1.01762,-1.04225 -0.7763,-2.94431 -0.24639,-1.6928 -0.0644,-1.15022 0.32002,-2.38822 c -0.0323,-0.82689 0.0212,-1.30669 -0.64248,-1.53486 l -0.63495,0.0779 c -1.74127,0.79014 -3.44822,1.67132 -4.89975,2.35844 l -2.88692,1.40186 -3.23571,-0.27727 -1.49002,0.0387 c 0,0 -0.11123,0.0277 -0.29462,0.0642 -0.18338,0.0387 -0.43862,0.0885 -0.72977,0.13559 -0.0251,0 -0.0556,0.006 -0.0813,0.0111 -1.8704,0.20647 -4.53973,-0.33245 -5.93586,-1.37325 l -5.05275,-4.0267 c 0,0 0.0663,-0.84547 0.17278,-1.91803 0.0532,-0.53573 0.13974,-1.22358 0.19545,-1.7189 0.0557,-0.49478 0.1086,-0.91705 0.15069,-1.16499 0.0564,-0.11788 0.0108,-0.10966 0.0834,-0.21592 0.0726,-0.10681 0.1514,-0.20588 0.23365,-0.29996 0.0823,-0.0941 0.16874,-0.18209 0.25399,-0.26233 0.0113,-0.0111 0.0226,-0.0166 0.0339,-0.0277 l 0.0576,-0.0797 0.88047,-0.64863 c 0.8888,-0.44441 1.76786,-0.88993 2.64479,-1.33932 0.87692,-0.44939 1.75207,-0.90211 2.63293,-1.36312 0.10791,-0.0565 0.21166,-0.11622 0.31155,-0.17931 0.0999,-0.0631 0.19615,-0.12896 0.28785,-0.19814 0.0917,-0.0692 0.17913,-0.14168 0.26245,-0.21639 0.0493,-0.0443 0.0942,-0.0913 0.14053,-0.13725 0.0702,-0.0764 0.13748,-0.15497 0.1998,-0.23577 0.68022,-0.74034 0.74169,-1.42313 0.80132,-2.08093 0.0198,-3.32153 -3.38493,-4.11765 -5.19298,-4.85897 -0.17468,-0.0498 -0.34977,-0.0815 -0.52659,-0.11912 l -0.68809,-0.13726 -1.89248,-0.22043 -0.80089,-0.76251 -1.13613,-0.30661 0.13633,-2.04218 -0.95077,-5.15984 -0.13252,-2.3659 -0.23147,-0.94659 -1.1102,0.19126 -0.91445,-0.92497 -0.38997,0.37288 -1.29441,-0.58745 z").attr(attr);
            msk.uao.color = data[5].domination;
            /* Юго-Всточный ОКруг */
            msk.vao = R.path("m 148.7699,116.77257 -0.75009,0.61974 0.1507,0.75357 -1.65426,0.71449 -0.94142,-0.64033 -0.11176,0.37634 0.33695,0.15054 -2.97158,3.00907 0.11345,0.30107 -1.88115,1.6559 4.43958,-0.0387 0.41315,3.08486 -0.18795,0.93974 -0.30139,0.52688 -1.09043,1.20372 -0.60108,-0.14887 -1.88115,-0.11346 -0.79073,-0.45215 -0.75179,0.37578 -0.26414,-0.52687 0.0762,-0.63812 0.30139,-0.15053 -0.67728,-0.79087 0.22519,-0.22525 -0.41314,-0.82794 -1.01592,-0.3387 -0.48934,0.64032 1.20387,0.63978 -0.75178,1.05319 0.71453,0.52688 -2.93433,2.93433 -0.30138,1.01389 -0.52659,0.26399 -0.5977,0.14611 0.007,0 -0.0102,0 -0.48087,-0.2341 0.29969,2.81755 -0.19641,2.87179 -0.29969,1.05154 -4.06201,8.91478 0,3.9525 1.82762,0.63225 6.63723,2.28451 3.9153,0.15612 1.07237,1.29169 2.36033,5.1741 -0.10328,0.7975 c -0.7295,1.88338 -1.47133,4.40017 0.80931,5.71149 l 2.82899,1.57472 0.45621,0.30523 2.32912,2.49281 3.00124,0.83348 3.51671,3.02704 13.26859,7.72659 0.008,-0.0277 3.97289,2.49114 2.35078,1.8065 -0.0187,0.0221 1.49849,1.336 1.7457,-2.09643 0.70437,-0.79418 -0.16932,-0.13393 1.05487,-1.30667 2.38911,-0.16105 2.30445,-0.28945 -0.14392,0.67741 0.53335,1.82136 1.64411,-0.0963 0.52828,1.03271 -0.0271,1.26516 1.98444,-0.50141 c 0,0 -0.17549,0.55731 -0.38775,1.14451 -0.10614,0.29387 -0.22077,0.59439 -0.32849,0.8368 -0.0538,0.12064 -0.10626,0.22801 -0.15408,0.31158 -0.0478,0.083 -0.0912,0.14334 -0.12868,0.17267 -0.075,0.0581 -0.18694,0.11899 -0.31493,0.176 -0.128,0.0565 -0.27242,0.10847 -0.40976,0.15219 -0.13734,0.0443 -0.2678,0.0791 -0.37081,0.0985 -0.10301,0.0166 -0.1782,0.0221 -0.20319,0.006 -0.0125,-0.0111 -0.0257,0 -0.039,0.0221 -0.0132,0.0221 -0.0256,0.0576 -0.039,0.10128 -0.0266,0.0874 -0.0532,0.2103 -0.0762,0.33538 -0.0459,0.25015 -0.0796,0.50806 -0.0796,0.50806 l -0.90079,1.19874 -0.066,0.79917 1.33255,0.43334 0.2997,1.89995 6.96414,0.1998 0.53336,0.33372 3.09858,0.39958 -0.26584,-0.59937 -0.56723,-0.19979 0.1016,-1.00117 0.53167,-0.83293 -0.53167,-1.13289 0.2997,-1.73171 -1.33425,-1.30058 -3.06471,-1.63208 1.30038,-0.54016 1.1971,-0.27451 c 0.47019,-0.0111 0.84356,-0.0332 1.13784,-0.0659 0.14713,-0.0166 0.27462,-0.0332 0.38435,-0.0559 0.10973,-0.0221 0.20097,-0.0443 0.27769,-0.0681 0.0767,-0.0221 0.13818,-0.0498 0.18626,-0.0775 0.048,-0.0277 0.0829,-0.0565 0.10667,-0.0863 0.0238,-0.0277 0.0367,-0.0614 0.0406,-0.0935 0.004,-0.0332 0,-0.0636 -0.0118,-0.0963 -0.0231,-0.0653 -0.0732,-0.13283 -0.13206,-0.19813 -0.0588,-0.0653 -0.12676,-0.12951 -0.18626,-0.18983 -0.0595,-0.0598 -0.11037,-0.11456 -0.13545,-0.16382 -0.0126,-0.0277 -0.0179,-0.0498 -0.0152,-0.0697 0.003,-0.0221 0.0133,-0.0387 0.0356,-0.0559 l -0.16086,-0.5706 -0.66374,-0.55177 -1.42229,-0.22691 -0.85676,-1.47824 1.03963,0.14556 1.744,0.25569 1.744,-0.0166 -0.50118,-0.66025 -0.71793,-0.98512 1.17847,-0.71449 -0.77209,-0.33538 -1.15139,-0.33539 -0.59431,-1.05651 -2.25703,0.10017 -0.10838,-1.16332 -0.64681,-0.85507 -0.002,0 -0.57571,-1.28342 -0.76872,-0.95025 -0.99389,-0.18098 0.31663,-0.17931 -0.7247,-0.4981 -0.58754,0.72335 -0.40636,0.0913 0.008,-0.0498 -0.20149,0.0443 0.1236,-0.74327 0.14054,0.32376 0.11006,-0.65859 -0.45548,-0.13725 0.0254,0.0592 -0.97359,-0.29277 -0.17948,0.14389 -0.76872,0 -0.22689,1.13068 0.5232,0.26288 0.46056,-0.26952 0.0813,0.0714 0.11175,-0.0648 0.36066,0.31656 0.0457,0.40678 -1.58314,0.31657 -0.0271,-0.0387 -0.16425,0.0332 -0.3979,-0.59439 -1.21911,0.69069 -0.14731,-0.0332 -0.0457,0.0277 -0.93634,-0.19647 -0.99561,0.56395 -1.76431,0.54348 -0.0203,-0.0592 -0.1727,0.0498 -0.13038,-0.39073 -0.71622,0.0332 -0.13546,0.90431 0.17948,0.31657 -1.31054,0.40623 -0.0982,-0.0332 -0.0948,0.0332 -0.63326,-0.22691 -0.17947,-0.85839 0.0864,-0.30162 -1.70336,0.0814 -0.0305,-0.0166 -0.16255,0.0111 -2.03523,-0.95025 -0.36066,-0.5872 0.40637,-1.4478 0.45209,-1.49151 0.86014,-1.35648 1.58147,-0.63313 1.71859,-1.71898 0.1744,0.0277 0.0187,-0.0166 1.92856,0.28778 -0.62818,-2.6006 0.58755,-0.3625 -0.4504,-0.74991 -0.39621,0.57557 -4.70372,1.71843 -3.86389,0.53185 -0.0491,-0.0277 -0.14393,0.0221 -0.723,-0.39294 -0.4453,-1.46994 0.16592,-10.35704 0.66374,-1.20096 -0.91602,-0.44165 -0.15578,-1.91655 -0.44869,-8.22244 -0.2235,-3.08154 0.75516,-1.09525 0.0542,-0.0166 -0.82289,-0.47429 -0.39113,-1.83023 -0.30478,-1.22088 -0.6976,-1.35094 -0.65358,-0.73995 -0.0863,-0.69069 -0.50796,0 -0.007,-0.006 -0.18456,0 -20.77225,-18.92305 z").attr(attr);
            msk.vao.color = data[6].domination;
            /* Восточный Округ */
            msk.uvao = R.path("m 140.45145,161.15404 -1.0676,-0.96847 -0.49354,0.43115 -1.04624,1.91851 -0.24722,1.27662 -0.65506,0.66109 -2.27136,-0.10202 -0.22977,0.79324 0.54932,1.85707 -0.54352,0.65222 2.2592,0.79748 3.25945,2.33445 0.81768,1.51923 0.15827,1.05581 -1.30662,2.94592 -2.31976,-2.10815 0.15653,1.29429 -0.49004,0.0138 -0.0617,0.85981 -0.50869,-0.14779 -0.16672,0.57556 -0.34403,-0.26092 -1.72391,0.97831 -1.30535,-2.60371 -0.85687,0.44428 0.78657,1.77446 -0.17245,0.034 0.23562,0.94288 0.13252,2.3659 0.96004,5.16912 -0.14561,2.04218 1.13615,0.30661 0.80088,0.75323 1.9184,0.21861 0.039,0.006 0.64173,0.13725 c 0.17681,0.0387 0.3519,0.0808 0.52658,0.12896 0.1747,0.0498 0.34922,0.10183 0.52151,0.15883 0.34462,0.11512 0.68424,0.24684 1.01762,0.3946 0.33337,0.14777 0.66047,0.31159 0.98036,0.48592 0.31991,0.17489 0.63213,0.35974 0.93635,0.55565 0.16085,0.10294 0.31636,0.22249 0.46224,0.35199 0.14586,0.12951 0.28285,0.27063 0.40806,0.42172 0.12522,0.15109 0.23808,0.31159 0.33695,0.47928 0.0988,0.16714 0.18377,0.34036 0.2506,0.51968 0.0432,0.11567 0.0811,0.23189 0.11344,0.347 0.0323,0.11512 0.0579,0.23023 0.0796,0.34369 0.0216,0.11345 0.038,0.22691 0.0491,0.3387 0.0112,0.1118 0.0178,0.22193 0.0187,0.33207 0.001,0.10958 -0.004,0.21916 -0.0136,0.32652 -0.009,0.10737 -0.0231,0.21363 -0.0423,0.31823 -0.0192,0.10515 -0.0422,0.20865 -0.0711,0.30993 -0.0289,0.10183 -0.0631,0.202 -0.10159,0.29996 -0.0385,0.098 -0.0826,0.1937 -0.13038,0.28779 -0.0478,0.0941 -0.10049,0.18595 -0.15747,0.27561 -0.057,0.0902 -0.11692,0.17765 -0.18286,0.26288 -0.066,0.0852 -0.13695,0.16825 -0.21165,0.2485 -0.0747,0.0803 -0.15376,0.15883 -0.23705,0.2341 -0.0833,0.0747 -0.17075,0.14556 -0.26245,0.21474 -0.0917,0.0692 -0.18795,0.13503 -0.28784,0.19813 -0.0999,0.0631 -0.20365,0.12286 -0.31156,0.17931 -0.88085,0.46102 -1.76029,0.91982 -2.6414,1.37363 -0.88109,0.45327 -1.76446,0.90156 -2.65325,1.34597 0,0 -0.0662,0.0387 -0.1744,0.10681 -0.10818,0.0692 -0.25858,0.17212 -0.4216,0.30439 -0.0815,0.0664 -0.16537,0.14002 -0.2506,0.22027 -0.0852,0.0802 -0.17169,0.1688 -0.25399,0.26233 -0.0823,0.0941 -0.161,0.1937 -0.23365,0.29996 -0.0727,0.10626 -0.13834,0.21861 -0.19472,0.33705 -0.0421,0.24738 -0.095,0.66966 -0.15069,1.16443 -0.0557,0.49533 -0.1144,1.0626 -0.16763,1.59888 -0.10646,1.07201 -0.19133,2.0195 -0.19133,2.0195 l -0.005,0.0277 5.09484,4.02682 c 1.77081,0.90862 2.38689,1.21807 3.74272,1.29367 1.17385,0.13994 2.2096,0.1751 3.26166,-0.16157 l 1.51783,-0.0202 3.21718,0.27782 7.78666,-3.7673 c 0.11927,-0.0277 0.27774,-0.0498 0.40637,-0.0576 0.12865,-0.0111 0.22858,-0.0111 0.22858,-0.0111 0,0 0.0864,0.0332 0.18626,0.088 0.0499,0.0277 0.10399,0.0565 0.1507,0.0897 0.0466,0.0332 0.0871,0.0686 0.11174,0.10515 0.0247,0.0387 0.0433,0.0919 0.0593,0.15718 0.016,0.0653 0.0283,0.13946 0.0372,0.20809 0.0179,0.13836 0.0237,0.25735 0.0237,0.25735 l 0.0643,0.63867 -0.32002,2.39749 0.0644,1.08529 0.25567,1.75772 0.76703,2.90722 1.01761,1.05153 5.17952,-5.85704 0.0101,0 0.18117,-0.20477 0.41653,-0.22525 0.43854,-0.13725 0.10329,-0.16216 -0.0643,-0.51138 2.65156,-3.1629 1.33086,-2.34879 0.25736,-0.12674 0.0762,-0.15441 0.31832,-0.20643 0.12023,-0.25569 -0.35558,-0.38962 0.0186,-2.11469 -1.43414,-5.38606 -0.81274,-4.01132 0.1473,0.11678 -0.10497,-0.41287 5.74843,4.44466 0.1473,-0.18983 0.23537,-0.34202 1.14969,-4.48506 -1.10398,-1.077 0.97698,-0.96021 -1.96073,-1.97744 0.23705,-0.23521 -0.022,-0.0221 0.67898,-0.67906 -0.92111,-0.79253 -3.97056,-2.48881 -0.0101,0.0277 -13.26627,-7.73817 -2.33832,-2.02835 -1.15984,-0.98014 -3.01052,-0.83348 -2.35694,-2.5021 -0.42838,-0.28668 -2.8661,-1.59327 c -2.0693,-1.09568 -1.64779,-3.95377 -0.76463,-5.74242 l 0.0843,-0.8259 -1.78403,-3.85729 z").attr(attr);
            msk.uvao.color = data[7].domination;
            /* Северо-восточный Округ*/
            msk.szao = R.path("m 60.572605,85.454901 -1.087036,1.12431 0.103288,0.282752 -0.05757,0.133766 0.03215,0.08977 -0.165937,0.387739 1.744,2.766694 2.213023,2.094487 -0.116831,0.135482 0.09143,0.088 -0.738237,0.853401 -1.589923,-1.009139 -1.398589,1.281763 -1.376572,0.736516 1.129368,0.282752 1.087036,1.630595 0.660351,1.163217 0.03896,0.892308 0.970211,0.350493 0.370809,-0.404674 -0.162545,-0.809349 0.06096,-0.0476 -0.03559,-0.174389 1.628863,-1.281763 4.619063,3.609912 -0.204878,0.07959 0.181174,0.142233 -1.398588,0.543533 -1.048091,1.47476 -0.414841,0.23876 0.866923,1.2479 0.355573,1.2733 -0.821203,0.62816 0.814429,1.24115 -0.193023,0.23367 -1.747387,0.77548 1.281757,1.16494 -0.350492,1.04811 0.272601,0.54354 1.644105,-0.38271 0.0254,-0.006 0.697603,1.08708 -1.125986,0.69761 0.194716,0.31154 -0.194716,0.73657 0.467328,0.50458 -0.816127,1.28177 0.543515,1.00915 0.699302,-0.0387 0.970205,0.93128 0.46563,0.81439 2.522876,1.5135 0.697598,0.19481 2.191013,1.7035 -1.796494,2.81924 -0.924486,2.83249 -0.01865,-0.0111 -0.005,0.0166 -0.563838,-0.29499 -0.590923,0.29665 -0.005,0 -0.02031,0.0111 -0.687442,-0.68737 -0.421615,0.50805 -0.0254,0 -0.723001,0.1284 -0.474091,0.25901 -0.0068,0 -0.01694,0.0111 -0.565525,-0.43556 -0.282768,0.0814 0,0 -0.02369,0.006 -0.04405,-0.523 0.697598,-1.3526 0.348804,-0.26122 -0.348804,-0.78533 0.392825,-0.6979 -0.436846,-0.69899 0.348799,-1.00229 -0.646803,-0.13061 -0.941421,0.34203 -0.0033,0 -0.02203,0.005 -1.134449,-0.26233 -1.332552,0.12895 -2.482238,1.74058 -1.69998,1.17827 -0.392825,0.523 -0.348799,1.39744 0.130379,1.65754 -0.697603,1.13455 -1.00407,0.69733 0.130379,0.39295 3.621767,0.87166 -0.523204,1.30888 -0.02369,0 -0.0017,0 -1.415518,0.0443 0.08805,0.64863 0.916023,0.8296 -0.567224,0.60934 1.264822,1.70182 -0.348799,1.09027 0.91433,3.09372 1.373191,-0.68737 -0.609551,-1.26516 0.02706,0 -0.0033,-0.006 0.829671,0 0.130379,0.91594 0.765322,0.50972 0.169324,-0.6348 0.916024,-1.61382 2.487323,-1.26461 0.01184,0 0.01184,0 2.531344,0.13006 1.170008,0.38962 -0.745011,5.13867 -0.350493,2.50099 -0.408061,-0.12009 -0.284462,-0.0681 -0.132072,0.97904 0.06435,0.0847 0.479172,0.55178 -1.374884,2.584 -0.309854,0.62318 -1.618702,2.88673 -0.02031,0 -0.0033,0.006 -0.817815,-0.0675 -0.172706,-0.0111 0.08127,0.17101 0.441926,0.92811 -0.844906,0.0731 -0.816128,-0.54016 -0.365729,0.47707 -0.900787,-1.74555 -0.198103,0.0559 -0.816128,-0.78754 -0.309854,-0.90211 -1.295306,0.61985 0.394519,0.6193 0.33695,1.52251 -0.479178,2.16726 -3.660713,4.1126 -0.309859,0.81633 -0.704372,0.64863 -2.61939,0.61929 -0.167625,0.61985 0.477484,0.70287 3.99935,-0.19647 -0.281069,-2.42129 1.18355,0.59107 0,0.36527 -0.452087,0.19813 0.169324,0.36582 2.113116,0.25237 0.02706,-0.33704 0.619713,-0.28115 0.169325,-0.98678 -1.210647,-0.0847 0.760253,-0.95689 0.309853,0.16935 -0.140534,0.25237 0.894013,-0.61487 -0.06604,-0.90045 1.860837,-2.41631 2.157142,-1.50037 0.294617,0.24241 -0.257371,0.76706 -0.03215,0.0946 -0.242129,4.6832 0.277712,0.0436 0.454657,0.51033 2.284921,-0.12342 0.809354,0.4588 2.956335,-0.21197 0.902481,-0.17267 0.845795,-0.22619 1.068383,-1.46844 c 0,0 0.251824,0.0554 0.610386,0.13338 0.358578,0.0797 0.850048,0.18374 1.379965,0.28281 0.264959,0.0498 0.540051,0.0974 0.812741,0.14057 0.27269,0.0443 0.543875,0.0825 0.800886,0.1118 0.257017,0.0277 0.499982,0.0498 0.717915,0.0575 0.217944,0.006 0.41007,0 0.565536,-0.0166 0.155461,-0.0221 0.310319,-0.0498 0.462243,-0.0913 0.151924,-0.0387 0.301475,-0.0858 0.445313,-0.13725 0.143828,-0.0498 0.281927,-0.10681 0.413147,-0.16382 0.131204,-0.0575 0.255069,-0.11677 0.369111,-0.17433 0.228105,-0.11567 0.418083,-0.22525 0.550294,-0.3066 0.132211,-0.0814 0.206571,-0.13394 0.206571,-0.13394 0.581488,-0.28889 1.533798,-0.31957 2.235033,-0.0464 0.08798,0.0498 0.17212,0.10848 0.252285,0.17821 0.08017,0.0692 0.15638,0.14943 0.230275,0.23687 0.07391,0.0875 0.145875,0.18153 0.215038,0.28447 0.06916,0.10239 0.135526,0.21252 0.201496,0.32819 0.131923,0.23189 0.259408,0.48647 0.387739,0.75544 0.128331,0.26897 0.257515,0.55123 0.394513,0.83791 0.137026,0.28723 0.262263,0.52853 0.374202,0.73496 0.111944,0.20699 0.210943,0.37966 0.294623,0.5302 0.08367,0.15053 0.152649,0.27782 0.204871,0.39626 0.05224,0.11788 0.08738,0.2258 0.104988,0.33483 0.0089,0.0553 0.0075,0.11622 -0.0017,0.18153 -0.0092,0.0648 -0.02568,0.13393 -0.04909,0.20643 -0.04677,0.145 -0.119387,0.30107 -0.199791,0.4588 -0.16084,0.31601 -0.35735,0.6359 -0.467329,0.87388 -0.09504,0.20533 -0.195192,0.4101 -0.301391,0.611 -0.106194,0.20145 -0.217955,0.39903 -0.33695,0.59273 -0.118989,0.19426 -0.245871,0.38353 -0.379277,0.56727 -0.133406,0.18374 -0.273847,0.3614 -0.423303,0.53186 -0.08789,0.0996 -0.185319,0.19038 -0.289537,0.27395 -0.104212,0.0836 -0.214739,0.1605 -0.330175,0.23023 -0.115431,0.0703 -0.235721,0.13559 -0.357261,0.19481 -0.121558,0.0598 -0.244864,0.11401 -0.367428,0.16603 -0.14468,0.0614 -0.294175,0.10681 -0.447007,0.1439 -0.152832,0.0387 -0.308364,0.0675 -0.463936,0.0963 -0.155577,0.0277 -0.311038,0.0581 -0.463942,0.0952 -0.152904,0.0387 -0.303887,0.0825 -0.4487,0.1439 -0.114479,0.0498 -0.230745,0.0991 -0.345417,0.15385 -0.114656,0.0554 -0.226921,0.11401 -0.335246,0.17987 -0.108341,0.0653 -0.212686,0.1367 -0.308171,0.2164 -0.09547,0.0797 -0.182939,0.16769 -0.259059,0.2662 -0.05766,0.0742 -0.113062,0.15994 -0.160856,0.25181 -0.04776,0.0919 -0.08803,0.19094 -0.115138,0.29001 -0.02712,0.0985 -0.04167,0.19702 -0.03725,0.29277 0.0022,0.0498 0.0099,0.0952 0.02203,0.14057 0.01212,0.0443 0.02911,0.0874 0.05252,0.1284 0.05682,0.0996 0.118231,0.19536 0.184555,0.28778 0.06632,0.093 0.137314,0.18264 0.211651,0.26953 0.148687,0.17378 0.3124,0.3387 0.484259,0.49422 0.171854,0.15607 0.351871,0.30328 0.535053,0.44718 0.183177,0.14389 0.369332,0.28336 0.551977,0.42172 0.101346,0.0764 0.207982,0.14887 0.318327,0.21473 0.11035,0.0664 0.224696,0.12619 0.34203,0.17987 0.117329,0.0553 0.236667,0.0996 0.358961,0.13836 0.122287,0.0387 0.24727,0.0697 0.372508,0.0919 0.134181,0.0221 0.270958,0.0387 0.408055,0.0443 0.137104,0.006 0.273836,0.006 0.411454,0 0.137607,-0.0111 0.275707,-0.0277 0.411448,-0.0498 0.135737,-0.0221 0.269818,-0.0498 0.401287,-0.088 0.153679,-0.0443 0.307596,-0.0897 0.458862,-0.1439 0.15126,-0.0553 0.299426,-0.11345 0.445307,-0.18097 0.145892,-0.0675 0.289133,-0.14168 0.42669,-0.22359 0.137568,-0.0819 0.269923,-0.17046 0.396212,-0.26731 0.154896,-0.11899 0.304934,-0.24573 0.4487,-0.37966 0.143761,-0.13338 0.280854,-0.27395 0.413142,-0.4195 0.132288,-0.14611 0.258793,-0.2972 0.379277,-0.45216 0.120489,-0.15552 0.235366,-0.31491 0.343724,-0.47762 0.07868,-0.11788 0.14769,-0.2413 0.209958,-0.36914 0.06226,-0.1273 0.118131,-0.25901 0.167625,-0.39295 0.09898,-0.26786 0.175728,-0.54624 0.245518,-0.8213 0.0673,-0.2651 0.11833,-0.53573 0.15069,-0.80913 0.0162,-0.13669 0.0266,-0.2745 0.0339,-0.4112 0.007,-0.13725 0.0104,-0.27451 0.008,-0.41176 l -0.0491,-3.45567 0.14731,-0.67741 c 0,0 0.0349,-0.12286 0.12191,-0.27948 0.0435,-0.078 0.09889,-0.16493 0.171005,-0.2485 0.0361,-0.0443 0.0761,-0.0847 0.12022,-0.12397 0.0441,-0.0387 0.093,-0.0747 0.14561,-0.10847 0.0527,-0.0332 0.11925,-0.0648 0.19641,-0.0946 0.0772,-0.0277 0.165395,-0.0587 0.260755,-0.0847 0.19072,-0.0498 0.411055,-0.0941 0.636645,-0.12674 0.22558,-0.0332 0.455505,-0.0553 0.665425,-0.0648 0.20991,-0.0111 0.399815,-0.006 0.543505,0.0111 0.0718,0.0111 0.14781,0.0277 0.2252,0.0498 0.0774,0.0221 0.156565,0.0443 0.235345,0.0742 0.15759,0.0581 0.31383,0.12895 0.452085,0.19647 0.27653,0.13504 0.48087,0.26067 0.48087,0.26067 0,0 0.485235,0.29885 1.03285,0.66744 0.273805,0.18374 0.563675,0.38575 0.816115,0.57558 0.126225,0.0946 0.242625,0.18706 0.343725,0.27229 0.10109,0.0858 0.18611,0.16492 0.24889,0.2341 0.125565,0.13781 0.259065,0.2651 0.389435,0.37745 0.13037,0.11179 0.258065,0.2092 0.369115,0.28945 0.2221,0.16049 0.38097,0.25237 0.38097,0.25237 l 0.76193,0.63811 1.527265,-1.13067 -0.72131,-0.86392 -0.814415,-1.4406 -1.825265,-4.27199 -0.7196,-5.4237 -0.0593,-0.0166 -0.0627,-0.62981 -1.865895,-4.04675 -1.794785,-3.73183 -0.0644,-1.13123 -0.0576,-1.06315 0.821675,-1.69629 0.762525,-0.77205 -0.55305,-1.14451 -0.62986,0.0957 -2.316295,0.14224 -0.629865,-0.82961 0.829665,-0.28612 0.0288,-0.77205 -1.801564,-4.00468 -0.03387,-0.006 -1.097197,-2.4938 -0.885551,-2.26743 -0.0085,0 -1.67797,-5.059 -0.08297,-1.79703 -1.049784,-0.55344 -2.268898,-1.96235 -0.494414,-1.15647 -2.936024,1.53741 -0.005,0 -0.0033,-0.005 -0.01694,0.008 -0.0033,0.005 -0.352192,-0.68234 -0.582461,-0.38774 -2.795483,-0.73824 0.350492,-1.63061 0.465636,-0.23195 -1.087042,-0.58244 -0.348793,-0.93128 -0.03896,-1.16494 -1.281752,-3.68787 -1.31901,-0.30982 -0.504575,-0.2709 -0.372503,-3.76237 0.02203,-0.0155 -0.01859,-0.19304 2.280747,-1.57466 -0.941421,-1.18696 -0.155776,-1.241146 0.03896,-0.108364 -0.01356,-0.115115 1.319004,-3.57095 1.708448,0.893969 0.387744,-0.155737 0.140535,-0.304779 -0.165937,-0.05424 -0.580768,-2.290902 -0.54352,-0.50457 0.07281,-0.176104 -0.04909,-0.04594 1.203867,-2.912303 2.172384,-0.07621 0.240435,-0.890649 -0.03049,-0.479167 0.03553,-0.04594 -0.01184,-0.176104 0.150701,-0.1947 -0.291236,-0.204882 -0.194716,-0.81444 -0.660351,-0.03874 -0.193029,-0.582438 -1.048095,0.6214 0,-0.387739 -0.570606,0.199791 0.05252,0.159169 -0.05252,0.143894 0.02706,0.07959 -0.194722,0.543531 -3.25942,1.00914 -0.311547,-0.467323 0.05418,-0.177765 -0.02878,-0.04372 0.204872,-0.677298 -0.656965,-0.110079 -0.270913,-0.387739 -1.193706,0.149041 0.05418,0.482543 -0.05081,-0.0055 0.0254,0.22691 -0.582466,-0.03874 -1.241113,-1.048101 0.08465,-0.171013 -0.06096,-0.05258 0.201496,-0.403014 -3.796167,-0.189608 -0.179485,0.103272 0.08805,0.218442 -0.104976,0.0238 0.07959,0.198075 -0.348805,0.07787 -0.738237,1.396934 -0.853374,-0.775478 -0.348799,0.231946 -0.543521,-0.892309 0.07112,-0.143949 -0.04743,-0.07787 0.09143,-0.184571 -0.115137,-0.29122 -0.855068,0 -0.07789,-0.233661 z").attr(attr);
            msk.szao.color = data[8].domination;
            var current = null;
            for (var state in msk) {
               // msk[state].color = Raphael.getColor();
                (function (st, state) {
                    st[0].style.cursor = "pointer";
                    st[0].onmouseover = function () {
                        current && msk[current].animate({fill: "#333", stroke: "#666"}, 500) && (document.getElementById(current).style.display = "");
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        st.toFront();
                        R.safari();
                        document.getElementById(state).style.display = "block";
                        current = state;
                    };
                    st[0].onmouseout = function () {
                        st.animate({fill: "#333", stroke: "#666"}, 500);
                        st.toFront();
                        R.safari();
                    };
                })(msk[state], state);
            }
        };