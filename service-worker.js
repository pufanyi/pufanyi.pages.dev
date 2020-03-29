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

var precacheConfig = [["/20180524模拟赛-word/index.html","379d9e79cb92cbcc79e8f0aff95b9f4c"],["/20190409模拟赛T1/index.html","021e00992cbc8bfcf31dada5b8d10829"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","9b1046d6c74081d5ecb49dd8af81524d"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","46410f614f773cf21ba9cc930795b0f3"],["/CF1045B/index.html","e0f67137d1800d7ad7837a5eab9b639e"],["/CF1137F/index.html","2cf4daf29cbf57bf70968a1e13b613f8"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","d4c61fca1b0ef9483dc0e19a0982aed3"],["/CF1264D/index.html","d6eb1ce1b5c916d45d1e95e823a2150e"],["/CF1288F/index.html","8cf70a99cf4fe5a2a3bc132aa17a1696"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","7a630299b0bf16e41dd63e7a7176ba20"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","835add043e379f73d3c0b87be15cc437"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","f8806f9d62b6f242a9ff5266400606f3"],["/CF449C/index.html","89cd9ced303adf0465657c1941693500"],["/CF512D/index.html","63f9bb9c4a0825a39dbb2862b6f3e5af"],["/CF516D/index.html","6500fe11dc8e261fee72f19c159ccd57"],["/CF551C/index.html","b5263123652966afbf537cb9704c7c3d"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","0c8755902340a18cd88e77740d6bc13a"],["/CF576D/index.html","ba9a93d754447b74f2999dd0c4867f96"],["/CF708E/index.html","9b2ba912355dbc5f38a3d03428549ed9"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","edcceab00b8fedfd7a2f764d4bcce438"],["/CF875E/index.html","aa33ea3fdc8770c283045bc130d0e096"],["/CF986B/index.html","4541bf437443011cebbfe979b38ea577"],["/CSP2019后做的一些题/index.html","639ed9a7dda1bbfc4cc5d3b3dd6f192e"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","e85f36f86abd69de81ee82e250f63a73"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","4a3660329fff95cea663f2232b569234"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","b4e07a711b938a8627d8aae5ce542856"],["/SP1026/index.html","6e947735023fbe4ed8ee274589583066"],["/SP4063/index.html","743b089060b2104476a7fabfbbffb370"],["/UVa11600/index.html","f8a5b5803a5b68197a83b7292ec42bb2"],["/UVa12421/index.html","ab9b693f78ce9642640e6d0d0c6f82ba"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","097243e06a10397c1fb34b142ea4963b"],["/[HEOI2015]公约数数列/index.html","c80a7c75b4dcf27ce5f187d1ff49a3c3"],["/[北京省选集训2019]图的难题/index.html","7c22b02b683e1b4b2dacd7b976858dc4"],["/about/index.html","b61234cda4342d23fbf03f115c4b3c23"],["/agc005_c/index.html","e7d0529304a2a05a17dd4007241b50c0"],["/agc006_f/index.html","bc5c30a73e150ef6e7e294256a230388"],["/agc012_d/index.html","848fc583f4e02a697520d416abd97a83"],["/agc013_c/index.html","6763e73df2642104fb02c773c9d4811d"],["/agc014_d/index.html","d4767754a34f1e6f4add4dc70b52f9f0"],["/agc024_d/index.html","e27ee248ff7e64cff52e26350b57f7a7"],["/agc029_f/index.html","a663fa9f3e81b4169cb787b9c6a27918"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","89c9781d345314a1ebf705fabe919a8f"],["/agc041_d/index.html","c6e9ebeb51a741a1caf6f0be186fccd3"],["/agc041_e/index.html","7d2c1715b89b96684658dcac059ac557"],["/agc041_f/index.html","9903f1267c923918a62027cf63e0f245"],["/arc068_c/index.html","e3f7c33d8d4c2c66ca2852af067ca0cb"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","e303562ee308670209d62c0ed8b22767"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","9e6e46066407438b49035dcc3fc16a9f"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","349dd98043ef7ed3cd1177d8f1652f98"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","e3475c769771511506306b93a7c165d7"],["/archives/2018/11/index.html","d1d913b426bda838eaae30446c47d59b"],["/archives/2018/12/index.html","2314508479c8c8a3c131195485cee1a8"],["/archives/2018/index.html","6cf8e8dc2acdcaea60bd41072716886b"],["/archives/2019/01/index.html","76ad8725d66dc01eebfb1c1b2815236e"],["/archives/2019/02/index.html","4fed79fb2420bdfee9ba42df143dbe4f"],["/archives/2019/03/index.html","272cdf6db81896b9a441a794e2002fa2"],["/archives/2019/04/index.html","1ee24886807bbcee4ec7191a61a6ea3d"],["/archives/2019/08/index.html","13cd66cf1bf854a12c5df8e4c97ef010"],["/archives/2019/09/index.html","cabdfcb5069b0ef60f1a6b0e88cd7e6a"],["/archives/2019/10/index.html","f1970355cffbeea045ecef371e593405"],["/archives/2019/12/index.html","7f3a32fa4988d81e3fec8707c2a5e905"],["/archives/2019/index.html","98a2f1604cfbb29cb84be6ee85bc3200"],["/archives/2019/page/2/index.html","f8db8a19b904b8b6f55b40e97a012390"],["/archives/2019/page/3/index.html","8cf7ce523c960baf621e9d6f91435382"],["/archives/2019/page/4/index.html","1cf1c090ce38d31afffa32a9ae8e5a55"],["/archives/2020/01/index.html","24d906fe7034c004253ff0c035666677"],["/archives/2020/02/index.html","66a1650ba70188f58273e6b4c724fbe4"],["/archives/2020/03/index.html","fcc51f399438c680abc122dd135d04c7"],["/archives/2020/index.html","98439c67cdb3d769ac0a3d3b5208078a"],["/archives/2020/page/2/index.html","a97fec89eb04c3409f47dd5914e33b9d"],["/archives/index.html","bdbcb4e810cc5743827ba6bf96880dc6"],["/archives/page/2/index.html","328943214f079844b2eef8a4409e8f28"],["/archives/page/3/index.html","328943214f079844b2eef8a4409e8f28"],["/archives/page/4/index.html","328943214f079844b2eef8a4409e8f28"],["/archives/page/5/index.html","328943214f079844b2eef8a4409e8f28"],["/archives/page/6/index.html","328943214f079844b2eef8a4409e8f28"],["/archives/page/7/index.html","328943214f079844b2eef8a4409e8f28"],["/categories/index.html","920dd6675138dfd092582ee38902c6e0"],["/categories/出题/index.html","8fc0b80f44b1e116c60c41b71bb6a690"],["/categories/小小结/index.html","2942ac3771ac499c7401ceced9c37833"],["/categories/模板/index.html","63d594bcb384597b1280f7d48bdde85d"],["/categories/毒瘤/index.html","0287aa8529633d8cae35c58982465f01"],["/categories/随笔/index.html","e888ef0216e30beee0250e21adc9b0f4"],["/categories/题解/index.html","3684dce3e6ee461a6e4640f278d15b57"],["/categories/题解/page/2/index.html","a271b3ba6001f51f272db8295a5f40a3"],["/categories/题解/page/3/index.html","ed93219eef7578b6adfb9a10b6c671bf"],["/categories/题解/page/4/index.html","e7668c9b3a60adb89a7a7366bff3604a"],["/categories/题解/page/5/index.html","8ab5c4dbef354d32098389d702ff1800"],["/cfdpproblems/index.html","d3f60e9d49627fe14f2b95004d76728e"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","ea4dcfc526661cfb8a59332fe16a8c15"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","62ff75dd5ab44a916f1223edb883a740"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","39692cd1669852fe880cbb3916b130a1"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","8cbd662e644735fcbf78a1168e2db97d"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","fdc6ab492535761ee132b6717d5edc25"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","c31ce683471ac23b1eec2b92a9a2f8e1"],["/page/3/index.html","a0fac8caeeadc5ccae384ac198a94234"],["/page/4/index.html","ecdbb9885d9ccdfbdad11e3d988aaa5c"],["/page/5/index.html","17b92654a4e3c3c3cdee0b24f39d4145"],["/page/6/index.html","d97a2001b5649b58b7ed7d4886d18436"],["/page/7/index.html","c60a1ba4e56159b3a0176f3b683fd48a"],["/schedule/index.html","4558e42d3e789cbee99c1b4deaec66c5"],["/simpson/index.html","8476280daee77e9bd39fdef84065d304"],["/sitemap/index.html","c57c4acfb87c317c8f67a0b25adcf5d8"],["/tags/AtCoder/index.html","249171ff8c76ab428dbbea823f5666fa"],["/tags/AtCoder/page/2/index.html","0b8bc8e96ce6523855142f396228c1a2"],["/tags/CodeForces/index.html","43500c0ad4abd056d5285affc8a41e1b"],["/tags/CodeForces/page/2/index.html","c98da13fa18764ec7e4bc09fd24245c5"],["/tags/CodeForces/page/3/index.html","50401cf929600778ff9b04af3601295a"],["/tags/DP/index.html","8e744613c054b86e2ad38f3a518695f3"],["/tags/DP/page/2/index.html","7c63564e2f5537b6d49cefea44765f83"],["/tags/FFT/index.html","f5c01de35609f78ac4efd8014af7982d"],["/tags/LCT/index.html","ddbc0b49dd9116acaccdbb95a430ab23"],["/tags/Lucas/index.html","bc05ee4c74450d9834166fa1e1e539c2"],["/tags/SPOJ/index.html","01abdaacfe92e58c3dcca5fa2cf18927"],["/tags/USACO/index.html","367c0dedd533f70d7de34644159d9a2d"],["/tags/UVa/index.html","e32faf8910376c2ae2753947fce3c811"],["/tags/ZJOI/index.html","2b4e22df1ea7651cb70c9ed1ecf61c41"],["/tags/hash/index.html","05b3a855e6aaa676a7cf8da40036f131"],["/tags/index.html","fe8f3901534ba7922f28c002be0eed0b"],["/tags/two-points/index.html","79aa423f531fdf5ab5bcae347705654c"],["/tags/二分/index.html","81e622705fb985097d55a5b1aa30e5df"],["/tags/出题/index.html","ab81ec0197b5102bd57c9e38adbbca9a"],["/tags/分块/index.html","72670c37a8227e366f3c96361a95d3af"],["/tags/博弈论/index.html","ea8b5d77b16ddfe0e3ec7aea6289733a"],["/tags/卡常/index.html","8f708488d6cbfe3ed0fe0278113699c3"],["/tags/图论/index.html","9230ea2dbdd80abd82178b68563acefd"],["/tags/字符串/index.html","338cecfe74d30d6c694968e85c28b574"],["/tags/并查集/index.html","5b31db5a5cdf13431cc7525153b8c207"],["/tags/搜索/index.html","1a64cdf4c56400b424fd29bd57f0d419"],["/tags/数学/index.html","3a1848232386892ba728d480e778916a"],["/tags/数学/page/2/index.html","67061f4ed92213ce0d1551bc6bfd011b"],["/tags/数据结构/index.html","62dd0e0671c3409ce894776b18c28126"],["/tags/数论/index.html","60ca109c316d4d222fb6b51055471eea"],["/tags/最短路/index.html","977836bd67497f153796f061f77c4b6f"],["/tags/构造/index.html","8806f4838a61eb24b208cfbe8129760e"],["/tags/树状数组-线段树/index.html","24e466d9c746393e35ad07e2c74af170"],["/tags/树的重心/index.html","4d56032a5be0038e09c4ce027376de85"],["/tags/模拟/index.html","88f700cf14c2b6f4531602f57f27bec8"],["/tags/模拟赛/index.html","30cc03bced2c4bef006259a75a6cb79f"],["/tags/生成树/index.html","bdf5fb05cf082d2a7ce074accbba1918"],["/tags/网络流/index.html","21b259ac57ccc2fd1a0b6f48f6f194a8"],["/tags/记忆化搜索/index.html","bbb122db07c2f2c06a18e3a66f495911"],["/tags/贪心/index.html","12f3795f5ac1b1400e032cdba38590e4"],["/zkw线段树优化dijkstra/index.html","f944d58841b20e091f0d6049356ddc2a"],["/一道有趣的计数问题bywzp/index.html","123d3b44d8957e65c3e5ef3a529f5a6f"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","10f698af9481bfcd2a9db0e096ccd7f3"],["/做题记录/index.html","6ec1afa15ccddf28b85ea212ddead476"],["/换个主题/index.html","6196356853db6fadfadf416d484a3bf7"],["/整数分解求乘积最大/index.html","be08b1fb09084dccb8d348f54d983306"],["/毒瘤/index.html","5f69010d05e4faa9447f7e70f3f76317"],["/浮点数开根/index.html","059dc72958b4259532acb61f76c9ba2a"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","74c23592be09ae2b04898dd6b6c44b12"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","0fa8056e482c1888310e6c76eee0b7e0"],["/第二次出模拟赛/index.html","c242f8391f6643177209f15268faaaa3"],["/线段树入门/index.html","51163e70bd0c01597e98f2389c21195a"],["/航空管制/index.html","cd4ba8491dff26b630c87f32e3de7cda"],["/造一棵树/index.html","4c19fc3b4396ae286799d79ba805e2c4"]];
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







