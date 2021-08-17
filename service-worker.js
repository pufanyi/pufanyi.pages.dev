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

var precacheConfig = [["/20180524模拟赛-word/index.html","d4995ab23e70b93855034095b8f23551"],["/20190409模拟赛T1/index.html","71147b487dced64f4a6001287a4be6a9"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","c4f82a81259ff7470093f83a82dbcdc8"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","03fc9bfae8968d3b38183e0f4cbe88bd"],["/CF1045B/index.html","21850bc04e5df29a0c6bc22b7492453b"],["/CF1137F/index.html","10d78e7d23d47ae2b6288f2ddf49f288"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","075cc5c251630222d4df6eee9ed33dca"],["/CF1264D/index.html","666bf7133ac2b2744034e75532feb3a8"],["/CF1288F/index.html","5984dc544f1149a35b32b2592b4baacc"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","1420fa9ac5ab832d19a166f12c22f6a9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","f534cc5801480523ea716bd6d2c5db87"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","ff689cbf7afe6d814aa6348325adbfc3"],["/CF449C/index.html","8763007f4e14b7a33138323a3af235cc"],["/CF512D/index.html","513dd1e02661676407eede8be3e8f7fc"],["/CF516D/index.html","b823f01c59012118445afd3446845ed6"],["/CF551C/index.html","7e2f0380b079c9463144d2dee41cce89"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","c3779641a619fdc61d03c4af160d8fc6"],["/CF576D/index.html","1a5779ec114de4af22048b5ef129bbe0"],["/CF708E/index.html","dda4f45a3eda653ff10ee9ba3a41754c"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","b25228c7dee429ffec207152ec1058fa"],["/CF875E/index.html","940c4b4cb2dc3737bf4fc0afcc601827"],["/CF986B/index.html","30cd65124f54b99acb96ec0014da1b15"],["/CSP2019后做的一些题/index.html","aac59ea08429f544288ae442eb99420b"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","40a4d0ddb727a5031239ae3463716b6b"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","05ed1161c3f491e35b600583008d45b0"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","b6f816a359f549f3f7e3148d9b81e568"],["/Rho/index.html","18760708cf4efa35ff7fa05a2210ac7d"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","d5b88b89a4c84bed09493ce1d780432b"],["/SP4063/index.html","88a0198602cbfcbbec849909a2b76346"],["/UVa11600/index.html","7eb29831f850251afd7ecc0177166f25"],["/UVa12421/index.html","cfb8087046c98af4795c52f9355ba65a"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","15d9adb21a2ff580a90a4741501a8cc3"],["/[HEOI2015]公约数数列/index.html","4244382a1a7e0d0fa1210eedac1ae033"],["/[北京省选集训2019]图的难题/index.html","2584ba0174df2feec4fe919ae0e327e3"],["/about/index.html","46e454b53fbaa7c560318a1de276eb70"],["/agc005_c/index.html","2f1828bca8e91f208ebf02a6656ea50e"],["/agc012_d/index.html","8238f4cc9cb21353fb9b07b617fd9583"],["/agc013_c/index.html","3cf745eb676e5f51c1fb736c83163de8"],["/agc014_d/index.html","77b2de45ce1b5e2411115512366b67a5"],["/agc024_d/index.html","eed5a8e84b075aa40c479cae0df335f9"],["/agc029_f/index.html","6b8d4e836a64b1ab4c1391b433380c9c"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","bd1b68867e8ac253bab802db1dd7fe7f"],["/agc041_d/index.html","8653ebcc25ce39308d03a003faf2624e"],["/agc041_e/index.html","b5899fb399c6a80e44432b553dfe0b3c"],["/agc041_f/index.html","5e2a21f2866dc98db4059d9bd55053ec"],["/agc043_c/index.html","fff09a3a5773f745b89640efb408723d"],["/agc043_d/index.html","66856c61457a2229494e2c4efdd030e2"],["/arc068_c/index.html","34c432591bf89c60ae84d1ed19f7700a"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","3dfbcc6226e630d61606e9aa7056f6ca"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","bfe81be1336199b6e77feb83963dce5c"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc099_d/index.html","d277106844aed1353bd89d34bd684c53"],["/archives/2018/11/index.html","03ba0c6503465fcba0d0225884288742"],["/archives/2018/12/index.html","c44dbcb97b201813504e876afc1e96eb"],["/archives/2018/index.html","8a2c73efb003bf50c34d6f5105294d94"],["/archives/2019/01/index.html","b77acf2cb0eb8da362a9a3bbe77ee6f4"],["/archives/2019/02/index.html","0f73293dabc5a80f6985086ab07410bf"],["/archives/2019/03/index.html","d94a58c806f0fbfde2e9c2bc0abf02f0"],["/archives/2019/04/index.html","e43df6b44781c375f4a10111333dfaba"],["/archives/2019/08/index.html","d4c050a83a25fa1e7a61465dd1ee4fc2"],["/archives/2019/09/index.html","9418e8456cfb5a1a22edd74041def2c8"],["/archives/2019/10/index.html","5ffed67187e3c157506d0c4215aa8d81"],["/archives/2019/12/index.html","70fdb1b2de3ecb3e6994bd5812b8d6a8"],["/archives/2019/index.html","3cd5b1bf138e2245c0936612e23fac64"],["/archives/2019/page/2/index.html","8ef6b057c6f440a8f29a2c7bd820e135"],["/archives/2019/page/3/index.html","8d1807e4e5643b8432f9fc6dc420ebd1"],["/archives/2019/page/4/index.html","e1b3fc7c74efe0e493a0ced9bb1e3feb"],["/archives/2020/01/index.html","11e7998ac2276edcd8a8b38674d35bc1"],["/archives/2020/02/index.html","78edd334b3c298f03ab2b2627118e176"],["/archives/2020/03/index.html","aca9f52513658d4c8fcbb40eed0d0f15"],["/archives/2020/04/index.html","b7ce35a9d8cdbba28218885779fb4b6d"],["/archives/2020/06/index.html","9f3640fd4dd8576f7ccfa0da0dea77c4"],["/archives/2020/index.html","bb064a663393b4f61732eaa5778a4605"],["/archives/2020/page/2/index.html","c6bf67e525a46ec60151caf73c6cf538"],["/archives/2020/page/3/index.html","482c1e36ad792ffaf08b359519dabea7"],["/archives/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/archives/page/2/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/archives/page/3/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/archives/page/4/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/archives/page/5/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/archives/page/6/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/archives/page/7/index.html","5e422345bbe52ef59b18cb0ff87eae81"],["/categories/index.html","079afc2d40c8b2e5131eac72fb80a973"],["/categories/公告/index.html","5c0687ce388c0120540c332120522630"],["/categories/出题/index.html","908abd4318f05ab6ead545e1bf869ddf"],["/categories/小小结/index.html","3232c4fe6c5c5058239faf73c15f9542"],["/categories/模板/index.html","57f9963f155d9534e502aa90105aaa57"],["/categories/毒瘤/index.html","41885ef70a2c850b0c61a1f2160a4b4b"],["/categories/随笔/index.html","c9e031cb770c6183b1d16315bb8ea5d9"],["/categories/题解/index.html","c1a8cb822537d311a32eb4bf6bb707de"],["/categories/题解/page/2/index.html","b2d1165e994c4354e690613ab4a1fa0c"],["/categories/题解/page/3/index.html","31fd1b4a41ca3347c7e56d28f6c408e3"],["/categories/题解/page/4/index.html","a8c0094cf5fc8cce7d5d108e5acb1bdf"],["/categories/题解/page/5/index.html","0fc0e680ea077eb8b8d2e8170e767c67"],["/cfdpproblems/index.html","2ca9ec028917a8a74b204d0f964580fe"],["/css/style.css","9190760cce274bd4579a6ae143b93627"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","243812c993414ad69cdf15086ecfd21b"],["/gitee镜像/index.html","300aa270d19f59ec0a8bffaad525868d"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","0f1df6ccc725a2d4c6c9126e8856334c"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","3746bfd0f3f976ac115280a7baa16c35"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","2f2f60de06982d37c60091fe2c63b2e3"],["/page/3/index.html","6f343d609ad41b5f6cc2163294104de9"],["/page/4/index.html","b73f14137e64522f31d1d7f78f782ca7"],["/page/5/index.html","b304de86a7774c8300aa976bfb127079"],["/page/6/index.html","9d6b9d26ffcfd029c2cc3ff8f7864c02"],["/page/7/index.html","0f82126cc6e77ededfe830a7b72fe76e"],["/schedule/index.html","1bad64a251dad26afbbb11dcc6ef61e8"],["/simpson/index.html","09c573c3f00813de1e83b58c9305401a"],["/sitemap/index.html","9fffbbafd3f67f5186e15e0cfa14ac88"],["/tags/AtCoder/index.html","923eead521a7501ada3539d6fde91d79"],["/tags/AtCoder/page/2/index.html","ffece6d70381aa092594cf9e9d27ecd7"],["/tags/CodeForces/index.html","013a11dbf9467e0fca297683d5729e0a"],["/tags/CodeForces/page/2/index.html","e1c6451d984ec2af047622c06a5aac58"],["/tags/CodeForces/page/3/index.html","c4f139ce07960487f6d2860381573f96"],["/tags/DP/index.html","7026cedfc604fc36773d14358eb30302"],["/tags/DP/page/2/index.html","d409cdae031ec418297619fc35d3e0a6"],["/tags/FFT/index.html","5522336df3c7de3aa80ef35c67ff651b"],["/tags/LCT/index.html","2a028c2cbaf586993571b536d2d67d95"],["/tags/Lucas/index.html","e8f1be86780e57402851c7e5a15e9331"],["/tags/SPOJ/index.html","b7991b3339518aaa20185bb4299c28ee"],["/tags/USACO/index.html","a68d64c29396927ae022c5fe464709a0"],["/tags/UVa/index.html","eb0bd0ace34f513a9303f1a02c64e71a"],["/tags/ZJOI/index.html","7e6f4a51d607ad0af798f41707125cb6"],["/tags/hash/index.html","b36f8daa4867874851b372a5134d5afb"],["/tags/index.html","fbb57c68d10a6aa61c71f77e551fc7fb"],["/tags/two-points/index.html","5d473c1dfd8d2b43047a6752b28f2217"],["/tags/二分/index.html","7dafe88a9e3d321c77b79cf725f6a578"],["/tags/出题/index.html","1e25d79e6f8ac2b8840153ad59162d27"],["/tags/分块/index.html","7e5b5c00b1d8eaa52d5f64a08b1f8c98"],["/tags/博弈/index.html","8a6cddfc95ce72d9b552e135ec1139c9"],["/tags/卡常/index.html","b2061e0e77a794dc09f83f4e60b3ab9c"],["/tags/图论/index.html","a40b3469bafbeb7637879dc8ddc5ecce"],["/tags/字符串/index.html","6457af58eccfdbed374084f5c6662588"],["/tags/并查集/index.html","a679e9a9f58230f5d8f16b27434faa6f"],["/tags/搜索/index.html","b8ae842a03819bf8560b7180d7b08746"],["/tags/数学/index.html","4b5ab29ad7de61a4e56cf6e855dffd6c"],["/tags/数学/page/2/index.html","e859190e08f9586cda24de67d701504e"],["/tags/数据结构/index.html","9a378de45e17ba474a501bfc39ee7d7d"],["/tags/数论/index.html","09df13c30bb128effa8082acd725eb86"],["/tags/最短路/index.html","71e49949058075a8768d115c74ced8e8"],["/tags/构造/index.html","c891861dfe2d849121c1fcb587600b56"],["/tags/树状数组-线段树/index.html","6fb5d1939df75af8240badad0445b855"],["/tags/树的重心/index.html","4fa293110c5aee06437643e00a11e6b2"],["/tags/模拟/index.html","18321d82c3b0c75feca44f5ef80c0ba0"],["/tags/模拟赛/index.html","fc6b59ec8963e23a5d3b35f7ace5bbf9"],["/tags/生成树/index.html","66fbb13330953f51f017031238831e10"],["/tags/网络流/index.html","9570d60f2426467f371405ced6c74da1"],["/tags/记忆化搜索/index.html","676e8979d21806c1170bcd82bd631027"],["/tags/贪心/index.html","3452eacc5efd768a3b40869e3edb1cb9"],["/zkw线段树优化dijkstra/index.html","13994981e31723fd18df392945b62870"],["/一道有趣的计数问题bywzp/index.html","1c419ae3c76f0e981447c533b963f07d"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","3cbe2089db9863bbf3547d274f275a23"],["/做题记录/index.html","20dcf4fb119957d7b9561c608afc9c0d"],["/换个主题/index.html","c8b6f46d359c5a5ccba445fe4c2d7f2d"],["/整数分解求乘积最大/index.html","6cdd9ed9f9002e2c7d815acb9c134616"],["/毒瘤/index.html","886abc58f65a6175ff5b77bef3400d2d"],["/浮点数开根/index.html","e57959e0dded53fdda9bfa8202da45a3"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","d96b13c5a280095365b9af30e5edf340"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","999b18c89016189e43d424a6125aa2e5"],["/第二次出模拟赛/index.html","b1ddca09cfc38003a13a5a44de8b6d30"],["/线段树入门/index.html","09546685290ff7c7ab6bf8cc4018d0dd"],["/航空管制/index.html","bc2911ba4273c50b084af6b0b64ad2b5"],["/造一棵树/index.html","1b3200a1da8651df759c4af8fdfc9966"]];
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







