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

var precacheConfig = [["/20180524模拟赛-word/index.html","83b389c30b75e3603ade3c94d06f36b3"],["/20190409模拟赛T1/index.html","7f33c7f9fbe88dd8216b56935e87f9b9"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","cf558a9ec8d75897e82dad14f41148b1"],["/CF1045B/index.html","d8d8577dd71d445deb633b18a81e9271"],["/CF1137F/index.html","c15df234879d369cd9f0be160d72970e"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","84a32ed8f533a9bfddbde969fcf47345"],["/CF1264D/index.html","cfc49afab106fac54bacb1403d36508b"],["/CF1288F/index.html","686131bfc841843478e8e7332d972c3c"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","3b607781b2c75072bc5e10df775600be"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","e85d38acf2e70dce09f2aee6a1d371ea"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","852c404e2a0a8c9a37b091155d8b5fa7"],["/CF449C/index.html","bc8c58c3fd90cd5b3ea183b2b61cc6ce"],["/CF512D/index.html","583a4780b7940e32f1ef039de83a6cfd"],["/CF516D/index.html","6857e3abe225755f330aa2e46b885248"],["/CF551C/index.html","78217f5ff188509fddd5fb9d452a0165"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","cf98aede33c3b51267bee1101310385f"],["/CF576D/index.html","d8439de67d2c762a83baa50c6a070e42"],["/CF708E/index.html","289bffe089e8be414f9d676a67103a06"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","6c1ed2e0d57cf0eebb9e00fe10d34f8a"],["/CF875E/index.html","f8401b1be461640ca2bf481c5dbd616a"],["/CF986B/index.html","1614611f9c823480a48f26da0405e031"],["/CSP2019后做的一些题/index.html","c821a490244db23dc25331b7ca9b91c3"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","337204e64c00dbc126aab3a4521cb341"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","703bdf78e2ee0f7474d6c9d02cebc0dd"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","cbf3fd4824bebd804504c99e265e804a"],["/SP1026/index.html","29209c34b9def6d63b5d0021a12d7070"],["/SP4063/index.html","70d7fd542186314767374068c4a7d91d"],["/UVa11600/index.html","3710f8fce51cae82f212f9ff29cd3f6e"],["/UVa12421/index.html","21de2b957a116c846d43ea4af6c77826"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","028da1cedd5f378868bdbb15c164d7e8"],["/[HEOI2015]公约数数列/index.html","278b6e810bd6bad74bf9adadb918b657"],["/[北京省选集训2019]图的难题/index.html","a748d0c6641e8a8490ae320184d7571c"],["/about/index.html","5b7abfd4bdb686e188d79bd6fb71a0ae"],["/agc005_c/index.html","98f351e5a63a7486765e49df2fa6fbf3"],["/agc006_f/index.html","68b8cf1b8672bc22693d36d37ce488d9"],["/agc012_d/index.html","b5ad32f671b57430f235328d3f769cad"],["/agc013_c/index.html","1c0c61b1cd12135549a18e015cde79f2"],["/agc014_d/index.html","5d5ef083c96c3f1e5b3f7d9876354bb7"],["/agc024_d/index.html","0078073bc06d0f1e9965b117e7d7797c"],["/agc029_f/index.html","ec762c63c4c698e0e1548dfafe7f46c0"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","aeb248fe31afb47d630fbc89a78a5223"],["/agc041_d/index.html","7fe5fea82e6beaa37dff832e2bc70d00"],["/agc041_e/index.html","21ed837dc6e45c1f2a67cf85e6d6673f"],["/agc041_f/index.html","35ac0e672ea31146d4d3c0a08a5ae946"],["/agc043_c/index.html","7bb94c9337149d9501a79fe62ed1e400"],["/agc043_d/index.html","87bc17ad04366ae7319d600f530d6dd6"],["/arc068_c/index.html","59d458fd7def7a454b303a1605c3a4da"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","1a8d96e1839b2f06a3974fb7f3d5a0e1"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","5adc665c8f8f25534a8f5686bb5456cc"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","e1124deda19e8801a9386ae43c9168b5"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","e4e257c4d3580c801bb925ef700c4fb4"],["/archives/2018/11/index.html","dd1d1725f15079cf261e9f3f038b38eb"],["/archives/2018/12/index.html","4d17de27b857fd45b85906a4d64b698c"],["/archives/2018/index.html","52df7e2b3700dc5d2d5146b22dc91ff1"],["/archives/2019/01/index.html","33610396cc9f7f47c2947e2e4dfc1423"],["/archives/2019/02/index.html","35e3034b40dab9a9ff0be21cfef2e550"],["/archives/2019/03/index.html","8d0bdb34381528954a3e8aea4e8f4538"],["/archives/2019/04/index.html","378393b74463c44a8020084ee7f10577"],["/archives/2019/08/index.html","940d0f980193331ae3ca6e659a3f86a8"],["/archives/2019/09/index.html","bf667931fcba62300892aaef57eb45d2"],["/archives/2019/10/index.html","0da06c193427a8d6fccfa6fd7384e872"],["/archives/2019/12/index.html","ba214e5ae8581a171c936b03e4a9a385"],["/archives/2019/index.html","8ed9ae8e25df0cab959b2626e74ad090"],["/archives/2019/page/2/index.html","4df53f38b804c0087930ee99197a839d"],["/archives/2019/page/3/index.html","72e005644261d9e8ce3db6724ee488ef"],["/archives/2019/page/4/index.html","d8b879fbc5532cae8c15cca8ea2bc5be"],["/archives/2020/01/index.html","3f91dd8f0bc5a17c813b9e827b704822"],["/archives/2020/02/index.html","e124833a23091a0581fe738673c640b7"],["/archives/2020/03/index.html","19ceb7c4a8fe7a0d96772602217a778b"],["/archives/2020/04/index.html","23977b174b895e15b4edb21adfe49508"],["/archives/2020/index.html","d666397e65b5df095e8beb5b3b4939dd"],["/archives/2020/page/2/index.html","2688c0c978494757b9874e8467665c04"],["/archives/2020/page/3/index.html","4979dffd9497f9cf48620a7ccf150ed0"],["/archives/index.html","343b859823c7b887cf4f183bfee497ab"],["/archives/page/2/index.html","3dd7eac639fed7963c0fa42bba44ca5f"],["/archives/page/3/index.html","3dd7eac639fed7963c0fa42bba44ca5f"],["/archives/page/4/index.html","3dd7eac639fed7963c0fa42bba44ca5f"],["/archives/page/5/index.html","3dd7eac639fed7963c0fa42bba44ca5f"],["/archives/page/6/index.html","3dd7eac639fed7963c0fa42bba44ca5f"],["/archives/page/7/index.html","3dd7eac639fed7963c0fa42bba44ca5f"],["/categories/index.html","677273e820f3be3f42c7e2a8e9aa43c1"],["/categories/公告/index.html","25df38ea97e0e428796ff16047341f90"],["/categories/出题/index.html","fca90f6e1ce850fe9353886f30739530"],["/categories/小小结/index.html","51961243ee8bd45993f6ef037ddb64b9"],["/categories/模板/index.html","1da5045cfba003456e9666b7e979cf48"],["/categories/毒瘤/index.html","faf6a6f7dbc4a4dbe2427182c72ba96a"],["/categories/随笔/index.html","3cd139b02272244cd9d8bcd2cee20478"],["/categories/题解/index.html","835262086d6ea530cd853c6179ce2445"],["/categories/题解/page/2/index.html","7a08bfff6d14588c331c7040f4f64eaa"],["/categories/题解/page/3/index.html","8b33017f19e4a0ea4fb5787ccd672a67"],["/categories/题解/page/4/index.html","f7fcf6c07ddbc9cd9f3ad2646f38bc98"],["/categories/题解/page/5/index.html","ed9023156847eaa7a7b03bdc0ae604e4"],["/categories/题解/page/6/index.html","5bfe46d277c9b885678e73167eb5d05e"],["/cfdpproblems/index.html","17e55b8f0d36b0bb0460290bc1251a18"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","ab231cc25b196a5cb9cfdc98ff10fb8a"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","538edee08dc4676c3f75d966a08e2fc9"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","f91afb5ba74675c04bc961290a7a0e24"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","26012c81978b642cfc8ac2b403886d10"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","31835557d37428295e44d25802cce25b"],["/page/3/index.html","5fe6f1d8586f2a4cea40672e98b47e2a"],["/page/4/index.html","561cb6e4ed99d3240c808270129b21de"],["/page/5/index.html","14be0eaa63ef9d0e6cd954d30d039707"],["/page/6/index.html","47ade847fdf0d4a03a473ce3769913d0"],["/page/7/index.html","74b19a88cde176edb3b9733adba32379"],["/schedule/index.html","a06d06801e0a90391102af217e794724"],["/simpson/index.html","6132a93d8818b7ded96d0f0c666add58"],["/sitemap/index.html","e7c3179053e3453ec6ac3e7cd1a6568a"],["/tags/AtCoder/index.html","62b32bbfebec9e8d1971c2abe9c3fc82"],["/tags/AtCoder/page/2/index.html","f3f0ff393080e439e040ce1a504c771b"],["/tags/CodeForces/index.html","0c965695ee1b6ee7d2d0e9d4143dd97a"],["/tags/CodeForces/page/2/index.html","e950753c508774569d94e97b47d57d99"],["/tags/CodeForces/page/3/index.html","dea87dabc1cf5c1f293e839d2265c685"],["/tags/DP/index.html","a7a9b1160eccc6d9a76d2d60b88d6060"],["/tags/DP/page/2/index.html","04c30dd1c7f0fabb4ddc43662d30df32"],["/tags/FFT/index.html","207b41ffb6e609451385b3b9696984cc"],["/tags/LCT/index.html","5c777113050ca3c2386b5306e3fd8e4c"],["/tags/Lucas/index.html","81bd6aa721328c95bb0f92fe7140cca8"],["/tags/SPOJ/index.html","591e8f312f3ecad41c179f16f8a397f7"],["/tags/USACO/index.html","a31fd025ae73ae443bd67e870920e62e"],["/tags/UVa/index.html","b870450bf97b12a7fd703eb4d77a5dfd"],["/tags/ZJOI/index.html","dc7142c17e9b8a097b65d92c2ee2f7f5"],["/tags/hash/index.html","0a44b3949fcb09c715e6d1ea4880ff73"],["/tags/index.html","c44df173ecffe56d8c246aea249e29f7"],["/tags/two-points/index.html","dc166f1341755110dc3e0e79de9e9523"],["/tags/二分/index.html","3daa17ac7e5cd81037e05291c7898413"],["/tags/出题/index.html","324f86f64c297a427ef55ee829be1b32"],["/tags/分块/index.html","234c3c9c3246341f2cc18dd651a4c8a4"],["/tags/博弈/index.html","3c82428c864750eac7cc026845f851e3"],["/tags/卡常/index.html","2bdddde7ca348685d7246d510a9c7a52"],["/tags/图论/index.html","884106d449e1dc5978025c5bc429dbc2"],["/tags/字符串/index.html","8a92600ce1bc55b3c9775164b44d6cb8"],["/tags/并查集/index.html","b3eac98e12132dc34eff472a015cb6d3"],["/tags/搜索/index.html","60a101a6c354f8f3812f1469e922fa41"],["/tags/数学/index.html","db898ace7585085e2128022466fa904d"],["/tags/数学/page/2/index.html","aa45068c61797b3f4aad0ee8a9863617"],["/tags/数据结构/index.html","bbcc98b618b05e5b29539fa686f8a73b"],["/tags/数论/index.html","9c7630ddde80bdfbd92758181907998e"],["/tags/最短路/index.html","094e540d014c07daa07aa260c1de3ec4"],["/tags/构造/index.html","bb5a3613ee612af1764afdd3c7f5ce19"],["/tags/树状数组-线段树/index.html","a83455eb410b7eda61005c6631a63405"],["/tags/树的重心/index.html","8f8064ab9dc5cdea1c4c19664a84fda1"],["/tags/模拟/index.html","18037843645a5624ae71be68f065736f"],["/tags/模拟赛/index.html","6d8ddf4028c5a6a88d3c65db1808ddcb"],["/tags/生成树/index.html","52afa26b5730edeba6f5c9edf044ffe8"],["/tags/网络流/index.html","97442726248505f716953f85a04d6dfc"],["/tags/记忆化搜索/index.html","08f96e44e55616546034f0e778aab4af"],["/tags/贪心/index.html","98f181fa2bf6882e39f2551d2f84ac17"],["/zkw线段树优化dijkstra/index.html","47fe72cc376bf212e7d412017cc6f32e"],["/一道有趣的计数问题bywzp/index.html","0f8c771db9c6f165ca972bf17ec4f13a"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","fe18ff3f51817fa478e739bfd2a13282"],["/做题记录/index.html","fd5e3a03eb08b4073aee280b9196979c"],["/换个主题/index.html","cfe0cf2973249cb573eb657cca229ed4"],["/整数分解求乘积最大/index.html","f30508f0950b042e7d1e9c77f22f2497"],["/毒瘤/index.html","561c34b3339fb3a444dc27aa7b321fa3"],["/浮点数开根/index.html","e6721be6698e113e4b967617666fc381"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","94902cb127921472d6becd3902bb605e"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","67825a2a9d8a925b2359d9a55216ab6a"],["/第二次出模拟赛/index.html","6ba62e2bc3cc67d78f063387780f53a6"],["/线段树入门/index.html","6ccc04350314bcb2bf35892da23a5569"],["/航空管制/index.html","619197b64daf515479bc469d487c8417"],["/造一棵树/index.html","949a798db091ed99061aa28b4ce072ae"]];
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







