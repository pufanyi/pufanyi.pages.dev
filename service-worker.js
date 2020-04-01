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

var precacheConfig = [["/20180524模拟赛-word/index.html","1ae96e546751af5ac840e60d44a0e2ba"],["/20190409模拟赛T1/index.html","9724186a3a00706944523650b48546d9"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","edbcf7e7393bb559504fc7261b6434cb"],["/CF1045B/index.html","1711aba292bd76b2bc35bbffc9eb92ce"],["/CF1137F/index.html","9d676841be85e10a9851534eef8639f6"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","0f465eba1c437743ffd70a366a9cc198"],["/CF1264D/index.html","c227becb8d19ad36616f81c3d3a11137"],["/CF1288F/index.html","bf98415ceef2dead4233f157e29bd0d4"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","3b6b9ca8f0824074e3d636d3dba30f7d"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","3d2a74c2cd30dd60e97021d66b9b734d"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","a3672605c1ea46b29122c8354af8982b"],["/CF449C/index.html","6236a790b1b24bf66d8de535ef6cef41"],["/CF512D/index.html","2462db93f290b2d9c782a99f80372321"],["/CF516D/index.html","77923f99b21dc00ee1b19371e54fe166"],["/CF551C/index.html","c3f9a68cebff794f8c83be957e446cf3"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","2c3ec9f58084ba93524450ecd9a61fa2"],["/CF576D/index.html","2bec2329e85d4839189d3aefeb00108a"],["/CF708E/index.html","f60bc7eff6e6280c4871e3298a9fe027"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","71dea1d820bf8f98142d21e65c75ee4e"],["/CF875E/index.html","48cffe05714234f08927d777ed4d0901"],["/CF986B/index.html","757c44fdde7e8fda516341f76ca0b1a5"],["/CSP2019后做的一些题/index.html","4a46e296d87b5459bafe3fe427312f67"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","861659e12e8e07a7d7927d76b23422c7"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","f5764405da8ae82745774fb409a2f868"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","104b922b2b15fd4c463b06b474e54a2c"],["/SP1026/index.html","2de52ae23bf66b450ceb00f76dd34612"],["/SP4063/index.html","d4425ec344d586c464ae6aca0772be22"],["/UVa11600/index.html","e4f89549a132af6b4c1231b6ffb6438b"],["/UVa12421/index.html","da5f4a615cf601bcb49af9612008de38"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","f1b046a5fc8e78b84e1021ab90d71ac1"],["/[HEOI2015]公约数数列/index.html","69f2e0f16805726527534586e28d8e60"],["/[北京省选集训2019]图的难题/index.html","dc1ea831cdbdb8b6cd4f1a046ae3c2a9"],["/about/index.html","45a95244d906697b58a12120147e52e1"],["/agc005_c/index.html","8abaa62bec5486856217bb12196217db"],["/agc006_f/index.html","fd99193f9c9a0b949cba16bc72783b8d"],["/agc012_d/index.html","f4af78d48c7ef45cf51012055f61cc5f"],["/agc013_c/index.html","81399d72627cf7726b6facd264c9449a"],["/agc014_d/index.html","34af2d8d85c71d93ea60b97ebb79f382"],["/agc024_d/index.html","66698b0519518615243087310d30550d"],["/agc029_f/index.html","11a8d257cf1ecf00f3fc7af4b614818b"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","fc1456a6a0e7cda0b7feca054a7a4de6"],["/agc041_d/index.html","f1e0d6311877519edfec3b64682a56fd"],["/agc041_e/index.html","d5cd0d8185103a3660f25324fb3cf206"],["/agc041_f/index.html","9122e6ea975c4aa1518d6415e3be92e1"],["/agc043_d/index.html","d9da52ad7cb308305d05b65e6be55425"],["/arc068_c/index.html","4c30bbfae726a39e184f8bb3628cbad8"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","844133ab1aa5a693ffa4306f1e5379f1"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","e488299dfccd930cf233a615aa6c6ba2"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","0a81f3b7614e4e344c3e93e89e3e0edc"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","08cf0335199e04dd2e06cd131da6c4ea"],["/archives/2018/11/index.html","737809f2b6bb66cbde4af3ddaea70d58"],["/archives/2018/12/index.html","7bdcd763f35b02a0a332ea94d7543190"],["/archives/2018/index.html","3a3bfca820ff872fd63b3dc8d952717f"],["/archives/2019/01/index.html","a873c67af8aecacc155e965d4c264902"],["/archives/2019/02/index.html","cdeeddf7fabb93906f9c83fa1568d104"],["/archives/2019/03/index.html","cd542d6780d937b901fe51b76a69dc09"],["/archives/2019/04/index.html","8c0d104f542cdcf3736cc9353bc033c9"],["/archives/2019/08/index.html","7220bbe157471ea86162756a86e3183e"],["/archives/2019/09/index.html","4ea5948c6334d3b33f91704fc22e94de"],["/archives/2019/10/index.html","ecc73487af128f068b1da1fe81875e06"],["/archives/2019/12/index.html","c5363e1881193c1344c8d36766ae8bd9"],["/archives/2019/index.html","95364bf7b753f22bba6611a0d3738f29"],["/archives/2019/page/2/index.html","81decd1e3b9e39ad591a11cb93fa0f27"],["/archives/2019/page/3/index.html","3b105e7c1d861efa7313917fe544d06a"],["/archives/2019/page/4/index.html","57f25d24adf692664746c446cdcc8091"],["/archives/2020/01/index.html","c1c619d9894964ef26a1b109be94bdfc"],["/archives/2020/02/index.html","67cd548de7584ec41a1b9f2e4476c5b8"],["/archives/2020/03/index.html","11459f3303dba32ae24d5f128c4e012b"],["/archives/2020/index.html","b1fda20e340cb77af17fc559daa820fa"],["/archives/2020/page/2/index.html","3d5551e5c10f4746bb16a44b369b54f3"],["/archives/2020/page/3/index.html","22964e2b999304b3f57b79107f8a3339"],["/archives/index.html","13f4a95ac4a12097c7a6cfdd2e9c9cbc"],["/archives/page/2/index.html","accda9786f38522344e1cd4cd312184a"],["/archives/page/3/index.html","accda9786f38522344e1cd4cd312184a"],["/archives/page/4/index.html","accda9786f38522344e1cd4cd312184a"],["/archives/page/5/index.html","accda9786f38522344e1cd4cd312184a"],["/archives/page/6/index.html","accda9786f38522344e1cd4cd312184a"],["/archives/page/7/index.html","accda9786f38522344e1cd4cd312184a"],["/categories/index.html","00075314160c3725706c6bab11ef6784"],["/categories/公告/index.html","6d69ab182657eb78ea4307b8566aa67e"],["/categories/出题/index.html","178fade2943cae43dc5fd1dad3075aab"],["/categories/小小结/index.html","41f1326197f24a7b9af3e726e7bccb7a"],["/categories/模板/index.html","e6b384e4617a049533bdf879a071d053"],["/categories/毒瘤/index.html","6443905b5fd9dc8331b0d67ee96dddc7"],["/categories/随笔/index.html","1e16a84bdc1455dba6a011d6a42f6a30"],["/categories/题解/index.html","c4d18a2c656c5e98305574583732cb62"],["/categories/题解/page/2/index.html","ea869fa06b64d4f1ad1087ca4c01a480"],["/categories/题解/page/3/index.html","fde2a853a0d72ce55aa710218f74e4a2"],["/categories/题解/page/4/index.html","8f99d80b272396f499eecadcb3088f98"],["/categories/题解/page/5/index.html","e100eca0d0a99b2d4098f9e075252aaf"],["/categories/题解/page/6/index.html","11375169da0d518afde979ae70280e8c"],["/cfdpproblems/index.html","d8346f111facbd64bff8d46299027d04"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","973a02341c897f8c9822ff416804f2a1"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","295a124aed2b21c448fdd0765c916190"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","334a63888626f87a0bcaa4c0670ebc7e"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","7aa0a9226ae47c42aca05bc11249c919"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","6a18ebfb0953f940b0d4adb982ef4817"],["/page/3/index.html","b86cfb5f0c5098153842eff487c07642"],["/page/4/index.html","2c66785a2eb69585666acbdc45346792"],["/page/5/index.html","c6e330b7d0703567e6d57f77a4d7a6a7"],["/page/6/index.html","21f26e39273447e582b2f7aff8252f4b"],["/page/7/index.html","f3b68ab82b599e379c9fdc2ef3310c37"],["/schedule/index.html","dfa06621d4b2b95657230780084aa67f"],["/simpson/index.html","86675f4d7090b75cecb3b37fbf67c8b5"],["/sitemap/index.html","e2a110420498fb815011fbbbcd4b9dd4"],["/tags/AtCoder/index.html","038d35aaf6cff0605d66f8d0b8b41972"],["/tags/AtCoder/page/2/index.html","8db9303fbf1e9c971ace59e59fdf590d"],["/tags/CodeForces/index.html","3ea6c9fe261985a197a1c894e3b3acf9"],["/tags/CodeForces/page/2/index.html","e919c5e8f01c5569f0fc590cf0e85db7"],["/tags/CodeForces/page/3/index.html","ee5598f76cc887c37b8fd50c26a4d76c"],["/tags/DP/index.html","6e37df02fdf71189dbdf593c446f78ea"],["/tags/DP/page/2/index.html","58244fe896434caefa7ffd351806246f"],["/tags/FFT/index.html","f55544158bd417d81862c6721594b98e"],["/tags/LCT/index.html","4cdb46435a9288d47566424a8b89ff0e"],["/tags/Lucas/index.html","e9ba17f2d0cc8e3481de567b5ed5e29a"],["/tags/SPOJ/index.html","9a0debdf80be1e4b4a765be62911280d"],["/tags/USACO/index.html","41e4502db17019ab656028406c311634"],["/tags/UVa/index.html","acfd26e2dd50632136c7c3b22fb5021d"],["/tags/ZJOI/index.html","06978da47364ec825068eede48af8a9e"],["/tags/hash/index.html","4043a67fea2b44b3e229ff1769cbcf93"],["/tags/index.html","a0e5649d27c398df131f83f895938c86"],["/tags/two-points/index.html","42f9ba25c00f9d0a1b00a112e816a430"],["/tags/二分/index.html","8d9581572f30cb53e8d2cb2bf73c0ef2"],["/tags/出题/index.html","ec57f13a71d7c544e50e6448f96b0c2b"],["/tags/分块/index.html","7fd050a9f794f5a0081d7b8569c911e1"],["/tags/博弈论/index.html","3bf1c4fb052fc9de3dc6a3dfd7c044d9"],["/tags/卡常/index.html","a16145f497c73fa930bcc20a94a7718c"],["/tags/图论/index.html","f78225cfabd43fb62feddca3140c2b5a"],["/tags/字符串/index.html","03f59575591ec28a4763d936e22dde9e"],["/tags/并查集/index.html","c81ca52886e2dee1b8b19f016419a920"],["/tags/搜索/index.html","8f3c6f0f5ee4ef44e2d1ed2ebfefb05f"],["/tags/数学/index.html","08af1374ce364f04d83f6ef89ed0859e"],["/tags/数学/page/2/index.html","ac4b7ca30eeddb1fdd9ad734e6fde718"],["/tags/数据结构/index.html","c2b7348584679b98c011999f7768395c"],["/tags/数论/index.html","8459bf8831f8d830c4fb0feff5776eb4"],["/tags/最短路/index.html","5eeab0b7b4257488f322a327940c302a"],["/tags/构造/index.html","94638423a35b32a7386c71d3470d3bb5"],["/tags/树状数组-线段树/index.html","883620876e2a2bb05a5d9b9bbd3ebe53"],["/tags/树的重心/index.html","65d91ded89f22dfd4afcc64997a93319"],["/tags/模拟/index.html","b8ccae39b82bb1c2aead713b737c50a8"],["/tags/模拟赛/index.html","4473cfe052955f49c532d1d70b6fb411"],["/tags/生成树/index.html","5a532dad94d06076a3d06fb5b201a9e8"],["/tags/网络流/index.html","558e7eff1356be7ba8c7ab0e6a2155a4"],["/tags/记忆化搜索/index.html","28d8824940c4c1f2ee02547d211ad100"],["/tags/贪心/index.html","8f1731d8d81761e15651d673b6a3d791"],["/zkw线段树优化dijkstra/index.html","098c54864200355d1063cbaa01934501"],["/一道有趣的计数问题bywzp/index.html","dba439db2e67aff9e7cebd023a9bbffa"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","faaabaea2b7618a04831773157ef81c6"],["/做题记录/index.html","17183a9a4b79af398e8f7e42f7116cdb"],["/换个主题/index.html","cb4cd943670fc5d48833a43beb5e66d1"],["/整数分解求乘积最大/index.html","8603369bcd45c2b98159466f9c20592d"],["/毒瘤/index.html","ef0983b495aec9456b7bd49915e49b89"],["/浮点数开根/index.html","0bbf2a7840ccd01f7978914786617346"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","9b67e10e0e96884a5a04115dac45a352"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","24e531e095548163285b3ebbcec96d64"],["/第二次出模拟赛/index.html","f81e000b75d50d83d26c8bbd991f9733"],["/线段树入门/index.html","55de9b3f5ef7149b21dcff19cee114f1"],["/航空管制/index.html","59b762dec78c51954e2dcddeabcb009c"],["/造一棵树/index.html","6ad8b5033990d5f62b67767beccd91b8"]];
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







