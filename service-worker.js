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

var precacheConfig = [["/20180524模拟赛-word/index.html","be883cfea37559e4a9ff635ec32db146"],["/20190409模拟赛T1/index.html","8914b9eec1f9ecb7c76f3d4243c19ad2"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","068f503cd0a07f4c640d94fd1a686d17"],["/CF1045B/index.html","1bd22e66bd3b0165f3ac67e65ba468ce"],["/CF1137F/index.html","691815f44156be755b287c51a2f55595"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","92a76d95369761e402bda79fe376f207"],["/CF1264D/index.html","6acef46b978246ccb808d23e9c048dae"],["/CF1288F/index.html","ece8f3f37d42bcea25f98fb37c417b33"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","0234fa0af6b99882ebbd1d1a7271a4e8"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","59ba3094b5ce5d91d15950d2288db319"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","a07e1de817bdea71eff3f221f0de1970"],["/CF449C/index.html","9f166d5512590cbe9b782b1a4a3437cb"],["/CF512D/index.html","fedea91b457897e4bd446ca8dfef3448"],["/CF516D/index.html","154ce3b67d9084e33a37924a52dc03fb"],["/CF551C/index.html","2ea8db0b4aa384712c4ef0200239bf4f"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","d998c653a7d6d8ff4061e124821eb0f8"],["/CF576D/index.html","1cdfd3d4534d879167e7e35314d591c3"],["/CF708E/index.html","edc73766945a686113370510c4bdf7ba"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","4adbb7e1bec84013338a04039c1999ac"],["/CF875E/index.html","3e2c338168f3e3473faa2b2c241e8223"],["/CF986B/index.html","e039b6d81eaa659a4c42e0da3597103c"],["/CSP2019后做的一些题/index.html","aeb9f42799c06607d605b9592123db2e"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","d7754ebf0ee8ef91dd96f15fb1399261"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","585c7c4a36d2bc7d9b2baf7135ccf715"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","0ed10a2a29c372afa7f5f834525bf84c"],["/SP1026/index.html","02f7e53bfdc000a7ddb175dff38e8ef6"],["/SP4063/index.html","ff09410a81d0ce83736f2b9619a5949a"],["/UVa11600/index.html","c48a6d4bb8c0d1d0e304bdebdea24a85"],["/UVa12421/index.html","1cc87d8613343a7460cedcb5ef1be3a7"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","36b6d6605bc4b884c37e5a2e51509de6"],["/[HEOI2015]公约数数列/index.html","da53d79e4244f61bd562f73c374ce84a"],["/[北京省选集训2019]图的难题/index.html","ed6715e80a8ad2e341e49983063c2cdc"],["/about/index.html","353f2891f5ebbe1173aad1deb9008f45"],["/agc005_c/index.html","50fa5b16f7dc82f3595c8b70a29e6663"],["/agc006_f/index.html","c5af63cfd6d3f4a71896cafdcdd29869"],["/agc012_d/index.html","ce7dba591b22528cdafe59d957f7ec7b"],["/agc013_c/index.html","2b936245308db7a5e8280d4a61d856f5"],["/agc014_d/index.html","80b7617a398c8dc84782bbaac021f189"],["/agc024_d/index.html","3cf91bbf3c8a02ad05699f6c724859ac"],["/agc029_f/index.html","2e049933e8a48d5ff199562ce8e33714"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","472ea6385bbc95e49cfcdcc64401ab80"],["/agc041_d/index.html","79a851c35750c05f5239e7ad4783c65f"],["/agc041_e/index.html","c69dbf370586bc5c85f3b60b6808b9f2"],["/agc041_f/index.html","34d80824511534b3fc2d51827248250a"],["/agc043_d/index.html","3d6ebfa4461e9d760c630d14640bbbb7"],["/arc068_c/index.html","d1a9c508f1a53e85d0eacb9c88512728"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","7888d2192322722ee9dc54f6dcac5c4f"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","429c18cc76dafbb694aba363ea7312ad"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","5df14f0fbaf6b4845692b4a040391669"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","06a2d54f0d5db7a70da9e2152cb1f697"],["/archives/2018/11/index.html","f22d0006a312368c37f83513b1387d99"],["/archives/2018/12/index.html","7c45ee2f64a6d8159872734eb69c2e78"],["/archives/2018/index.html","07fe216de182c5275a056d614cdb6e18"],["/archives/2019/01/index.html","1f869cb0b7b3bab4bb9afe81a2677181"],["/archives/2019/02/index.html","27ccfbbb26a1d8500360675608dbaa23"],["/archives/2019/03/index.html","62b36adf52440eee5f8dab6dcc776c79"],["/archives/2019/04/index.html","a72d52772ebdbf56650043380dada25c"],["/archives/2019/08/index.html","c990561a630982330a52a1afa12c6e33"],["/archives/2019/09/index.html","4d6b6b5b77d969d32bd80c144d614ad5"],["/archives/2019/10/index.html","1562d80a3503fd8d82965365c6afe668"],["/archives/2019/12/index.html","5179abe0151f1be403b26f80e069688e"],["/archives/2019/index.html","d46d44d205b995af1e2f14c0639d6ff5"],["/archives/2019/page/2/index.html","23d0879a22e728c2b5ca7615fd34a4c2"],["/archives/2019/page/3/index.html","5bc17f0bbb310e5fe8877c0dd2ce55c2"],["/archives/2019/page/4/index.html","b7fdb4a8ecd1f4675cf7cc6ac6c35c12"],["/archives/2020/01/index.html","d46830625914db6c61fd903b37c3dac3"],["/archives/2020/02/index.html","8ee0f55308821f58e67316a566a9ac13"],["/archives/2020/03/index.html","35e94bf949711f8cc6962cea3bcbf8fc"],["/archives/2020/index.html","601f867be690bf04a76aed518cb72336"],["/archives/2020/page/2/index.html","3d72d0d983b117965abea7febf1d5414"],["/archives/2020/page/3/index.html","01d024ed6419f17f67ebc8da3a188adc"],["/archives/index.html","becdd3f8c81fbde6695ff5f26bed2805"],["/archives/page/2/index.html","7bb35a79d19da799e390bb3218721845"],["/archives/page/3/index.html","cbdc4b75aa69c30bf944395a16add2d6"],["/archives/page/4/index.html","cbdc4b75aa69c30bf944395a16add2d6"],["/archives/page/5/index.html","cbdc4b75aa69c30bf944395a16add2d6"],["/archives/page/6/index.html","cbdc4b75aa69c30bf944395a16add2d6"],["/archives/page/7/index.html","cbdc4b75aa69c30bf944395a16add2d6"],["/categories/index.html","f6dda0892c63f4f22c547a963a09b386"],["/categories/公告/index.html","8b2a9641df7d50756785065d689b22f7"],["/categories/出题/index.html","b69a8de89d4ad5f7a3f4fb3e0df86c2e"],["/categories/小小结/index.html","d4daf96340e7563c83fd00e7e5dd9410"],["/categories/模板/index.html","09caf2e200fc17c34855e77537a2d795"],["/categories/毒瘤/index.html","fa4dda22b2cdc41dcda749be863ee387"],["/categories/随笔/index.html","c1ef0bf9b2d0a52f308f873afd60603d"],["/categories/题解/index.html","566b73aa5cd9d5c7e66c9ef8c47e2c22"],["/categories/题解/page/2/index.html","6bd7efba12775ea4a86c4bd80d84bf4e"],["/categories/题解/page/3/index.html","1b847bd17a53c900c230b602506b5a42"],["/categories/题解/page/4/index.html","11f465b6ca8b572852fff0f620850823"],["/categories/题解/page/5/index.html","c9d4c4d6b03f9d44cf3fd37bf141293e"],["/categories/题解/page/6/index.html","0d4c25b33fc68bb7b7bd633983a5fbdf"],["/cfdpproblems/index.html","325dcd8c52aac52eac98ff48164990df"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","fc87c9c17523f986f6edd06e8bdda391"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","6b63f3482a328b7bde07780415ab254c"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","558eebae0c979bff93d835ddad45969c"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","a9463d1bd0edfcb6a5966ad0f236dacd"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","b42065dfc9a1dfa87b97db67aaa711b8"],["/page/3/index.html","7eb6699ed842d915c2bffd6e8d0ea9a3"],["/page/4/index.html","8684deb3a1f2066b24b5f375533882ea"],["/page/5/index.html","16fa7e78cf637814371a504565323fea"],["/page/6/index.html","46364199e7d375d3281c7c927881b2ea"],["/page/7/index.html","55363c4bb0240210fc03bb0d3d3da6f3"],["/schedule/index.html","6f5980fb2c8a5a4eb4edbc1c87fe157d"],["/simpson/index.html","bff65e88c6aa25153020bd897f71e508"],["/sitemap/index.html","1030671a7038566272282819f94551ba"],["/tags/AtCoder/index.html","8ece412f639f4443df6555b8231a47cd"],["/tags/AtCoder/page/2/index.html","d047e33d9cf0fbf267945d30f9ab80cd"],["/tags/CodeForces/index.html","bf49fc9aed7e1a0d63786761f2d93f9b"],["/tags/CodeForces/page/2/index.html","7e03248b50cd3b39904b7e4a761d8cdd"],["/tags/CodeForces/page/3/index.html","3d48c9d4da229e5d6ff70272438adde1"],["/tags/DP/index.html","da0e17494095b36124b66a245740d07a"],["/tags/DP/page/2/index.html","c0ac67563cbb0ad4d2d5de08639f13a9"],["/tags/FFT/index.html","d0d24ff4a9e5d580d2f1d92b3fcf7438"],["/tags/LCT/index.html","8bb568483eeec41403528827b9ad94c1"],["/tags/Lucas/index.html","211cda6eb2f324434b71562e80ba14aa"],["/tags/SPOJ/index.html","0a5f51c13805b3a5b9256494d720e502"],["/tags/USACO/index.html","9dbd2a81ede15068cef7482451438ab5"],["/tags/UVa/index.html","b71cf08cb975e65e8591554bab7e9f86"],["/tags/ZJOI/index.html","e35e4a779407cb230f3d1a0cf641cd11"],["/tags/hash/index.html","ad358ff81b5e9ac58e1b0f65a607e061"],["/tags/index.html","e15544595fb58a292b8cf38722415104"],["/tags/two-points/index.html","1f3403ff5a061d1d6841eaf107e6c28d"],["/tags/二分/index.html","85191527a779a932a1b9a632230c55b4"],["/tags/出题/index.html","a670b5f49098d40600b010d2aa951af4"],["/tags/分块/index.html","9b6db2a219ce9aef6f38a08a665dba4c"],["/tags/博弈论/index.html","0f0ae7e621140af8ff56593b31be7ef4"],["/tags/卡常/index.html","18184e68be7d6b9902a8106ec9512172"],["/tags/图论/index.html","ed612117f372006e6549d2dd65159a56"],["/tags/字符串/index.html","ae22f8b294cefe884e1044d3d8a6924c"],["/tags/并查集/index.html","1fd4cca7d5401317f03a14132c95ef94"],["/tags/搜索/index.html","ddb7760d3691ad19ba70ff88ec755893"],["/tags/数学/index.html","a052a7ce97b0072fc76c15b91db8f015"],["/tags/数学/page/2/index.html","544ffe5355b5128607f59431b6ba018d"],["/tags/数据结构/index.html","ed526b45f2619d8c34a55e1367540831"],["/tags/数论/index.html","b73fe26906ca637359f77e7d9f5c17b0"],["/tags/最短路/index.html","3f16e3f2a0de409a83ac24feae80d66c"],["/tags/构造/index.html","49b8a7408a61678ebfab39ca20c76de0"],["/tags/树状数组-线段树/index.html","35ddb2eb0246489d8f455035bf008d60"],["/tags/树的重心/index.html","08e44d2f03251a143cf300f60f6a751f"],["/tags/模拟/index.html","95140c979648a5a7b599cab2103abf21"],["/tags/模拟赛/index.html","168baa159f0aa095c3655c8eeaab8411"],["/tags/生成树/index.html","13cc14a0949103faf351ce1214bd5034"],["/tags/网络流/index.html","e339b8e87ca94239eff6cc274eef026c"],["/tags/记忆化搜索/index.html","64bbfcac4a9779ecc742802ac0e237e9"],["/tags/贪心/index.html","20d9e16d82c350caf998e8a634678ecb"],["/zkw线段树优化dijkstra/index.html","a139adabaa2aadcb86ca2e7658684b04"],["/一道有趣的计数问题bywzp/index.html","8dab73f7ed8c18aec96b60715f693cee"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","a138f7166453e19e5e9a63864d1065cc"],["/做题记录/index.html","c111fe88cdbf6dc688b2df80d8b55d86"],["/换个主题/index.html","84e8e3955613074c9cba204e64fc5e95"],["/整数分解求乘积最大/index.html","729387facbd432010a78fc9a2297b94c"],["/毒瘤/index.html","eb0f09f0b1a87da0911ad737f48d463e"],["/浮点数开根/index.html","9ab42cbeb677eb099fc59f139be5938e"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","2d4a1e2272d1c76c3a5b29bec4c34d6d"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","fbb5f3ea5441c798c5142af972700085"],["/第二次出模拟赛/index.html","ce4874073eaa2b986cd076dbf6f5c2de"],["/线段树入门/index.html","e44fda65c778a6e5b63eda096a8ec0fc"],["/航空管制/index.html","e7dc0862230d28567f1b82e9a7c1006a"],["/造一棵树/index.html","6fe1cc0124b3cdb976fa1f1f26c31914"]];
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







