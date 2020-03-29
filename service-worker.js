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

var precacheConfig = [["/20180524模拟赛-word/index.html","ad0388f591ca973968a002312f3465b7"],["/20190409模拟赛T1/index.html","3fe0b4a179e8954a6d94e4d69a21e93f"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","8d4530f94190a12048fbb019391a1465"],["/CF1045B/index.html","2da6ca8227f0a46f5d8521262ad2816b"],["/CF1137F/index.html","95b177c0daf460f7b0aa51289b0c8f06"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","33252c695a58456e0dfb47369e7a6b1f"],["/CF1264D/index.html","1f041c944ff9022f447b294c6a1d36f2"],["/CF1288F/index.html","67133746af37c4b56c72806c9b3e8d16"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","04d722268293f91a907290b9a53cb6bd"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","a85645fead949ca06854c6c141824a5c"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","12ae8d9847327b40c335fe3759b615e3"],["/CF449C/index.html","e1b8724226f32101efe5d98b8e17d9d4"],["/CF512D/index.html","f30f0b0874f83135b76f9d4e3d628c7e"],["/CF516D/index.html","74f5e34fb1bc2f0e31a195eec38cb4f7"],["/CF551C/index.html","a81d2ada349fb7bc5975cac9e927a9ed"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","b34df4fd913ca9fb0bcf50ff03aff25d"],["/CF576D/index.html","90af86032825fc398dccd13f69fe6bb5"],["/CF708E/index.html","24bf63ad208297b78943ed3379ca932f"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","125ee43f163132582acf02e9789fb257"],["/CF875E/index.html","4a3c000b775ff77a1d33a50492d20285"],["/CF986B/index.html","3b90f0bcc154ae55d6644d05e727ed0b"],["/CSP2019后做的一些题/index.html","d2155987822bab555a62417bbcf52785"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","972fddbe7ef9e36e92966a85451a1d49"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","b975331ab217dd21a663415a8cc11452"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","4d54fa279e2b8fd5601294f266bec904"],["/SP1026/index.html","012d8eb7bb276d6fea3c918a2bf3d1b0"],["/SP4063/index.html","f30231454b3a8d3a3c38cc2b8baa2f61"],["/UVa11600/index.html","0a9953ce281b6557210728cc783d6412"],["/UVa12421/index.html","26ec5072ab891c45eb6949aaa5b2fd77"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","483a86b0f229d20a756b080026ea8810"],["/[HEOI2015]公约数数列/index.html","6e4cc4ef19f802768132f715995af412"],["/[北京省选集训2019]图的难题/index.html","07fa902bdc8449a94d27c799eeb45155"],["/about/index.html","adbd078e3201d0b2120806dfa60b6000"],["/agc005_c/index.html","683704a80968f94e87a2b1bdb1602439"],["/agc006_f/index.html","3e7a32c3f47e0e9f9dcdd50cca774e1c"],["/agc012_d/index.html","01474fb1e863b38c5684a7416c6d2119"],["/agc013_c/index.html","fe61fa1d8a7e6e48bae2f696dac84aef"],["/agc014_d/index.html","7d6c438c351f61276cb6ceb1e4071d22"],["/agc024_d/index.html","f99bba789a092fee50f7f2256200755e"],["/agc029_f/index.html","296a8fe09995bec3acb624f764f60179"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","37221943534a19fbc834260951819fdf"],["/agc041_d/index.html","ebde5f37fbe5c6df8f91cc6c373c4825"],["/agc041_e/index.html","43679d25e0a42cb38abf2a490a50ee32"],["/agc041_f/index.html","e8a48f50e55535fc355e0659f74ce3ee"],["/arc068_c/index.html","3b27f6d08c60290b64f80b74b1363095"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","7f4ac69e3244808b41f96dd60f9ef508"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","5949b7c36d1c8295d742fdc9381b4b1a"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","471f27561de64ea0f4377725ea963156"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","61a82362a5406069766e4c36bf28b5ba"],["/archives/2018/11/index.html","f101845e450e3c3a373fb921442ab8a0"],["/archives/2018/12/index.html","09c0211600a45e0b0cbc5cb072cd0583"],["/archives/2018/index.html","bba8786795dc8a59c84770ed7f279d15"],["/archives/2019/01/index.html","ec3d09bdf573545bf97a11d3340d5cfd"],["/archives/2019/02/index.html","72af4d7135b62e8222c5a4e21bb7c583"],["/archives/2019/03/index.html","5d22db7afa9a8fd9d7f55da7961115a6"],["/archives/2019/04/index.html","9f2c8376de7d67d85666bac378cf55c3"],["/archives/2019/08/index.html","c853efb469b5fe0394c82fb7d4a6aba7"],["/archives/2019/09/index.html","88b2ebdae80eacde08e37b4bf4181b4a"],["/archives/2019/10/index.html","c1de46a90ce4634bde928748c8854264"],["/archives/2019/12/index.html","368990efe73d34d002ec27ab43d96a8b"],["/archives/2019/index.html","0d9d2d62ad94bb5ff2841d6d313c2f83"],["/archives/2019/page/2/index.html","d623be8b93f516e1ae96124982a47ec6"],["/archives/2019/page/3/index.html","37c7fb212290ed3ee7087db7eebbe756"],["/archives/2019/page/4/index.html","d0d54ad2616224f09ceab8cb6b9bbc79"],["/archives/2020/01/index.html","2e1c355ffc1c62ce53d8d1ec3c12a685"],["/archives/2020/02/index.html","2e27b30130d43e9f25c9a6c1290cfcff"],["/archives/2020/03/index.html","a3c097c580259768a8205f5f8df5d0bb"],["/archives/2020/index.html","336f08246d13b7a4bda4f28e888c0c76"],["/archives/2020/page/2/index.html","a58d62bcf5ccbf52727e5f77cd7da65d"],["/archives/index.html","49f2dcb2a4f5fb205ffaae3e5a637ca7"],["/archives/page/2/index.html","4b6cab1d878dd6a150df6aeb4953f1c1"],["/archives/page/3/index.html","4b6cab1d878dd6a150df6aeb4953f1c1"],["/archives/page/4/index.html","4b6cab1d878dd6a150df6aeb4953f1c1"],["/archives/page/5/index.html","4b6cab1d878dd6a150df6aeb4953f1c1"],["/archives/page/6/index.html","4b6cab1d878dd6a150df6aeb4953f1c1"],["/archives/page/7/index.html","4b6cab1d878dd6a150df6aeb4953f1c1"],["/categories/index.html","ee9ff5d29063d1c4939a964baf393f6c"],["/categories/出题/index.html","74e5f6d246099e36c488115beafdc3bd"],["/categories/小小结/index.html","6883d072d733ded7e2aa29f9544d6c99"],["/categories/模板/index.html","3e77e25596cf5b2f0b5fac5f6d7d3ea7"],["/categories/毒瘤/index.html","b7a3634071174cab74f3e5350d8b2fc0"],["/categories/随笔/index.html","d4f53807273b34516692ab49d4a8d582"],["/categories/题解/index.html","c57209abd8159d32eb997ad6fbb0d7e2"],["/categories/题解/page/2/index.html","cf011d8ee2627043701c4c844bf210d9"],["/categories/题解/page/3/index.html","fa13190256f67d01e0fe9c1beed47e8e"],["/categories/题解/page/4/index.html","06ff24c0734b709facb193f94d168c15"],["/categories/题解/page/5/index.html","84989e166fadbfeaa10793b11d07d13c"],["/cfdpproblems/index.html","865d19d5b3a13e521c5a197c62bc13aa"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","6643726aad2c44e707a6e43c80bb37d5"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","77f250bb34ad2e2a97d88c2d9ee2aadd"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","2f4f35ddf4f63dd230f0ae2f769c5dc2"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","8cbd662e644735fcbf78a1168e2db97d"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","5c5668234bc40781a38a5326cbfa6d19"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","806971d3b0c1cfe6a9779d074b52a9a0"],["/page/3/index.html","6f3fd23c4d22a741f8dab18ddfab4719"],["/page/4/index.html","5a79ca17e124284809f09c70af2e4218"],["/page/5/index.html","7a547ef7c113d41e4f89999dfb684607"],["/page/6/index.html","7339ef6f6808e35f6cb144d90910ed1a"],["/page/7/index.html","8c2f72c139b753e6e4294a5f6ace793e"],["/schedule/index.html","3fe9c6971630a6a43ce3bbc389b84297"],["/simpson/index.html","44dfa973b56c7c960a8cb631954840d5"],["/sitemap/index.html","41a8bca1a4f10d2b829c95b567f7301f"],["/tags/AtCoder/index.html","253622d4379a9b205c0d41c2bb527976"],["/tags/AtCoder/page/2/index.html","f727ca1e90bbff12fbbc2900743a8555"],["/tags/CodeForces/index.html","6aa7df8aef9046463075460c824d638b"],["/tags/CodeForces/page/2/index.html","36355ff2afdf98ef67c58989f75c8117"],["/tags/CodeForces/page/3/index.html","8e60342eb01d925e1075940fc099d4a8"],["/tags/DP/index.html","4aa73b6525d3a3dcaf85c16abeae65f0"],["/tags/DP/page/2/index.html","a2ddc6f1ba6dfd0bd258a91643eba5a9"],["/tags/FFT/index.html","60a4b6358ca977efb8705d4ff1dda644"],["/tags/LCT/index.html","4df66e28538a7dbd34492549179da644"],["/tags/Lucas/index.html","2a139ce051ede393d429c67d51fc74ce"],["/tags/SPOJ/index.html","33b49af249c9830c0b4758c314fa5055"],["/tags/USACO/index.html","a9b172673cf1f8f4834fb826febcf8a1"],["/tags/UVa/index.html","f1a46e58f6f8f2f70aa6c59156bbed49"],["/tags/ZJOI/index.html","6566bae82049e6f877d6723a04569ed6"],["/tags/hash/index.html","5673656edda7905885c18058d5c78f63"],["/tags/index.html","49269dc8a4efd6842b8f816fc1b8e4de"],["/tags/two-points/index.html","67eea545dcf854bc6e6f9fa85c999690"],["/tags/二分/index.html","27be61d0544040ac1343ad1728511e91"],["/tags/出题/index.html","7557c8a8cd31a203d0a1b27ae7fd3982"],["/tags/分块/index.html","eb4eafe6fa15e6cd1e9d87b5de3c54f4"],["/tags/博弈论/index.html","46ce755a5b7d59862c5d6c97ac04445f"],["/tags/卡常/index.html","9f23041ed3965dc4c24ee1059e50a69d"],["/tags/图论/index.html","6ec65950bc68666bf6a72ad24e09b071"],["/tags/字符串/index.html","7e2a85824c1c40729206d2bcd3fcbcb1"],["/tags/并查集/index.html","554660a3e2f0ad7372ee70ca671b25fb"],["/tags/搜索/index.html","5b5ab4851575dd3ca17456156b5d5672"],["/tags/数学/index.html","1957fa6d8466c089f320474ac99b1deb"],["/tags/数学/page/2/index.html","d487f1aacbfd1f6d7546286119c19556"],["/tags/数据结构/index.html","f61bf1395d9ca75e1dacd31e7a0c918e"],["/tags/数论/index.html","008bb5681461be212f30e6011196bd1f"],["/tags/最短路/index.html","34955bab5a0b76ddba5c08bc3d67dd1f"],["/tags/构造/index.html","4156c562a2d595a8f799fc9e7116ee07"],["/tags/树状数组-线段树/index.html","436c7d0909d852b00d638af4c205ba9c"],["/tags/树的重心/index.html","f0c8528dd3d368f580a229fdd51fb014"],["/tags/模拟/index.html","16883c72ba3bc5c8d9f63833d6dc3aa0"],["/tags/模拟赛/index.html","ea1fab8f72a5eeb4b37c39bbb7d465c8"],["/tags/生成树/index.html","1785344d1e4b42b702c3def3e6802b3b"],["/tags/网络流/index.html","91996be2de3dd3471f95d72ac03bded9"],["/tags/记忆化搜索/index.html","2f8d2212e03bc669ad344eb205fceb3e"],["/tags/贪心/index.html","b3b455cc0c81ec7d3b7e29e0f60eae11"],["/zkw线段树优化dijkstra/index.html","a18328b4b74f4b778cee8bb94d7eb470"],["/一道有趣的计数问题bywzp/index.html","07ae10d93533597482214848d9fa045a"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","78a6875cc51aea788f8cfc8916a9e05c"],["/做题记录/index.html","fc183994b4cb4ce7f484193b7944e9e9"],["/换个主题/index.html","13af4dd5246e2fc431a7df53deaee132"],["/整数分解求乘积最大/index.html","72fa53dc99c06334af6dddf0f42cc606"],["/毒瘤/index.html","8945cebb8f27d658bc6720c959d30e42"],["/浮点数开根/index.html","828464ce42b1a020e521743519271006"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","ed9c7b52827c2b264c661309f96eda68"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","d20d85ac83453ef00dd38920f4545f4e"],["/第二次出模拟赛/index.html","e3e1d40d4691d09795ac504a5dd52ba9"],["/线段树入门/index.html","f884e2b0b2cbf2fc046ae5c33b8bc96b"],["/航空管制/index.html","750505a71343d5a57dbb5f8b3512b7a5"],["/造一棵树/index.html","b028360ddffc493f4469ae8a60d1eb69"]];
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







