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

var precacheConfig = [["/20180524模拟赛-word/index.html","f4d4c90e34c2073ff53edf811dcd55e5"],["/20190409模拟赛T1/index.html","e4e2827b5c68871313b13cc07d44d9dd"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","8571a36a258a0e0a63a4d592e7800b60"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","2a67b879d1527276c4e7a04c2d5d75ef"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","1e349d57c0881ece2656e31dc98db2a8"],["/CF1045B/index.html","998f8354caea6f07e8283ade7b807aa9"],["/CF1137F/index.html","198bf536a0807dad83b6a3227e2ee171"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","de536ff9f0f28eaa8919ddf8b6e520a7"],["/CF1264D/index.html","aa8f8cebcc762f1ec577860d282afd08"],["/CF1288F/index.html","5347993e54306740a8919aadfeceaf85"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","1544088dabf611fab6852865d9c959a4"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","289125182ec99ccbbe46b3d6da9f123f"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","8fe4df9e018efc3d3218e634cbc1d506"],["/CF449C/index.html","c1df5f7d870e1ec4ee5f50162e78df9d"],["/CF512D/index.html","361dadd6f9bb9c14114271a53092f481"],["/CF516D/index.html","0b17a66896dce756ec16fab568cd3fb5"],["/CF551C/index.html","bb178e368fa267c1d7b328729f18cbe0"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","81849006f4716e48711895c99462030e"],["/CF576D/index.html","04b45c09c32d35c2b83c99ea26d7a7a9"],["/CF708E/index.html","693fab5fb18fa01d9d2d68863259bbdc"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","6781c5d576895795299b35c197cefe08"],["/CF875E/index.html","913479dd628982a9f60bf9c1d132c6f9"],["/CF986B/index.html","ccd561008ff23128629d57f3c7c9df6e"],["/CSP2019后做的一些题/index.html","949f98375db9d0aa664f028e736405b0"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","f06739eb212587c00dc5751cd76a97f6"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","8159a5fd911000f039447cb70e7d82e7"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","74a884d98109c190815f22a6df4d9f39"],["/Rho/index.html","f329aface824500d5ba40aee217e4cf4"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","84390ff18dffd0d8d1a648a00cdd0735"],["/SP4063/index.html","0f836be0eb917e8f47f7d7db0253ca22"],["/UVa11600/index.html","a8b41e1c1ed79ac1ce003726ea459207"],["/UVa12421/index.html","8e671c388a23995a89b01531932764fd"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","08e32b99cc57fa2cbd287c17378bd95f"],["/[HEOI2015]公约数数列/index.html","0910800f0be12ecac34e67e68c77f857"],["/[北京省选集训2019]图的难题/index.html","1fa78795be6ade00f79e5878e7bdc9e8"],["/about/index.html","b3eb6e4c7c05ffde6b6c5d9982acf214"],["/agc005_c/index.html","ae855d0289af408dd613940c3d6cdd37"],["/agc006_f/index.html","1d9623c6a14991879a3e6a278b7f1a2d"],["/agc012_d/index.html","dca616cbe4758f075ae6478c0ab42376"],["/agc013_c/index.html","d3e71e45f29e0facab45d93b6f99d4a7"],["/agc014_d/index.html","d8b5cd366314fd6f5d3a1283d6c1d80c"],["/agc024_d/index.html","ceb13a120785432dedcb9fe17104e629"],["/agc029_f/index.html","879730d8d7d7f9a54f059d7cb85fcf00"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","3d718d9d73eea6d243bef49b5a7a2012"],["/agc041_d/index.html","fa2d1fde310f007156540cbb0fd37aa8"],["/agc041_e/index.html","4746d280bddc9afb45d3d71f4f365462"],["/agc041_f/index.html","6e28707fda45c9ac6e6d79c076faf5d7"],["/agc043_c/index.html","cdfa0ac8a39ca725799764407cac5ed1"],["/agc043_d/index.html","ee5519cb85e9b21ccdc26598815e2428"],["/arc068_c/index.html","c590e5f5595834d678bbaf3498a8b102"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","a3d525dda327cdea2dff314484cd7993"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","4f4e5fda9fef0ec39f522ac4896a2f9b"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","21de3ee5378b0786fbd220d61e649082"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","5f8567752e2949d09fe8aff0f15f0bfe"],["/archives/2018/11/index.html","77e61b20d4d41ae4d53182c6b5d56b83"],["/archives/2018/12/index.html","14be7699ff724b8339386f0cd8160f2c"],["/archives/2018/index.html","d3b24a42890de0fbda2859e57f9dbfa9"],["/archives/2019/01/index.html","c903c277d3f202bdc3bacd205a07dd89"],["/archives/2019/02/index.html","69e47010d78363b0dbc510d732bc3727"],["/archives/2019/03/index.html","872a3848119e45070d11693afcb6242b"],["/archives/2019/04/index.html","82cf9b8e043c8c01ad4999ac60ed0d29"],["/archives/2019/08/index.html","c85b9894f12e73472351a9b2b9c8b9ae"],["/archives/2019/09/index.html","9ff59e2933e7ad992e33afb5690900be"],["/archives/2019/10/index.html","979c0780390ba219a5e9d7b4838a6843"],["/archives/2019/12/index.html","50ed0e7f9cf9d0e572e1426572cd8fd8"],["/archives/2019/index.html","8d40f77595181e5bbb9736572769e202"],["/archives/2019/page/2/index.html","4046779a61a7aa9de9b95f651122d64e"],["/archives/2019/page/3/index.html","784e0cd51144fd492b3eea47ae0f559e"],["/archives/2019/page/4/index.html","5d33267ea5c0abef4ac4053382077a26"],["/archives/2020/01/index.html","c60d4c0d62345c9873ad82c58a00998b"],["/archives/2020/02/index.html","4c779309a26d47bce6807bf731466329"],["/archives/2020/03/index.html","dd2264a159321e1a2a96c6045cb0cea4"],["/archives/2020/04/index.html","14525b07ae1ce7836c46acb8f4af1f78"],["/archives/2020/06/index.html","5c182053eb05308fdcab472d7e507755"],["/archives/2020/index.html","028aad3bf72b516d3b3b8eeaf692692b"],["/archives/2020/page/2/index.html","ddb24a2cd03600a1ee7f4fbb3b509d13"],["/archives/2020/page/3/index.html","7aac3842e39523ad52877e3cf09cdc2e"],["/archives/index.html","3ff16584725377bbfae71f1fc695b1a6"],["/archives/page/2/index.html","3ab4b26952c4d81b12fbe0ab8dc83552"],["/archives/page/3/index.html","3ab4b26952c4d81b12fbe0ab8dc83552"],["/archives/page/4/index.html","3ab4b26952c4d81b12fbe0ab8dc83552"],["/archives/page/5/index.html","3ab4b26952c4d81b12fbe0ab8dc83552"],["/archives/page/6/index.html","3ab4b26952c4d81b12fbe0ab8dc83552"],["/archives/page/7/index.html","3ab4b26952c4d81b12fbe0ab8dc83552"],["/categories/index.html","195a6b793fe65eda9cf1b156d564c410"],["/categories/公告/index.html","d919e065162f6f97ce000be4fc49c0a8"],["/categories/出题/index.html","e170cccb994af64e6d59e3bc720421d3"],["/categories/小小结/index.html","4fa55ae2ea2d25c7d4a7f339639d2057"],["/categories/模板/index.html","bec2cbb9a4cb1b2ceb227df182a96454"],["/categories/毒瘤/index.html","4a268f448218a1a550a97c7dfae3dd34"],["/categories/随笔/index.html","0aeb4356bdaf820af341ad805e7e806d"],["/categories/题解/index.html","54c7be70a2a63a0a35ac79a60a57d7fb"],["/categories/题解/page/2/index.html","807e971cc76ff2781027aa7ddda1fae2"],["/categories/题解/page/3/index.html","5f9a5a97e44c24f51e32cd502bf8a9c0"],["/categories/题解/page/4/index.html","fc23066c9c8ed3a0901e80fa05dc076a"],["/categories/题解/page/5/index.html","705252a1205d1586cda36698f550b480"],["/categories/题解/page/6/index.html","618420b54258c3f663311489b00ea684"],["/cfdpproblems/index.html","e54399f13f74513043b833a40818f3b5"],["/css/style.css","10643bc58ec72e147572a3380f6334ec"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","550660a9c6e0a70cdde4d3e7211f35d0"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","0209ad6b887c1fded8ff3f14548acc29"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","fdd72fb21a2f8d6fa5c43334e66dfb6f"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","17f528b631ef1319bed54f1322c00ca9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","25d8c6a7760b89c9fbe1db500a146963"],["/js/search.js","99d9c384a6af97426b8075348b0b7bd7"],["/js/valine.js","ee0b9ada8e17536de52ab59836b2f701"],["/page/2/index.html","27fd36eb0e72eacebc0819e87c0f34c4"],["/page/3/index.html","358214ce4e836dadc0403746198b2c58"],["/page/4/index.html","ec042c03c0d85e4bf8b56e575820eecb"],["/page/5/index.html","010bcbb59828f7d20cc234a198f7e216"],["/page/6/index.html","abe960c755a15f872f9fcff6f8224b39"],["/page/7/index.html","08364848177e88e54f48c81eb8264aa6"],["/schedule/index.html","665cd5b34ad34c8d6887f1a4641f0512"],["/simpson/index.html","7ec43fded0fca9b8e14d3d62a7c68494"],["/sitemap/index.html","4bb7b2b5e7f003180dbc4d56c5372cc8"],["/tags/AtCoder/index.html","554d8d9222f5ba68511a03b6769c89f5"],["/tags/AtCoder/page/2/index.html","440156cf4eed3817dfc748e22506ede6"],["/tags/CodeForces/index.html","266b27eaa15b839b53ba10c9ff7b4eea"],["/tags/CodeForces/page/2/index.html","811a679987658731d36baea3678ab4a9"],["/tags/CodeForces/page/3/index.html","21da298dd390608ecfab908d7826ac25"],["/tags/DP/index.html","8774e456be0a2a93c84aa698f32f248e"],["/tags/DP/page/2/index.html","be2a1ce18e5c988d92214a35ec4f4d7e"],["/tags/FFT/index.html","019fe3dcb3b2177055168158b5beb6fe"],["/tags/LCT/index.html","66a8af21a4eafeb3c26d9c68631ffee3"],["/tags/Lucas/index.html","3a05af9bae0b2c16edeadff911a6ba49"],["/tags/SPOJ/index.html","e4185093b0b85c6528c395d20672a30c"],["/tags/USACO/index.html","375ec4249f4cefba7619995c95fe6707"],["/tags/UVa/index.html","55b46265000d84c0d6225a2d4a89448f"],["/tags/ZJOI/index.html","37235a51ce1e35d0bf5fb6af87ad7d07"],["/tags/hash/index.html","7b91fd754670b51de3d1b22d46604a8a"],["/tags/index.html","7bc9450c1d43340306322ecbe8362cb9"],["/tags/two-points/index.html","e17a437bb4b31e4d21a36e7fd15f4dfe"],["/tags/二分/index.html","17704620023e18f38403f70241e10c14"],["/tags/出题/index.html","5637061977656f20aad6cc09e1017fb2"],["/tags/分块/index.html","2d6338d5d315547cd71a27eb340492e1"],["/tags/博弈/index.html","07e1f2b2d1eeec191b296e55fa9ca49c"],["/tags/卡常/index.html","6e0e6fa576cf59f7eede80f1c2efcbd7"],["/tags/图论/index.html","0e210f873f44c0238c60393d4aa4e39e"],["/tags/字符串/index.html","b3d6c8a4d9ad77c2fa7127be4a01623f"],["/tags/并查集/index.html","335a9549675c027d06e952372d9f0f53"],["/tags/搜索/index.html","e11ef39a3a02df9228009ba1f7b43241"],["/tags/数学/index.html","ffbab5f7ace84d34c60ecd0ca86180db"],["/tags/数学/page/2/index.html","8ce63aa791edbb5b4c01c2f308d371ff"],["/tags/数据结构/index.html","96317fa93f28bfb5f687dd4228b08040"],["/tags/数论/index.html","11c5510050cc0542152c52e711219b8e"],["/tags/最短路/index.html","4213f2ba3797510ecd0c28f8b8801ce4"],["/tags/构造/index.html","db2c3c2c42ec000adec593a1f0c0ebc3"],["/tags/树状数组-线段树/index.html","6029d4718b973e2a5f2cf7c213b5f1b9"],["/tags/树的重心/index.html","07fbb4a8ff30c37a4b9b506e689256fe"],["/tags/模拟/index.html","8a948cff093841af67e81504e6efa0f2"],["/tags/模拟赛/index.html","1c188bb02a832e8df17be0196329ff9d"],["/tags/生成树/index.html","d16b557ea215f92d5bc8c3690c4c589c"],["/tags/网络流/index.html","6ab4823d93d3ebb363d14bbfb887eeab"],["/tags/记忆化搜索/index.html","505a37a52189dc8018fe2839afe34e5b"],["/tags/贪心/index.html","f317877255de62797fbc7c9ac838593e"],["/zkw线段树优化dijkstra/index.html","f9aabbef7e1815be0ca9140cbb4396bf"],["/一道有趣的计数问题bywzp/index.html","f7ad60718cedac4b70dbb5f85a5844fc"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","424812d90ccb7b5b31b931115608718f"],["/做题记录/index.html","3aadd81df550d9841102c17101c6bff1"],["/换个主题/index.html","c66a9a0bd2b927d5f383c87eb4701df4"],["/整数分解求乘积最大/index.html","88851002288554cd115582e76075ffa5"],["/毒瘤/index.html","b44935cb15b4c9c0e21ac1acc2f45e92"],["/浮点数开根/index.html","8a2fb388d83aeeea268c3ef9fd0bfd2f"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","496b4db081069c37b8365f93cf823208"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","445fd8d66e5f69db4b6ca4db52a53c08"],["/第二次出模拟赛/index.html","04c92e8163b6c46acd7f8a2a0eeedfb4"],["/线段树入门/index.html","9639755930648c5079e7346de822408b"],["/航空管制/index.html","30db39ba546de3b0a580273123212d44"],["/造一棵树/index.html","84c0e6f7d4860bc06f25b63857f106b0"]];
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







