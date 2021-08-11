/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/20180524模拟赛-word/index.html","60dbfb9995b017259e2b92fadbfc5952"],["/20190409模拟赛T1/index.html","352df4b3e274d805edb185ceec4fe4ef"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","f815ad6c9bd7416e7538ceaec903eea6"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","7e6cd9ca340a9f85aa7c600a31cbbb9d"],["/CF1045B/index.html","cde1b4d6c43cd00884ec80450dc8ff76"],["/CF1137F/index.html","41d37227fb9ddc320cdc3a9bf2903c19"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","82030dd68b3fa34e0742d50320939949"],["/CF1264D/index.html","c5a05f345ac4ef48b08c36725b4cdbf7"],["/CF1288F/index.html","520dbcc40b31c260c7c08900e12469eb"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","1c556031b9df68b6880ccd7b82b892a0"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","9eb45610455f7cc4b780c78d8c7ec5fe"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","9979b391c266a272d80da274b7e792b7"],["/CF449C/index.html","b3761a282b53b8f4bae7666682247dfd"],["/CF512D/index.html","5c55e100631e36c0f55ca08a3787c23b"],["/CF516D/index.html","5de71dd231fc1bc6917c65e40bf25b0c"],["/CF551C/index.html","6939e29c4d18fec5080a4904d3481665"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","1253f3d43b86aa6acbf96e4bade72e70"],["/CF576D/index.html","c6cf0aa1f32ce56c0c42473f5568a7af"],["/CF708E/index.html","b29041977cd8652693686e0cada94f4d"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","b3bc7c55c7b6ee0c2db082561cf80919"],["/CF875E/index.html","8fa09a2192923d4452c027cda34669b8"],["/CF986B/index.html","6801ff59b85a4332fea39e519bf3021e"],["/CSP2019后做的一些题/index.html","99a31c934bc36ea00a9fb1dc5fb1dc5b"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","132937ba06f4a575b0033f1c4539bc11"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","7cc949dec4862a6fdc27c8a25be167c3"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","c846f866b9ef8ee95ab03779347e56c2"],["/Rho/index.html","e3c1a0874af880a43a3a830362c4bf79"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","36494efebcfc0f3a48592add544dbe83"],["/SP4063/index.html","a0064e30eb70a9d3d28c459e4261760a"],["/UVa11600/index.html","e8615059e614b7ce161e63420fc4d495"],["/UVa12421/index.html","77f5f67c18ff048c8fa9c79bf99ecd0f"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","7d7356c04347c9f5c07a7780b98b2831"],["/[HEOI2015]公约数数列/index.html","e80ada2e5e184816e0f5d7ee24d4f2a7"],["/[北京省选集训2019]图的难题/index.html","4bdcd7ec522af34cbffdfc982b85e2c3"],["/about/index.html","db2f7649031b129ff5178aa85a3c72d3"],["/agc005_c/index.html","f8c9cf0922dd5df80335488f2990732e"],["/agc006_f/index.html","3a9d049a659e2889d184f4167744a09c"],["/agc012_d/index.html","5119b033abda10ab6191f02099a5d7ec"],["/agc013_c/index.html","d97da565305817f4e1dfdfcb50010c43"],["/agc014_d/index.html","08d0d359696d60fd80763aea51fac03a"],["/agc024_d/index.html","834775a128da1323c7d2a15bbe4815a2"],["/agc029_f/index.html","7f5917850a2fc7dbc413733842714fc9"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","0f0dcbd8a7ae663af419f8f322fa175f"],["/agc041_d/index.html","c745d76c57ce922a3326e9c258d131fd"],["/agc041_e/index.html","a1dfaf69a2fc8bf0a281b32aae7ee714"],["/agc041_f/index.html","2b4a78aea61e398e46a8b1e7750f5be2"],["/agc043_c/index.html","e5c5f9e7606e39ddb4a0517b5c16edcc"],["/agc043_d/index.html","50a42f6880aac6811d414cf7d0a84c16"],["/arc068_c/index.html","68d5049b18aceb4dc45adc6fd05118d0"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","9037efc747fb7c1b2f6715dbcd67ba49"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","69da09d10086bd82555d179e9c023e0a"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","5b27998db3393f6e6cf6df2f6581d47b"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","8f294675281ed2cc71491258b88c6bfc"],["/archives/2018/11/index.html","84de9ca702b879f7f9435897049bcc1e"],["/archives/2018/12/index.html","6980a3983fd04da524b95c05dd8d4171"],["/archives/2018/index.html","5d9a23ea40da2f1dd2a968944aff70e2"],["/archives/2019/01/index.html","1e14aaf9cf54d38492c727d60985c1c0"],["/archives/2019/02/index.html","fdec75a4b27e28b1f4d2224ee615368a"],["/archives/2019/03/index.html","f3801ca1c8a18ef94329e73b2fc35760"],["/archives/2019/04/index.html","6090d64d67e9fb83f1e626e7cef46bc0"],["/archives/2019/08/index.html","6558b558b12d0f1ef1fa8c6cd2d52864"],["/archives/2019/09/index.html","f31413d9465c6d9845950f750b9203b7"],["/archives/2019/10/index.html","2595f8010d8c2b3a1bb4311210c2b1b2"],["/archives/2019/12/index.html","fa9eb25c305b108bbabead0ebe4220a2"],["/archives/2019/index.html","6862b1cf6491f2b926eac84c80e6aa6a"],["/archives/2019/page/2/index.html","5909fc30a8d690435b686b6c1b8eb6fe"],["/archives/2019/page/3/index.html","16cc8d42df120af87b8a21ab775287ab"],["/archives/2019/page/4/index.html","7d0badf15d39ee5226c936390a5d0732"],["/archives/2020/01/index.html","e01475077381413dd3faeb233c2da324"],["/archives/2020/02/index.html","0bfdb28598c84135e81ef1fcf68d5f6c"],["/archives/2020/03/index.html","569b0c682b9670bbc0700506f3b70fdf"],["/archives/2020/04/index.html","1c62a2d782f49563871d98ab691df886"],["/archives/2020/06/index.html","30a8ae90ba4c2ab235acc11c3134e1b3"],["/archives/2020/index.html","9ea6e3dc38babe2393eaf63cfefa4c55"],["/archives/2020/page/2/index.html","ec4397565070a811c82e57e85eeb4b27"],["/archives/2020/page/3/index.html","e65331868c5d7aaf02a5104af9f3a15d"],["/archives/index.html","95d7841fbd3498864734b6703fc38265"],["/archives/page/2/index.html","95d7841fbd3498864734b6703fc38265"],["/archives/page/3/index.html","95d7841fbd3498864734b6703fc38265"],["/archives/page/4/index.html","95d7841fbd3498864734b6703fc38265"],["/archives/page/5/index.html","95d7841fbd3498864734b6703fc38265"],["/archives/page/6/index.html","95d7841fbd3498864734b6703fc38265"],["/archives/page/7/index.html","95d7841fbd3498864734b6703fc38265"],["/categories/index.html","ae4e856290122558ba9ffd95448b72cc"],["/categories/公告/index.html","c284ad4664c2373499a4fbaf8ee03659"],["/categories/出题/index.html","cf492aec716a1e6faaf3f412583701f8"],["/categories/小小结/index.html","0c78a78bbead49b82edd37dc2d7a33a4"],["/categories/模板/index.html","183f1d212aff139cef99038a0fb42249"],["/categories/毒瘤/index.html","ce5708c1bc3e61616aa2d35d8120b552"],["/categories/随笔/index.html","53100b297ac2cff76c9b00e5e92bb7c1"],["/categories/题解/index.html","a49c1060617e1e38f552f72fc5d6b17b"],["/categories/题解/page/2/index.html","12d94007d081cebf480cc3133d5536ac"],["/categories/题解/page/3/index.html","8d2cb6cc9626969cea0bc618ba45789e"],["/categories/题解/page/4/index.html","28d65b48c2dea0b98a581ef166f2bc7e"],["/categories/题解/page/5/index.html","f4e465296f62f19191f705ba892ddafa"],["/categories/题解/page/6/index.html","265a3f8bed503b9717c285ee92dc71c8"],["/cfdpproblems/index.html","ef2596b9f4e7e28ec32be6c7037a1434"],["/css/style.css","0b5e1d36ba2cd920d1a8234989579486"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","a8333703fd97f189088e18a1eaf9bd52"],["/gitee镜像/index.html","c5180f91534ee25c04120b9350b4f2b8"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","095890a328d5b554338f55dd2408bb5d"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","65de63c08b2ec7ea16d9be4d5e954288"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","d577967f3176ff03ce4e6734baac84d9"],["/page/3/index.html","54fa779ed7ad599e4d23d82a5e05bb04"],["/page/4/index.html","6efc4e9ea66570ce04f465ce8140bcc1"],["/page/5/index.html","3cdcddd16a142dbc0f51e097a96107df"],["/page/6/index.html","c71ff9fe75021da983084a8a55ec0f1e"],["/page/7/index.html","cb93754ba84523f80785d3265f0e6505"],["/schedule/index.html","652230872eeb4c73d8640a95abdf596d"],["/simpson/index.html","29e404d46fc29126e142871bb54122ae"],["/sitemap/index.html","1a1afee7085bde1a1af73f4f58ed2f03"],["/tags/AtCoder/index.html","34caf31fe56d24ade128c1f923a34e68"],["/tags/AtCoder/page/2/index.html","ef40818e5f127a54966d87c07db94c6d"],["/tags/CodeForces/index.html","888fcbd0e0fd584cf3af8f32a5826645"],["/tags/CodeForces/page/2/index.html","fb14cfa86fa82729035baebdf35d2240"],["/tags/CodeForces/page/3/index.html","215930e9ea3fba5fea5bea63c57cdc2e"],["/tags/DP/index.html","cdc64c4818aea99e16ec779a5cdce452"],["/tags/DP/page/2/index.html","ebcc3de245f4e2b2a0c6d05b0c106a91"],["/tags/FFT/index.html","212176ffa899516648c1658b52956681"],["/tags/LCT/index.html","f545ac80b705ea0f6eff238135043e66"],["/tags/Lucas/index.html","765f2d3431f17a2cb563514e63989cde"],["/tags/SPOJ/index.html","26e7a96e2f5421fbb41ba12a988135b6"],["/tags/USACO/index.html","aaa83b0b9286f9c091a354f40739786a"],["/tags/UVa/index.html","1d3797a60f9d074915d59dec4713fc2e"],["/tags/ZJOI/index.html","a908a24d134cfbf341d83feaeeaf3700"],["/tags/hash/index.html","eba089561f8978c00ba9ec0aeb190e4a"],["/tags/index.html","fe6ce45115889cb6e724ac8ba2f31cbb"],["/tags/two-points/index.html","1ba8ea935b8c8486ff4f07eca5fd8210"],["/tags/二分/index.html","20bdc5531979525d7436a7ee049feb36"],["/tags/出题/index.html","1be3b40414dd736e08c8fd6c60b922e8"],["/tags/分块/index.html","a6e7d2b15e2c7edffdad80814604cabe"],["/tags/博弈/index.html","3f1cd45841df200719b7863a229c3d80"],["/tags/卡常/index.html","66f94494019eee61a5bedce3b341fa70"],["/tags/图论/index.html","a7b6c26525097acbdc6bc1f65753737f"],["/tags/字符串/index.html","f2701d9a21461966e3053459188f47b7"],["/tags/并查集/index.html","5ccc1b89fda68a1329931a783a357fcf"],["/tags/搜索/index.html","efb7e3d782f30eb7da3a0f18c41e407d"],["/tags/数学/index.html","9d76c97aa8b5fdb32874e94d1567848f"],["/tags/数学/page/2/index.html","1d16518ee7dcbb2d4bfb83a99306375e"],["/tags/数据结构/index.html","1c82823206ca534243c3362e041d995c"],["/tags/数论/index.html","5a92d900dc79792b44036ebb7ccdb8d7"],["/tags/最短路/index.html","4131fc6b6800a0a24caf1ffa7fa3378e"],["/tags/构造/index.html","fc0b725d7a02009fd23787473e8707bc"],["/tags/树状数组-线段树/index.html","70848bd854bc9d3fb943d767dfb2135c"],["/tags/树的重心/index.html","aa36fa9e978e6f6698f259de2843935c"],["/tags/模拟/index.html","9669e004e775ab194df1d6b16904e221"],["/tags/模拟赛/index.html","ee857228bdeada5dc475d9c091bb2282"],["/tags/生成树/index.html","5fa7648b560019542d8445fd3dccf3ce"],["/tags/网络流/index.html","588adb7ffbb5191c7b64353c9d760545"],["/tags/记忆化搜索/index.html","a02c8fbcfcf2f8e6a8aea4d3cf957a7e"],["/tags/贪心/index.html","dd30505aabb042ad513cda6f031e7523"],["/zkw线段树优化dijkstra/index.html","f599220b7badf37782950c224ab2a81b"],["/一道有趣的计数问题bywzp/index.html","49c5015a8f54897744cfd5c844345ca4"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","7aecf7afa8ce8f3061f67dc96b3054fd"],["/做题记录/index.html","482cb57d155cc2dd3e1f88b05595221b"],["/换个主题/index.html","d63975a939c428c5f8d92361ee4e01e7"],["/整数分解求乘积最大/index.html","53fb6cdac8ff8e51ba557ac1b52edba5"],["/毒瘤/index.html","f6b8758dd0d6b0d05051b4b45ceb7d86"],["/浮点数开根/index.html","a0ca3b22ab7c21cce127abae0edb04f3"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","e108469802b94ff152eb2f5f736c43a7"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","3639b7ef992756b57ace50f20f088d83"],["/第二次出模拟赛/index.html","6313523b466967bed25a3b30228253e2"],["/线段树入门/index.html","356fa7afc249862d04472f5e7dd116c7"],["/航空管制/index.html","d9c785f80f05a100d84eb9c0fb90f511"],["/造一棵树/index.html","f56db92392dd637b4194a7424f4063ce"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







