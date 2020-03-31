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

var precacheConfig = [["/20180524模拟赛-word/index.html","95ba37e566bf38019e7c20b885cda4cc"],["/20190409模拟赛T1/index.html","c698cacb2bcbbe47f2e07e8c9919ee85"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","b2073d3ab09952fc246d975d07bdfaff"],["/CF1045B/index.html","17d1637a3ba7259b2f1555dd9288154c"],["/CF1137F/index.html","bcd03fafecd1e07100e8cce6afc56e5f"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","a8c173191d096d720db08d5ab216fcfd"],["/CF1264D/index.html","a5a83fdaad0f7516f7d462c0c85023da"],["/CF1288F/index.html","ba6eeef71d5a203427f5d0006c053b4a"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","1e468065a40e49fd93057e059033ed47"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","1c070b8bbbb03ae784ae10b273f42e94"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","733262900fb31e06e1f7b0129a4a4aca"],["/CF449C/index.html","a5ba08eaa9fa77ddc3ddb04402e45490"],["/CF512D/index.html","5273f8b40f51a4efcc03e52d235b03d5"],["/CF516D/index.html","ba5d5c3020f6b70536c32e8602b56d33"],["/CF551C/index.html","efe00165882e9481af5be145f546acec"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","599a977035c8779f8e5f892ad0030aea"],["/CF576D/index.html","146b74eaf06ee2c462d11bef97ddc3f9"],["/CF708E/index.html","289c4877b8fbdbaabb40c100b951d6c4"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","0fca5590ac829246b9a726ffb8261e0a"],["/CF875E/index.html","59c9d85642aa40df384f4876fd1a9ddf"],["/CF986B/index.html","befc5e54f4ccc311670287e67fcb8bfb"],["/CSP2019后做的一些题/index.html","59fd14c5bb47240ecccfef36132e042a"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","4d0e73786e71ac82fa762128ef61c262"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","97d1a4ec4e208867e72293d90e65345e"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","f5e9cabced322c508bac01d5c22898bd"],["/SP1026/index.html","35d95a33a55194225c07c4f8085aa74e"],["/SP4063/index.html","3c18317f0ec4cc61f14b9a21ba087106"],["/UVa11600/index.html","667ed21e2df36149b515cf045d88b348"],["/UVa12421/index.html","5077eb76892ce230c05ff250362e2194"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","d8ae17228335802cf918449dc2ba24c2"],["/[HEOI2015]公约数数列/index.html","6175d758957bf748b09cdea95d3035c4"],["/[北京省选集训2019]图的难题/index.html","b59ac867f84c16306315d64a620e7d39"],["/about/index.html","c5503b6b57cb7cc18367c1b7303f88ed"],["/agc005_c/index.html","d6d6673c8850074c50d78d3cf0533597"],["/agc006_f/index.html","19004e2f603ffdc4574fed267f701c74"],["/agc012_d/index.html","684926ca4e37bc0960b06b3c72f8f6d4"],["/agc013_c/index.html","e53188750f337342876d4c3854b006d9"],["/agc014_d/index.html","71527d911a1d2038ed5710cd68d4a7ea"],["/agc024_d/index.html","651c2db828c2736c0565dae2572dc60c"],["/agc029_f/index.html","cd386452a5bca27d096e3596a3b2b0c7"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","7f60757f8ef485ffce15db5f71d65dd0"],["/agc041_d/index.html","cb066b459c0f1501f7750bade00af62a"],["/agc041_e/index.html","62a4e17cc88c126c18abd4f6717d9744"],["/agc041_f/index.html","bec9955426a74b8a096bb2174d42fde9"],["/agc043_d/index.html","c32be0c1504236ffb8b301f01f8d86b0"],["/arc068_c/index.html","8f940807be1de5a25388eb9ba323a229"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","2e6bf3a6d1083f60550e2dab811b93fc"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","0452e5a7fecd9d07c578090fb1a6fb8c"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","735a44d7b94e79a46b5c6c5b0324cb76"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","8fc99987dc1e1f46697c8dc0b87ce775"],["/archives/2018/11/index.html","4fa4224963fb8d25fa24b7278e861e5e"],["/archives/2018/12/index.html","9807707b04c4d12830939ea26deef6f9"],["/archives/2018/index.html","c4cd12524fccb72bbb2128c545afe922"],["/archives/2019/01/index.html","4f0dca84458a15eb9cd38f52d6b4afac"],["/archives/2019/02/index.html","f784766da8bccc8e37875ef7e6773637"],["/archives/2019/03/index.html","9b4374873890f669e7dd5268f26d3bbd"],["/archives/2019/04/index.html","b7f6037745ac8facb4d1eeecd46f6f39"],["/archives/2019/08/index.html","4e0329fd9ca5a1288d4769c58e22eaec"],["/archives/2019/09/index.html","25e5be466181a6eebd6e40e56c10518c"],["/archives/2019/10/index.html","d2ebfa695dfeb537c3e036531bbd963a"],["/archives/2019/12/index.html","d68dd85b863f2ffef9d026e57e04e969"],["/archives/2019/index.html","c0c4904998356d9675a310d0401364ae"],["/archives/2019/page/2/index.html","7ca56a52fb4b0628710bfbfc0bb189f3"],["/archives/2019/page/3/index.html","2a517c3f3c289a6a13903f5a10be8e90"],["/archives/2019/page/4/index.html","2434582abdc0f9f18acb6f76b692ee22"],["/archives/2020/01/index.html","a20ffd224158118baa7bc1f7863ed437"],["/archives/2020/02/index.html","4452434ee9b1ab5d00f93a4ae6b6a0f2"],["/archives/2020/03/index.html","ba4e4ea271209df62285240137d6634a"],["/archives/2020/index.html","6e3b5e3915295e2f59e8509d07cf217b"],["/archives/2020/page/2/index.html","6f326484b2bb40fac1e44eb30943b0ed"],["/archives/2020/page/3/index.html","47d68cc59f620e55e4c25d715874e1f0"],["/archives/index.html","be33b88d7f6cdea79ad5454ee88e8fb0"],["/archives/page/2/index.html","9135ba499074076c20646eb2dca07b00"],["/archives/page/3/index.html","9135ba499074076c20646eb2dca07b00"],["/archives/page/4/index.html","9135ba499074076c20646eb2dca07b00"],["/archives/page/5/index.html","9135ba499074076c20646eb2dca07b00"],["/archives/page/6/index.html","9135ba499074076c20646eb2dca07b00"],["/archives/page/7/index.html","9135ba499074076c20646eb2dca07b00"],["/categories/index.html","54bc5ba795b1506174afc552cad7cf8e"],["/categories/公告/index.html","a3bebc8fbe2da5f884b96e4bf19f6ffc"],["/categories/出题/index.html","49827cefc4685ba5d91f18aef27f2bac"],["/categories/小小结/index.html","b954c89f532e5c80721600b9e0f9fed7"],["/categories/模板/index.html","2b436e769c18355851c0d92eef055b3f"],["/categories/毒瘤/index.html","d8f3c07a4ae26373dbe4e502c14ada75"],["/categories/随笔/index.html","cedd2e27c71a8de28816cd8c2640f169"],["/categories/题解/index.html","5ea4710bd1cb9c113461399957b4aee7"],["/categories/题解/page/2/index.html","f72d221f67bb4ab9013400e8f9422e1c"],["/categories/题解/page/3/index.html","935f0935079d8ca4a5fb130f0e743ce6"],["/categories/题解/page/4/index.html","d77a80e820f7872cae2c12536c3f4276"],["/categories/题解/page/5/index.html","b47d44c2e089c2cf4e85846acd7b2b83"],["/categories/题解/page/6/index.html","68faca8555efbe7d26354e87bcff75c7"],["/cfdpproblems/index.html","9d2d1b4e38561f8bf99d9c6f886cb4bb"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","4eac8b718b158619c222c885a6461730"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","2fa13f39d124306bbea317d4d0fc04e2"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","6324f7910d4f9991eab9ad8844801e03"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","0a04c9087eebbc6f8c0d260cbcb9085c"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","ec9cb3f5257ee54de6b697c9ca5bffa3"],["/page/3/index.html","043a31e4869d4f1b3a060c666b5ea840"],["/page/4/index.html","8bbcfef9a91f230c34a131f3d6549ee4"],["/page/5/index.html","d13a44302f823743333b065184f61327"],["/page/6/index.html","81c8ad290b3a0efc3911f9e06d10baa7"],["/page/7/index.html","0ba005e53282928c7bc79cab2b929e79"],["/schedule/index.html","b0d260134723a214d04d6c5e5641ba96"],["/simpson/index.html","294c685a2b61eecfa4293d46a3fbd3a2"],["/sitemap/index.html","db4d94b02df20b57af35b332b7bfb2f2"],["/tags/AtCoder/index.html","8af2b43ba2b2f2da258871bdec046953"],["/tags/AtCoder/page/2/index.html","cfd55e6a83ef841549a45d742d4f9967"],["/tags/CodeForces/index.html","a4b40eed9a5809b09bcb3f607c10dda4"],["/tags/CodeForces/page/2/index.html","ffbf10a51b3d338de3f0fd46ee12ac06"],["/tags/CodeForces/page/3/index.html","cd54ec8acffbc965af7178c02d82f730"],["/tags/DP/index.html","e79fa0b34b94fe40b23d0a631bddf9a2"],["/tags/DP/page/2/index.html","605c9cf348bbfe8fe49faf3e65d4b801"],["/tags/FFT/index.html","e42d1349d1e4163cec250bf0f965445e"],["/tags/LCT/index.html","6fec27e3905d04d5f58ba4de82556c96"],["/tags/Lucas/index.html","320f2f2a31750e7f8f05a9902b42c49b"],["/tags/SPOJ/index.html","74a16fad441091f53ae704da2a1da6d2"],["/tags/USACO/index.html","8ca581bd500381ecfd1da36bdf5078b7"],["/tags/UVa/index.html","2b7b2ea72d5fcebbc858d21647a61eb3"],["/tags/ZJOI/index.html","49beae45a70f40baffa2e48db2643900"],["/tags/hash/index.html","dff3c6d6c4b09ddae209512cab46b9c1"],["/tags/index.html","8f86ae3bf23b5a0a780348ab361cbcff"],["/tags/two-points/index.html","0a6fe4a65b5cf7bb7ecd9a3ec8531abe"],["/tags/二分/index.html","dafb2bf82d1adb00a1038c6d1337bf15"],["/tags/出题/index.html","17b92c33453735377534dc6e3e8d7bfd"],["/tags/分块/index.html","65b3b43ea4a280b19635e592c9b15e76"],["/tags/博弈论/index.html","32c4f50b9e28ac68a520baddaf36d56f"],["/tags/卡常/index.html","742eaed2dbefe6ea8fab65a028bcad73"],["/tags/图论/index.html","29e68169b674025ef0a46687af5cb398"],["/tags/字符串/index.html","f2297d16e1527fea8c45523a75911f3d"],["/tags/并查集/index.html","bc54bc0cca2d8bba0bd389916f3c313f"],["/tags/搜索/index.html","2a3a220f54a39c5e152bb95a723dad61"],["/tags/数学/index.html","d351f4faab844de8f8b5c3c238d00566"],["/tags/数学/page/2/index.html","25e6d79c893d830a4ee7dfc04644ae88"],["/tags/数据结构/index.html","d845552958f036f4ce691f669a673402"],["/tags/数论/index.html","ecad8f38b2d06132e5a21f79663e8f55"],["/tags/最短路/index.html","003906fff6badef59ab2448c70a41afa"],["/tags/构造/index.html","e72aef5464558b75971a2ce127b6d814"],["/tags/树状数组-线段树/index.html","af6b7df921202f9ee00480395c7ffbfb"],["/tags/树的重心/index.html","e811367150b382988f12e0450928dce6"],["/tags/模拟/index.html","a46ef1425a5698d221808216d906ca85"],["/tags/模拟赛/index.html","5437ed3ca0754fea9593260f4a306125"],["/tags/生成树/index.html","1f1a81e3a767296e038531affba78768"],["/tags/网络流/index.html","97e889244140f66b800ff5594ea44898"],["/tags/记忆化搜索/index.html","4d1e7d8bf3e4b3d5ca87d92d2fe9c9c2"],["/tags/贪心/index.html","c717103c0c154d4c793cbb426fbc4aff"],["/zkw线段树优化dijkstra/index.html","4dd4f8128e948dd5b2c61a3145d50a42"],["/一道有趣的计数问题bywzp/index.html","ff4342ec979813edb47601b6e71124d3"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","366294f7bb9662ae78448fe7f492856a"],["/做题记录/index.html","0f38f71b2f96a22d6cfef669f39d9444"],["/换个主题/index.html","f6d53a7bca909641cefa3f8a776ebd71"],["/整数分解求乘积最大/index.html","2fca9afedbf3a14d033bfc5d36b1d7b7"],["/毒瘤/index.html","6a92f9fb0c290d8a1373226d4a75da76"],["/浮点数开根/index.html","477016396f71d84690bc3ccddcffd74c"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","1e7a43a5bd3446bc4b29330c09e49a76"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","9ffd0f9acb9089da1d9960b397257f32"],["/第二次出模拟赛/index.html","20afae29100bb643685cd6683d520f64"],["/线段树入门/index.html","a580cc556b518d158a39bcb7ff17e0f1"],["/航空管制/index.html","0f6f47c39af89dcfca15a0f7abc6d361"],["/造一棵树/index.html","ef5f0df58bfd840757459f84e2b899eb"]];
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







