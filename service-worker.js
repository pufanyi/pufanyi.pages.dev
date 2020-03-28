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

var precacheConfig = [["/20180524模拟赛-word/index.html","702fff1e1be3da8bda1ff42fea0a1b25"],["/20190409模拟赛T1/index.html","de236c5bf8e42b0c77b06241a1872fda"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","9b1046d6c74081d5ecb49dd8af81524d"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","313c3bed1e5f0eb544fb75e3b533ff8e"],["/CF1045B/index.html","06e950b039dd94f1a120ef8e0b0762a2"],["/CF1137F/index.html","97f7d1dbd651c2fba236eeff59a99cf3"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","336921ba43298b4f1f7dd612a04d6ab0"],["/CF1264D/index.html","a0f8337e47f644247309059b591a8d0e"],["/CF1288F/index.html","13bd6ff00cf537d8456ef14e5969a12e"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","53df7924c074ac1dc4895a8b682a0156"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","9fa2aab07ead2ece199880ee8c68fd5f"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","bec2dc9818a7f7a532c3fa6118c0258e"],["/CF449C/index.html","cc57ebc4c9ed51222dab9b397cd4e637"],["/CF512D/index.html","59fe9e4e2d168b7e5515343ee1a39187"],["/CF516D/index.html","f0cad5286cae5d1c28876e3318fd40c7"],["/CF551C/index.html","da918c3e1bb6c372d734ad3f4c535e58"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","a1914009d1654b400fee08dc4e834497"],["/CF576D/index.html","bd41a060d545ae45c55cf75b2f031070"],["/CF708E/index.html","9fb10c58ffb7177a7ef7c2cd8b9908a3"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","f919b4a520db36a311dfb57409d4eed5"],["/CF875E/index.html","42dff1710950e6797a8a53f4955ce718"],["/CF986B/index.html","1d0d625d041142a5b3ec94bfae69527c"],["/CSP2019后做的一些题/index.html","94039a0ce14a49155495fece2caf6112"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","2ba93582b3406a9f8874bb6faf8039a5"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","c9951f9191a8fe2f32b4e1b4066de0e9"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","5733bbdedecf9b8960e9759444c721f0"],["/SP1026/index.html","cc437fe9d35501db06ffdf91c954540f"],["/SP4063/index.html","b76843ca46bfd1e75207244b6dbe5022"],["/UVa11600/index.html","96d8dc006bff4f59321530a400521e02"],["/UVa12421/index.html","d2fdcd59a1500ea0a795f2257bed5e64"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","92167f9648848725299853b36883afa6"],["/[HEOI2015]公约数数列/index.html","a21c0462b233b3ae42a1865a9cbd05bd"],["/[北京省选集训2019]图的难题/index.html","d8ceb46dab1aa7c41321fb09b1db3254"],["/about/index.html","3c1d9978dc5cdffcd65d61c5690aedb0"],["/agc005_c/index.html","6f2358ba7d602d5c4d63a9f3e2142c3c"],["/agc006_f/index.html","250d3466548859fdfe6b3d319d1de117"],["/agc012_d/index.html","76af52f6f4d0645944926e413ef99c97"],["/agc013_c/index.html","a98d474d76aada50b37e9758c545f4e9"],["/agc014_d/index.html","457194c809e90608f5ba11d7b3e345bc"],["/agc024_d/index.html","14cf6f2ce022fcaec53d529d52dcceb2"],["/agc029_f/index.html","96e73f1939357653868b088bb557863e"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","d0e7f611b3aa279ca6f177f84a27fbd8"],["/agc041_d/index.html","9855f7571395b087688cf7ad2ed662b0"],["/agc041_e/index.html","6f1f15a5d364f70b59dd747cf1e0463d"],["/agc041_f/index.html","cabbdbc22d4e92dac66d47d0f7c1df9b"],["/arc068_c/index.html","e1c4016f7c3ff2dad87cf1b6c91bbec9"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","7d983e56763729f85f5e7575be6700b0"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","52c336ec1e16395fde81ca2fa3895797"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","352cb6ed66e2df246f188327f5a239da"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","ed259bd8a97a60446f5fcc384b2f5d41"],["/archives/2018/11/index.html","9ac12173569ef903fd197d362aa08a19"],["/archives/2018/12/index.html","71c1d99493189e53412e54f6a2bb80c6"],["/archives/2018/index.html","89949db0bb5a7602a070b35373eb6cad"],["/archives/2019/01/index.html","9aebce50b7abe46a382f8f8c153440ac"],["/archives/2019/02/index.html","2f5e0a4e7f67d3456edaf4e98c17e0a1"],["/archives/2019/03/index.html","2d1775b20bd8b470642f50bcd1af191f"],["/archives/2019/04/index.html","b913335157949c858a6f3c6af736a4ab"],["/archives/2019/08/index.html","3685a0920b412b95fe9a801beb9f2f4d"],["/archives/2019/09/index.html","a1c92debc52f252ab9fd747514d24f1d"],["/archives/2019/10/index.html","2cebcd4925cd54e4b26ca7375db654ed"],["/archives/2019/12/index.html","284a0ffb549947434710a4cead6865be"],["/archives/2019/index.html","b91fb430358ff6f10e86f8ae68f8855a"],["/archives/2019/page/2/index.html","f2cd122a1f807f1afae652d27f3fbc87"],["/archives/2019/page/3/index.html","cd7aaa00e0b75361a99571fd0aaf31ff"],["/archives/2019/page/4/index.html","d4c805eb35551e433cdd5ec8a700568a"],["/archives/2020/01/index.html","8b46b105a411881f5080ed2e4a7af0b6"],["/archives/2020/03/index.html","450823f8ccd0c2a9f32a77bf22105da7"],["/archives/2020/03/page/2/index.html","98ae6a643d7e498c4623bb52cf9c7698"],["/archives/2020/index.html","91cbc44e17898127f6e88587d3679de2"],["/archives/2020/page/2/index.html","2837834f69696c7a8de5d5ee4cd93da8"],["/archives/index.html","f9af0b33da7c48fe2a8a0f02fa7dceb3"],["/archives/page/2/index.html","5d49f5fd2160c9085a0d65915b53668c"],["/archives/page/3/index.html","5d49f5fd2160c9085a0d65915b53668c"],["/archives/page/4/index.html","5d49f5fd2160c9085a0d65915b53668c"],["/archives/page/5/index.html","5d49f5fd2160c9085a0d65915b53668c"],["/archives/page/6/index.html","5d49f5fd2160c9085a0d65915b53668c"],["/archives/page/7/index.html","5d49f5fd2160c9085a0d65915b53668c"],["/categories/index.html","8342857fb62ec1dfe2839fae2cbe8e49"],["/categories/出题/index.html","1cfaaa210804831323472fc8465799ef"],["/categories/小小结/index.html","702e41819390ac598c2d2c18f2803d10"],["/categories/模板/index.html","eb2f9ed9bd23641704e0198ca11231ab"],["/categories/毒瘤/index.html","abf05fb33bc396e62ab473fa96abac25"],["/categories/随笔/index.html","6c61735f3c9a6e3d658f4c2642a1687a"],["/categories/题解/index.html","5d2074c0cfc756f549017d154a07655d"],["/categories/题解/page/2/index.html","9f0f011ada56417f081289358d22e408"],["/categories/题解/page/3/index.html","813cd8587f01c18db86387cb6964a488"],["/categories/题解/page/4/index.html","2e2715953c561867751d2a38c86743aa"],["/categories/题解/page/5/index.html","a1e0c5697adef62a3021ced44a070761"],["/cfdpproblems/index.html","1d0c10a6b510260f2598565454e24200"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","b45e9eb200d4fb8b45e5e9944c6d3156"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","78dbbce5a3aa280fc311811cdc7ad215"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","02c771b802a38b2a07798e88b2f48f50"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","8cbd662e644735fcbf78a1168e2db97d"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","30a438ecf905aaa0ad1ab7eea56593f0"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","b5202703da7df16bbd7edcc6b833557c"],["/page/3/index.html","223c5dc5a0000c04de31e2ab02768648"],["/page/4/index.html","ad82de7c7d244907485e96f826213d49"],["/page/5/index.html","3a942b55ae619713b23efe2073be3fed"],["/page/6/index.html","d02e09df8b84da084d5955636a729b52"],["/page/7/index.html","5251d9da0e4ad7ef8b569b69b8fe4377"],["/schedule/index.html","b9a7be6ff6cdf85191e519f702a55c7c"],["/simpson/index.html","7dc93579aeaf197bf6882285921a8cd9"],["/sitemap/index.html","05e9b001fc0c66effcb823daae6892b7"],["/tags/AtCoder/index.html","d21ec757a43402a52c5e770011056dd4"],["/tags/AtCoder/page/2/index.html","3ebf43f3211ba68c0be41ccc57d1409d"],["/tags/CodeForces/index.html","d0e15beac4b864b0a854a0ba02fa733c"],["/tags/CodeForces/page/2/index.html","3facefea1da432bbb8cac188a6a5843e"],["/tags/CodeForces/page/3/index.html","8bf535a478d5ccf42b2d256aa80308e2"],["/tags/DP/index.html","6ec7928266238ced9082a98a3ef00c4a"],["/tags/DP/page/2/index.html","029c8a4a0af3fedbb824c6992c732ef3"],["/tags/FFT/index.html","fc45ac1544ad254c01b2ad54e7fbf608"],["/tags/LCT/index.html","e1985e332a34c687fbddf2996e9de7a1"],["/tags/Lucas/index.html","8ef84792c39288f8d5b25888b47c5ee9"],["/tags/SPOJ/index.html","6e575b575a59a22a54c416a069408b99"],["/tags/USACO/index.html","751a6232c24f4fdcc25d4ce8ea2592bb"],["/tags/UVa/index.html","cd103c92e0f6adb36be784b19965841a"],["/tags/ZJOI/index.html","fb936fe75a19635868bec0b5a2902c9e"],["/tags/hash/index.html","096bc75221f72d297556640e33510bd1"],["/tags/index.html","3e8f0fbcea56ea3e821e0903ed454d76"],["/tags/two-points/index.html","58dc1fb645b721ed3208289d34e8bfcd"],["/tags/二分/index.html","85a182bccf746069e0e0836b2f93906e"],["/tags/出题/index.html","a96387ca83180922f06605f0ac440bd3"],["/tags/分块/index.html","37772188fe41389e9dc71a8df4cdb34d"],["/tags/博弈论/index.html","be19c2ed750ea38125d8560c78728f6b"],["/tags/卡常/index.html","1ca3ff606bd3a07f9c7700e5c6310c69"],["/tags/图论/index.html","33efb81ae4ff1b6f26f00de038291209"],["/tags/字符串/index.html","dd998da40345e8588e4c024cfcb13e7c"],["/tags/并查集/index.html","43d6b5dc3ca2d4dc5ad32cb8f3dc7446"],["/tags/搜索/index.html","320852bb4a9d9a7bbadd845aff1c60e1"],["/tags/数学/index.html","f9a4d81e435aefda64ea844b088c9fed"],["/tags/数学/page/2/index.html","3748451acd8491e5d67a88f477bee4a0"],["/tags/数据结构/index.html","8c9b173c2bd1f5220f066a96c350b72e"],["/tags/数论/index.html","1496462ebcf9ce6cb5480e8bb45682f3"],["/tags/最短路/index.html","8df0cf33ad873e44000ca7aa48cc01a5"],["/tags/构造/index.html","9acfbbf267581ec6148b226d59095c9d"],["/tags/树状数组-线段树/index.html","634d87f5a27a1486bc0417e7b429b5d3"],["/tags/树的重心/index.html","e693fc1a570165f35a62720bc9f28810"],["/tags/模拟/index.html","fa1828cd5686922aea9c203d38a62410"],["/tags/模拟赛/index.html","2dddb0039f4e2ced37d0d50145d4bfff"],["/tags/生成树/index.html","7c08b3a7fa4ac91439cca98fd0cd32f2"],["/tags/网络流/index.html","152f860e7fec836f5e0f8f3d9620e963"],["/tags/记忆化搜索/index.html","9b5d022665c8d56350c86dbcfc4f4b9b"],["/tags/贪心/index.html","58646f29585c93c0367430175cd078a0"],["/zkw线段树优化dijkstra/index.html","308656681001cc971e7a4120ca36f2d9"],["/一道有趣的计数问题bywzp/index.html","120d43728cc5da95b1704761d5bb7655"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","9d4f061a20c34ec2015de18e300ff994"],["/做题记录/index.html","2cd09ec348ca6f378cf9477e7ce44962"],["/换个主题/index.html","772a3c74a5d4fc35043866cc636518f7"],["/整数分解求乘积最大/index.html","285ea25f8afd3472c4e1b782b12ce81f"],["/毒瘤/index.html","06331c59963b1d89802daf29d21a5aa6"],["/浮点数开根/index.html","0f01e8257574834af11f65034fd49ae5"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","c051053b43aaf2dc9c96163c8a1a1c55"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","1fb8c38c97e5cd708505225df6b1de67"],["/第二次出模拟赛/index.html","a326169f86e6c8a5725c423f0711e72c"],["/线段树入门/index.html","a2241615ded9e5cf654bb26f298512fd"],["/航空管制/index.html","2d581719622f0329c64f836611916a04"],["/造一棵树/index.html","7081736f56a87bba67de47e533086c60"]];
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







