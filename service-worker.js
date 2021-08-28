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

var precacheConfig = [["/20180524模拟赛-word/index.html","301dec78a9917bec7871b1b66df87abf"],["/20190409模拟赛T1/index.html","9d3786b4935ac2f6987a7d325942f0a0"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/2021浙江高考数学圆锥曲线/index.html","466b96ae89cc8e3ba0590b91e999ec56"],["/2021浙江高考数学圆锥曲线/题面.png","49a7d9a0b04d7b5cf49f776384287850"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","fb1df722df0e45af07a3bb69be95923b"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","e6c3e8e4de4086add218b408e1a5de46"],["/CF1045B/index.html","83556eb7483aec076447323f46b44d14"],["/CF1137F/index.html","f0b04508f819371e08a47fb98c9deffd"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","1e96e85aab81808564af8a9d95e72740"],["/CF1264D/index.html","fcc97b78b8c95f09543ecff5d83234ec"],["/CF1288F/index.html","b39b1ec9dac8011c7aef17264025786f"],["/CF1558B/index.html","d9e4a65cd63526563ea52327edea89c4"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","c8c1406d5f26fedb63aa720a95adecc9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","40646a2d47ef969a64d8b3a7b37a81cd"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","dfadf88dbcd6b8b55808a6108a269dab"],["/CF449C/index.html","e9153086188b0214e79c9b0fecd5c084"],["/CF512D/index.html","da6fd0dd6b7e5bb5f54f7f0d1d35ff28"],["/CF516D/index.html","af564af4efced209e70b29ce298d8081"],["/CF551C/index.html","65e34a2f291c47c4ee93e15b8585e02f"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","7b16621f45e347a8ab79bc9fc58a381a"],["/CF576D/index.html","963ded6609723b79c1e21dfea836fe40"],["/CF708E/index.html","d97ba1d4e76f61ba120cc586d4d6e2a0"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","3c47e76f8f85911c024c67cdabb37fbb"],["/CF875E/index.html","aea22bd3d9e85ace66f44e308539f78e"],["/CF986B/index.html","ebfdf17afdc84508526174e1448a7c86"],["/CSP2019后做的一些题/index.html","e3244f33e0945c3cbdf5ee0f5486ecc5"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","0cb1db3938b809df3412d1fa6475ad40"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","3c5fe2341995ebaba75afe55481dcf2f"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","44604801cd71027821025796ed361bbf"],["/Rho/index.html","dd196b023cc6f1fc203052b4abdb9d55"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","9f75dc9251e532f2f1359042ec756e98"],["/SP4063/index.html","0f49b00c9a9845daf905ddfb9eb6da56"],["/UVa11600/index.html","904e666c257ca0cfd211b1bbc3024946"],["/UVa12421/index.html","5679b847a6421a4224a03da6936d239c"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","39ffcbbf9be4b6bf20ac64b0d9c18b8a"],["/[HEOI2015]公约数数列/index.html","1f7d87707010eaef77e0e2b3c106005e"],["/[北京省选集训2019]图的难题/index.html","9531e66469beb6eed5194885be6e88f6"],["/about/index.html","3a7e78057665131fcfb03080f58fef62"],["/agc005_c/index.html","297f0c830ed84809201844e6a8a17d4b"],["/agc006_f/index.html","17ce6c97a019815456dc5f8fcb45c224"],["/agc012_d/index.html","3b3353a9cf20f5ee8595d8325e77a16f"],["/agc013_c/index.html","2f9d2b8dcbbbe3124caaa32969401f6f"],["/agc014_d/index.html","b9e60b8092caaf0259e4423e684d84c9"],["/agc024_d/index.html","1c7d6adce44ee727e86cc2d34732b96f"],["/agc029_f/index.html","270cb9898e339da2937e9cce81290a5a"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","c7312be2c5fdad456ee93e41a284049e"],["/agc041_d/index.html","bff33c8e78b2cf527c6e28b2530600ea"],["/agc041_e/index.html","4c81ad03698da42a4a9a067db0bf4211"],["/agc041_f/index.html","68be5d5146152b2739f4afe1170e95a5"],["/agc043_c/index.html","cb6f01162df8c0f19ec2951fdf6848e3"],["/agc043_d/index.html","ae137f4cd0a20356aef73fbc9991de06"],["/arc068_c/index.html","6f6711f5ed7495eb4e181e6587d107c1"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","66cbeb1c90360991276eae1cb5e26359"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","0afdee0d84380796deef4b22a5de45fb"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","0b2cc5947d3f5b297a8cea6d9d77c2c3"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","126c16790ac6ee4b342df5310fa3a70d"],["/archives/2018/11/index.html","20cfd41cdcc6ba34e4c96441450f3cad"],["/archives/2018/12/index.html","b51f85ed489a6f917309b13700a6dbae"],["/archives/2018/index.html","5f01162bd84e79096493a7b718056ae3"],["/archives/2019/01/index.html","de980d2c734e7a14b974d05722149a3c"],["/archives/2019/02/index.html","37014382856a2156ba73c68534580d24"],["/archives/2019/03/index.html","432673aa814590912fd15d8394f56c5d"],["/archives/2019/04/index.html","c9d5f3ed9b17c51fbc5f94aa94eb700c"],["/archives/2019/08/index.html","3b67445c7368ce783ea327fd75f05ee2"],["/archives/2019/09/index.html","6e2187b143eceef8e05d09dabe211be1"],["/archives/2019/10/index.html","9d03499da7d90d6ec371cd7c1cb6bda5"],["/archives/2019/12/index.html","4f26b1493abdd7b1918cc4adbd0773d9"],["/archives/2019/index.html","ca56ea3cc46691577f81eca6108736e6"],["/archives/2019/page/2/index.html","229bca598e4fda92fa4778e87beb8636"],["/archives/2019/page/3/index.html","9aa5ffa674ef1f5f5fec24c46170aaf6"],["/archives/2019/page/4/index.html","4b815cd8e99bce927f46a3bff3bcd367"],["/archives/2020/01/index.html","3b85c8002158dc562d383f761c869cc3"],["/archives/2020/02/index.html","0cded4dcb413e5c2e85224f60cb1d9b6"],["/archives/2020/03/index.html","55680a726bd57452a67c9794d52bb77a"],["/archives/2020/04/index.html","932abddb89eb32a6e586705893c998c1"],["/archives/2020/06/index.html","5cdca22be873906cfc6e7312a5cae19f"],["/archives/2020/index.html","baf03b4130e68cd79966004c83c90384"],["/archives/2020/page/2/index.html","2f4227c081c884f7bec8ecbccd66b343"],["/archives/2020/page/3/index.html","d1a3e64d183e7bf0f4fa89fbeada91bf"],["/archives/2021/08/index.html","ce1aeff9a35a53599ca07b7dc5c5c18f"],["/archives/2021/index.html","14b6e9d6fd22a1ed25c5e11ea27a9d3a"],["/archives/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/2/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/3/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/4/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/5/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/6/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/7/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/archives/page/8/index.html","5b5fa2dd3869b8604c161785f5ad9ca6"],["/categories/index.html","02390e7dd9cfdf57731b69f521b42ba6"],["/categories/公告/index.html","33663d12d272aaacb13d3bc1d18bb21d"],["/categories/出题/index.html","bb857ced9bbb46d23f2ffbcf1afe60c9"],["/categories/小小结/index.html","b92452a7dad4b11e771b82c043a4337c"],["/categories/文化课/index.html","5313752b2e5724d5e65f7adb0fa18caa"],["/categories/模板/index.html","e09e6582c168778fedfb11c432480d5a"],["/categories/毒瘤/index.html","d08b6a23f8686f1569f17674d38b3e9e"],["/categories/随笔/index.html","23ea0a712ea62742be6072906a56d0fe"],["/categories/题解/index.html","424d17cb1499bf849ef8949331c9df33"],["/categories/题解/page/2/index.html","6959722262eed6436433cd504b5814dc"],["/categories/题解/page/3/index.html","a27a156e94d55c8c1a1e5b7314a1e4d1"],["/categories/题解/page/4/index.html","a345143f31e44e4d3a7600880f85a7be"],["/categories/题解/page/5/index.html","a402a5e401e255fbeee7c97f40fc0728"],["/categories/题解/page/6/index.html","6ccb0a91c4b269e893aebe25f13c4497"],["/cfdpproblems/index.html","389a80e677b466d5a45a9b40848c4cb6"],["/cloudflare镜像/index.html","74c30dea065d3af366dbd51c4372f375"],["/css/style.css","c19c8f02671d808e8792d9359ec43d90"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","815de986b46fa96dcbdd925a238794f7"],["/gitee镜像/index.html","a6b9f85c8554e688ac5b1c281b60061e"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","3c670491bde0174472152d4d3ae5c4c4"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","d0146fd4fbf2d2c397c3d45b3a3426ce"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","13c1fdf38f20b6a703511a0b7f0627c6"],["/page/3/index.html","a13d7c50580d795864bc9880e9c07c50"],["/page/4/index.html","dcf9a1f53e9dc1dfdc65f2350af3098d"],["/page/5/index.html","fc235ca0909e9e2f8702694ddc46d5a7"],["/page/6/index.html","05dfffe952799cac237abee74fce9e49"],["/page/7/index.html","07007893cd3256e2dd32c650962a9433"],["/page/8/index.html","e3a26f82a18c6aa10daaea9e3e9d5246"],["/schedule/index.html","054be6fc1f5c7f7bc81afa6e5b089343"],["/simpson/index.html","4e64ab5565313c566ad6d67a6404f3fb"],["/sitemap/index.html","502b98332a74b461dc8d2867f09ba8a9"],["/tags/AtCoder/index.html","f6c74f875ca95d2003aded90957eaa17"],["/tags/AtCoder/page/2/index.html","6854e2c5ce36d050cbb19c0c408910f8"],["/tags/CodeForces/index.html","f40ebc5e9ca75eaeb3eef29b2dfb9f25"],["/tags/CodeForces/page/2/index.html","023acc3c21e63597ec9b76786739dd46"],["/tags/CodeForces/page/3/index.html","b5101740ba3a3caa21ea8542212af419"],["/tags/DP/index.html","350863ed0752bb5153d80ccadd3765ac"],["/tags/DP/page/2/index.html","e4ea6bf68d2979a2b30a6fd21cd220fa"],["/tags/FFT/index.html","d179db2c0330c1d04bec2fbde2c98256"],["/tags/LCT/index.html","90ca9366cc05ec7e297a1b88ed74f64c"],["/tags/Lucas/index.html","a64906e29336d6e2d37c9eefc1675cd7"],["/tags/SPOJ/index.html","65bfd359865b7450e397d51ccba0b048"],["/tags/USACO/index.html","015ab9d92422faef305bcf8c02c14379"],["/tags/UVa/index.html","a77a1e27b44a408b8b27103711bef20d"],["/tags/ZJOI/index.html","b8cb48aae870e56622c0537e8b3df30b"],["/tags/hash/index.html","106f9af741483c23d180b82d51399a96"],["/tags/index.html","ad0aa66eec8b071a9801d4d06e34400e"],["/tags/two-points/index.html","1ff25ee8395c05575a8cfab87a31dda2"],["/tags/二分/index.html","e28de0807cc2603f00c73b4ebe41730d"],["/tags/出题/index.html","31b2231220a9189138c713864d409028"],["/tags/分块/index.html","611ab5833ac19ec893f743dd1080b6f9"],["/tags/博弈/index.html","313ad07112e5746ddd1011707670c80c"],["/tags/卡常/index.html","d87b906e33f037d6e38464eedc5bd34e"],["/tags/图论/index.html","17e61dc23d936ddafc1ad1bf64ec0980"],["/tags/字符串/index.html","fea655ddaca7c4f46e6ac7581b277faf"],["/tags/并查集/index.html","547ce374529d898bdf45f2a39a2afe8a"],["/tags/搜索/index.html","3cc1a4a49c40f12af1f8079580d62dfd"],["/tags/数学/index.html","36127f260e1e43504bd3f0330e4594e1"],["/tags/数学/page/2/index.html","9976d4eda45913d917f135750d62af7a"],["/tags/数据结构/index.html","132453ac1fd1941ec542e7f4f1196ef5"],["/tags/数论/index.html","3f6d8655e9ca80240205ec3019478d4f"],["/tags/文化课/index.html","c030aba0a893d1f1134ba2fc2acce6ae"],["/tags/最短路/index.html","fd582d7f21fb3c7b99d427feeacc628b"],["/tags/构造/index.html","e66ed820fdf192934b54f82c6e3af0aa"],["/tags/树状数组-线段树/index.html","1dd7fd7571a7b13a8bb7240f8a322e74"],["/tags/树的重心/index.html","650c9b6a39cb6f38b4ad5d24106cef20"],["/tags/模拟/index.html","8905d3b686ff208306a21c5cb3138778"],["/tags/模拟赛/index.html","88c8e3200e9ddd6bf58ccea8ab3a3170"],["/tags/生成树/index.html","fe6765682b8e47f79fb2c85cbd040c49"],["/tags/网络流/index.html","b64a74547d6c737762d7c85111524399"],["/tags/记忆化搜索/index.html","e52f3a55fcd70a71a8e8488f36d49d10"],["/tags/贪心/index.html","d60472efa18d39dab634391c1c35326f"],["/zkw线段树优化dijkstra/index.html","06adfb44f629a3de536675d094c28603"],["/一道有趣的计数问题bywzp/index.html","df15bea2c4dd8b099c4082befbcbc04a"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","d870d128eb30517945b1f810eccd3c7b"],["/做题记录/index.html","9c159ff278b55dfe17eddd88f942508f"],["/关闭gitee镜像/index.html","936127856b47e563a4d8b02f3660d587"],["/换个主题/index.html","30ff42fc9ab3e222b41f3e4360b6f768"],["/整数分解求乘积最大/index.html","66854ff0204c36f92805e4da971c16c9"],["/毒瘤/index.html","23cc9c6916ea040dd2040718eb28a9b5"],["/浮点数开根/index.html","a4eff89e282c29641d7f34d67f80a1f6"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","e5ed50674ed67204a42f42aaa6609191"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","4179ea78d4188e302092c7b7aab77f32"],["/第二次出模拟赛/index.html","777e7a5e110edee3714f2f8dfca9c27f"],["/线段树入门/index.html","9df1efb93076fdc1e5ea6c0ea3631c35"],["/航空管制/index.html","61540ea1140aa86db56f3858acee4dd2"],["/造一棵树/index.html","50a85e84067d79149eab9646b0e9e2b8"]];
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







