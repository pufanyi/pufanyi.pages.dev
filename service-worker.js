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

var precacheConfig = [["/20180524模拟赛-word/index.html","f5970077f9e9b543a906854dd74d75ae"],["/20190409模拟赛T1/index.html","4feced243d3e64a9927e329fb992c3f3"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","41d3bd683b08314ead97e84aa65617ef"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","eb2e5292dafece8ab5beb648cc7df56c"],["/CF1045B/index.html","da5256e1fd7ce6289abaae3666ce776f"],["/CF1137F/index.html","7c27bd0e2d371a7f28b9c1055716e338"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","5aa680ae11381de806994656865678b0"],["/CF1264D/index.html","2519a647ec5c92c2cddf2e13aa0323cb"],["/CF1288F/index.html","19f5c08f82a7eb31426fd32924d02041"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","f37ced4f59b3d5ee5aa752394127ffe9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","b14d0a357f841b83d7a7395c078ab181"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","1eb0956d6d6a22a898da396d36cad6dd"],["/CF449C/index.html","0b9a2a35fb87e85460a5330fd0f191c9"],["/CF512D/index.html","7fce9d8c2f8fecb82d9c8971e9837a92"],["/CF516D/index.html","e41e1bbe996fe1e1fc7fd7bbfdb12f49"],["/CF551C/index.html","1d15b2155607125a308a15e23d0b397e"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","cdbe3013d6596d231130a1ed75635427"],["/CF576D/index.html","4ac3d4d57672bfc987aa444e425058de"],["/CF708E/index.html","4ff550b4f7d688483b4923d21eede5b1"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","21c63f855c20d6aec0ed585f38b330ce"],["/CF875E/index.html","db387e409859a0f714971442c9afc2f0"],["/CF986B/index.html","30848ba89f04599e178b6c429e83a475"],["/CSP2019后做的一些题/index.html","0207cefa79dc1aec23389a963761972b"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","0a5a74e5c75402c7d6c011dd37c5a419"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","763c49fafe7438585236f226e0b0a4d1"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","32420178181f0f3de215c579bd40498e"],["/Rho/index.html","1831a099cff23dc014545399dc78635c"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","570287b47945bae950860aa0d5d12baa"],["/SP4063/index.html","5b6f1335b5642c4a87456d080c6b890a"],["/UVa11600/index.html","d7057e03e766b89f6e7d69942f29da83"],["/UVa12421/index.html","fcdcec957e254b0bbe17cad8ca346e4c"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","1eb44178a7ee5e162f0c1d220abfb280"],["/[HEOI2015]公约数数列/index.html","a5f640d4815b7f05e20714b2b80aaada"],["/[北京省选集训2019]图的难题/index.html","807cff6ce03e5aadd13279ef9a7a3547"],["/about/index.html","edbf446d808d82caa1aafa887bb32e95"],["/agc005_c/index.html","635a6426cf718b889027496b8f894480"],["/agc006_f/index.html","2add45eb5f174176161352df017f5b5d"],["/agc012_d/index.html","303e6ea1f92c4a78b319ded1eac2393e"],["/agc013_c/index.html","343598588ab4f7abe41b19560f076b7e"],["/agc014_d/index.html","7949ca0be43836daf89e0953befde7be"],["/agc024_d/index.html","dbb95eb57ca14e32ac6959e894c0ce51"],["/agc029_f/index.html","a8161adc8d183097409a0453370552e7"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","806a3f3bbe0be1b9254de22af095c021"],["/agc041_d/index.html","92182babf563888097574422e3e43345"],["/agc041_e/index.html","9baa8da7d3b927e3783e9f2cd17b1168"],["/agc041_f/index.html","8eb4830d711cbbf36ded9a8e71dad842"],["/agc043_c/index.html","f47749796be907aa9b16fac376099924"],["/agc043_d/index.html","02f12e1a46d880bb610ec0ef679f6c9b"],["/arc068_c/index.html","a70bec941a4e58a35485c8bd650f3e8e"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","11cf2ea305cc8af2c43ab77df1a88f35"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","ace98244d7c01c7cec35d81bd4508268"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","99d004d0e1cab96fe5b1dd164dd34be2"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","bcc046d900d6f22d15d3b1a6009e89a2"],["/archives/2018/11/index.html","731adc167002439816a4b8ce23116226"],["/archives/2018/12/index.html","631e9ea275390626513338b84c243977"],["/archives/2018/index.html","84478180b17b5cc7efa300488a79dd71"],["/archives/2019/01/index.html","1f4ea51cf4fe8156fb2408447516b4c1"],["/archives/2019/02/index.html","1211a8d98f9160e20a7543c683db65df"],["/archives/2019/03/index.html","d6595f5d23fb045cf6c6ef2eb2ac6a0d"],["/archives/2019/04/index.html","61d6698543cbfd51adcfa32a0fc3d839"],["/archives/2019/08/index.html","7f0a7a50baa8035f7127436f0a3461f8"],["/archives/2019/09/index.html","33050fb62c4a941e1360e244075a80a6"],["/archives/2019/10/index.html","757cdb4a9c29374aa2f714cce0326414"],["/archives/2019/12/index.html","10f1b3a4707c4280ec1c4a7ffa3ae338"],["/archives/2019/index.html","16045759331902975a961b5882ed0d7e"],["/archives/2019/page/2/index.html","f5a71e6bd63b70ae5acfe42a55e6b2b2"],["/archives/2019/page/3/index.html","c5d87eed9397d244572b3fe2f99ba91b"],["/archives/2019/page/4/index.html","753f765f61f00d55083f2ff487db1f03"],["/archives/2020/01/index.html","79b90c7ee247af9179edaf1e6727af8b"],["/archives/2020/02/index.html","19c22e7f06e9e5fa22779b073e73b7e5"],["/archives/2020/03/index.html","30dff1cd4290e679c9bb4f949b10789f"],["/archives/2020/04/index.html","e68e017c4fda7137e54e9c0d0b2dd520"],["/archives/2020/index.html","b835efb66a4b8b6554ecc70c413faa7e"],["/archives/2020/page/2/index.html","74332bd8c57cf0c54c6eadfc33d6c180"],["/archives/2020/page/3/index.html","73c84f1f67470c66a80ef9af15a6f832"],["/archives/index.html","366e98a35cbc55306719b41e3275ac96"],["/archives/page/2/index.html","b881613a5d1b8b353d2ad4f9fe94430d"],["/archives/page/3/index.html","b881613a5d1b8b353d2ad4f9fe94430d"],["/archives/page/4/index.html","b881613a5d1b8b353d2ad4f9fe94430d"],["/archives/page/5/index.html","b881613a5d1b8b353d2ad4f9fe94430d"],["/archives/page/6/index.html","b881613a5d1b8b353d2ad4f9fe94430d"],["/archives/page/7/index.html","b881613a5d1b8b353d2ad4f9fe94430d"],["/categories/index.html","69cc6c28cd15cbd7459e85e91fd0b412"],["/categories/公告/index.html","c53875642ab2648ab8692c2192b625c7"],["/categories/出题/index.html","04f371df9fb01d5a67e1bcd339b23ddb"],["/categories/小小结/index.html","7ef4dc666fe5078884690393c97e68d5"],["/categories/模板/index.html","4434c781770acb9d5235752364032a9e"],["/categories/毒瘤/index.html","3c69f8bbd2e189701fcbe07af732af13"],["/categories/随笔/index.html","d45f8d71f0dfedaa128188776965f07c"],["/categories/题解/index.html","c3f0320bdac72ae7e231d4b4aa21d626"],["/categories/题解/page/2/index.html","08a5db7b79aabc18468523cdb3a16f5b"],["/categories/题解/page/3/index.html","0176177877944342c93541e6ab9c7f3d"],["/categories/题解/page/4/index.html","f581946291cf1a7328c1be1add26c262"],["/categories/题解/page/5/index.html","98de8335038d555472918dbbeabdca6e"],["/categories/题解/page/6/index.html","d57f35b8075de99284db56e414dd23a1"],["/cfdpproblems/index.html","60d7efe5e9a05da6a428ac0c179f034b"],["/css/style.css","a7d3eb3d15ed6fbf497f753ae78db62f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","4191dc88c86eaf215020c5d972e0860b"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","c85614342257ace6cfb0602748a93bda"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","90b7def5f8e8b4c6c81fe559706bf6b9"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e8615363359eb864cee049c5d1bda9f7"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","4db8d211fa0044ccca7768c378642776"],["/js/search.js","c6bdb7f8537c81402796a54b1d072fd9"],["/js/valine.js","6048e36667b2125f42094e88b98dd32d"],["/page/2/index.html","940bd64cfd472da02e57faa904154dfc"],["/page/3/index.html","c0bf7e4ab147d49f18ae3b7e9e87c464"],["/page/4/index.html","fd0696040818ae2afac8469b726673f0"],["/page/5/index.html","081f55ffe1ba042631add06acf23a61b"],["/page/6/index.html","94ba59b8555336ad4e4b65ae50ce866c"],["/page/7/index.html","a5204f4f86fea1beb2da664ddfc26a70"],["/schedule/index.html","b9986349e14b01e908e2d014c3374562"],["/simpson/index.html","f5b3207b0e9e59bdc9fc07f2c9843bfe"],["/sitemap/index.html","63109cd93db20222c5616ae6bff99f39"],["/tags/AtCoder/index.html","0c1eba34c9a1aefc7684e92e109f89f4"],["/tags/AtCoder/page/2/index.html","e3bd3b063b2d9382b3b7d568769e16e8"],["/tags/CodeForces/index.html","da3d2dcb1528aea2bbd4c99eb5fbea15"],["/tags/CodeForces/page/2/index.html","7035b0c971a557de90fd167159edcece"],["/tags/CodeForces/page/3/index.html","885e8fc4c64b1b05ab33f8e5ff978c81"],["/tags/DP/index.html","bf9dfbc3844970aa80a3b117e198d69f"],["/tags/DP/page/2/index.html","0dd932dbf0f80ecfb40277cb3a6cf970"],["/tags/FFT/index.html","34b3b99be6a3316ef7003f7fcda7cef8"],["/tags/LCT/index.html","93a1e36cde99c22a04a344f498d60e0e"],["/tags/Lucas/index.html","032800b90abd76a77e89b1a8a04c1870"],["/tags/SPOJ/index.html","3e230685439c60e060010de4fdad0d4b"],["/tags/USACO/index.html","af8a98fd4d1cd3ef0362803cd8359ba4"],["/tags/UVa/index.html","aafa776b742ac4abd768ff9cd0076e55"],["/tags/ZJOI/index.html","c44467ae8287146aeed1dcb999e80f82"],["/tags/hash/index.html","b96a6aca1aebf71269d76d98b72f223a"],["/tags/index.html","ac0150ca73ceb01980567098342d505e"],["/tags/two-points/index.html","f03edf48a1838e56871522ccc9d70a69"],["/tags/二分/index.html","d064d2f70bcf544df50fc1f508481558"],["/tags/出题/index.html","4717b99b91de38373f2c6b78db48f412"],["/tags/分块/index.html","de79bd83ca81c2082bba6672d6e38525"],["/tags/博弈/index.html","33afc819d24b790be77c878b533ca341"],["/tags/卡常/index.html","8d0f14d50b7a288b1aa52cac2ddc0b02"],["/tags/图论/index.html","0e5b885bcb31b693343c432194b9db05"],["/tags/字符串/index.html","b7853b997138fac5e6da07ba1ee32dd4"],["/tags/并查集/index.html","08d80687f0c9bbe41f7584e5ab1cd6e7"],["/tags/搜索/index.html","a3e2d2193b7454b45c0f9379be4df0a9"],["/tags/数学/index.html","02b91a2fc18efe6c8be17cb95acbac39"],["/tags/数学/page/2/index.html","54e1ccd39b9fc3c15ce82c800da6145e"],["/tags/数据结构/index.html","db8427dfb450c9c08bcd7921daa534dd"],["/tags/数论/index.html","e80d4018d026ab5b55e875e1256ca039"],["/tags/最短路/index.html","604689adff86ca7cfb99934884b16da5"],["/tags/构造/index.html","bc566332c8a4fc345cc9c73ecb5ee19d"],["/tags/树状数组-线段树/index.html","30f17607cefafaf2610ed99ab0387257"],["/tags/树的重心/index.html","290c64ab34626bf79226ee4eee72cd95"],["/tags/模拟/index.html","ae520f1c884a9ebdb577a0a449226ce2"],["/tags/模拟赛/index.html","8ac53b8a43c4703df8c9c2777dc6b436"],["/tags/生成树/index.html","c71891d3aefbf5fc1ffa170af41481ab"],["/tags/网络流/index.html","0a29ff9d181817ea2c767487e5ecb9a6"],["/tags/记忆化搜索/index.html","33601abba80076036d4163e34eb4e7a5"],["/tags/贪心/index.html","fca27457a41821a8ae92f52180336d78"],["/zkw线段树优化dijkstra/index.html","46699ace92f9cc61e6cfb47a54caa739"],["/一道有趣的计数问题bywzp/index.html","7123e85f4dab3a557c120134402060a5"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","9ab1e4cbb11c5ccd5f481e40542411db"],["/做题记录/index.html","b1c155cfea2260f23665abe29c07268e"],["/换个主题/index.html","380bdba6c18a24de7592dd7099c7fb5a"],["/整数分解求乘积最大/index.html","ddfc7f474da60fa9921e7b11758f7556"],["/毒瘤/index.html","4f8bd269fdb9a208d67c891145193e5e"],["/浮点数开根/index.html","54df69c1e381b91a38ff6cd659eb52ec"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","41cf3012caa3f1133ff923b9a5e5a8c0"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","f74a510627b2d2530e29f78159c649c1"],["/第二次出模拟赛/index.html","5410d81ccbba0f83e3b1de83f9c44eb4"],["/线段树入门/index.html","2eac7f95f93f2e32977ba3931762f2e0"],["/航空管制/index.html","da8236fcb906a5a17bc9eebda67198bb"],["/造一棵树/index.html","aa59c67230d12db39420260bae645179"]];
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







