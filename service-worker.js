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

var precacheConfig = [["/20180524模拟赛-word/index.html","d4995ab23e70b93855034095b8f23551"],["/20190409模拟赛T1/index.html","71147b487dced64f4a6001287a4be6a9"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","c4f82a81259ff7470093f83a82dbcdc8"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","03fc9bfae8968d3b38183e0f4cbe88bd"],["/CF1045B/index.html","21850bc04e5df29a0c6bc22b7492453b"],["/CF1137F/index.html","10d78e7d23d47ae2b6288f2ddf49f288"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","075cc5c251630222d4df6eee9ed33dca"],["/CF1264D/index.html","666bf7133ac2b2744034e75532feb3a8"],["/CF1288F/index.html","5984dc544f1149a35b32b2592b4baacc"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","1420fa9ac5ab832d19a166f12c22f6a9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","f534cc5801480523ea716bd6d2c5db87"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","ff689cbf7afe6d814aa6348325adbfc3"],["/CF449C/index.html","8763007f4e14b7a33138323a3af235cc"],["/CF512D/index.html","513dd1e02661676407eede8be3e8f7fc"],["/CF516D/index.html","b823f01c59012118445afd3446845ed6"],["/CF551C/index.html","7e2f0380b079c9463144d2dee41cce89"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","c3779641a619fdc61d03c4af160d8fc6"],["/CF576D/index.html","1a5779ec114de4af22048b5ef129bbe0"],["/CF708E/index.html","dda4f45a3eda653ff10ee9ba3a41754c"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","b25228c7dee429ffec207152ec1058fa"],["/CF875E/index.html","940c4b4cb2dc3737bf4fc0afcc601827"],["/CF986B/index.html","30cd65124f54b99acb96ec0014da1b15"],["/CSP2019后做的一些题/index.html","aac59ea08429f544288ae442eb99420b"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","40a4d0ddb727a5031239ae3463716b6b"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","05ed1161c3f491e35b600583008d45b0"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","b6f816a359f549f3f7e3148d9b81e568"],["/Rho/index.html","18760708cf4efa35ff7fa05a2210ac7d"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","d5b88b89a4c84bed09493ce1d780432b"],["/SP4063/index.html","88a0198602cbfcbbec849909a2b76346"],["/UVa11600/index.html","7eb29831f850251afd7ecc0177166f25"],["/UVa12421/index.html","cfb8087046c98af4795c52f9355ba65a"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","15d9adb21a2ff580a90a4741501a8cc3"],["/[HEOI2015]公约数数列/index.html","4244382a1a7e0d0fa1210eedac1ae033"],["/[北京省选集训2019]图的难题/index.html","2584ba0174df2feec4fe919ae0e327e3"],["/about/index.html","46e454b53fbaa7c560318a1de276eb70"],["/agc005_c/index.html","dbc0be49ae20b958f95a1f5e11a7a089"],["/agc012_d/index.html","8238f4cc9cb21353fb9b07b617fd9583"],["/agc013_c/index.html","3cf745eb676e5f51c1fb736c83163de8"],["/agc014_d/index.html","77b2de45ce1b5e2411115512366b67a5"],["/agc024_d/index.html","eed5a8e84b075aa40c479cae0df335f9"],["/agc029_f/index.html","6b8d4e836a64b1ab4c1391b433380c9c"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","bd1b68867e8ac253bab802db1dd7fe7f"],["/agc041_d/index.html","8653ebcc25ce39308d03a003faf2624e"],["/agc041_e/index.html","b5899fb399c6a80e44432b553dfe0b3c"],["/agc041_f/index.html","5e2a21f2866dc98db4059d9bd55053ec"],["/agc043_c/index.html","fff09a3a5773f745b89640efb408723d"],["/agc043_d/index.html","66856c61457a2229494e2c4efdd030e2"],["/arc068_c/index.html","c303b0c0fa0b6ccd927c88af0542b6f3"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","3dfbcc6226e630d61606e9aa7056f6ca"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","bfe81be1336199b6e77feb83963dce5c"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","93ab8e7d859909bf1e38b8fa92c97246"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","d277106844aed1353bd89d34bd684c53"],["/archives/2018/11/index.html","f05290bdb43820539d48bfc7d8c33ddb"],["/archives/2018/12/index.html","c741e3ca52d82ccfe898e9f1218f557d"],["/archives/2018/index.html","3002023e22e1f5a6de28a44905e43cc0"],["/archives/2019/01/index.html","0cb9232c5ba299153479d817651b8280"],["/archives/2019/02/index.html","367d09d1319ab98b16372e59311fff30"],["/archives/2019/03/index.html","4b5d74619426493c126247b4da8ca675"],["/archives/2019/04/index.html","899b6d980763ece3e95c59443fa7f8af"],["/archives/2019/08/index.html","2c9e99e1b5e688daba136419df629ce8"],["/archives/2019/09/index.html","201b26ee5a90a3142ddfb23ac7347e15"],["/archives/2019/10/index.html","319ba2eb8c71dce20fd62dc60ce1dc0d"],["/archives/2019/12/index.html","6a41a60af7e4ccabae768ceea5aba1fb"],["/archives/2019/index.html","8d71e9809f817e5b5dd0bc8f9d76fd80"],["/archives/2019/page/2/index.html","b16869c52b4c9605ed82ead54f33d4c9"],["/archives/2019/page/3/index.html","c25a0323e5ae9d152788e58ed678aa9d"],["/archives/2019/page/4/index.html","33495fb33f44fbb1392769df37638dd6"],["/archives/2020/01/index.html","d69d09f65746269e056d384db5b3d24d"],["/archives/2020/02/index.html","95972ad0117a29ef88b78d8e2ad0581c"],["/archives/2020/03/index.html","0d906dc524bff928a23e0b5c3322019e"],["/archives/2020/04/index.html","0b793cf77e8dc5984387d2c03c2bfd17"],["/archives/2020/06/index.html","3c0c817a2853316b2187196c0ec05d9b"],["/archives/2020/index.html","c3ee44279eda240dc1255c39163463f6"],["/archives/2020/page/2/index.html","c1b7bac81439d4859bfba72b833d74ab"],["/archives/2020/page/3/index.html","8e0aaf582158aa299d49b93bc213dc5b"],["/archives/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/archives/page/2/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/archives/page/3/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/archives/page/4/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/archives/page/5/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/archives/page/6/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/archives/page/7/index.html","200076b3dbf8fdafc41cbb4576e89ea6"],["/categories/index.html","a320519389c01e3082b1f410dbb0ee1b"],["/categories/公告/index.html","fa0ba6a41357f775c60a3901c24a5ec5"],["/categories/出题/index.html","1d8ccf50c8f92f0e18e645a727f80aa2"],["/categories/小小结/index.html","1d6b8ba7690d84222db7ed994c75a80d"],["/categories/模板/index.html","c93f0f0357bd4078659402a40e224855"],["/categories/毒瘤/index.html","3712aefb60eb3ec2166f3812c0d95ac1"],["/categories/随笔/index.html","c556e86b4c7ce0ccce2a079fb1291d70"],["/categories/题解/index.html","d447e2c8df11c34f95f8f85864ff9547"],["/categories/题解/page/2/index.html","5dd9e9341ee59f2c3f4c5a53ea19f492"],["/categories/题解/page/3/index.html","c3c59cbbd3a79aa46732f713c798f236"],["/categories/题解/page/4/index.html","ef816bc9ba5b794c3a62d4b17c78c173"],["/categories/题解/page/5/index.html","2da3cc7f1f19092f580df026f3e8db7e"],["/categories/题解/page/6/index.html","121749dd5f5c0382f297d0ff2a99e820"],["/cfdpproblems/index.html","2ca9ec028917a8a74b204d0f964580fe"],["/css/style.css","9190760cce274bd4579a6ae143b93627"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","243812c993414ad69cdf15086ecfd21b"],["/gitee镜像/index.html","300aa270d19f59ec0a8bffaad525868d"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","0f1df6ccc725a2d4c6c9126e8856334c"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","9f0cc5ec5fe3470ce1c911fcb0450ab7"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","a99fe075ba73f254115004e736cde40f"],["/page/3/index.html","bba345a812cd68575d7c6cfa62f41487"],["/page/4/index.html","6c815af04c0238e10f650079e26bac86"],["/page/5/index.html","47d10910d5573368bed481b4bb42f4b6"],["/page/6/index.html","5644f004eb6f43b130680e170ecbe519"],["/page/7/index.html","e0876c8ade96da5ea5b69017835b5348"],["/schedule/index.html","1bad64a251dad26afbbb11dcc6ef61e8"],["/simpson/index.html","09c573c3f00813de1e83b58c9305401a"],["/sitemap/index.html","9fffbbafd3f67f5186e15e0cfa14ac88"],["/tags/AtCoder/index.html","781f6eefcebd61b5fa53f12285e9f65e"],["/tags/AtCoder/page/2/index.html","f9377540e4f77f2dc258b5db97bdb1e4"],["/tags/CodeForces/index.html","31208c58fadcb5a5fb76def3e16a8ef0"],["/tags/CodeForces/page/2/index.html","03b83995accc0999129d237505d0fe4f"],["/tags/CodeForces/page/3/index.html","adaf6d63a32791e7289078c0e22b24d8"],["/tags/DP/index.html","ec2d7d8121842f6d21e640c6794f08ca"],["/tags/DP/page/2/index.html","057e4af03231b40f9ff0d5f4254d595d"],["/tags/FFT/index.html","58f55ba56d9164b0364c39744e5914af"],["/tags/LCT/index.html","0dbd51d087f8c0b3cc75a2a148910dc4"],["/tags/Lucas/index.html","19ed0b2bb3cf35a848b6061480bb6df1"],["/tags/SPOJ/index.html","8e3c6e49fe05703248a58da56652102c"],["/tags/USACO/index.html","a596bbafc77aae567cbbd12e3fbe7d8c"],["/tags/UVa/index.html","a3c9224aa6669587485dde6d44ac996d"],["/tags/ZJOI/index.html","f9623ce0156141786f5e6eaf347eaea6"],["/tags/hash/index.html","13c9fa5818679947008fae9b5845cb75"],["/tags/index.html","050fd287c49226d76f7dfded49045a60"],["/tags/two-points/index.html","8ea5df023c5cbb5868e7608eb6a8c040"],["/tags/二分/index.html","c2771ebada49cecd23238364b8270535"],["/tags/出题/index.html","404d61bf02dced6eed5acabe08a002b4"],["/tags/分块/index.html","52adbf72eb76411a515ecf00896a4864"],["/tags/博弈/index.html","407b2ce2599c6c2344ec9043a2d5f0e0"],["/tags/卡常/index.html","86de0ececb405273159594bc9106874d"],["/tags/图论/index.html","55c8b891880adea444926473f8dc8d52"],["/tags/字符串/index.html","781bf959b4e82ab48d2a14158257faf8"],["/tags/并查集/index.html","2a5fc856d3205eaf06b8dbacb07ce971"],["/tags/搜索/index.html","fddc6cc6b8601963b373c95a109fa1e2"],["/tags/数学/index.html","4b236776ee49473fbce4e5e2a722a582"],["/tags/数学/page/2/index.html","571faf7ce825a067ed61b528b744e23a"],["/tags/数据结构/index.html","a047d8a9029e46268234ffb55e747e7c"],["/tags/数论/index.html","235d827e36489f0be366f9fe1cdff233"],["/tags/最短路/index.html","fd77b4b863ef40768dfa4adc9a71d29a"],["/tags/构造/index.html","39fa5b2186bb0e240a7682634cb0e6f2"],["/tags/树状数组-线段树/index.html","966c2139af45323079c88d4a4bdfe84e"],["/tags/树的重心/index.html","513a6ea9d891314dcd2869351ab25d8b"],["/tags/模拟/index.html","d4ede861b9e43c7d2021620a8128062f"],["/tags/模拟赛/index.html","6693ba8239532e3df39e350bf704eed8"],["/tags/生成树/index.html","6ced108ecbd72f318eff3e2a68510ba9"],["/tags/网络流/index.html","6b8c220f1b343327cdcee45231a8e6f5"],["/tags/记忆化搜索/index.html","d0aa58be1036867ff47e1c8986fc4791"],["/tags/贪心/index.html","c68d363c633118e722a3f29f832f2868"],["/zkw线段树优化dijkstra/index.html","13994981e31723fd18df392945b62870"],["/一道有趣的计数问题bywzp/index.html","1c419ae3c76f0e981447c533b963f07d"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","3cbe2089db9863bbf3547d274f275a23"],["/做题记录/index.html","20dcf4fb119957d7b9561c608afc9c0d"],["/换个主题/index.html","c8b6f46d359c5a5ccba445fe4c2d7f2d"],["/整数分解求乘积最大/index.html","6cdd9ed9f9002e2c7d815acb9c134616"],["/毒瘤/index.html","886abc58f65a6175ff5b77bef3400d2d"],["/浮点数开根/index.html","e57959e0dded53fdda9bfa8202da45a3"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","d96b13c5a280095365b9af30e5edf340"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","999b18c89016189e43d424a6125aa2e5"],["/第二次出模拟赛/index.html","b1ddca09cfc38003a13a5a44de8b6d30"],["/线段树入门/index.html","09546685290ff7c7ab6bf8cc4018d0dd"],["/航空管制/index.html","bc2911ba4273c50b084af6b0b64ad2b5"],["/造一棵树/index.html","1b3200a1da8651df759c4af8fdfc9966"]];
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







