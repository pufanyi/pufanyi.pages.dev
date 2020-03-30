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

var precacheConfig = [["/20180524模拟赛-word/index.html","7b8d2e96ee3f8de64f2a89ce4e59a895"],["/20190409模拟赛T1/index.html","b9ecbb285cb6191f9146b5e9f838f45b"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","1f3401e2c10991be6ba52b922e2ea4e3"],["/CF1045B/index.html","de460a7d5d18a44fd6ba2954f8d87cf7"],["/CF1137F/index.html","2c27ab48d85892dc2bd269ecd9cc0226"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","f0209b02f4c1c3e2d989120cc1826031"],["/CF1264D/index.html","be2f755052e51c34eb45ca538739c944"],["/CF1288F/index.html","6dca7d2600b5ce43c80d875b493c9ee6"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","47700e07e47b360a25edb3c4642f5a4d"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","bbc7ea5cbeb5b1cb1231389d78d8cb92"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","70bbb2710529cb9642fd12ba19b04ef5"],["/CF449C/index.html","856d994291da5d07818462e5674be9b5"],["/CF512D/index.html","4c18b61c9d172e8d3307b1f5c69923fc"],["/CF516D/index.html","b58eb1318461abf594028d9ac53f48f6"],["/CF551C/index.html","efdb84f1d9cea78ec031186f5af5c100"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","07ea8be1294de34ffdbcbcc75abaeee8"],["/CF576D/index.html","e7ae8ef8351aa8ee07bd1f30fb2ef2c3"],["/CF708E/index.html","30fadbc890fb193608b625ad93733c4d"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","ae000fbe305327d7a311e40e13b5da0f"],["/CF875E/index.html","6e2f143ffa591d7f6815ee9aaad8bf55"],["/CF986B/index.html","f354f0bc50d3dfeec220583fe27b0eee"],["/CSP2019后做的一些题/index.html","53ef77f4c48c09c3cb9da9e36f9847e5"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","c063d05475ad50b8b9567c49e175fa3e"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","8f07e72e51c7907a7903636f0f7e6f23"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","6a289a2252d542471392268b312f0d56"],["/SP1026/index.html","46d700e97656adf5a5c579114a76b4ca"],["/SP4063/index.html","3197b95763f8bcfb22e620e4f8f4ac5d"],["/UVa11600/index.html","b2c985e89b1c3cc8ef1ae8e37c78109a"],["/UVa12421/index.html","f61b5bc9539e7d3fa21478f60c115cd5"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","8528636b48d8bb9b07b838e01ef11901"],["/[HEOI2015]公约数数列/index.html","77c8b770607a44b03b7da3038aa76ed9"],["/[北京省选集训2019]图的难题/index.html","370170cadac47d71559f4934982719ff"],["/about/index.html","fa23cc1e17301e637dcde85abeb1c11c"],["/agc005_c/index.html","c193140c4c274b2327efaefdd33ab45e"],["/agc006_f/index.html","33226a38f59f6055901d3121041bdb19"],["/agc012_d/index.html","f2fea0eb172703a6eaeb8fafc22f0b65"],["/agc013_c/index.html","64c82aa3b98f9887f912293349c76635"],["/agc014_d/index.html","f30689c31e673a502a13d1bd0aa07179"],["/agc024_d/index.html","fa08f28090682ce9b67517c948529510"],["/agc029_f/index.html","cc6bd6b969ad8dbc808e6d2e45e5e18c"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","6dc39360f4ca48bcdaae874ecdd85067"],["/agc041_d/index.html","5388c08752c25bbe5358978deced5049"],["/agc041_e/index.html","d9dffc88687ddd77bb4244f04a384ef2"],["/agc041_f/index.html","fda3dac69d958c117c166322a6a02ae9"],["/arc068_c/index.html","a206f16f50ed5bea72ef2978a26ebbb5"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","297f057a7657bb773275e90d175f5826"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","e77de5858aeb499d99e42674bf5994a7"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","5c70acebf2dc060c1acf96299c7a56f5"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","1e89cd183b1823e9942a2be7a9721911"],["/archives/2018/11/index.html","870bde0c592067e21da8ed8334d50903"],["/archives/2018/12/index.html","3b7884179acda94aea033cf27731bbce"],["/archives/2018/index.html","5b2555294c57099a091652f4278c4de7"],["/archives/2019/01/index.html","db4e8f3633780baeea3cdc951790acb2"],["/archives/2019/02/index.html","68c9625c6c19eaacd05a2ffdbe66bba2"],["/archives/2019/03/index.html","58d909e0fa2ebf02c46eafb054520d78"],["/archives/2019/04/index.html","9ac8069fb73de031d04bda1cf4e1cced"],["/archives/2019/08/index.html","dfe93033d634c445682bd8b58464f42e"],["/archives/2019/09/index.html","e6fc2fed148d8b1409608e85be94872b"],["/archives/2019/10/index.html","3cd23dfb63403084872477e3b664880c"],["/archives/2019/12/index.html","825e6b7c5b9c2beb30f1e803ec8f3056"],["/archives/2019/index.html","48cbd4d52441aacc380df52131a486d2"],["/archives/2019/page/2/index.html","63ccb8e4868a818901d14310d99a7d73"],["/archives/2019/page/3/index.html","90275f6dea1f39fae1b4aa036963bfb5"],["/archives/2019/page/4/index.html","af9f69fab87ad4caa6b3f10247fa3d64"],["/archives/2020/01/index.html","86dc11c40c622810241e8689d46450b7"],["/archives/2020/02/index.html","39ece88b594cc819ff3b32cc6a6778b6"],["/archives/2020/03/index.html","b6ec12f4924f8a31469ae383e9488938"],["/archives/2020/index.html","ffbc4ee87859609851a153051d5b9c94"],["/archives/2020/page/2/index.html","38ee222fc12ab73448e3db723f1690c0"],["/archives/index.html","e84b29ee3cedc407b891a89b1a17045b"],["/archives/page/2/index.html","ec35bb09ccb09341c898170bf9368564"],["/archives/page/3/index.html","ec35bb09ccb09341c898170bf9368564"],["/archives/page/4/index.html","ec35bb09ccb09341c898170bf9368564"],["/archives/page/5/index.html","ec35bb09ccb09341c898170bf9368564"],["/archives/page/6/index.html","ec35bb09ccb09341c898170bf9368564"],["/archives/page/7/index.html","ec35bb09ccb09341c898170bf9368564"],["/categories/index.html","a7c016e22b782224f17d1803ad127154"],["/categories/出题/index.html","bd1aa1edf9f15e8c9a4dcf96bd2c1e05"],["/categories/小小结/index.html","0a671e859bbf9941eda2cd875b58b9d1"],["/categories/模板/index.html","84cd58c275a1d9f261b32bd9f5f4d4a4"],["/categories/毒瘤/index.html","203e888251ac69d515e74941d959cc36"],["/categories/随笔/index.html","5075d88dc4d4fde73fc3710e3f8ebddf"],["/categories/题解/index.html","a9c3cfa9e11f96affdfa29cbd24d9d70"],["/categories/题解/page/2/index.html","482058ae649b35c4f14738110c48c967"],["/categories/题解/page/3/index.html","15259c234071dbc059f0a028d1284b5a"],["/categories/题解/page/4/index.html","d55c1f9d09e610c949cbcb8dffb821f5"],["/categories/题解/page/5/index.html","ac9886e9f8e3bc1c3a921526c7aa1dc3"],["/cfdpproblems/index.html","5b60730bcc0d5b15f18fd46554ee58af"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","ffe234985fcf386ba8a0b27960db006b"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","3d945949a12a42dafb46121fe7ea87d8"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","eb99057e6016c9d568684df0d2d364d1"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","ece7df92804f5836c93762c36e147057"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","24e8941f401586129e20d2ce6d537ed1"],["/page/3/index.html","dee44a355007d328025c466ade47169c"],["/page/4/index.html","d5b97fa25ddd3d550a2d3c5acaa28edd"],["/page/5/index.html","144b7e78700c2cda1513e2a7308af47b"],["/page/6/index.html","277b64156b598e82c407ff79809008a2"],["/page/7/index.html","79ec614760af4e72f4f791d1fb98b4c7"],["/schedule/index.html","5b7eb1ad1c7539cd341ca8abe943bd91"],["/simpson/index.html","6ff00b3b6503fac5365b865c1b4bc434"],["/sitemap/index.html","5f1f26ade70e893a511d19a9bf73db08"],["/tags/AtCoder/index.html","0b917dd73df04df3621f691c3cef721e"],["/tags/AtCoder/page/2/index.html","182508887903e8833a4478ae705a6bcf"],["/tags/CodeForces/index.html","8d12199973d5e0e485d8a5dad4c8189f"],["/tags/CodeForces/page/2/index.html","94a08a7f3d62e54b4ff5d62b37a30ec7"],["/tags/CodeForces/page/3/index.html","624427a332366da51ce8f9c944d79c1a"],["/tags/DP/index.html","9183b6127acbd4ec3efad07eef367c82"],["/tags/DP/page/2/index.html","aa2760f3408b86a3af82d6c01017d68d"],["/tags/FFT/index.html","5424cd1cf376c413c652b7b6c1f33028"],["/tags/LCT/index.html","367b85463ac0eacb0ac7817c1c2e7bc7"],["/tags/Lucas/index.html","e6ad8a48a1d2c3504cabb163131e3843"],["/tags/SPOJ/index.html","9c752f33755b8a8d7ffced69c6ca7417"],["/tags/USACO/index.html","ca9619f891f94c9883d61a9dec3fb97d"],["/tags/UVa/index.html","b00c8987f6ed2308c8da2c064fd8fa32"],["/tags/ZJOI/index.html","cc3de0821496a6b569de017a312dd092"],["/tags/hash/index.html","042383dc361057d60bfb756fdfd0fd8c"],["/tags/index.html","dd09e8ab87c8c1a9bf4bde31715aecdc"],["/tags/two-points/index.html","65cddfe33e6af413d252076ac8535da6"],["/tags/二分/index.html","2cb8c38373de30b8402003811341c040"],["/tags/出题/index.html","ac61f11a548b667d2f7a4a5ba020805b"],["/tags/分块/index.html","1e0902aa93c07ef4a7b9377511c6056b"],["/tags/博弈论/index.html","d2a95ce71ac21f383d35e45528df4b16"],["/tags/卡常/index.html","470176854abe10dfd0474cc72f2a7271"],["/tags/图论/index.html","9289c3f243283e73d49e64145ce4256f"],["/tags/字符串/index.html","ec2835afc0d8800f29275bb30ec78336"],["/tags/并查集/index.html","c82c7da0939e4bd8d6814bb4ef1a993b"],["/tags/搜索/index.html","c249f86681fef246be58e2f755671fc6"],["/tags/数学/index.html","8c7a637cf2df5d80099109461d28abd0"],["/tags/数学/page/2/index.html","f6b309fb7a230d4c61020b1471b424a8"],["/tags/数据结构/index.html","ff9077ad6d1f5febb50cbce347e2afaa"],["/tags/数论/index.html","f353f18f5bdf783e9039708a0f7c0be4"],["/tags/最短路/index.html","2651922b410e1503f5d05fb58e13da79"],["/tags/构造/index.html","3744b02aeb60cb96b10e41b61c61ef78"],["/tags/树状数组-线段树/index.html","d9b436e66200888223c2ae1c78261b69"],["/tags/树的重心/index.html","0c82ff316386f7ac3d607581e5a84abf"],["/tags/模拟/index.html","0dd6a0020b6c7287d8e6afdd5d47e5a1"],["/tags/模拟赛/index.html","17390ab0ca6e309113f75bb60124b02a"],["/tags/生成树/index.html","395cfee6d1f2c7b2b50abd9723a1d357"],["/tags/网络流/index.html","1af8c875c9f93e28637805edb19afed0"],["/tags/记忆化搜索/index.html","8029165272518f02374baed62c187ba8"],["/tags/贪心/index.html","0b0e7dc946a9d3d2e485927f6176af40"],["/zkw线段树优化dijkstra/index.html","0a30f7f082d07f27ed4f78c250fb59a3"],["/一道有趣的计数问题bywzp/index.html","9426c6f2ddb9debd7145ec168961fdcd"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","4973e4baeb8bd4acbb1ff1c8d449d683"],["/做题记录/index.html","a44f387dfaf109bb9650a439d89601f6"],["/换个主题/index.html","8249ccde173fd0c969317ea6e30102c5"],["/整数分解求乘积最大/index.html","be0f0b531009ca5d5e115af21c9f7e9a"],["/毒瘤/index.html","0891da08745949669b2cf885fe08ae40"],["/浮点数开根/index.html","781fe33d9136b7c780839a7b1dfbda7c"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","04f81bfb09ce54dae84f0ddaad1c7894"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","318f1b783ed39a4f3dd8b4bf924254fe"],["/第二次出模拟赛/index.html","239eb37a2f8689b9d7b2522fd2326dfb"],["/线段树入门/index.html","320a7a0bd94bcfc69c3b86aa2f9dee7f"],["/航空管制/index.html","49779a7e8de4be7585aa8333b8abc572"],["/造一棵树/index.html","7f36745d12b1d49550bdc54c606cacda"]];
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







