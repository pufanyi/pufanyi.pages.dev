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

var precacheConfig = [["/20180524模拟赛-word/index.html","9391bc5c9a60664bbdea8a63e7d510b3"],["/20190409模拟赛T1/index.html","708f7e5d53dadfbf1653d4e0125ba7e4"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","662f06dd66284c67746667e73e5264f3"],["/CF1045B/index.html","e5a197c601884a20aeb5cfb1057eb5c4"],["/CF1137F/index.html","eab89f9b736162d185d3eab26be26500"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","ad48f903d2c097bb574f54d07284b4cd"],["/CF1264D/index.html","4e2da70332272f10c3bd902a6bdb5d35"],["/CF1288F/index.html","0bb849ec0509b2bb8b9bc27edb2ae12a"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","c649d8e28cd16aeafa9ccb9b9a0822d3"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","8d1b647678484b8725abe4d076231531"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","9df4effcc72ae698843c3e2ed0d387a2"],["/CF449C/index.html","11f4295fa2d666f15196ee96165be328"],["/CF512D/index.html","8633cf3fc2cf41af7fc6a965643992c4"],["/CF516D/index.html","52d35416caaef71fce23f63ac90ff66e"],["/CF551C/index.html","dceeb21635b52f4771cbe71869a1b59d"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","19a8f1cdfd4618b0370280a5ae12979a"],["/CF576D/index.html","3a500f65eca47f16b39f33df91af9c94"],["/CF708E/index.html","3087981bd26da1b4f251a10dd7b166f2"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","16ad59dcd1ddcd6f74640fd2e5d2bdc7"],["/CF875E/index.html","7382b7e7daa4bd7f2b4fae8de4e3449e"],["/CF986B/index.html","1f5b7a1bf7546d816c10dab775879012"],["/CSP2019后做的一些题/index.html","9e39bad619fe8861469db23d754a32e2"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","504795c258a51c8dfdeb914f18735d9f"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","4ec0afe83b2fdfe1d31935b83407b7f3"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","a478d9e047d1c47f2c2e2f9cfbe51cf8"],["/SP1026/index.html","a1b873b3dc0a43f1dd4115eb0790d79d"],["/SP4063/index.html","1c1c565aeb872bef930028138b4ff27f"],["/UVa11600/index.html","c3a7878a053bc6f99d0ac3c914796860"],["/UVa12421/index.html","d701527620b383822379471d23222eda"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","966af993ae670c5903d265cc7759e561"],["/[HEOI2015]公约数数列/index.html","1af443304f1cb4dbfb0a3c83708c98d6"],["/[北京省选集训2019]图的难题/index.html","51ab78de3a68e5c133531e946822f21a"],["/about/index.html","e7c61da287bb0e191f29f0772c6f1b54"],["/agc005_c/index.html","f2c19084b1a2221e4fbdf9f7ad23c525"],["/agc006_f/index.html","c2d0077d6772d7482998ae62365368c3"],["/agc012_d/index.html","141d4bb5ba5681e718975bb3be32fd0e"],["/agc013_c/index.html","9f679e4f58caa6d1f3497aa325946512"],["/agc014_d/index.html","112fbc3b1c65182c42826b782b261e15"],["/agc024_d/index.html","af5ed411264eea886e15b3243e33cf73"],["/agc029_f/index.html","b86d4b2f66f6df53b23fd3f6da9168e1"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","9f536b8b6bfbec59b4ddccccbb2d6a8e"],["/agc041_d/index.html","dba15456410e4e0f257c49b294714720"],["/agc041_e/index.html","ee84df887c382f6bfef27953327b6dad"],["/agc041_f/index.html","7ab4a1b38057f0f0906fe990869487bb"],["/agc043_c/index.html","24fe68af27220df24896031da603772f"],["/agc043_d/index.html","504f77dba3457f09efcaeb91f590f1b0"],["/arc068_c/index.html","d474fd3f9a776d868b7a266f3bcd2c0b"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","b349f6fe41eebd1973634cce6db742ca"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","41111865e3d8f4f7fc162b7f077e5d70"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","f5ebb289978fde5a6c4852b5d4060f9e"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","4518812a8855f7f3de32ed5d0facc54d"],["/archives/2018/11/index.html","9dbc3cb8249c6e881a337cb02443a1bd"],["/archives/2018/12/index.html","ccb854ac9c00841da951cd1c85176585"],["/archives/2018/index.html","57d4c4a53615c32282046b9e372ac93c"],["/archives/2019/01/index.html","5415cd59864feb1548d2da26deeef7bf"],["/archives/2019/02/index.html","66bb1ebb713a03bd4b51c60025feaa3a"],["/archives/2019/03/index.html","11daac5d664d3cd04c4e51b27d6bf658"],["/archives/2019/04/index.html","d431a3642cb610369be19d32ad335c3f"],["/archives/2019/08/index.html","6ee7817ab54305caab9441eff3c398d7"],["/archives/2019/09/index.html","48f2ba15b1c150d78c6e504e7617c3fb"],["/archives/2019/10/index.html","796b0a5dad94a32757c222df38fe73b6"],["/archives/2019/12/index.html","c88c34a9e809c1f99c6ec09b84268d38"],["/archives/2019/index.html","017a21b4ae029209d8b97fb02808948a"],["/archives/2019/page/2/index.html","6e525b4e8085a1ab02fa0124a2aa2261"],["/archives/2019/page/3/index.html","f2a3792a674c122cdeb4081240b7af6e"],["/archives/2019/page/4/index.html","223bda1bc750ba4e5e9eb8e329312973"],["/archives/2020/01/index.html","7c24592d4b9ef817fcb2bebcc88df9e5"],["/archives/2020/02/index.html","57585c32051c20594994b17399b3fc33"],["/archives/2020/03/index.html","8b87146e676bb79b9754335f2f5bcaa5"],["/archives/2020/04/index.html","4b6db0b23569f6148b3b6ca35269ca6f"],["/archives/2020/index.html","a1d9a716e0066875166f81450dbef2b0"],["/archives/2020/page/2/index.html","67aa7af1dee9715d78afd35168bcc0de"],["/archives/2020/page/3/index.html","43aba3394790bacf104f5a125791ba6a"],["/archives/index.html","b26690fb71948edb6ae224615964e9a7"],["/archives/page/2/index.html","3eb89ae7fc26a158e9afcd1e12dd71e8"],["/archives/page/3/index.html","3eb89ae7fc26a158e9afcd1e12dd71e8"],["/archives/page/4/index.html","3eb89ae7fc26a158e9afcd1e12dd71e8"],["/archives/page/5/index.html","3eb89ae7fc26a158e9afcd1e12dd71e8"],["/archives/page/6/index.html","3eb89ae7fc26a158e9afcd1e12dd71e8"],["/archives/page/7/index.html","3eb89ae7fc26a158e9afcd1e12dd71e8"],["/categories/index.html","5029ada57957c932427ee80503c63ed9"],["/categories/公告/index.html","4da7a6f2d37b480eade0d391dc8ed6d2"],["/categories/出题/index.html","d8205f329fbe0613841f0c22ef1806e0"],["/categories/小小结/index.html","52afa376a4ba48ec68fbc652b354ce96"],["/categories/模板/index.html","03ae5c242052868f3b930bd4efa3de9f"],["/categories/毒瘤/index.html","a61c92559f85e87ae2b7700f9c9bc34c"],["/categories/随笔/index.html","25c153e8cf01ee6d90da0fb297af47c2"],["/categories/题解/index.html","95ce531baf6453dfcf10136a6ebe08f8"],["/categories/题解/page/2/index.html","1be31dc7f411873e2de0331e1013817c"],["/categories/题解/page/3/index.html","339e69307f69441c70b5a0ee857be4c0"],["/categories/题解/page/4/index.html","6bef8443ba3bc763983d8185c31f3b44"],["/categories/题解/page/5/index.html","f95f88e32ceddd6d3c6e401d42233ff8"],["/categories/题解/page/6/index.html","df3d74e311b6e3006bed32c1fc334c6e"],["/cfdpproblems/index.html","fd52a0fa360067d562e06fadbb248164"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","a62b84c7c1c9c2d3bd9ea8cd778d3166"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","77e7ce848f0aadf3349f7b8436b752d8"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","95cc285d3b207d04f4edc96deac6f2cd"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","65dbf403b8b017caa5d9785030d4b900"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","129c56bf41752ba6e6fd672ad51d7f83"],["/page/3/index.html","0d8bfb36599066254314071ededc612b"],["/page/4/index.html","7f8804d299f4cd707dd5933af5a579aa"],["/page/5/index.html","4c939a99d417d4d44c5f0992e5113c9e"],["/page/6/index.html","44acf2b0bcfa13346a352676431c691b"],["/page/7/index.html","50643e3e802313eaf7e55f75898b118d"],["/schedule/index.html","51847ccf6e0bc38719adb0278d964882"],["/simpson/index.html","ca223a4ba0cc5ed502495ed1ee7033af"],["/sitemap/index.html","16678fd7d549e815852e929883fd1ac0"],["/tags/AtCoder/index.html","93e3f9f6ba99b2b24fc97a66abcb2785"],["/tags/AtCoder/page/2/index.html","b6b8eead83d59e14e8f544c18a200018"],["/tags/CodeForces/index.html","7aa59ea6948712c23557e609218247a4"],["/tags/CodeForces/page/2/index.html","5121683a2963948e374cf46aecd09693"],["/tags/CodeForces/page/3/index.html","d6f252660dd6f6e2c31481aefa20c375"],["/tags/DP/index.html","fdf21896736eba751214548b5f1ea4ae"],["/tags/DP/page/2/index.html","74c47cbddc522d50c18f8911f72f78b5"],["/tags/FFT/index.html","d11ddd64d1865681006c50085e3139a0"],["/tags/LCT/index.html","8598c680816b4cb1d19b6c5c23e91c7d"],["/tags/Lucas/index.html","a7d934b4c48af173bd507e90a4ad32a0"],["/tags/SPOJ/index.html","2b0dd392ad15bdde178aa255a4d0366b"],["/tags/USACO/index.html","b82c6b7b4ee719a6ebef68fc7a6f4ea0"],["/tags/UVa/index.html","d31c9d59bc34a7e65ce0aa0f3b90ed7d"],["/tags/ZJOI/index.html","e942039b1c5cc6066a92681e47b5b508"],["/tags/hash/index.html","df44b956b9273a0c4c0235e40819ebd0"],["/tags/index.html","b32d09c1d346d48c8010c1e038611353"],["/tags/two-points/index.html","fd661087baa8b56b2b652f76823d3411"],["/tags/二分/index.html","2756da723947a7ee9a95f4f4849573ae"],["/tags/出题/index.html","ae4b5809e73f70bc82beb86acd79749f"],["/tags/分块/index.html","f96b539cb1c6b445aa862bdee9e439ce"],["/tags/博弈/index.html","f99325f6a805a7e97f8a027259b13e7b"],["/tags/卡常/index.html","cd7f63038ec575129ca05a00ca142b7b"],["/tags/图论/index.html","9932e8902e71db87bd335cfcab171f9e"],["/tags/字符串/index.html","1d9b26b01edf96f4051b6b4bea68f498"],["/tags/并查集/index.html","a0b342d50eff64738903b507a62c77e5"],["/tags/搜索/index.html","baba29d417c824ee226119f53e19b8f9"],["/tags/数学/index.html","89d139c87e7945c17006711691817254"],["/tags/数学/page/2/index.html","8efa359b6b8949375cbed2a85bec8119"],["/tags/数据结构/index.html","085d1759ac122eff5e038bc6e66cdc84"],["/tags/数论/index.html","2a7b7ff7596dd096cb640719696604e6"],["/tags/最短路/index.html","6c641875b3dd45373a009ade6e62a1aa"],["/tags/构造/index.html","1075a5288bf58ea895d413726cebd41b"],["/tags/树状数组-线段树/index.html","75fef67b6a78b026721de633c2b5d87e"],["/tags/树的重心/index.html","2a278fd7c50982c8e605460a25143847"],["/tags/模拟/index.html","dce712317d6bbe1224591e729d5b62bb"],["/tags/模拟赛/index.html","7937832509ec9ab6994a35973e0be948"],["/tags/生成树/index.html","10c5a8adcea24f01dfdf79900005e967"],["/tags/网络流/index.html","98d7c5b1ae9ab8e0b51a45b62d2290df"],["/tags/记忆化搜索/index.html","11a27677b28440bfba6213371fa3323e"],["/tags/贪心/index.html","0f66791fc8619a94b53420c7e9d87ea9"],["/zkw线段树优化dijkstra/index.html","0f262d035988d61fadded228d5faaa81"],["/一道有趣的计数问题bywzp/index.html","d2e69f909e3bfb273b85e4e1d875b8c2"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","5129bcdd1184a4879264f8119609b068"],["/做题记录/index.html","2e2fb5b4bed23d1625dcf8138fc6add3"],["/换个主题/index.html","e44bfb685031a5188074cceeb27866e9"],["/整数分解求乘积最大/index.html","aa88a666d73e3912f38832a2666b74d5"],["/毒瘤/index.html","cdae94d0d1fbb37add3289f16e1b9f5f"],["/浮点数开根/index.html","c84fd701fa3db62537b165a9e9c8af4a"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","45634ac5eeed529ddf73c18e346387ab"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","1fbbb487e3c63be4a90f904fde6853aa"],["/第二次出模拟赛/index.html","d1d2378fc91361d2abeb8cfaa11e114a"],["/线段树入门/index.html","d1b39380bc7425a587f11284cd4a2ea1"],["/航空管制/index.html","24bc3370a97c0477572c0b22a2fee33c"],["/造一棵树/index.html","8fee556f8369c058827710c3708acf0b"]];
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







