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

var precacheConfig = [["/20180524模拟赛-word/index.html","93b612f7494caa1f4ed21c4cac8fe966"],["/20190409模拟赛T1/index.html","8cb9fb4f0926289795f4372c51203fb5"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","1b06ee1a10c87b433be3c058fd798dcd"],["/CF1045B/index.html","f8272986b2383c99191775a0706b592c"],["/CF1137F/index.html","477f48758d2e3995614b4df722486df1"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","13dc4b9b75e92412ab4c4b949f2a5c56"],["/CF1264D/index.html","0086a08d4c9e8d6d33bff14a8c7ac214"],["/CF1288F/index.html","da820067e97d1b68b1d44a7432193573"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","0be27576111f3443a2a88f6052cf9f25"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","e0bf90abeb7972a63c79f3b7f8dc2073"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","dbcd8bfabf57c390212dca628278183f"],["/CF449C/index.html","cb4da473ec77bfa0fd41accea4c119a2"],["/CF512D/index.html","7b0a6b08b9774c9af8230553d76898e8"],["/CF516D/index.html","49ff3778e8fa964e5c310f300d5a640a"],["/CF551C/index.html","619dc9543313ee9d5a427249a8eea40e"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","033d957af9be4ef81076107ce6eaf765"],["/CF576D/index.html","e8fea67ccd49263434fac9093dee745d"],["/CF708E/index.html","7f5bcbeb3b09128890f894b8e363934b"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","2b333726deff3719a60c2b401663d77e"],["/CF875E/index.html","72e024fa755100352c4377a843b801ec"],["/CF986B/index.html","5f9a0d037cc2247e3f39d99ecba9ba69"],["/CSP2019后做的一些题/index.html","e1d846620bb3b95e4f98f61d609e23ad"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","d2761ceb2cfcad2256bd60e9849f3668"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","c220153852ad21a6eb88e84cc32ea870"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","0a502981e88c968ba21ba9186c14cf72"],["/SP1026/index.html","be62f22ada2c68ed8a2294002e460283"],["/SP4063/index.html","e2eb85f4671ef49bba66e3f51b26142b"],["/UVa11600/index.html","4fef5ec02682b49998e160b597bb707d"],["/UVa12421/index.html","e5c844ed8f21a15613efae160a9b2be4"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","83262da85a24e134037f764f2329a43d"],["/[HEOI2015]公约数数列/index.html","61fa5de24fbd528a9693ef086d745227"],["/[北京省选集训2019]图的难题/index.html","7ab88651b99b0775eaa407ee0d5134d1"],["/about/index.html","836f75dd4725832e7a73cd83345f1404"],["/agc005_c/index.html","584f5dc24fd1ddb4d68094293090ed18"],["/agc006_f/index.html","a9d0476f2b8490623a70dea25d23f5a3"],["/agc012_d/index.html","8d804795da858df718cb36df0deb67bd"],["/agc013_c/index.html","bc114fc969387deb2bb41df82780888c"],["/agc014_d/index.html","78207e2526e9394443ec19e7dca7fb45"],["/agc024_d/index.html","d5c3797d9b1118032967d79e5a6fb97c"],["/agc029_f/index.html","f2e8868ad75b786a9f84040c63eca7e0"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","d578cb4e25fc464b3e0db60eae95e41b"],["/agc041_d/index.html","f75e7b1cb59dcde23e7e312d6483e948"],["/agc041_e/index.html","52d2f5e77878ac57c1882813d98d058d"],["/agc041_f/index.html","d93546a31400188f84b63056e94d7e86"],["/arc068_c/index.html","12561a102930c062aee5bfb50773ea36"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","d3a95bdad7e77927dd6c43d402256f98"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","6b747afa5731f841bbf401f521d4d26b"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","61923b05daf76d51d24f9cf19048bedb"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","abc44ba15d74e64eb8605f90a33f0dd2"],["/archives/2018/11/index.html","3ae01a4e3a3857c7435276a4690cb1fc"],["/archives/2018/12/index.html","a6919e071f3aecfdb7d0a4d2ea7ef603"],["/archives/2018/index.html","0e08d22c8e8cbcac5f40839c25c1da4e"],["/archives/2019/01/index.html","7972eca59d334ea424cc631666984e15"],["/archives/2019/02/index.html","a5e2b4418d1370f61a43934cb0d3ad40"],["/archives/2019/03/index.html","7300d2cb778a8274c471023e9b27e5bd"],["/archives/2019/04/index.html","0349cd95bb46f6188e794325f1f77d0b"],["/archives/2019/08/index.html","85db59b6f3718b3228c6189895c6ab9a"],["/archives/2019/09/index.html","ff3998f77bdf73e5ff79657128b2dba5"],["/archives/2019/10/index.html","cd89614e221a498d5668a2c796a1de56"],["/archives/2019/12/index.html","fb0b7478a3d7295e14d952c2baa90f88"],["/archives/2019/index.html","142de4f709c91fee132e8a54e887bcb9"],["/archives/2019/page/2/index.html","4fb5d6e19db7c0b4c5cb8cb320fe955b"],["/archives/2019/page/3/index.html","363aaf3f9980998586f295ca9cd62706"],["/archives/2019/page/4/index.html","417ebd41621069f60f88316041880bfc"],["/archives/2020/01/index.html","a6c2d7b198a944400fedcf654f0bfc05"],["/archives/2020/02/index.html","e50a8e7ce253be45cae3b9793ccafd6d"],["/archives/2020/03/index.html","dff57a6b76378eebc6dfa50f34657b87"],["/archives/2020/index.html","eca96d5c08a8713c511498357513d5ae"],["/archives/2020/page/2/index.html","e9de32dc1e154a079f61952bd0f356d9"],["/archives/index.html","01f7059e8e853b501f8ca71e42eaca2c"],["/archives/page/2/index.html","d0e9a910b23b8494dc43bf91ffe12d6a"],["/archives/page/3/index.html","d0e9a910b23b8494dc43bf91ffe12d6a"],["/archives/page/4/index.html","d0e9a910b23b8494dc43bf91ffe12d6a"],["/archives/page/5/index.html","d0e9a910b23b8494dc43bf91ffe12d6a"],["/archives/page/6/index.html","d0e9a910b23b8494dc43bf91ffe12d6a"],["/archives/page/7/index.html","d0e9a910b23b8494dc43bf91ffe12d6a"],["/categories/index.html","f791113455b1afdb926eda49c96b19d0"],["/categories/出题/index.html","eb799a102b95a3dbd97ed3d92f42a6a4"],["/categories/小小结/index.html","9328f8858a7d552e87e55dd652975ccd"],["/categories/模板/index.html","96f8b54b0911f0debf116feebef65362"],["/categories/毒瘤/index.html","71acb49f83e0f9d9efad6dd92822895e"],["/categories/随笔/index.html","48d64b6b6fd5c4ee126da756cf2c31b9"],["/categories/题解/index.html","3b8cfa9e8c49519230fd826ee2e67dfe"],["/categories/题解/page/2/index.html","7e3870255fa2d4dca840cf1cc4f0a38c"],["/categories/题解/page/3/index.html","28491139f705d4b3849b348aa1166169"],["/categories/题解/page/4/index.html","60c32d39cf41fb23fe8c60334dea2180"],["/categories/题解/page/5/index.html","412b3e372025515086a018565bb753bf"],["/cfdpproblems/index.html","904c9a4b9dbd46c0bca37982c1423afd"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","4610390448e6c0e74f39bd0746e16551"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","f2e6f3d7e5878a93b2abc40f8c140559"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","64366445be5bcc49370f7e19ca99f0f8"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","8cbd662e644735fcbf78a1168e2db97d"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","47a1e81c51d26d2f40992e55c080609e"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","44f4d310ec2f1a85fea7d01d2bfdb1d7"],["/page/3/index.html","0635e82dcd5f824c5d68198df4c0c316"],["/page/4/index.html","e9d935da1f771e860c979b0281d29c38"],["/page/5/index.html","117f7e63c9926ea977ae295e089c1454"],["/page/6/index.html","ba259315521d3677a4e827f3a05dae23"],["/page/7/index.html","b449c251d7550ec59b501c2e2709a463"],["/schedule/index.html","b1cef8c23309b65f1bdf1f8a6d42c231"],["/simpson/index.html","d2cbac1c4f3c92e52713b82381b883cc"],["/sitemap/index.html","610b0f9408133b1a1d505e1a441ba58f"],["/tags/AtCoder/index.html","6310a1bbc72f1e0ece6a90c49ecc4f1d"],["/tags/AtCoder/page/2/index.html","7ad66a5990d996dc9600911474ba38bd"],["/tags/CodeForces/index.html","f1c681040356d4c1808afa9480e4b5cd"],["/tags/CodeForces/page/2/index.html","887476b933c3476bfb291bfb6900f472"],["/tags/CodeForces/page/3/index.html","85ea171db0276169377991e6fcf52866"],["/tags/DP/index.html","1285b5ba6f22550b229641dbe6a72adc"],["/tags/DP/page/2/index.html","ade23c7d612f32d178df95883cb3738a"],["/tags/FFT/index.html","ebe4c71b94db54f9dafc337588dfb3b9"],["/tags/LCT/index.html","762cd049443ddd0de33d1b0ca2077bd9"],["/tags/Lucas/index.html","f597cf45f04b1bdb18fe6f21a7a30df5"],["/tags/SPOJ/index.html","29ee452a2811f0031ada7e83439511c2"],["/tags/USACO/index.html","fa66c3da0266566328db8473488af1ef"],["/tags/UVa/index.html","cbf5bb8afad224dab52dd0a37001b797"],["/tags/ZJOI/index.html","493b069001ca2b656f7f040a60f26b5c"],["/tags/hash/index.html","d8131ebb46bfacf58029b60bd8fa67de"],["/tags/index.html","823ad6ff8139fc074828d7adeb791d89"],["/tags/two-points/index.html","835f3fee9668769881c0ad581af38c78"],["/tags/二分/index.html","3c755504f79cb9e0354da7fcfea9008f"],["/tags/出题/index.html","4af55472b222c3792cf1c349d8e9a457"],["/tags/分块/index.html","29660ef08fefc3b97008e6ae10daee9a"],["/tags/博弈论/index.html","68a852ef4ac095c3d3052f2ef344a882"],["/tags/卡常/index.html","79a1b7dd71ac4e1eb9be5010a44282db"],["/tags/图论/index.html","313a4aecced009f57e5e74ede767b4a2"],["/tags/字符串/index.html","e4d9fbcaf9094d3f563b6a5b5cadc5c5"],["/tags/并查集/index.html","014934c6372a29e88fc5d9c53bc09d83"],["/tags/搜索/index.html","2fc3a40f46c8f13922fd44cc44d7a089"],["/tags/数学/index.html","fb464afd8d85bb4972da797a29b622ee"],["/tags/数学/page/2/index.html","899419bbfabd77b0871f73633e708e64"],["/tags/数据结构/index.html","545202f72fedcb660bc55cdfc452ffd3"],["/tags/数论/index.html","78e69230b0b4a96cec1532f49f86e7cf"],["/tags/最短路/index.html","49d8b329490051cee121dd5ef3b8197b"],["/tags/构造/index.html","017838b19f99bf870f3753e051ce0160"],["/tags/树状数组-线段树/index.html","ee50803348fc801a8cf2e23ae5da8168"],["/tags/树的重心/index.html","5beaf4b1f3dcec74b3e938e3d17729f6"],["/tags/模拟/index.html","84439460795a0523962a6694d113f6cd"],["/tags/模拟赛/index.html","6d35b935a0942da031f1d8dde2d4bbd1"],["/tags/生成树/index.html","db354333c48cdb2974afbff20711bfe8"],["/tags/网络流/index.html","121bb107ae604a541530234a399f6128"],["/tags/记忆化搜索/index.html","277b76526cf0c3377ad43b966924b4c4"],["/tags/贪心/index.html","753715e16776371d758f9d9bfe0af0bf"],["/zkw线段树优化dijkstra/index.html","253ca71fc8fe10b532141079480f1ef3"],["/一道有趣的计数问题bywzp/index.html","058954d0993af8e62a959a2b1f3dc8a5"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","74fab03c6d9cc4583db80c6b32a97f32"],["/做题记录/index.html","0995ae46c3450018e8f950c8a672a1d9"],["/换个主题/index.html","4ace9e694f2c19281c967acca97fea39"],["/整数分解求乘积最大/index.html","ca1072dba029fb9c6dbc7d7076c7a541"],["/毒瘤/index.html","fa1bb6c1d61209e0f1b3a39cd79c351c"],["/浮点数开根/index.html","fa629ae4ffabda66775a077ca0595f08"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","002f8a94259ef4ee88afec52a0053dd3"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","11143e4ac11e6a819f86a38a19520337"],["/第二次出模拟赛/index.html","627b9a90b4bdb430d57cbb39d6c137d0"],["/线段树入门/index.html","649872aab23e7d1089e95a2902c57ba0"],["/航空管制/index.html","77c280387a94247951cec0715c814c75"],["/造一棵树/index.html","dbef823846370efe4c6347c25b8f607e"]];
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







