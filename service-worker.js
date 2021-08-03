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

var precacheConfig = [["/20180524模拟赛-word/index.html","d8fbb2deaee0bee5d060529201906519"],["/20190409模拟赛T1/index.html","821dc464cc5edf5539f3c8e81dd25a7d"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","bc67d94d9e0ae0f23aab01800479c982"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/AFO/codeforces.png","59be0031e56f7cf83e7d064a85e3df10"],["/AFO/index.html","ce4932921720135b6ae431dcae6609a7"],["/AFO/luogu.png","ae1952da75c1829b823b5c1a1fa490e4"],["/CERC2017C/index.html","1111557462f6c80e4f50023767a6d732"],["/CF1045B/index.html","24f35e62e3a4722f79eaeb8358e5ab3e"],["/CF1137F/index.html","71a58b9500210633edd07c6a196c17f3"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","3864e98efff8ea83cd729e1c7ef651c1"],["/CF1264D/index.html","38491132c9a4df1e1a0f5acddab2f2e1"],["/CF1288F/index.html","7f71d0c288bae64850dd9d577162d2c5"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","1be6c073aeef45dbbd21fb33d367a6a2"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","4c5565f30b0387960bb1c50d30b518ce"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","c658fe708bc449aeabb7c0a4d6c2b659"],["/CF449C/index.html","6ecc0734472752043ed2486518df156b"],["/CF512D/index.html","4758bebd5ecc1e0dd14de70d29fa4502"],["/CF516D/index.html","11cfe7ca4842b88a15ff43eda3ca57ad"],["/CF551C/index.html","ed4ac187b0a9f737c5e24a6a654ba927"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","464c02cb24e15cca255924428607c13c"],["/CF576D/index.html","94face1eedc295f6eb45cf5f95cab2ed"],["/CF708E/index.html","279ef5a24e02d581d81ea57ad22e7cca"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","3e1285f3eb68ff193823f3967052bdab"],["/CF875E/index.html","2ded53d785e3874f62656d0877b461c8"],["/CF986B/index.html","8b813699c6eaee2e28fea14ac762419b"],["/CSP2019后做的一些题/index.html","ec5968e1431997908e5b79232c43007c"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","32ea02a4437c9ea2139fd1a1ccf05dca"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","adcee4874077964026ea02ba628c9565"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","10a2c134af95887888d428012a0d4041"],["/Rho/index.html","7dcdaeb486eb59a157303c58f84c9872"],["/Rho/rho.png","d1318823a62118d0d7c403c3222dddcb"],["/SP1026/index.html","2d32bfe7a46b480c50311246ae1f69d4"],["/SP4063/index.html","46a0aeee8741ab66c94350896dd0ffd3"],["/UVa11600/index.html","1227ccf3bd9218387c54f40d01d6fc7b"],["/UVa12421/index.html","25a7c6e26d0d3440c328a146979dc29f"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","96a23331e7edaf76d894f117de720139"],["/[HEOI2015]公约数数列/index.html","14dd9d88f34fb3b63860b8272bb46071"],["/[北京省选集训2019]图的难题/index.html","7d7c5ab3326fc8064548d675ed07886c"],["/about/index.html","8ecfb4d8b7ec11a2e6db96dfd5c0d8fe"],["/agc005_c/index.html","3951a96526ba90fe4d6128ecd3efbabd"],["/agc006_f/index.html","a143284803345a1a00f66e0fbea816a1"],["/agc012_d/index.html","18a336342e5a5e3dc6aef99f6276dfc6"],["/agc013_c/index.html","71cfc6ff50676b0a20d6e42460cbaacd"],["/agc014_d/index.html","5609348387617b3a05ec70ce34097c7a"],["/agc024_d/index.html","653053808abe3f581b407ecad290f9a9"],["/agc029_f/index.html","3fb36a51975eb70a3b0bd97f4884daf8"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","b025817a4f2f8f8dce85ef1935f7a9c5"],["/agc041_d/index.html","86512bdecb6c3440027eb9a046eb5d89"],["/agc041_e/index.html","64cfd4b08e5a05237edf641baaaf8b7a"],["/agc041_f/index.html","8b13693971f92e22af68343b4743c177"],["/agc043_c/index.html","05a9918ee4a6e7b5208702f9ebd715ed"],["/agc043_d/index.html","46334858cc62f55df87f192790b13270"],["/arc068_c/index.html","cf4076597107b69c0c60880a1152d15d"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","6616f506086d648fc556d8e655dbd345"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","9678d8827fba467450f24a247cd2426c"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","4209247b37b1c5e5735123a42fa1d315"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","fb61682d4d66ea689651c6211bb019ad"],["/archives/2018/11/index.html","ddd3f6f072a3b484bad6226848bca9c4"],["/archives/2018/12/index.html","7eb05f5f559c8c16b763ebfed333f1a9"],["/archives/2018/index.html","f82d4148567747fb7e360a97fc3522cb"],["/archives/2019/01/index.html","cd021692119e67003d19728a2ab7ec72"],["/archives/2019/02/index.html","d3502c0d8312c90dc3aa111c6af8070b"],["/archives/2019/03/index.html","ea229c6ff2431bafe48b6cd5aefde418"],["/archives/2019/04/index.html","28e733c048b2cfc77c8a446f4b515ddc"],["/archives/2019/08/index.html","8d5d0e4b553eedfeefa66e2eede902e5"],["/archives/2019/09/index.html","e6bb1fa6af138ac08792e872245ad0b4"],["/archives/2019/10/index.html","ee16efcd0cf7d02763bbf00471a5e427"],["/archives/2019/12/index.html","956824d2057511e27d870a3a9f28a82c"],["/archives/2019/index.html","6937750da7f17f40fa4a390afe6da39e"],["/archives/2019/page/2/index.html","54f4306e3b4134764beebbddd293789f"],["/archives/2019/page/3/index.html","60cf68e485cb5b0df1dd26592fa319e1"],["/archives/2019/page/4/index.html","2c98c270e5cc2d0331c8981730d57ced"],["/archives/2020/01/index.html","2a87b35067b296e96dbdafb67f3fa77a"],["/archives/2020/02/index.html","0c1a974ea4c2e9fe35b7ba71ab5d7f0f"],["/archives/2020/03/index.html","1e3362f5732b624ede355d4dd236086a"],["/archives/2020/04/index.html","e44dab604c6ed89446c08be723bfd2d6"],["/archives/2020/06/index.html","af830059a0d152c16d0c9dd0d2319d28"],["/archives/2020/index.html","06fdb4cf1d3306e3cb006bc77dd5dbf1"],["/archives/2020/page/2/index.html","854ca05dd28cbf7ff6612f43e64fbec3"],["/archives/2020/page/3/index.html","6f8d3e6b9d5220654faf386755b12aca"],["/archives/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/archives/page/2/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/archives/page/3/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/archives/page/4/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/archives/page/5/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/archives/page/6/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/archives/page/7/index.html","82fcfd7978ef27687fcc91f4df17ca6a"],["/categories/index.html","582ecca4fe0cecb64603961922423692"],["/categories/公告/index.html","a6b45fb58fd3780a465de94c1c6d1bec"],["/categories/出题/index.html","d4c02a9dd3ec0fe5886ed895e35fbe3e"],["/categories/小小结/index.html","ba5191498d6bb7d39cec14d1f56a9596"],["/categories/模板/index.html","f80a25f5b56b4d385b73e0a36c7d7e87"],["/categories/毒瘤/index.html","0f325f3817363dce53c6c1a9ea92dd88"],["/categories/随笔/index.html","537b0df29407cdf74f00f075ec2374ec"],["/categories/题解/index.html","5682eaf0231d9533cf902a3c20f55235"],["/categories/题解/page/2/index.html","c9cf57820b2e567a29960405fce6f8aa"],["/categories/题解/page/3/index.html","bec3d979b974c16b882062703d77e5b6"],["/categories/题解/page/4/index.html","fa8566a275d9f3714623bf46a5281e4e"],["/categories/题解/page/5/index.html","b8ea2f220269dc1e716f7033688ac7d9"],["/categories/题解/page/6/index.html","b5e1d4df38ba0f3a83a03527248c8e20"],["/cfdpproblems/index.html","e988a08bc06c557936b02dc9e7a13678"],["/css/style.css","39a84efd9cde8b682a8b9f7754266437"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","f82ee94f9e40b55ad008e8e074006311"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","85ced030b4a0ea5ee30afb5c4e7f7ace"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","c857312652fc859d6e5ce426a671807b"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","fc7977e88ddbc1b683e92094dcb4cb10"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","3fb04e438c606286fd48683caae2c9cb"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/page/2/index.html","3d634bfa9e3bceaf1fd85a279fd31ec8"],["/page/3/index.html","7f2225b7a8bad76717d63119b5ace3f8"],["/page/4/index.html","0235eb5d753edc65930254701253bdcc"],["/page/5/index.html","416541cde19f660c33bb8f8eb1f836d3"],["/page/6/index.html","1b69a1ea4775ecb33d05194235b96634"],["/page/7/index.html","5da0a5ed3eecf29929297980d565a351"],["/schedule/index.html","3854ddede2378f36bbc7017dfa086e1a"],["/simpson/index.html","d089b0f20bc82fc982247841c7d65cfe"],["/sitemap/index.html","f270925b9e55bf62d8d16e9055ae856f"],["/tags/AtCoder/index.html","9576061345c8657b9fb2428774a8c38c"],["/tags/AtCoder/page/2/index.html","8dbe131194c368f1c2b18c03b103e090"],["/tags/CodeForces/index.html","abb259ac271a63fb54649a81ae8f5b1f"],["/tags/CodeForces/page/2/index.html","5f942b74ce913364ee41bb864536e712"],["/tags/CodeForces/page/3/index.html","f40f1d253f801454ec8b30709bebdbe6"],["/tags/DP/index.html","3f379535bb9eb3bf2f09b72cba66a747"],["/tags/DP/page/2/index.html","1fe25b3124aa117123b9c3a42e318bfb"],["/tags/FFT/index.html","152782b3b14231a54f781045854d1c74"],["/tags/LCT/index.html","746bbdf5ee6013136b982b4e9897c0f8"],["/tags/Lucas/index.html","34b664d1779f0b794bf31db4b045c154"],["/tags/SPOJ/index.html","f8c4e84da8a0db10812c92a7fe27868e"],["/tags/USACO/index.html","7bde46aa61ecbfb7fd7a1e77735f0bd4"],["/tags/UVa/index.html","4c148c1a707a003a2a4759ca1074299d"],["/tags/ZJOI/index.html","554603570c3b25ef6184e7e375aafe30"],["/tags/hash/index.html","38160fa82870f3645708a1e46b0e27f6"],["/tags/index.html","549686b75832888af724db072a94cbea"],["/tags/two-points/index.html","2e2c6a99d6808af0ab89e90037971d05"],["/tags/二分/index.html","7d19ecea373047ff8262e3122d063d00"],["/tags/出题/index.html","f9e43d3deb9fd1e628e278d8cdc897ff"],["/tags/分块/index.html","bbbb3dba2da38bae27f9dc625612672e"],["/tags/博弈/index.html","f235ed127037a15bd4a241ecd8acf596"],["/tags/卡常/index.html","7ac6c8e452abf47781018494592a3ab2"],["/tags/图论/index.html","4483e34fcf2ca9072c27825083eccf2c"],["/tags/字符串/index.html","cff9c373c30ba75124c54b455fe016a1"],["/tags/并查集/index.html","4e72bc298ef7933946dbaf7633bbb990"],["/tags/搜索/index.html","a69456da03250fe4c18f4d6673b6d509"],["/tags/数学/index.html","ab40c9278d25136132554a4e3defd90c"],["/tags/数学/page/2/index.html","a6541b0d4c9b455991fe1c9ba91fe473"],["/tags/数据结构/index.html","ae6903de605d6f48f4fc67affeab64b4"],["/tags/数论/index.html","ea545ebd9e9cb9444abea5f2211d4fb5"],["/tags/最短路/index.html","115ad159893388a6975cb3618d5e71d2"],["/tags/构造/index.html","7f0c8459d38ec54f0153a1a76a5c6fc5"],["/tags/树状数组-线段树/index.html","d723b49ed775e94d345ac97101637e9f"],["/tags/树的重心/index.html","a88a4d4a416a3647d05c8ff4cabfb041"],["/tags/模拟/index.html","851c882594ea761bb8b4fe0b5fe8fe10"],["/tags/模拟赛/index.html","609001bcbed6db31826c40e434270d5a"],["/tags/生成树/index.html","cc1597702e339f3bbcc9a0a83e8fa303"],["/tags/网络流/index.html","13309e1b0af58287f5b767d045abf743"],["/tags/记忆化搜索/index.html","3a585b928ef3eed5ee35c0bad28d7d63"],["/tags/贪心/index.html","e79bd2a51a8d0c851522668a9937240c"],["/zkw线段树优化dijkstra/index.html","006ce10eb9863dc42353a13202cb670c"],["/一道有趣的计数问题bywzp/index.html","b482b293e61d3b37e5a7fea36d618fc9"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","fdc80b00c58d87694f5567332cc704ae"],["/做题记录/index.html","287120395ecd68c8addb52d62a9efb7b"],["/换个主题/index.html","1964b8321090d58d4f9bbe7e24f171a0"],["/整数分解求乘积最大/index.html","cf711e6d814896713f7a7139f1de164a"],["/毒瘤/index.html","b01d4e007988bf66dda181a2f3848d01"],["/浮点数开根/index.html","c9644d9f0023472d9ac5d169c783ecbf"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","e277ad2b8733bf704ce36d474aaacb55"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","1b48d531f32a00dec042f6b138ccca1a"],["/第二次出模拟赛/index.html","cf98c5dd60d1c72c62efda19ce55fbad"],["/线段树入门/index.html","57f78b07dc6e6e99a8cc9c0b084f0e24"],["/航空管制/index.html","c21cc250bce3e138d01216cc62edaac0"],["/造一棵树/index.html","242f2403d9c23730bc8980b03ebf3461"]];
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







