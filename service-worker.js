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

var precacheConfig = [["/20180524模拟赛-word/index.html","301dec78a9917bec7871b1b66df87abf"],["/20190409模拟赛T1/index.html","9d3786b4935ac2f6987a7d325942f0a0"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/2021浙江高考数学圆锥曲线/index.html","98e240296d2d3bfa636df5e4e43fac11"],["/2021浙江高考数学圆锥曲线/题面.png","49a7d9a0b04d7b5cf49f776384287850"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","fb1df722df0e45af07a3bb69be95923b"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","e6c3e8e4de4086add218b408e1a5de46"],["/CF1045B/index.html","83556eb7483aec076447323f46b44d14"],["/CF1137F/index.html","f0b04508f819371e08a47fb98c9deffd"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","1e96e85aab81808564af8a9d95e72740"],["/CF1264D/index.html","fcc97b78b8c95f09543ecff5d83234ec"],["/CF1288F/index.html","b39b1ec9dac8011c7aef17264025786f"],["/CF1558B/index.html","18904781d4062b38fe067ab03de6e359"],["/CF1562B/index.html","a210e49c53de7f51f60eabf6a55b089e"],["/CF1562D/index.html","07b5287897e7c4cc78e039ec9b7832f4"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","c8c1406d5f26fedb63aa720a95adecc9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","40646a2d47ef969a64d8b3a7b37a81cd"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","dfadf88dbcd6b8b55808a6108a269dab"],["/CF449C/index.html","e9153086188b0214e79c9b0fecd5c084"],["/CF512D/index.html","da6fd0dd6b7e5bb5f54f7f0d1d35ff28"],["/CF516D/index.html","af564af4efced209e70b29ce298d8081"],["/CF551C/index.html","65e34a2f291c47c4ee93e15b8585e02f"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","7b16621f45e347a8ab79bc9fc58a381a"],["/CF576D/index.html","963ded6609723b79c1e21dfea836fe40"],["/CF708E/index.html","d97ba1d4e76f61ba120cc586d4d6e2a0"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","3c47e76f8f85911c024c67cdabb37fbb"],["/CF875E/index.html","aea22bd3d9e85ace66f44e308539f78e"],["/CF986B/index.html","ebfdf17afdc84508526174e1448a7c86"],["/CSP2019后做的一些题/index.html","e3244f33e0945c3cbdf5ee0f5486ecc5"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","0cb1db3938b809df3412d1fa6475ad40"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","3c5fe2341995ebaba75afe55481dcf2f"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","44604801cd71027821025796ed361bbf"],["/Rho/index.html","dd196b023cc6f1fc203052b4abdb9d55"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","9f75dc9251e532f2f1359042ec756e98"],["/SP4063/index.html","0f49b00c9a9845daf905ddfb9eb6da56"],["/UVa11600/index.html","904e666c257ca0cfd211b1bbc3024946"],["/UVa12421/index.html","5679b847a6421a4224a03da6936d239c"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","39ffcbbf9be4b6bf20ac64b0d9c18b8a"],["/[HEOI2015]公约数数列/index.html","1f7d87707010eaef77e0e2b3c106005e"],["/[北京省选集训2019]图的难题/index.html","9531e66469beb6eed5194885be6e88f6"],["/about/index.html","3a7e78057665131fcfb03080f58fef62"],["/agc005_c/index.html","297f0c830ed84809201844e6a8a17d4b"],["/agc006_f/index.html","17ce6c97a019815456dc5f8fcb45c224"],["/agc012_d/index.html","3b3353a9cf20f5ee8595d8325e77a16f"],["/agc013_c/index.html","2f9d2b8dcbbbe3124caaa32969401f6f"],["/agc014_d/index.html","b9e60b8092caaf0259e4423e684d84c9"],["/agc024_d/index.html","1c7d6adce44ee727e86cc2d34732b96f"],["/agc029_f/index.html","270cb9898e339da2937e9cce81290a5a"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","c7312be2c5fdad456ee93e41a284049e"],["/agc041_d/index.html","bff33c8e78b2cf527c6e28b2530600ea"],["/agc041_e/index.html","4c81ad03698da42a4a9a067db0bf4211"],["/agc041_f/index.html","68be5d5146152b2739f4afe1170e95a5"],["/agc043_c/index.html","cb6f01162df8c0f19ec2951fdf6848e3"],["/agc043_d/index.html","ae137f4cd0a20356aef73fbc9991de06"],["/arc068_c/index.html","6f6711f5ed7495eb4e181e6587d107c1"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","66cbeb1c90360991276eae1cb5e26359"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","0afdee0d84380796deef4b22a5de45fb"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","0b2cc5947d3f5b297a8cea6d9d77c2c3"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","126c16790ac6ee4b342df5310fa3a70d"],["/archives/2018/11/index.html","33b5cadd6f81bfd02980538416775157"],["/archives/2018/12/index.html","0cf61e0a6eeb7efc66dbd5bc526cfadf"],["/archives/2018/index.html","7f607e60d48bd096f3763288d3287f4a"],["/archives/2019/01/index.html","fa3063d90ac3f6020f4cfc431bce0fd7"],["/archives/2019/02/index.html","14e7c0538620a483f84ffd34670b6bf3"],["/archives/2019/03/index.html","b3c55ba10b3cdbe85110d17167c6a529"],["/archives/2019/04/index.html","9d25149cf6bafda875a05440ddcccb82"],["/archives/2019/08/index.html","d34cfb3b70007d940c7927e8381918f8"],["/archives/2019/09/index.html","20694bd278b844b37ef5e4157317e168"],["/archives/2019/10/index.html","08ed0fda47f93aa0e4e4cd0c255d1334"],["/archives/2019/12/index.html","0adced856e356d3b3b741eb9212872b1"],["/archives/2019/index.html","cc3b14f6b2407f657a4dd15c7e75d4dd"],["/archives/2019/page/2/index.html","5faf065a36abd583939f25348708c4fa"],["/archives/2019/page/3/index.html","32e5c4d5c84935ff9fce41f8db307f36"],["/archives/2019/page/4/index.html","ec6effedbe4872d9c9caeda7d34b7560"],["/archives/2020/01/index.html","02f6f9c93b83c0be9339bd0d52252ae4"],["/archives/2020/02/index.html","cca755100d52d409ab17ee1375d8a868"],["/archives/2020/03/index.html","022f350868d6b194e4a65e68a467f6ea"],["/archives/2020/04/index.html","4860a8133a6d15c23bc3a49de86a5ff0"],["/archives/2020/06/index.html","f213742a1127c1562563242b295cb470"],["/archives/2020/index.html","24c46d1170f5547b4e12084b3c7ef01e"],["/archives/2020/page/2/index.html","a8ae2ed3dc928c7423bb7e9e154bea9b"],["/archives/2020/page/3/index.html","0ce4370844d4c926f279f98d4a047dfd"],["/archives/2021/08/index.html","9bf6f053aecb24c10a7b43f109254a3d"],["/archives/2021/index.html","3c54748c361302159fd0ca6fda5c46a9"],["/archives/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/2/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/3/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/4/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/5/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/6/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/7/index.html","d578d322367396233fa3b7945304fed5"],["/archives/page/8/index.html","d578d322367396233fa3b7945304fed5"],["/categories/index.html","65a0c0ac1456e0900c116e9b63051963"],["/categories/公告/index.html","27f7e045a03fd05c930c9ab88d85e608"],["/categories/出题/index.html","a85f5aec5195c11bcf293955b3de620b"],["/categories/小小结/index.html","696e2237f2d9ce6f382351cac5571067"],["/categories/文化课/index.html","6eefb6b2b46d26502798d1ef02abbef4"],["/categories/模板/index.html","07f41d896376bd39c4f3f20d1019897e"],["/categories/毒瘤/index.html","64bbde8bfcaaf8fc52d114a493912f86"],["/categories/随笔/index.html","b4f929a24675cf01a32fb20b1bc6cc93"],["/categories/题解/index.html","6ac30acf105c89bd29386be1a1fbf375"],["/categories/题解/page/2/index.html","b73debc98cccf15b1658863f3283cfd0"],["/categories/题解/page/3/index.html","e87484d794153baa60db243398407a7d"],["/categories/题解/page/4/index.html","411ea81ffe94181932f7c4e0b64021e3"],["/categories/题解/page/5/index.html","123385ccad3ab1adb919256272cf25ea"],["/categories/题解/page/6/index.html","ca5bfd8393886b1c8af62b1328b1e74d"],["/cfdpproblems/index.html","389a80e677b466d5a45a9b40848c4cb6"],["/cloudflare镜像/index.html","bd0396e8a41647624710161efd28b33e"],["/css/style.css","139e5c4185f36e93d6a59b15272ebe4c"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","8e62ee94cab94d40efc1496ac63016d9"],["/gitee镜像/index.html","a6b9f85c8554e688ac5b1c281b60061e"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","3c670491bde0174472152d4d3ae5c4c4"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","f50c684a3cfc024d78e3d832893f0fb7"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","228ad7ae29a28d0ad479a2a837875532"],["/page/3/index.html","8c22044f26bd238f0996ba00606ba899"],["/page/4/index.html","182615316b0ea175aabe1d78871ca609"],["/page/5/index.html","5f9eab277aa3cd9158e31d6e7c73b522"],["/page/6/index.html","cbeaa379a18bcab39baead101dc20bd3"],["/page/7/index.html","cef78458174e6cb086f60139aebd4893"],["/page/8/index.html","b108d20c398123c76d4dd18f6a51d69a"],["/schedule/index.html","054be6fc1f5c7f7bc81afa6e5b089343"],["/simpson/index.html","4e64ab5565313c566ad6d67a6404f3fb"],["/sitemap/index.html","502b98332a74b461dc8d2867f09ba8a9"],["/tags/AtCoder/index.html","2be154002fab54a9a2e6f09d83cf52e2"],["/tags/AtCoder/page/2/index.html","cc3df9445cd63546c4ea7669f035fbc2"],["/tags/CodeForces/index.html","b1ce90791de875d6f62455aa6ce88485"],["/tags/CodeForces/page/2/index.html","f2b8b485c63ce4e0e6413d44d1460a38"],["/tags/CodeForces/page/3/index.html","764b59cb00f1b5f57cf289f7ba44fd61"],["/tags/DP/index.html","c0b39c6dbacd8955db08c5a85e2e1fee"],["/tags/DP/page/2/index.html","f2d4a55371faede9e974e3b6dbf65b68"],["/tags/FFT/index.html","bdb286a640c3656af347db6903a4915b"],["/tags/LCT/index.html","7db0a652a95629c7e2654efa62469c56"],["/tags/Lucas/index.html","50d1c8ad0225a3ca6bbac1f0fb4dc403"],["/tags/SPOJ/index.html","711b95e0170eba5b0bb64ddde86e4ee7"],["/tags/USACO/index.html","d75ccfe7b86e326743a4f87c48f41854"],["/tags/UVa/index.html","4bf903c9a6c566633f9f8ec34e17a94a"],["/tags/ZJOI/index.html","e052f7e8e03a7f25e451353ab5c9efc9"],["/tags/hash/index.html","828b3e7f1fec841b0362c9478a7a3c0d"],["/tags/index.html","1e7448dc299bb9f8d3ed5d8923b867bd"],["/tags/two-points/index.html","bcef8b5d2efcc21e87c5482ef5c5b4f1"],["/tags/二分/index.html","e6fbe9a6f1ed5c5deec5259712c083c3"],["/tags/出题/index.html","62ea16cb5d139a9d4fc7c2f24d23628e"],["/tags/分块/index.html","29f23c8d5ab3dbb6afdbf7cab8256f92"],["/tags/博弈/index.html","bb57a69fb5e32b7bee38bcb6c02cfdac"],["/tags/卡常/index.html","a1d4b67e7ec551804ce0e00812bbd1ad"],["/tags/图论/index.html","b7e60e578db1462ecc1cd4183206ea99"],["/tags/字符串/index.html","0956fa863689c35745a43f14a3def05c"],["/tags/并查集/index.html","1c8684c796ff15f4da7364bd943f0d57"],["/tags/搜索/index.html","8c481036a690c7ca14262992788e27e6"],["/tags/数学/index.html","0337df794371d455d4ce8cf93d3e881d"],["/tags/数学/page/2/index.html","60a663d19d0308950336fc622564418c"],["/tags/数据结构/index.html","3218457efc8b01bd32b77e2c674ea9b8"],["/tags/数论/index.html","9969a256e87953fb77c1ee16af6c6783"],["/tags/文化课/index.html","72f7609a02fc9da66e14117c1615cc38"],["/tags/最短路/index.html","0c3f8070ccb3e35e50dc3ee83001418c"],["/tags/构造/index.html","e7fabda219bfb5101633193d90d8ca8e"],["/tags/树状数组-线段树/index.html","233a87a4f841008440a3ac4403863f1f"],["/tags/树的重心/index.html","47651e7a46f76531d6546f325c583387"],["/tags/模拟/index.html","d4fd5c29868eee791e965d07fa842013"],["/tags/模拟赛/index.html","1006b47b82f8278fb1db0348e3c9bb74"],["/tags/生成树/index.html","30b66a3765cc13a9ee6eaede42b06c1a"],["/tags/网络流/index.html","8a062869ccd09ac5c2e05f3cfdac83c2"],["/tags/记忆化搜索/index.html","5750f32c6b3f0861838f30163600fd63"],["/tags/贪心/index.html","71eaf7d960970eee29b570bdd27784d6"],["/zkw线段树优化dijkstra/index.html","06adfb44f629a3de536675d094c28603"],["/一道有趣的计数问题bywzp/index.html","4f1be994332acc3b94c4fbb6bb897f82"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","d870d128eb30517945b1f810eccd3c7b"],["/做题记录/index.html","9c159ff278b55dfe17eddd88f942508f"],["/关闭gitee镜像/index.html","2202036ed91492a76a4f095ab79ee479"],["/换个主题/index.html","30ff42fc9ab3e222b41f3e4360b6f768"],["/整数分解求乘积最大/index.html","66854ff0204c36f92805e4da971c16c9"],["/毒瘤/index.html","23cc9c6916ea040dd2040718eb28a9b5"],["/浮点数开根/index.html","d653f4be481d262d2aec958d384fb5bc"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","e5ed50674ed67204a42f42aaa6609191"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","4179ea78d4188e302092c7b7aab77f32"],["/第二次出模拟赛/index.html","e8db639d89eb0086e27e00a3a826217c"],["/线段树入门/index.html","9df1efb93076fdc1e5ea6c0ea3631c35"],["/航空管制/index.html","4ff97876b9dd2c07ceadc1f850fe9b5d"],["/造一棵树/index.html","50a85e84067d79149eab9646b0e9e2b8"]];
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







