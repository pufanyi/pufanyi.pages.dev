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

var precacheConfig = [["/20180524模拟赛-word/index.html","48ac89b276f99e47c326f0ee4849cc0f"],["/20190409模拟赛T1/index.html","f5ddc6d8c1dbd633ae9aff3da65f5f1d"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","41d3bd683b08314ead97e84aa65617ef"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","d6f6d390f96924a1aecc932659d45229"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","e66d9a5a7927423e3d101f509b7ca804"],["/CF1045B/index.html","7f073ec161c33829a43f6beeb52d64f9"],["/CF1137F/index.html","9a9dd7ed649cfb1cd66a505eced07c3d"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","44ba14cca6e66187c67afc21d5907861"],["/CF1264D/index.html","aacb137c9dc94e89e2b080318d1c8715"],["/CF1288F/index.html","fea6ffdd34389b6c69392dc9634dcc8b"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","017d5b7454c9b60a2d0f17d7d3708c7b"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","6b434b506d11c05aa9c01f4e6728b0aa"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","a7d7b026acf5901dee2d734dc80a1284"],["/CF449C/index.html","480b0c3fad223a543c7dc423733addb8"],["/CF512D/index.html","66658c33b3bcd70c0b0123bec1521e35"],["/CF516D/index.html","a3cf609e4e526708eae18b9424a8eb92"],["/CF551C/index.html","6550433c590de7a808c149aae607d3f3"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","3d3a4f0777d5c20b0a770d64a0122e14"],["/CF576D/index.html","e69c7ff2d6ca517f199aa2427d529364"],["/CF708E/index.html","5d654fd26604e6ffd78a6d50b57f1c5b"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","300b0a9d1c6f455f68d3a4eb5694d6f0"],["/CF875E/index.html","ebe7d875041be21caa20ecf448d9781c"],["/CF986B/index.html","bd3e7b44eba8fb4d8da37f2ebbc472a5"],["/CSP2019后做的一些题/index.html","302260946e43a07f62d544e36bf51ad1"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","3add5baf143fb03a61657d84ac2f5bf3"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","aaff03b50bf8bb24b79b2449ef8fd770"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","8bbc44a8e9ca9ffdfdf07410f143f55e"],["/Rho/index.html","b9f27676ba7ce2335fe87fdc3fd3cec3"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","bc6ec340385d50de0af949e6470db94f"],["/SP4063/index.html","7537d23423f53e55cc862689b19b9191"],["/UVa11600/index.html","7a8093db217a0f9b318fc25041b66c7c"],["/UVa12421/index.html","11875fc3e9a1d7028811c5a9854464f4"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","c4b6e2437e0c842d081fefcbc4257410"],["/[HEOI2015]公约数数列/index.html","84247bfbed8620b08f92e42730c97a1d"],["/[北京省选集训2019]图的难题/index.html","b5ee1cb44a63106945d94db617af52d0"],["/about/index.html","837de33d67d3887fd2841cfc00e110bd"],["/agc005_c/index.html","648fc4d61feed2d1e0a3ce0fed12364e"],["/agc006_f/index.html","f1cc6ab8de3ae7653701ef737738a949"],["/agc012_d/index.html","73349e9066d3dbaab4057fe83fdc53a7"],["/agc013_c/index.html","c59af3d26a7aa1737bb8dae74e31bb4d"],["/agc014_d/index.html","1ed44603b559bb1a9dfc692c1811560e"],["/agc024_d/index.html","ae735430005cf02daca61a9bb9b45141"],["/agc029_f/index.html","7febd0c966581bd689291375f5fbedbd"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","f4c60ef944991ca7453efb03c883a390"],["/agc041_d/index.html","ae4fa12304f629a1a769107c11a5d23d"],["/agc041_e/index.html","60bc2e8a53ac60e7cb29103e02f001f4"],["/agc041_f/index.html","c47a2d7ce3527d06cf77d23a28c9bef9"],["/agc043_c/index.html","f58d91dbe0c603b20f829ddf79c2b188"],["/agc043_d/index.html","e2fb4262b67bd7d50376f0177f054d0c"],["/arc068_c/index.html","1ae6ea3853ae9353d95fe598516a74d4"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","217816422fdbcd9702ba0a432be71c5f"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","be0ff19000fd828120a12a034693b4e7"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","c1a19a5f839eb3a420a89d99ba1bae4d"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","8d1c069a7587778c8a45e5ebee8ec0ec"],["/archives/2018/11/index.html","4b5a8e1390b308a58af6d725fc18ba28"],["/archives/2018/12/index.html","97e168a51094b4dff5dadf2d0333134b"],["/archives/2018/index.html","2205cefdb0d83770c64999aafa8a3cb2"],["/archives/2019/01/index.html","957e9e40953c6555d71e9453517fae5c"],["/archives/2019/02/index.html","c50b2bf8a66880a858632f857404bd05"],["/archives/2019/03/index.html","03d7c56a724526b0b1b9e7d2d0744b74"],["/archives/2019/04/index.html","c68df38ee9f4e4bd16b1da20502ea378"],["/archives/2019/08/index.html","28a87a0fbdff38f55893b7d9e32dc879"],["/archives/2019/09/index.html","fca95c50585ae5ac8afb80a9e78b1114"],["/archives/2019/10/index.html","994ad8ac840c85f46ed00351d7e793f0"],["/archives/2019/12/index.html","a0676be2d86ca348442804044f5e4941"],["/archives/2019/index.html","662da3594d3be6ed9ed5e4a1957992e0"],["/archives/2019/page/2/index.html","bd3dde121a66ca7629c2f3ed467bc038"],["/archives/2019/page/3/index.html","ace0438449e4710d704dd7947461494e"],["/archives/2019/page/4/index.html","bae7e65770624d36036457d549109787"],["/archives/2020/01/index.html","5072cd336957d063240f5681b49b5e86"],["/archives/2020/02/index.html","a4987937b79ea996fba407ad371979bb"],["/archives/2020/03/index.html","a70567c9ee22166ffb9de153ef5120a1"],["/archives/2020/04/index.html","3a1c1ffa3364af7adba756e392c7ce51"],["/archives/2020/06/index.html","d221ae187925055335ad79fabcbbd820"],["/archives/2020/index.html","36bc63ca5a34ae467bd12cf77f4262f9"],["/archives/2020/page/2/index.html","4a98ecbf329668b486fab3a47cc5c314"],["/archives/2020/page/3/index.html","52f192f635227e9d0a6fa39ac512fb37"],["/archives/index.html","be7302c46dbfa0148f33d4ab66e576fe"],["/archives/page/2/index.html","e28f786ad77ac2936ee81a2dd70a85cb"],["/archives/page/3/index.html","e28f786ad77ac2936ee81a2dd70a85cb"],["/archives/page/4/index.html","e28f786ad77ac2936ee81a2dd70a85cb"],["/archives/page/5/index.html","e28f786ad77ac2936ee81a2dd70a85cb"],["/archives/page/6/index.html","e28f786ad77ac2936ee81a2dd70a85cb"],["/archives/page/7/index.html","e28f786ad77ac2936ee81a2dd70a85cb"],["/categories/index.html","e46ffdcdaa98ae7576875e47a69f1be5"],["/categories/公告/index.html","3d4b2828b946c50547b74d54d8dca8a4"],["/categories/出题/index.html","d410938df06828065ecbc86ab3fa5f70"],["/categories/小小结/index.html","e5a53d782dcd75d495bb4013b41ec9f0"],["/categories/模板/index.html","d2d4fea989887df39683e1fd2c6a206d"],["/categories/毒瘤/index.html","6366e5267883621e93339399362a6c77"],["/categories/随笔/index.html","d9070fd6668402dfe00c74014965401c"],["/categories/题解/index.html","f7ea5fc0179ce9d0f42b6bed0a417a28"],["/categories/题解/page/2/index.html","ae70a9b9dfbb3ca22b8da3482a026f6f"],["/categories/题解/page/3/index.html","33417f1b94380bcc4ec8a1442e0b1990"],["/categories/题解/page/4/index.html","2340279043fc3aa52f8e048a14ab2db5"],["/categories/题解/page/5/index.html","58cebc95fa8c518b883ed3671afd7f7c"],["/categories/题解/page/6/index.html","d07f513710d26adde09c81818a807587"],["/cfdpproblems/index.html","b5b1e6d705ffd6739b694fa4ff5f116c"],["/css/style.css","a7d3eb3d15ed6fbf497f753ae78db62f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","3bd6d86ed82cd9dc71a069da990230d2"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","a3f5b0fcbee59a892003476c1361884b"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","058750e25e1e421423304b7b673d3dc9"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e8615363359eb864cee049c5d1bda9f7"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","760bc04d9d377e9b70cf666843c808be"],["/js/search.js","c6bdb7f8537c81402796a54b1d072fd9"],["/js/valine.js","6048e36667b2125f42094e88b98dd32d"],["/page/2/index.html","07ed71263430e5effb38ba5c937a3d92"],["/page/3/index.html","d819ee7a57419aac924f91e2ee6a62d4"],["/page/4/index.html","f9025e38f334422d017143d0443c8b44"],["/page/5/index.html","fc7e64e957fbadb48111b5dcfde5b770"],["/page/6/index.html","63a7c91d845a8e3b4303ba7daf51ab71"],["/page/7/index.html","835ce374d347fca1822dc98eebbcffa7"],["/schedule/index.html","af2a1303f545f4512e5af42d9f14be58"],["/simpson/index.html","fd1a92afd8efe70f84391be1c23936df"],["/sitemap/index.html","f949a4a5d6bd5831c671999fd71a220e"],["/tags/AtCoder/index.html","7555e07ca829cb14d965e5ac9c6b2abb"],["/tags/AtCoder/page/2/index.html","99df9b04004df0b902147df4975a1b4f"],["/tags/CodeForces/index.html","30dde76e6a96801615f6189a1e86f763"],["/tags/CodeForces/page/2/index.html","648028bc2277f548873052803c29611d"],["/tags/CodeForces/page/3/index.html","6a807f1358669e21583aece4220bdd28"],["/tags/DP/index.html","d6b001a464e96dade788feaee4822ec5"],["/tags/DP/page/2/index.html","9cdc99c6295ed3ca73fc5fac192eebc5"],["/tags/FFT/index.html","c7b9ae8a06e0103d8f46dbe711c7a3aa"],["/tags/LCT/index.html","77187392b94b34b9872a38aed36ef23b"],["/tags/Lucas/index.html","3293a082a836771439fb848ad59e9c27"],["/tags/SPOJ/index.html","608d001c4d49d88f1c6a1cc315c56a38"],["/tags/USACO/index.html","20299d46603acc8d72a3c371008ec1ed"],["/tags/UVa/index.html","76b96b9e06491d2e1b231501571e6ef6"],["/tags/ZJOI/index.html","6da5d8f6413aa1f713a97fc98e38c15e"],["/tags/hash/index.html","e4abdd99095ddd5ae8e60ffe44341461"],["/tags/index.html","7f3c97060fbaf9643f7c0d555e0409e4"],["/tags/two-points/index.html","e6b829ef3255c1e3b0acc0cef532931d"],["/tags/二分/index.html","953e9e3a8e337c498b04b31edc7e1886"],["/tags/出题/index.html","4fb0ca6acd45dba753ff6da40c0feca0"],["/tags/分块/index.html","7559b82a8f8756c140ebf56cb8307707"],["/tags/博弈/index.html","0bc45ebabc9e062a8fa9334e626e9099"],["/tags/卡常/index.html","ebca8ac17302eecbb9e3c97bdb48cf65"],["/tags/图论/index.html","b6b4be3c5b97ff5c81a27c0338774a27"],["/tags/字符串/index.html","69389b30a3e2b55098b6057698f31df9"],["/tags/并查集/index.html","6026185c6f638386956f8b583ef157e0"],["/tags/搜索/index.html","24df91cba5bfa177d8bf540cc525216d"],["/tags/数学/index.html","ef44b8e80827284fcbaeddb829e31497"],["/tags/数学/page/2/index.html","c6679c23b28ba171048954f3e340a6f8"],["/tags/数据结构/index.html","e52b5d4d4875c1e4c70816b8bf4e6b86"],["/tags/数论/index.html","a1b61b77f137d529071feba83b71c7ef"],["/tags/最短路/index.html","a589f26b46779e37dba3612a55b91399"],["/tags/构造/index.html","dd32752fd5de9956e22b51cdabf35a37"],["/tags/树状数组-线段树/index.html","bc9f026ff8d5d3e4c0db69e6abebf641"],["/tags/树的重心/index.html","0c973b0693f81eb81aba2c7810438ee6"],["/tags/模拟/index.html","ec71cddbd32db9aec6d815bfde593317"],["/tags/模拟赛/index.html","4a3babc7364cb1f5587b9091c73dba4c"],["/tags/生成树/index.html","7e123f3003f024ac10cde80788966e9b"],["/tags/网络流/index.html","9042239f8af125af019fc15d5dae0b2d"],["/tags/记忆化搜索/index.html","197f79505b0bd7ca3245b9b5d62c66ae"],["/tags/贪心/index.html","09c8ec9184f93d9cd3d4d5de8affb69b"],["/zkw线段树优化dijkstra/index.html","06b0356f51f4901627599a7016aff144"],["/一道有趣的计数问题bywzp/index.html","7f3b4c649bc114f28eb69b79237bfde8"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","b9b5d0affdaf39098b0ec68f8d3f16cd"],["/做题记录/index.html","1f8fa38f030b77f3ea71d1433b5f18ae"],["/换个主题/index.html","78bf40f56012a52c3a94df9cecd770db"],["/整数分解求乘积最大/index.html","78633115b3f04fa42d6c480be378fdd0"],["/毒瘤/index.html","9ce9658e61959e64489050edcc4f712d"],["/浮点数开根/index.html","708a0b2e96c4a90af7374adf43c10001"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","6122a193ddc3aebff569730dfe7cd23b"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","edd7ff77b5f0b422ed7bea8a125b3795"],["/第二次出模拟赛/index.html","a145586f7b147b43fab288b2c25a26cb"],["/线段树入门/index.html","bff6accb46d428feb158d93b820010db"],["/航空管制/index.html","20cc31afa1bd5db30f0b247e54acef57"],["/造一棵树/index.html","2cef32a817bc41960f35067b8a8cdfd7"]];
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







