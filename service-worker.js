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

var precacheConfig = [["/20180524模拟赛-word/index.html","f80a93473cdb75c90d7d4d89e3dc9bb3"],["/20190409模拟赛T1/index.html","cd416182d1bfd949186397052d98f304"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","f54b1377021ee2ed275a041f70c64758"],["/CF1045B/index.html","0270668f85a8be67f1d8160667bfe1b8"],["/CF1137F/index.html","c8d74de3bd83a8d6c14855e064eb80c4"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","1a61c6848f795e7bd8eb58375a1eab3d"],["/CF1264D/index.html","7a3960f35f706253a2a7fcdf8e286fab"],["/CF1288F/index.html","bc7e46ca66fce4d7f4b47fbc5f2c133e"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","361ee81ba7a9fd5c74b8c29ed72a2765"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","2cc749b463c87db1316c42372ca869e7"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","aefa6d531aba6ffea45eebe5ef36f8f6"],["/CF449C/index.html","03d6d1d6d5381d4348ab87e46b527db3"],["/CF512D/index.html","70d658e9049b32b953bcef1ea20bc1f2"],["/CF516D/index.html","6175a7e362ba30fb91a8ff02727b4f20"],["/CF551C/index.html","2f69b42311d267d0ac0af018953f49b8"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","261b6c85621fd57bbc0e5edbc9967f75"],["/CF576D/index.html","76859ae1e1ba3321dfe5a6463115ddab"],["/CF708E/index.html","8974d9ae24059d45f5cd6fc0e1067af9"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","3a7932ef786b5ba40a0a3640d89dbc1b"],["/CF875E/index.html","2a3f4a7cc52ab3e2c987ee76f604130a"],["/CF986B/index.html","ac1785151fafd0be3ed5d03cb329a32c"],["/CSP2019后做的一些题/index.html","f1567b55a7a687ce7a5a20628556ecca"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","fe8cbc4abf5fa99a9044ef62adece8a4"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","bbd22ca0dd057c7fc133db90354f6658"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","38fb177736f643d5c94be25881a5e372"],["/SP1026/index.html","9ec93001e4ebaf5b23563b804ff80a3b"],["/SP4063/index.html","0eb0c7ab8ed12baba12a557d75ff655c"],["/UVa11600/index.html","738ee4910009b0092d6eb32aab55929a"],["/UVa12421/index.html","f10fdb3c74cc66ce4089ee26f77b48c8"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","b4530912ab4e79f305b022b940e0ad8a"],["/[HEOI2015]公约数数列/index.html","4e4ac756dd415b9bc157de72a21095a3"],["/[北京省选集训2019]图的难题/index.html","5b9691061758d064b288b796707bbf83"],["/about/index.html","29c27bd6cbdb2a4c40728288355aa1f3"],["/agc005_c/index.html","342279477820a8b839a3ec330a6a7698"],["/agc006_f/index.html","749dc458e907fbfb4173cfda8c0a15d4"],["/agc012_d/index.html","8047aef893e8a0b460d077be56c83bd3"],["/agc013_c/index.html","59f7913c8f8fd3d959237d3f4e70ef70"],["/agc014_d/index.html","4c1ae28daad8a45a4c51959e2fd0c687"],["/agc024_d/index.html","1ae78f9141b42a91e259aa138a9a35ab"],["/agc029_f/index.html","e19b8bbe81b023d752469e4f5ade403c"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","aac4515b465cbb7c895a78549ac86f3d"],["/agc041_d/index.html","e98149cf4b52f62187840802491b0242"],["/agc041_e/index.html","df5f3e27b3f1b0259f74ab5c942e34bc"],["/agc041_f/index.html","73ee20421b3e38336c4a866b584d5b9a"],["/arc068_c/index.html","955105dd795f8c0e52c02b31ea736426"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","cc81c009c18edf5e984ab36707aee488"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","c26889af4e23c436d2e25dfbb9be4e40"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","8c89429a67b619ae3d35c28627415dde"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","e207eed57a96df7ce1c268e46e457652"],["/archives/2018/11/index.html","995cf9fc8ccacaa68b88477af6a6f60b"],["/archives/2018/12/index.html","f0f88c0e3b6206883f930377b55181e7"],["/archives/2018/index.html","c6f119cd18e124049f9a1128db6a8aba"],["/archives/2019/01/index.html","bb1fdd422825612cd7dd680174c45afa"],["/archives/2019/02/index.html","8de8c101339c5ac6c411d1535f2232bf"],["/archives/2019/03/index.html","935d127f27fd642b5abc371367c9ac8a"],["/archives/2019/04/index.html","57a39f935180a81eec94c7b3847047eb"],["/archives/2019/08/index.html","88472e32882bc357d4bbd6d1af988e4c"],["/archives/2019/09/index.html","3ebff65847954ff93d5d2331487fd945"],["/archives/2019/10/index.html","361c438c9a62472a3f9eb651233d271f"],["/archives/2019/12/index.html","773918c1fbd3d2f02a38f8fcc1caf803"],["/archives/2019/index.html","536bb8ed3bc0d6a2c4edc6978212754c"],["/archives/2019/page/2/index.html","fe91faf4d6b1227fab038f5b82cd1e4a"],["/archives/2019/page/3/index.html","24fb6141e3c47a27bb0fed08838b78f9"],["/archives/2019/page/4/index.html","df0a9f6849cec63abe19111ef2ecf05e"],["/archives/2020/01/index.html","76b74dadddb512bb50f1f0bd68313eaa"],["/archives/2020/02/index.html","93a245fe93dfdf89018ba1f637412464"],["/archives/2020/03/index.html","4ce5979ec258436684b4d5891d085bf3"],["/archives/2020/index.html","9e9b251e590aa7a85402d39b55355fc0"],["/archives/2020/page/2/index.html","4c6002e3d2539e698f2332cdda11eb84"],["/archives/index.html","88e3f852967f6637b1f5cca566eab6c2"],["/archives/page/2/index.html","29f608c47a22e775ff036617b2752106"],["/archives/page/3/index.html","29f608c47a22e775ff036617b2752106"],["/archives/page/4/index.html","29f608c47a22e775ff036617b2752106"],["/archives/page/5/index.html","29f608c47a22e775ff036617b2752106"],["/archives/page/6/index.html","29f608c47a22e775ff036617b2752106"],["/archives/page/7/index.html","29f608c47a22e775ff036617b2752106"],["/categories/index.html","6c5ea709d547e537209944c84a4fd0fc"],["/categories/出题/index.html","2b3773f0b8f138e7eb32cc70f2cd86a9"],["/categories/小小结/index.html","55cedf32448d456e437948196bcfe01a"],["/categories/模板/index.html","e069a2bf0ae76bc2e26ace96284836b5"],["/categories/毒瘤/index.html","e226be636b7c6a44fb4fafe254defcff"],["/categories/随笔/index.html","9cb8cf1ebc61c5705717c7a6eb70ee82"],["/categories/题解/index.html","88708d5c1bd395fa071a18f3390522f6"],["/categories/题解/page/2/index.html","3592ebf72f9cf1f214d39ce0423aceca"],["/categories/题解/page/3/index.html","b86e940461e6a885116c4d358d3adfa6"],["/categories/题解/page/4/index.html","1798e98658bbe91c0efa50b80c710a42"],["/categories/题解/page/5/index.html","4ad5d653140e70528c642659e49d23b1"],["/cfdpproblems/index.html","8d4a3d84f3f16840ef02f5ef7ca7a802"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","e5db4f20139c1a17cdd3bbe8508b0aa6"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","57d38f905bc14cb9aa93f56bd948f4cc"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","443aaa231e77115a3bda6a990a5c773b"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","8a7073f0049232de8fc2b900ddf5668f"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","9431dce9e877f3adb36c0c5f20eec046"],["/page/3/index.html","a169b2e669a12b87b508b0876f4e6e27"],["/page/4/index.html","86b644b8862d3822e8d2a20a0e584537"],["/page/5/index.html","72006515012929deaeaaea6cbeb76876"],["/page/6/index.html","6498adad250995a79fb0211715803a61"],["/page/7/index.html","e1f9c4c9637c48e46dd8c8ddf99f0e27"],["/schedule/index.html","ec7344a7d988cf71f555c327913690a1"],["/simpson/index.html","104e6ecbf7b10ca007dd9083aa4dff81"],["/sitemap/index.html","64c73aa262084142ad1b344961d9135f"],["/tags/AtCoder/index.html","9339a5fc95c66be53bcfe955dfbb4d8a"],["/tags/AtCoder/page/2/index.html","297be9a5769ee32222d76f863fd1bc6e"],["/tags/CodeForces/index.html","69e614046c81764f3608d953b2f06e14"],["/tags/CodeForces/page/2/index.html","bead5af5f915a317f994d8f00d8e8b57"],["/tags/CodeForces/page/3/index.html","7f7de291b4dc2a87e9c6fabb21c3000c"],["/tags/DP/index.html","4877517b741280b17ea1a54006e0fb00"],["/tags/DP/page/2/index.html","5a3ac6ee154d3f4a2b127440dc8a1cce"],["/tags/FFT/index.html","b298edd30fd2bbca8d50306feafd6a69"],["/tags/LCT/index.html","f819ad5eaf76d4b6b82ad141b8ba254f"],["/tags/Lucas/index.html","98f64fbe8a2a6523003d3d6e379afa02"],["/tags/SPOJ/index.html","b7186abe3f48ef8bdf35b544627c1838"],["/tags/USACO/index.html","df7d3be476a43707cdd0303948c4c4a7"],["/tags/UVa/index.html","49d1f879c7ce3e25e567b018031bc857"],["/tags/ZJOI/index.html","a8dfb41713e9ba76e37f89b6bec084a2"],["/tags/hash/index.html","86262aa063904bd506d216d7eb9c9e33"],["/tags/index.html","674299e4f679f3ae5290f9510ef5df3e"],["/tags/two-points/index.html","fcee552d597e82cb6f7b2ecd87ef228a"],["/tags/二分/index.html","6cccd5b9e1ae53ffa1b33cc16c09a7e6"],["/tags/出题/index.html","75c4836994e77bfb95d5a4107e8ed7b1"],["/tags/分块/index.html","b21db5aae4f26aab5e5ada43e3aff6b7"],["/tags/博弈论/index.html","d55613ecae1372a0396f95e5e1fe10bc"],["/tags/卡常/index.html","2c1cbb801fbbdf8ed2f229918cd8c464"],["/tags/图论/index.html","900c39e0b7158f61093b9557fd5f806e"],["/tags/字符串/index.html","6338966b7a7dbd0ee0f107ec6f724197"],["/tags/并查集/index.html","c9cce42039e33b5075e012ff2fadb74f"],["/tags/搜索/index.html","171b34bfea73e5193e93763db7f17261"],["/tags/数学/index.html","649c5e95a0873af28c3dddd99ae6baf1"],["/tags/数学/page/2/index.html","e1ef651b9e95955e8db4391a270570ae"],["/tags/数据结构/index.html","de24546cfcabd7e75f22b99834fde3e2"],["/tags/数论/index.html","26b65402762b9efe2996ea2d89c916fb"],["/tags/最短路/index.html","77c85357322e2067c65c4200aa64b096"],["/tags/构造/index.html","a23d14e16efa3792f5275e4ccb6279b4"],["/tags/树状数组-线段树/index.html","af1f5bc5d58450818f70b0f409276d65"],["/tags/树的重心/index.html","3ffd7dca3db786dd29a9badbaff47d40"],["/tags/模拟/index.html","7a5a4876acf926d60fc03b15c6520cf8"],["/tags/模拟赛/index.html","71d89382b978f2fa1e9d85eb6e230823"],["/tags/生成树/index.html","9ffca2e5afaa96b53c0d418009afc76c"],["/tags/网络流/index.html","248bc294b7ad7298c8592750b299369e"],["/tags/记忆化搜索/index.html","5d62b5c9427948a68a806f7392fd1ab4"],["/tags/贪心/index.html","725244ac3f810adfa4abe9c51e0bca30"],["/zkw线段树优化dijkstra/index.html","1ecf0054f92180b3cc65671194986314"],["/一道有趣的计数问题bywzp/index.html","3440371329e53a87e8ebcba37b2b6d39"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","2b41ff8f6d40bc6e572549cda6754e09"],["/做题记录/index.html","f4bdf8a65c59fbc2aed67b75d9b3f56f"],["/换个主题/index.html","12d9b26ef5f29568439604e9d2cdbab5"],["/整数分解求乘积最大/index.html","a70d15de42e37ec6fd6a4d66bf4fb1ff"],["/毒瘤/index.html","4860ebe18511e794a3169757534ce2a1"],["/浮点数开根/index.html","a44ce7ef313f65b7ab63b3479989b38d"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","baf108c1b6af61e7c29320c3f43f0af2"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","2b7e73a067ec6432f2122f69b5492f29"],["/第二次出模拟赛/index.html","24aa9f58a78e690bf40e2afeedb43dab"],["/线段树入门/index.html","2566a7026534f97fd68d54d7f45066c2"],["/航空管制/index.html","2c485b629187d54c596c5f7648d5892c"],["/造一棵树/index.html","7016402d7b502235a85acc9e641bb6ad"]];
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







