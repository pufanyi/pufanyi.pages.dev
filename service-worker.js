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

var precacheConfig = [["/20180524模拟赛-word/index.html","b782e8dd2ab91438df63b77a5321a5f9"],["/20190409模拟赛T1/index.html","9f8cb1521fd2a1b2a45547fefd6a5014"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","9b1046d6c74081d5ecb49dd8af81524d"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","e49addc08e0cabc5a95ab7c1170add1e"],["/CF1045B/index.html","ad10bc893492b601061a2aa6725232af"],["/CF1137F/index.html","847b75b3988c5cab0cf22374ccce21f8"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","6adfc132f782ff974c51f616f111e338"],["/CF1264D/index.html","5de98d6b28f6c102ae872005bd1b88f1"],["/CF1288F/index.html","3cc19279623ba8b21d126c2dbd286be2"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","ce35b6258327bdbe2ff6367b6902b0c9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","45ce9174a39e9fdfe1c152a8f90af8d7"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","89eabc0336684843819fbadcf8289cbd"],["/CF449C/index.html","cf11a13f410f765c3a5dd38f0626453d"],["/CF512D/index.html","ecbdf41430bb8e84852c02bb1ec1fa8a"],["/CF516D/index.html","a7964e2671c8d2e00cc25435397f412a"],["/CF551C/index.html","2374246e759cf4007d446863f622c3d6"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","890ef6e699cea02eb780f9d9c9d02ca2"],["/CF576D/index.html","f40023500a0a5f98a05b6633176917b1"],["/CF708E/index.html","64454f57fbd52c58cd16fb3308c9969e"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","d78f76d23b3ed83ecb04d96f157aa34f"],["/CF875E/index.html","2087ea5fbe60f581d061bf20270473dc"],["/CF986B/index.html","fc24e733be8a34f57dee8a331ba239f0"],["/CSP2019后做的一些题/index.html","39307616bed6073e31bb5756dcb688f3"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","89939d80ed3f7f9133928c867e12d1c1"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","add618cb2eb73e070c412e2f5a076a6d"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","633644bbd42fac46b457c65f0e72bba2"],["/SP1026/index.html","71376d78554bb20d347a314a4433bf33"],["/SP4063/index.html","de3a287cb1065d437b9126b757de773c"],["/UVa11600/index.html","765ecebb28fc4401190c8d6dff265dcf"],["/UVa12421/index.html","fad996dbd5cc1545ebe39effe5b0e50b"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","6a4ac66d3c0566594c7cf399285f886f"],["/[HEOI2015]公约数数列/index.html","a7203c7bcf56281eb73adf0740d84573"],["/[北京省选集训2019]图的难题/index.html","f9836e4f01b6984bc4d37eff5b26b004"],["/about/index.html","893a1a9e3d2d88b64e8740b82ba15673"],["/agc005_c/index.html","6ee4f7004483792874ffd4ab9fc091a2"],["/agc006_f/index.html","bc8b815f409c7424df84975b09bb0558"],["/agc012_d/index.html","6374c4bcfc4c8f37c6f0bf98eb3f7642"],["/agc013_c/index.html","51d8601b48638f27dde82ea21e077e3c"],["/agc014_d/index.html","7b53c11bb2dd1aece9c4b663a37033b9"],["/agc024_d/index.html","c1d9e3ecf7ea77fd5ddd83456118106f"],["/agc029_f/index.html","fbd4eebe8dfd700692ae2f32d87b721c"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","f3a211cd3e4fd3cf30c0b98e88b8c763"],["/agc041_d/index.html","357717ee11a7f3383c9609d92f059e4e"],["/agc041_e/index.html","54e2fbaf5887be8459fed4fa94df4fe2"],["/agc041_f/index.html","f6fe2c6f941ca5e4c252d05f8f1e425c"],["/arc068_c/index.html","a6f93345059fd86e975455a4a1a0c65d"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","3d4f7c29bf115b0409d876aaa1bacf5d"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","d4c93c953d10876533932e8f66010ed3"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","e2764274e36aaf215a05bbc0afb79a82"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","a93b25f285e88e403fb47885d3a78082"],["/archives/2018/11/index.html","a413dfcbac1c4f7a91aef6cde3b540d2"],["/archives/2018/12/index.html","5c55500c1bdb35eb8e975702433be5cc"],["/archives/2018/index.html","70702dfd0367bcb985f9f8b78238a8ac"],["/archives/2019/01/index.html","8715d886c74286649514e5f8bc87311d"],["/archives/2019/02/index.html","b8bc9599b17153ba615ad2959017ae09"],["/archives/2019/03/index.html","3a3e4c6445573f62529632588e02a1d6"],["/archives/2019/04/index.html","06eed77a3091c93a9736d14dfe489537"],["/archives/2019/08/index.html","c57d1505c42b174cfb29c5e52e14d018"],["/archives/2019/09/index.html","c38e9c8fe7f4ec085d96a7f8cb327b61"],["/archives/2019/10/index.html","fe5209c6b7c7d324d9e4ccf897392e94"],["/archives/2019/12/index.html","943584a5d65ca3be61b004069320905d"],["/archives/2019/index.html","93d8979e80970352b7397a99c9934f4a"],["/archives/2019/page/2/index.html","b9d80aaebd4989c1535113c10e3cb6ed"],["/archives/2019/page/3/index.html","8db74c7a919824c93aa7465f524f0044"],["/archives/2019/page/4/index.html","1537f964867b40cb4df879bbde5cdf25"],["/archives/2020/01/index.html","ef1df036071768b386ac908b0693d442"],["/archives/2020/03/index.html","9e05466827b27bb0123244413f6ba5be"],["/archives/2020/03/page/2/index.html","b528ada5f68d4dee55edfd1b5c149583"],["/archives/2020/index.html","394ca1c9b628ea70d4d4fcb0d36b409b"],["/archives/2020/page/2/index.html","24925374226da8475989681b1b564c44"],["/archives/index.html","8740ad21b20e0eddab3511a1ad0fd005"],["/archives/page/2/index.html","1f7fa9e260afbd1a7ab3360b3547180d"],["/archives/page/3/index.html","1f7fa9e260afbd1a7ab3360b3547180d"],["/archives/page/4/index.html","1f7fa9e260afbd1a7ab3360b3547180d"],["/archives/page/5/index.html","1f7fa9e260afbd1a7ab3360b3547180d"],["/archives/page/6/index.html","1f7fa9e260afbd1a7ab3360b3547180d"],["/archives/page/7/index.html","1f7fa9e260afbd1a7ab3360b3547180d"],["/categories/index.html","e162431f98c38b560b876d9a92cd80d8"],["/categories/出题/index.html","4f17447275669a119c781fe0ae565bdf"],["/categories/小小结/index.html","6c88cc645ae56cac0acc1408d0f0d8b0"],["/categories/模板/index.html","d2508aad3c70472fbc02d3ce8b76c4e9"],["/categories/毒瘤/index.html","f9822271b5b3374b200f57c8276c37a4"],["/categories/随笔/index.html","3e3e1e3cd7722887cddc88696d286438"],["/categories/题解/index.html","b9e0c6fe385a342fa331819b78b2420d"],["/categories/题解/page/2/index.html","5008f622496556e95918c0c7e5ea0b46"],["/categories/题解/page/3/index.html","0c9ad513141cb609ed262dbb036de8a1"],["/categories/题解/page/4/index.html","8fe230da0fece3fb4f2f50655fb9b770"],["/categories/题解/page/5/index.html","832567f17856d849416619c81adeee91"],["/cfdpproblems/index.html","89e50ffcd91eb6fb8fe442e390e6eb09"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","872be4fd53f26ace5a17858cbe4deae3"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","ef056541fa6cc1fcd777db967f91deba"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","05994771e81e6480d8940ee4d835a6b3"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","8cbd662e644735fcbf78a1168e2db97d"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","938a7a4c290b629e6f4c569f73925901"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","2f8d555d7390f07ea55e740acd4480ef"],["/page/3/index.html","15acb8125f60a75051501b6b6a14acc0"],["/page/4/index.html","d89365ff94cdf363ebbbecf7695249fc"],["/page/5/index.html","8edf25f19c25848652d1f01e028fec14"],["/page/6/index.html","6e626e26bc30d4e070e62495722d4846"],["/page/7/index.html","622241b22650265edbed81245f6e7038"],["/schedule/index.html","dd8a6a75418604348868171cc32b9c16"],["/simpson/index.html","4ad806d95b1330727ea06056d887c164"],["/sitemap/index.html","e72801668ee1516b44139776b3ef97fe"],["/tags/AtCoder/index.html","95efdcb3ebcd74431b8f71de9baee74c"],["/tags/AtCoder/page/2/index.html","a1eded043759de3141b04e21e2c6ea39"],["/tags/CodeForces/index.html","a053897cc1f960ae51d306e017898a16"],["/tags/CodeForces/page/2/index.html","f63aaac1e1589473997a27afb2cac245"],["/tags/CodeForces/page/3/index.html","ed76f3401e997f1e3c6945222cd9074d"],["/tags/DP/index.html","c42730dd2d178808c5dc1649882de0ad"],["/tags/DP/page/2/index.html","247289413c87c11c08b7d2fbf70923fe"],["/tags/FFT/index.html","3aed8ff1f528023207062d04a3ea2f98"],["/tags/LCT/index.html","2f03c211afb779004f795b0dc9589119"],["/tags/Lucas/index.html","7e920239fb2549e3f58c5029f14b0b7e"],["/tags/SPOJ/index.html","e3b254fe00a5a401980c3d525f4db2e0"],["/tags/USACO/index.html","f402a54c7af1c49791cf5c286fd07a4e"],["/tags/UVa/index.html","3820d1d9827ce8a6a8db426f3ac82ac0"],["/tags/ZJOI/index.html","8b6b0ed6c829520229c24cb1490e5a60"],["/tags/hash/index.html","9da8f39908d97c53071cc3854061def8"],["/tags/index.html","45a851f55279d6f16b0a2489dbd31103"],["/tags/two-points/index.html","772a9ed20664d17a259f7b0e1570961b"],["/tags/二分/index.html","b09bd1d37f8bed2c1be3d2fb80940c59"],["/tags/出题/index.html","04644f60e082c637903135fecb9242dd"],["/tags/分块/index.html","a7eb61c6936d53b1b85beaf611a2880a"],["/tags/博弈论/index.html","e05c34f85b0511a85663530729fa2e3d"],["/tags/卡常/index.html","ec60c08d04410390f383d0674dc22add"],["/tags/图论/index.html","2d2b7506c25f176b6ba326423358cb9b"],["/tags/字符串/index.html","c648ef54540ee6cf4f570af0e41ed40a"],["/tags/并查集/index.html","0007b094ea1a8deeed740271759296da"],["/tags/搜索/index.html","003bbc254a2dc8a332f6ee951b861372"],["/tags/数学/index.html","72bdcda129d856cc6000e94ff20f99a0"],["/tags/数学/page/2/index.html","bb653420929913063e6a61be117498c6"],["/tags/数据结构/index.html","af4b251fd930871f164312baa8449699"],["/tags/数论/index.html","f227d53336fb6aa03992df1166b9d7f3"],["/tags/最短路/index.html","668518a40436b6445c2f11cc43c1da63"],["/tags/构造/index.html","502f19934b7ec3c812feb06d71420bcf"],["/tags/树状数组-线段树/index.html","a6ba881d96cc4dc604170090e7742938"],["/tags/树的重心/index.html","74f9579b36982a6bac7c153af8c292db"],["/tags/模拟/index.html","3ea9f35462f0e1db3f3a31c75b2446f1"],["/tags/模拟赛/index.html","8370d5c6afa410f07a9d65ec58d6dff5"],["/tags/生成树/index.html","c388ecec95154747102f3e311f30d9dd"],["/tags/网络流/index.html","143b67c7e73fe0a9f37fe5329f57fcd2"],["/tags/记忆化搜索/index.html","d316fbc9f3988df50197f12027554298"],["/tags/贪心/index.html","2266d30013ef43e28eea486b752b9313"],["/zkw线段树优化dijkstra/index.html","467b33b92de3dd8dfe54a1f5b2a968da"],["/一道有趣的计数问题bywzp/index.html","46e0e37c91c9b2c572fc6b2de3aecd82"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","6789f27dc0651f9ced7316c2f003b777"],["/做题记录/index.html","da7bb300f9f067d87a6755190eee8e28"],["/换个主题/index.html","d9ade4e2ee31e65534d051875ac300fb"],["/整数分解求乘积最大/index.html","59aa3d53edaa9c118ae5574351d8fc06"],["/毒瘤/index.html","186a24e56edae944527f56aa0ed914f1"],["/浮点数开根/index.html","9552b3036c830c0d769f3b1ee865ba49"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","8dbab79242e3b7ab30807fa1f7693d3a"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","9637c9e9969e25a7bfb8d68ebe5a214f"],["/第二次出模拟赛/index.html","6ecbcb14a0ffc84670acbb5c7c57e1a8"],["/线段树入门/index.html","564871f138937e37062ef44ca73b3086"],["/航空管制/index.html","9a3f3d61cbcd9bc75892d6f3524d9c1d"],["/造一棵树/index.html","92476ecc1ac82e023c1dd26ca87cc764"]];
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







