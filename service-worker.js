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

var precacheConfig = [["/20180524模拟赛-word/index.html","963dc4b9bd737297a4725f9cdfdc8f9c"],["/20190409模拟赛T1/index.html","eca1455763244a3127d71e5a1febf066"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/2021浙江高考数学圆锥曲线/index.html","899c7a321249ac502459a2c7e3612508"],["/2021浙江高考数学圆锥曲线/题面.png","49a7d9a0b04d7b5cf49f776384287850"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","d116f69a8352eaa2db24eaee3d6eda6c"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","1ac2202610466973c0fbfab78d483640"],["/CF1045B/index.html","5a3b30fd3c616f760d2ad63b45a07f36"],["/CF1137F/index.html","fa43297ec0b278a3c4b748ad3cb98b56"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","6f20028cf733bb385d168191b9c656e4"],["/CF1264D/index.html","38cb63d81999c37c39af2b365d2cea6a"],["/CF1288F/index.html","a63d394985e3c32a7b1a8e5df8097aba"],["/CF1558B/index.html","5ad2a8adf4dc1e6154eacc773dd2b452"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","541250b146ec56c8e36b0394e6649517"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","b6cb459be9d003a7e1cb3dc87bf953a0"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","063f540b7c673392fdbde857ccc91dcc"],["/CF449C/index.html","9190a0f3c843684aa8b3296911f1cf45"],["/CF512D/index.html","9ce2a0278f8088dd53ad9ffc7a19bb5e"],["/CF516D/index.html","c16ec107e2e3475e0e4af5b050367daf"],["/CF551C/index.html","d08546fa39d67fec2f6937af892aa1cf"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","35784a50db5c03a232b9390d1a6f51a0"],["/CF576D/index.html","42c599beb47ae0187014a9372ce5f9d5"],["/CF708E/index.html","7153b1a0f867e595be729c67dc39ca2f"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","76b8284f7a649ffc02eb60cdd568b3f0"],["/CF875E/index.html","f198de7360fa9fa1b2d17bd16cb8a112"],["/CF986B/index.html","fb4ad08c5ea57a4e616d03fb3e61a189"],["/CSP2019后做的一些题/index.html","5cf8a7cf8b901c96e86419cedca15cb2"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","dd6b1406b90ffd5d2db7400af0a15192"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","4559d1e86da300ac44971aff327ab09c"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","2c12ac019373a6e5dc3d16c003263898"],["/Rho/index.html","6ba296a4ef1e6c765cf9483ebb8a8307"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","270de94a4558b9353ff09eb25ecb58bd"],["/SP4063/index.html","3a813cdba3a3ec630370b33c7c7d6e93"],["/UVa11600/index.html","4897eb3a4670c221792cf256910f0e40"],["/UVa12421/index.html","f1d27065567a286326230ed4393fe222"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","b0d99822b7db11c88dfa3308dbe87b50"],["/[HEOI2015]公约数数列/index.html","5682a3b37c1c1d742588f74f72396b94"],["/[北京省选集训2019]图的难题/index.html","85d814ad079edce93436dbf8e7e13ebe"],["/about/index.html","481305642e62ffcbd67c480c7ae4d262"],["/agc005_c/index.html","5b708838a4c9be68611b68bbe3ee69d7"],["/agc006_f/index.html","1b48cb5d67e0c3bd7ec99cf27a27ccb6"],["/agc012_d/index.html","9954e2b0ef1f9914edf232269d617364"],["/agc013_c/index.html","ef4d86094a342708a63bba16d513a55a"],["/agc014_d/index.html","655fddec6b3b72dfa2d4767216f7aa77"],["/agc024_d/index.html","542c79fc506f934b3475f53a98aefb55"],["/agc029_f/index.html","a02b6101129cb0017509f011f8797ab3"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","aca731bf0be214d8a5c2e8482fa65227"],["/agc041_d/index.html","05e4c143655bb6f56c80f82d8465c67d"],["/agc041_e/index.html","ce147ea369e87db34c1126793878c8db"],["/agc041_f/index.html","e85510c6f6cf8b270e2c91f596ada9b1"],["/agc043_c/index.html","db798a54a0b6013d268c785c2a5e5d85"],["/agc043_d/index.html","9e3cc611a03c39ef1bacf86fa704e52c"],["/arc068_c/index.html","3ed3bcc09905749ce7b421174a4b922d"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","66f1213885c1002ec31136139319e48e"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","81c48855d008a8e4f07cc9b4eb721ce7"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","37c4df0e1c01ac67b0341a7f77a3c962"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","c6d7b644765c1c76bcae29db007cc99a"],["/archives/2018/11/index.html","5d1420a97c72d179acd4c594a8957ff2"],["/archives/2018/12/index.html","910012db7e37fb7d332ad49d50a3bdd1"],["/archives/2018/index.html","b4ed1c42e748e96296e5d556acb7df1c"],["/archives/2019/01/index.html","66d1e8c0d25d481926036875c7ade505"],["/archives/2019/02/index.html","e8c9652b2feb2d9ccb7680a677eb9a5e"],["/archives/2019/03/index.html","bffc09f9c4ca473300a1b5f27615788e"],["/archives/2019/04/index.html","f7da0b8e17e5aa5b724d0c0431618a66"],["/archives/2019/08/index.html","bbf531ccc679f7961ad0c617387a154d"],["/archives/2019/09/index.html","654fddde2b2c7f9e7588c25ab43470a0"],["/archives/2019/10/index.html","395623255a77b08c67918c50ef278c80"],["/archives/2019/12/index.html","0c0a2ca858949ccf219196e3da3c4c42"],["/archives/2019/index.html","4176d6c916b2c5587c7e067836a3b195"],["/archives/2019/page/2/index.html","3eeb7b1bc3ae95a8cd08d8a4b4502cf2"],["/archives/2019/page/3/index.html","edc23d02bfa99bf793ee72524c2ac324"],["/archives/2019/page/4/index.html","9dab1259173c7795d00f1bcc41a48a0e"],["/archives/2020/01/index.html","c23b9a34ae9b69ceae7dcc5cd33d3a73"],["/archives/2020/02/index.html","68d9492eaf7215cb7fb65091025756b9"],["/archives/2020/03/index.html","3b069426576aa20e9b69a2f355510fe0"],["/archives/2020/04/index.html","8b982beab7c37d275cb73ba40b44ef25"],["/archives/2020/06/index.html","6fbc2fd5caa100cc3256bf19f0c11df4"],["/archives/2020/index.html","295a2a3039c330e62946ff4362e29b27"],["/archives/2020/page/2/index.html","644bdf559bff25026ae52c139ffcd178"],["/archives/2020/page/3/index.html","403b99311e78de0ff74cf34a6c64e22e"],["/archives/2021/08/index.html","ea8784242ed33b3a608be4aac3e5d9d3"],["/archives/2021/index.html","14d4debac46b801758ed9fa7123ef4a9"],["/archives/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/2/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/3/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/4/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/5/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/6/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/7/index.html","c3a060273fa8ed37235d101669e4ab84"],["/archives/page/8/index.html","c3a060273fa8ed37235d101669e4ab84"],["/categories/index.html","13a0600155c0e83a7ba345f9adfb33c7"],["/categories/公告/index.html","d8d76bc06ed58c5685d7197c413dc5b4"],["/categories/出题/index.html","151c0920ad5368a50110c95993686599"],["/categories/小小结/index.html","8d5bf0133faaee81ac81091e895df298"],["/categories/文化课/index.html","132b058430d66a73134e221752791aaf"],["/categories/模板/index.html","e8c61b39299ac1487ab6f8b1bdea967f"],["/categories/毒瘤/index.html","d843fd30577bef2a9d53509aa9a6e200"],["/categories/随笔/index.html","3786992db4637c83ead46a373676301f"],["/categories/题解/index.html","3d4321bd519e4d59533e5e27a96b7886"],["/categories/题解/page/2/index.html","d3aead8ce9a173be3975e0cd9bc33240"],["/categories/题解/page/3/index.html","2270bb97f6151e962829009c45685d47"],["/categories/题解/page/4/index.html","ad53b601f9431219a000013bb4e9de27"],["/categories/题解/page/5/index.html","6d20abfc3bd79e53821c06a7c75700c0"],["/categories/题解/page/6/index.html","3189cefec8d3a2300159566170ba012f"],["/cfdpproblems/index.html","6387718ebdf9e8fcaef91709ea7aa46e"],["/css/style.css","ac082fe0da6999c41c066a4b42a03a80"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","b9b14490824dc6128a4b2540d1482801"],["/gitee镜像/index.html","4da10cac2229d63a4dcd09d4d5e39202"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","75449f87a7c951e5829555c01ce4c13a"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","dded87c40127be196c37ac1df8a41125"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","ad53fc55d2b9c781e393337594ffe44a"],["/page/3/index.html","bea865610ab892374b7114978be672f4"],["/page/4/index.html","26ba5e74ba27d61d2c075c7caf59e2b5"],["/page/5/index.html","0a50052d0e4fb9333f0b65a8f96d028a"],["/page/6/index.html","287dda0220614ddd6f6677467cdc73d9"],["/page/7/index.html","990df0e0364755501b55394f2a675019"],["/page/8/index.html","6a7604eee5e39e09dfab0f11ba5fa754"],["/schedule/index.html","0572edf5acf1438dea9e941bf78a2d43"],["/simpson/index.html","273534b892024bedad8c84595b0367b6"],["/sitemap/index.html","c68b085176406afdcf5d266985ed6318"],["/tags/AtCoder/index.html","cbd7773d5e8ee1b38822383cb2877e22"],["/tags/AtCoder/page/2/index.html","a38621a73ac1d2ffc8aa541537fcf6e8"],["/tags/CodeForces/index.html","af7a644adcc27471b5906e487dc68e93"],["/tags/CodeForces/page/2/index.html","3dc4880344de6ea82993a2c1bcde792b"],["/tags/CodeForces/page/3/index.html","f188b1b454913b79645ae6f9d41b0801"],["/tags/DP/index.html","99cf72e9064c90de3312ab0be2445aa3"],["/tags/DP/page/2/index.html","0f26f0b2f0242caeb07c63082a2fde32"],["/tags/FFT/index.html","8fca48c8b922721340ffabee5bb3eb3b"],["/tags/LCT/index.html","6dff1f2496e844897ccb7f72fa398128"],["/tags/Lucas/index.html","e0a00597f147f76567ac789666b4fbcf"],["/tags/SPOJ/index.html","f39d5bb41ec792dff9a2f31b32535b47"],["/tags/USACO/index.html","1a13dcf5d32d9b75962b2670c7a4d7a0"],["/tags/UVa/index.html","deafa406729e04d9c42b14f2006ba961"],["/tags/ZJOI/index.html","9475e7102646f16251c4d06b3f1ea9f4"],["/tags/hash/index.html","f1869b991284f78c708434120916b72f"],["/tags/index.html","1723b59fdd370302ae1de43d64ed08c3"],["/tags/two-points/index.html","751a8e102672b303deb07f847dac0154"],["/tags/二分/index.html","aac512c0371cfbb58f54e1e092e0ea4f"],["/tags/出题/index.html","b4e1e9b582e767db157fad5bf278fbba"],["/tags/分块/index.html","e0341f72c710ad98b447b0c6d579dfa0"],["/tags/博弈/index.html","c3a1836a0ab12929c2f175ed64968dff"],["/tags/卡常/index.html","d7ce423bf1224e67d0468b594e1026a1"],["/tags/图论/index.html","944d7ac68f32f1e14c6c6b493930a5b9"],["/tags/字符串/index.html","72b67b1dc042cc490a03207bc2b42363"],["/tags/并查集/index.html","cff1d65b436b1080aec218b61865fd25"],["/tags/搜索/index.html","a58237633a7d8b13f5d9023ee53cfda3"],["/tags/数学/index.html","a220ba884dd260a4cedf8c8b807c03bb"],["/tags/数学/page/2/index.html","228f5a922cf3008e4c04bdb48b9ba2e7"],["/tags/数据结构/index.html","256038b31e3d0d22b15168e08573aa0f"],["/tags/数论/index.html","78bedd34838d2cb870afae6a850e0a7d"],["/tags/文化课/index.html","ce0894e800d7f6b4f9187763f9bab2ce"],["/tags/最短路/index.html","ac6b20b92f046a686ed9cceb742bf510"],["/tags/构造/index.html","d1a0abc4a70ba9f5151f07813ff8a1e7"],["/tags/树状数组-线段树/index.html","a6d4b00717adbd59bf7a4a5446771c82"],["/tags/树的重心/index.html","ce36fe785197f5db5b727f8f772dadbe"],["/tags/模拟/index.html","8963e091bc63842338cf62d78f860cc9"],["/tags/模拟赛/index.html","b9413d83f45831fceb5e90e87268dce1"],["/tags/生成树/index.html","267300650cea18aacd6a151296184bf6"],["/tags/网络流/index.html","271c3a8a80e24bb99fe2231e5cca9bd9"],["/tags/记忆化搜索/index.html","9940854678a3ec00b0575c75fcef77c4"],["/tags/贪心/index.html","e51bec126360e454b2215b318249223c"],["/zkw线段树优化dijkstra/index.html","7b84c02d27bb2bfc024fcc8d3fd2aad4"],["/一道有趣的计数问题bywzp/index.html","727c358d8fb88fe6334a6a99514d5d38"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","18dbf76b2fd93aed184ba4ef6c20fa2f"],["/做题记录/index.html","eb9ef87287293e9aa3bc9139ffbd5ec4"],["/关闭gitee镜像/index.html","3acc2fba51cfaa075cd40c28db4a94a9"],["/换个主题/index.html","480f8bf428a8f7b7a7f2a2be40c61084"],["/整数分解求乘积最大/index.html","59c3d8ec4ff0ae12df92e7c31de66200"],["/毒瘤/index.html","8b72abf582e74ce8fe7e08a4945a57d7"],["/浮点数开根/index.html","b35add348aa005d6cf68fd145161b322"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","2ab67f7f17ac3cac8960afd048e5ffef"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","b3f109a83203c004b7e415d9985c3484"],["/第二次出模拟赛/index.html","f59c81641111c3791ccd304134a1f82b"],["/线段树入门/index.html","4e6da012f5328a19ec6284cd3762cfba"],["/航空管制/index.html","674e769a94c3bf42603272d04296e544"],["/造一棵树/index.html","770496b86d2f9df7a5a0343af4111cb8"]];
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







