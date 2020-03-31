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

var precacheConfig = [["/20180524模拟赛-word/index.html","d047b77e5fa4d808e3f44b9785773dfb"],["/20190409模拟赛T1/index.html","c6fe89b257a4890ad7c086c8bc08f0c7"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","02093b3531e457374594858f3e2668ef"],["/CF1045B/index.html","27980ce0e723062998db06d7ee5e2abd"],["/CF1137F/index.html","2b3e6da058a8bba9d272aa95fe98ad23"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","aa96611aa738071ba9df482f79443b65"],["/CF1264D/index.html","4f27d1afa77682233045d66c5bd4a920"],["/CF1288F/index.html","56cdb8c2395e222eff35f1238344896d"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","24fcc8690a2249ba1566ec6083a8ab14"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","0529782125ea8dbcd20e2947e9011515"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","694b9d238ae1e57c43c2704b0194be35"],["/CF449C/index.html","8d2c4e32d79d4d99b44b96d11c8dd35a"],["/CF512D/index.html","0459921a527663dda98e096a0557d804"],["/CF516D/index.html","e02374c9ff16359b64fe706fe20213d0"],["/CF551C/index.html","e78223c38e4322597fae6ba8a249f160"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","65c84f811ed1eff9d37f66ad3e884a49"],["/CF576D/index.html","37a80f90aa841b3e6945a80a47159d6d"],["/CF708E/index.html","0115ef6d91e2375c81e4336169093abb"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","5ec745a0795b685f341189493e3788fd"],["/CF875E/index.html","dd3813c766736f9f60a3672ee12ee72a"],["/CF986B/index.html","b00dcf8d3cfe7d3c36bd533621042b34"],["/CSP2019后做的一些题/index.html","44e32dc862ea575f9ec598e8a9fcdcfb"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","f13843149d404495381ea89eb4baa224"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","e996bdf55c3da0035b2fc44353db7a26"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","8c4c760c05af9a5969cc6860fc7c328c"],["/SP1026/index.html","501ed9e27d37217f551d6664a5053856"],["/SP4063/index.html","ac67e60c1113ea371fe02bef427489bd"],["/UVa11600/index.html","0eff6074573a10f78584e0f680983eb6"],["/UVa12421/index.html","1b9ca4e572509eeef73dfa5d30c5025d"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","9d7ba023a70e316fb894f17be5bf3aa9"],["/[HEOI2015]公约数数列/index.html","3552fb353fd39ec1071c0a3a81234f25"],["/[北京省选集训2019]图的难题/index.html","89b9894b2fe668b8dfa4dfc4eed9703c"],["/about/index.html","a0d3b0d2cf5a332f1ce5518e103097b5"],["/agc005_c/index.html","30d86e6bbdc6d56eac272bf20e3279b3"],["/agc006_f/index.html","d046ed1ac79be8a84772ecbaae73357a"],["/agc012_d/index.html","b8de56e48eaeab8cbb50fa1e6fd93ca4"],["/agc013_c/index.html","715f50fbad7c3e9845eaf752fa81c032"],["/agc014_d/index.html","2e3dfc23128fe68b5e4c5be85ce2021f"],["/agc024_d/index.html","40d3e57ec1b6d4b9dfec0e468799d5ec"],["/agc029_f/index.html","54b41a38e16249e66ccc02f4b6944f47"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","9e4ba0b9c8898533a97a041eb1ac47c8"],["/agc041_d/index.html","e9336bbc2b017cc0ccb6b919007570a5"],["/agc041_e/index.html","3cf68c9b3a9eefc8c3e549148de63734"],["/agc041_f/index.html","5f8d809594f1fb97398967be5a9c9cf8"],["/arc068_c/index.html","9b43029b74999871d5467cd5d3a0c817"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","803452fec1577dbcb220d935f0980b2f"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","f9156c5d6b38b5271040916ee8419086"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","dad78a0e8dadf0eba60052f6b94859f5"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","3ad4f351e5bc2241478f83407d7508e9"],["/archives/2018/11/index.html","e7e8d77bff71f8e41541d29950fff9a9"],["/archives/2018/12/index.html","9bc9effab002ebf3436fa01356ad211b"],["/archives/2018/index.html","743c6fb90495156af955e19e6674feae"],["/archives/2019/01/index.html","59358bf4c2174f2bfb3675bb1f66bab7"],["/archives/2019/02/index.html","91340f060b50e32a11a89203f47b3e58"],["/archives/2019/03/index.html","62d583519cda90b0c263e068aab28d79"],["/archives/2019/04/index.html","f947eb3a66da9903761194ea00a16bee"],["/archives/2019/08/index.html","05e81736ebea2d8710342d4d603bc011"],["/archives/2019/09/index.html","5dc54ddc957500f013d3ae8cb80d2852"],["/archives/2019/10/index.html","b6ef266a00e843a5c30e6f4fb6c1e3c3"],["/archives/2019/12/index.html","45209b48bd0591b4d0e8070d9098bff4"],["/archives/2019/index.html","62f43ee2bb627bb656a23545bc47b75c"],["/archives/2019/page/2/index.html","154f18191ed5b12c229b051dc036da18"],["/archives/2019/page/3/index.html","4caeef75be98c79d5c7ae8d1fd79eff7"],["/archives/2019/page/4/index.html","0b55370f02ab131e34cfa72c91fb7962"],["/archives/2020/01/index.html","49af9445178dcf9f92e9603218509f39"],["/archives/2020/02/index.html","afe1653a89d5d9932416ce7d4559c5de"],["/archives/2020/03/index.html","2a2a79ab7d9c44db3aee10972eb2e2b6"],["/archives/2020/index.html","25ee2df8df3f0ac72cc66415e1914175"],["/archives/2020/page/2/index.html","fa1ffa4b80785e1e727edf64cfaab321"],["/archives/index.html","1c96f298613874c2196d6f38dafd1a63"],["/archives/page/2/index.html","0a3b0a767137d4124e367741ab74ee2f"],["/archives/page/3/index.html","0a3b0a767137d4124e367741ab74ee2f"],["/archives/page/4/index.html","0a3b0a767137d4124e367741ab74ee2f"],["/archives/page/5/index.html","0a3b0a767137d4124e367741ab74ee2f"],["/archives/page/6/index.html","0a3b0a767137d4124e367741ab74ee2f"],["/archives/page/7/index.html","0a3b0a767137d4124e367741ab74ee2f"],["/categories/index.html","ea9a5f0379c1648fcbec6fa2cf5b0d6c"],["/categories/出题/index.html","7c83d53a35eee11c397bacaf08847521"],["/categories/小小结/index.html","58e9cd5ebcbf4e4295f613ced2241729"],["/categories/模板/index.html","1804800b6720024badb2f40cc8770eb0"],["/categories/毒瘤/index.html","7b91f4887c17066545d148263eb999e6"],["/categories/随笔/index.html","aa6db66c4b51908ef7193941ad2fb557"],["/categories/题解/index.html","b5ee397de7405e3119bd29450fcb676d"],["/categories/题解/page/2/index.html","0bb189afba19eac0a2e2fc2c644aa59a"],["/categories/题解/page/3/index.html","f240b7df16b5f0ab8fca07b0051458b5"],["/categories/题解/page/4/index.html","f4890d91db8e548cb898e11b7ef78abe"],["/categories/题解/page/5/index.html","09a8bb869de02f25c7e09087a619274f"],["/cfdpproblems/index.html","46fc952b0e564f1c4b112252d1ed63a3"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","de701bd87c95b89a142601689910aba9"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","5e57a0d35181de3246929878b1a88bfb"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","e8ed05187ae79f9a86b98ab988b1125a"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","f67d6187614614633a1388b7e1d9051d"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","04a6339d7b37b9f18c7c9f41897ffc00"],["/page/3/index.html","9b6406424485d80d81ea34c4e6cd3604"],["/page/4/index.html","a1540decadd9c7d15b107201bdd8e4f9"],["/page/5/index.html","5aaa3177e2df5920b67b9377cfe63faf"],["/page/6/index.html","d39383b4eb173769632bf08b892b0345"],["/page/7/index.html","060a2b17f7c1d517f1423374ffc57649"],["/schedule/index.html","2cf255d3e80445e0be416c3bbc51d275"],["/simpson/index.html","4893be914be875aa9a64d2fcbfd8c731"],["/sitemap/index.html","785af573581aa2dcd228b7456d2dd606"],["/tags/AtCoder/index.html","d820a8dad3a1da308899c0b5470e596a"],["/tags/AtCoder/page/2/index.html","a8a2e7b98e3e0cd124d416fa326d3a7e"],["/tags/CodeForces/index.html","a5ffcd5cc6bac6b1960a47825202c616"],["/tags/CodeForces/page/2/index.html","f22fc0774afaaeaa8b8131938c0014aa"],["/tags/CodeForces/page/3/index.html","4220d7bbb4b6ad3fcfa0bd0a8f3f7e37"],["/tags/DP/index.html","9585af26bb04755207209074eaf50711"],["/tags/DP/page/2/index.html","97faa921456c321a18602077a320aa0e"],["/tags/FFT/index.html","1e8e81a98830368a5726e7f91280e2aa"],["/tags/LCT/index.html","c69c07d0075766891f210c19e8d8235b"],["/tags/Lucas/index.html","e62a35a570380de2a528e80c20478cb0"],["/tags/SPOJ/index.html","84f75a04c419b6b61feea121eb8f87fc"],["/tags/USACO/index.html","1359a92dda0d5793c16260ffc6d866e9"],["/tags/UVa/index.html","ea97864ae76f7e187043371ccf3e6527"],["/tags/ZJOI/index.html","8c3fd336a4b6c17c81aded73f93d9af1"],["/tags/hash/index.html","c8dc0d5aeccf9fe7756ffbacb7e319b1"],["/tags/index.html","dfab3f68001544b37cec5ba7fe9058c1"],["/tags/two-points/index.html","f4e9b489b365a8eb88a8995fb93684eb"],["/tags/二分/index.html","8058164d420553887f7ccf805f224288"],["/tags/出题/index.html","cee1eec0a24d6f07772993e3def0a040"],["/tags/分块/index.html","ab08713915d3e5d29170c89ddcd85ce2"],["/tags/博弈论/index.html","69b039e42b5b2e0d107bd94952c04d03"],["/tags/卡常/index.html","791839a1c71917b3b13d7cdd0376115b"],["/tags/图论/index.html","f56fdaacdb35a6188b0f5b02396d8290"],["/tags/字符串/index.html","803ab5c9025b8b6b158c998e050d7e38"],["/tags/并查集/index.html","f43e80f39e47bd9c08c14984a97904b2"],["/tags/搜索/index.html","ced6bfcd6da3d36c69cef1dd474341a0"],["/tags/数学/index.html","16009ad91c9dc94b8d0dc8c8f79fe69d"],["/tags/数学/page/2/index.html","03e828af0718fa5011d8a7fb084a4743"],["/tags/数据结构/index.html","58eba13725ca74f1e25aee60c64a11d1"],["/tags/数论/index.html","a79d54cb23465032b5da02b0cd2b293e"],["/tags/最短路/index.html","89d2da8b14fcfe2e7b7efd5491aad2f4"],["/tags/构造/index.html","cbf181fec10025ec9837ccf9a7a3e6aa"],["/tags/树状数组-线段树/index.html","e6a090bda9e159b7a861586b73fbc512"],["/tags/树的重心/index.html","1e268cb1a6d184e3599963636952115e"],["/tags/模拟/index.html","414fbd174b0c0553b6399ae5bb55fa28"],["/tags/模拟赛/index.html","25da1f9559c3f3cb52a0f766704573ab"],["/tags/生成树/index.html","90c4f2c37ddd883c3d0fa45c5af932c1"],["/tags/网络流/index.html","819f59dd5a4c0934f8e5c6101c1196e8"],["/tags/记忆化搜索/index.html","228450706d1921957175a5c9816fcd28"],["/tags/贪心/index.html","8ee2b9df5aa3a03f3dd405ae230bc39d"],["/zkw线段树优化dijkstra/index.html","018b96fd2b11410a4cd24d40911806f7"],["/一道有趣的计数问题bywzp/index.html","31287acb4af1e0da4a41369cf539caba"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","595d793562fe7126638ce08db23abdf9"],["/做题记录/index.html","4aa2fa46a051c7b4dfc6c204c8153ef8"],["/换个主题/index.html","4e85d0ece0fd324a822f88d5b3f852c2"],["/整数分解求乘积最大/index.html","c6508822bb387b67d7bd3767776b21c1"],["/毒瘤/index.html","1fc080e45ac8ff16ea66bed1071727be"],["/浮点数开根/index.html","239d1375ecf069a3d6fa30aecdde76b1"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","c6f391d170406267271c43ca96eea720"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","8babaeffbeb969da813ea948b24757d3"],["/第二次出模拟赛/index.html","44914c9f88f66fbc6e79f4464a3fe7f4"],["/线段树入门/index.html","6dbe502b2bb4352376d73c4cd9564f5a"],["/航空管制/index.html","1ac645cab9429efeaa9457f236e03b36"],["/造一棵树/index.html","f6d760a3a3d60ade74b9ffc1bb0a9d86"]];
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







