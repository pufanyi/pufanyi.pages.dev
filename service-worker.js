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

var precacheConfig = [["/20180524模拟赛-word/index.html","b5187f99c23576e1fc0af73feff38bb3"],["/20190409模拟赛T1/index.html","2aa737ec4674605fdb44122f3d4ad4d8"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","544573c38f40c6887113d14a03293a7e"],["/CF1045B/index.html","9584c5ae47adeb091ba37808e89e12b0"],["/CF1137F/index.html","66d202634a0a94a1afa46cb19947d5ee"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","82f619e2bfd033959151ce9f9a045243"],["/CF1264D/index.html","c0dafd8088c433eb03c97898049e7a40"],["/CF1288F/index.html","d265ec105ad0d874953131dddc411d4d"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","e8b63e830a81e888d2c904e7b6f840af"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","bddedf6444702f5075426a1e47c7b913"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","331bc2bb7b33d2cea9b74d4d649cbd5f"],["/CF449C/index.html","5e04c0f8e297453dc40b8376fe834096"],["/CF512D/index.html","5179dfc8a444808219b9c1862a385f24"],["/CF516D/index.html","492bb36e249edddaa246fa7454dd5369"],["/CF551C/index.html","8df13175de2f70244584a4d6472f5aea"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","db9ecd78aed49c80faca09ce874c6284"],["/CF576D/index.html","b57fc1a3ad3e10a34bb2fd6845aa3382"],["/CF708E/index.html","b89212cbf062e1b2a4341e117744d4eb"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","8da843e6acfb909384d0b71a24ee8876"],["/CF875E/index.html","c6041ac2c57be807630de9ce2bfc713f"],["/CF986B/index.html","cb24c311d3de32346a56a683fb64abc5"],["/CSP2019后做的一些题/index.html","0f357584d2225d3d4573ddfc4d65985a"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","79b9115623ff4ea1ab8af11f9f6d5178"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","227735391566d91c10d4108639add41d"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","0ac38e63245a719bf5d7e34c16082824"],["/SP1026/index.html","f6ce52e1ed15904310493fc902d84561"],["/SP4063/index.html","2171ef3cae19f6f7add3d694647ba974"],["/UVa11600/index.html","d06b54f2f8f1f52e0672c51f78ca116b"],["/UVa12421/index.html","9dc32b6a842f76d4a99c76d6516d0daf"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","068c52c11ec44f3218653b453a88aa55"],["/[HEOI2015]公约数数列/index.html","e90c091ae823dc90193270e4a5c3eb88"],["/[北京省选集训2019]图的难题/index.html","d7880f9c442c001f4c8ca74f5dc77c77"],["/about/index.html","f75154498d130e26a0b2847170b53bc3"],["/agc005_c/index.html","06923aa7145699c2b6435e7d27a0fc38"],["/agc006_f/index.html","c0f638cc3f2fbb58898f013aa31f648d"],["/agc012_d/index.html","70ff216c5ebce659680017cf08970011"],["/agc013_c/index.html","1d86734feeecea32e4451e386fd8901d"],["/agc014_d/index.html","04a5f201e227f057687f38ed61aa473e"],["/agc024_d/index.html","a2a806e6f255d67d9cdde2f91797c583"],["/agc029_f/index.html","24f71c5f8122cb6125a2d2aa66ef4d60"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","6410ef49dc038a6e5257e35dee542cc7"],["/agc041_d/index.html","21f816ef92d32f34d5921a739b82c7e5"],["/agc041_e/index.html","d0f13a8310f5d26fdd1641a6975ece69"],["/agc041_f/index.html","6467484ce2dd166c076e6a26cf7f2dd8"],["/agc043_d/index.html","d338b6cc1bb818ef930d7d4b69a8fd04"],["/arc068_c/index.html","b9d6cbb1b39583fb7994e2e8dd06100d"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","1ac0d4b1f57e24ad6c27b47602ce611d"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","798943482f76c3f2fd348e090c04841a"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","3f389dcaa0227c3f6343800e89a32fb4"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","4e7775db539eec7e709fef20c22ce154"],["/archives/2018/11/index.html","2d88ea2aaa34964663b7b8c1d0e58487"],["/archives/2018/12/index.html","8da1938fd106577dbedc03d5499c1101"],["/archives/2018/index.html","344a577bd5c4548bef70ffe4b92e184e"],["/archives/2019/01/index.html","5baaa1daf1282d0630b1dd28e469a98d"],["/archives/2019/02/index.html","5ee3dcd68486b35e6e2a27e88a71d4a1"],["/archives/2019/03/index.html","ca82db942124d9bd7abc39904ee58476"],["/archives/2019/04/index.html","e30439a08b6047c2e603b3f0ba373198"],["/archives/2019/08/index.html","e6677a0981ed17b479c170c9ae5b9680"],["/archives/2019/09/index.html","e032285bd15c872ad724e99d17caf09b"],["/archives/2019/10/index.html","d1b5ddd694296c0700aa2153b803f3ed"],["/archives/2019/12/index.html","c947ba503cfbf8e84effba5cd24e1e55"],["/archives/2019/index.html","104fe7f27d81bed300161d470e1b135f"],["/archives/2019/page/2/index.html","82069f34a4ae36b7e5db5c9328acb3d6"],["/archives/2019/page/3/index.html","2f7e2851b763f681047d01b239f22e00"],["/archives/2019/page/4/index.html","72cd33033491a04bd2f4c0952a270585"],["/archives/2020/01/index.html","084f686093af718338e108624e878c58"],["/archives/2020/02/index.html","e4a558e5f247c4717dfe5b551a397d3d"],["/archives/2020/03/index.html","275355c270855e957129eabe2e3cd6dc"],["/archives/2020/index.html","db380facef38166d16e30f79b9e31d78"],["/archives/2020/page/2/index.html","76c5e8176a874848104a11fb6d433ffa"],["/archives/2020/page/3/index.html","802335bd063a081e2377ae9411c6601a"],["/archives/index.html","3074e74638ae88cf2754a2bb7731d96b"],["/archives/page/2/index.html","6801d6cd5ef5099491d352eacdd44f1a"],["/archives/page/3/index.html","6801d6cd5ef5099491d352eacdd44f1a"],["/archives/page/4/index.html","6801d6cd5ef5099491d352eacdd44f1a"],["/archives/page/5/index.html","6801d6cd5ef5099491d352eacdd44f1a"],["/archives/page/6/index.html","6801d6cd5ef5099491d352eacdd44f1a"],["/archives/page/7/index.html","6801d6cd5ef5099491d352eacdd44f1a"],["/categories/index.html","ff046b6c4407865821cf74b109acc67d"],["/categories/公告/index.html","ea001408684e9e9c99d81527f881b23a"],["/categories/出题/index.html","6413b703140e49094685b083a1e4175a"],["/categories/小小结/index.html","a2ef97e1a66961c225f66c23ea668ba4"],["/categories/模板/index.html","81c20064197cd59bae1601bc120036c1"],["/categories/毒瘤/index.html","c43aacb38522eb078e96ec7260f496d8"],["/categories/随笔/index.html","0035bde1341392cdebeaaa075a7b70c6"],["/categories/题解/index.html","bb116484c4ed99d519e4160d511a603f"],["/categories/题解/page/2/index.html","711b777f862af4936f23f72cc6c021e7"],["/categories/题解/page/3/index.html","5bc88929e00a3876ff43366dc9a42655"],["/categories/题解/page/4/index.html","4f8e39c2c57cb667152949a3bdc061b0"],["/categories/题解/page/5/index.html","39c9a47c27ec46588412e743184a3027"],["/categories/题解/page/6/index.html","7d502874c9115d5bb44062a638ad19db"],["/cfdpproblems/index.html","cdb422338556270ada64ab7936988844"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","eb1b980924ba9f321a70e780d0cf0bf4"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","0bf48c710ac6fcae6bc0b13afa8ad5a3"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","4b3780b4ab0bdfc31adca6e9c3ffa8c7"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","cac76e9c94e28d1c082a583513cdf94e"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","82050ab618d4235c951572300b1fa237"],["/page/3/index.html","6520cc44914e5ca21f9fe293a571858d"],["/page/4/index.html","44f1664af31b5e97f55d19ecc79fc729"],["/page/5/index.html","4fec741c6ff0dc7438bca29e2512b8df"],["/page/6/index.html","0c4014280dc2c976027310156a510140"],["/page/7/index.html","c006e45917dc30e7ffb0e72af40d14cd"],["/schedule/index.html","af81d2eccda82854ca75bd1b8650bb48"],["/simpson/index.html","2c595697abf2763221865126e256f3ae"],["/sitemap/index.html","e2151ab43d59db2db4a286dedb80e782"],["/tags/AtCoder/index.html","9a6588c8f693faceecbe303cc36a120f"],["/tags/AtCoder/page/2/index.html","a57587f2300eb3b7f194d897966dfecf"],["/tags/CodeForces/index.html","d059b15a602f2b9efd8bcfd9adee63bf"],["/tags/CodeForces/page/2/index.html","9337dc8fc43b5fd13514eae505c553f9"],["/tags/CodeForces/page/3/index.html","16c8844bf10694439e7d15b1ff3ffc07"],["/tags/DP/index.html","229cad0a0ef28e30493e270a28dce570"],["/tags/DP/page/2/index.html","eb6af207cbdcfc07edf70be672da1aa9"],["/tags/FFT/index.html","1243c7e41ba8b6c26cbf556941e54913"],["/tags/LCT/index.html","a4dbd369801c0b81032097f00e8be2e0"],["/tags/Lucas/index.html","30d20befbb85e13aaeca609a251cb8b7"],["/tags/SPOJ/index.html","61aa07134c7ffb7920b6de3881928c8f"],["/tags/USACO/index.html","42a492eaacf771c417fcf9dcfe404b05"],["/tags/UVa/index.html","84335ab5908d5259c72c77e812aa8683"],["/tags/ZJOI/index.html","a94dd5eec504572861b52fd1008fa9bb"],["/tags/hash/index.html","462343305a301809b615131b19199fc5"],["/tags/index.html","ada5907c6e39693241d9e59675dc8260"],["/tags/two-points/index.html","b1cedf00b6ed5db3e928e14e38d4c1af"],["/tags/二分/index.html","1f641d3e90f94e2da35fbc3d1043e38d"],["/tags/出题/index.html","93a08c7f81fc884102ebb421eeb40027"],["/tags/分块/index.html","9d1d056b8448ad1af3cf582673a78239"],["/tags/博弈论/index.html","59716e5d51e5ab177207786be2b80195"],["/tags/卡常/index.html","c81e2263cd9985427c319cd5846518cb"],["/tags/图论/index.html","383369a7d773ae3b9b3f09c32faee8e2"],["/tags/字符串/index.html","e86946f0590073d2b60873f32324dcba"],["/tags/并查集/index.html","dcc0fc45420a9944be2e7e56e07c57d2"],["/tags/搜索/index.html","d04d7161415f13db9145e00cc3cae527"],["/tags/数学/index.html","3deaa3f00d6804c582dfe7be5e46ebd1"],["/tags/数学/page/2/index.html","50afbb898fc0c0bf1c9ae51580fa6796"],["/tags/数据结构/index.html","861c36bf80ca520424fd4a867986e06e"],["/tags/数论/index.html","8c51073358f88df5cbf874206e0c5a39"],["/tags/最短路/index.html","b14e9eb3ddb952d728f8c7e5c4428072"],["/tags/构造/index.html","0f5c1368f1189fa7a8f035b02c745d33"],["/tags/树状数组-线段树/index.html","c699cb779b8f8373282d006f84561ea6"],["/tags/树的重心/index.html","9981422cb9eb9d45260369b5a3d5b05c"],["/tags/模拟/index.html","b52c7bc408b5579c063ae4c31efb6a6b"],["/tags/模拟赛/index.html","68e6659cc00b4aee9d0508ef3438963c"],["/tags/生成树/index.html","5fc626c06799b63560eccb555760a3cc"],["/tags/网络流/index.html","4c1d2223bec800c0c397b168e3f9047e"],["/tags/记忆化搜索/index.html","18ff6082afead968730b7886b512af4f"],["/tags/贪心/index.html","f113b0140252dfda4aa8e6635e05d89c"],["/zkw线段树优化dijkstra/index.html","1e3cdc7d73cc96d069e64b0ffae26c4d"],["/一道有趣的计数问题bywzp/index.html","0019db9f94570b000f1295fd5c8e37cb"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","a489c9d6788c309b1c484bdeadf4e581"],["/做题记录/index.html","f170c33c136d9e0a0f38f17ed305350f"],["/换个主题/index.html","816e963080fc514078ac915fec3c7833"],["/整数分解求乘积最大/index.html","4e4a0f2609a8a9b7f7c3245924840ac1"],["/毒瘤/index.html","d38d0b164e222d729e468a199ce6c22a"],["/浮点数开根/index.html","60b1c1dda12999f1999d19a0cbaf4585"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","aa78328bacd30ead47807a19258e06e7"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","c3a7642a214d32208ef46712188467b0"],["/第二次出模拟赛/index.html","10d43495104ebe94713cce0d24343d9d"],["/线段树入门/index.html","2861450d527c26c3c3b0a3def966f131"],["/航空管制/index.html","f186fa8d3ace57dc1ce8c6044e363119"],["/造一棵树/index.html","3eeb9527861b9e65eff844c595e41bc9"]];
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







