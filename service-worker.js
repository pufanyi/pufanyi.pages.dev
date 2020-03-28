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

var precacheConfig = [["/20180524模拟赛-word/index.html","493cbe511f5dd021a0bff7abe0eb6146"],["/20190409模拟赛T1/index.html","2fe84ea9f85b31da231cf0f334fa23e1"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","d127b5e9b15bb91cfc359cbd2fd0d0c3"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","fd041b390a7175b9f6f304cf3b1d289c"],["/CF1045B/index.html","7d5c88416bf68692fd2716df34ece19e"],["/CF1137F/index.html","716dc54712672ade5aa4e0bd6c33dac7"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","dede056b1c63eaf69727e64f5515b0ff"],["/CF1264D/index.html","c77b1844f2d0c955d8a4a7252135fa63"],["/CF1288F/index.html","17be9f9f4c7800911265b47c8fe1937d"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","16eda3421aedec04683e0f98fae916ee"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","540f6d2f45228386a093b041d7f6b943"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","925a1cdef084a56dc33c7d51486c3608"],["/CF449C/index.html","903c282710cf96eb1173b2bfb2c09803"],["/CF512D/index.html","a032a191254242c315313a166de46d6a"],["/CF516D/index.html","a3b1c58712cf6ca9d6b2d40381db89c1"],["/CF551C/index.html","9ad325a762a3a38d3b9cc8648ba7ded6"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","297e8e7f37976b2ce9f98588d738a85f"],["/CF576D/index.html","8b51fda14e9378ff07afcafa1c178178"],["/CF708E/index.html","19a2db069d4e1fdc8df785f9ead40666"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","d00a84b52db800cc05369b573e31d46f"],["/CF875E/index.html","53660e318df7cd77edfba40809f20d90"],["/CF986B/index.html","22a4119f0d2cef73c9e79f3c22c1fe0b"],["/CSP2019后做的一些题/index.html","7b205b13aa43d4c49bbd5f6ac6c13778"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","2abd6bcf7d41730bad2af0448607c246"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","a64b150fcaffc51d63cea4ab0a62cf93"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","105e3ceac8b5ad962641400ab102c8cd"],["/SP1026/index.html","ec5d83d54c19b2b62ffaa6dcec86a913"],["/SP4063/index.html","478d57c79107d93057149794029f3adf"],["/UVa11600/index.html","490e4f1d79d9b66084f994fc3e5eaeed"],["/UVa12421/index.html","f9256163fa44002bd7a973d159c16461"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","e926c1b43eb97451db577233d303806b"],["/[HEOI2015]公约数数列/index.html","ed79d7b392e6dd702d8cfb530798dc90"],["/[北京省选集训2019]图的难题/index.html","a98a667e25de348194910feddba421cb"],["/about/index.html","92506da1dfc3cb8debf7cce8cec14450"],["/agc005_c/index.html","29e4c5b47f0b443d4f5ca9f2d7c08708"],["/agc006_f/index.html","f22a756fc265cd3805b7c4e1e54034ac"],["/agc012_d/index.html","51898a76785cb08617c2100d8d2039d4"],["/agc013_c/index.html","017ee174361effbaceda894d223c6532"],["/agc014_d/index.html","4e1df164821ef7cbff1f512fd6200273"],["/agc024_d/index.html","3d85dc4907d6e7f69d0b3638716a45a2"],["/agc029_f/index.html","dd84a414ac4054cf1821118c0a3fe727"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","f41964f086d2b85b8dc3b5c1813f1006"],["/agc041_d/index.html","d95a451801e9aa38f646545177fde780"],["/agc041_e/index.html","6134408f8e53af72f3e866f82f86e964"],["/agc041_f/index.html","f13054e35673668ccb0209b0b7499284"],["/arc068_c/index.html","608f9a18f3322c76e0cac5f215f011f7"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","2df1feb5aeae748a71c82fbf536b97de"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","d9e8db03ae9b16d9d3ad2a4f969332ec"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","50083b24420d70ac9213360bfcd7f733"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","ce106d838dbccb48b6248a622c23425e"],["/archives/2018/11/index.html","e1ab441d830d9a91ab0869fe9a7d289e"],["/archives/2018/12/index.html","2cc831231146a81563e24b54883f3f8f"],["/archives/2018/index.html","f3cebff78f001a2eaa3d2071da2381ff"],["/archives/2019/01/index.html","9c4762efe2c3a26b4bc58bf0640f9762"],["/archives/2019/02/index.html","c2d3a74c0ce23da7165a292334d51b27"],["/archives/2019/03/index.html","d592acbfd33636c087dd30e6dd4112fc"],["/archives/2019/04/index.html","c941679fe3ae2ad6c5024087d75ad0f1"],["/archives/2019/08/index.html","5d98d54b28cfe0a47ea00a7f7b898e95"],["/archives/2019/09/index.html","12e551a0a39acc8b239b7d899c3b1e1d"],["/archives/2019/10/index.html","a290c2f70d146687f64cf5b6c850f100"],["/archives/2019/12/index.html","f1f83fb7ec8db277935e896cf4893825"],["/archives/2019/index.html","63abd605bc09cade16ec2658055662aa"],["/archives/2019/page/2/index.html","bd4e37752982e5ec520b238d33321779"],["/archives/2019/page/3/index.html","857ec6e5e8a3328193e5e95aa5da67e4"],["/archives/2019/page/4/index.html","2cfa65f99c12206775692b89da4b1a44"],["/archives/2020/01/index.html","afe388b753dbeab128f5c466bcfd6bc4"],["/archives/2020/03/index.html","d6163206921b91e243bb50bf2a9df1fd"],["/archives/2020/03/page/2/index.html","8a77b397cb0516b2b3ba5e74fc0c030b"],["/archives/2020/index.html","275dfb747ede5c38b7e38c7524049626"],["/archives/2020/page/2/index.html","6f518ad95147895a55ff2a099c221a8b"],["/archives/index.html","096427baf26abf2adb5681386ba1c7cd"],["/archives/page/2/index.html","660a50a8d85d8b6d627f7198db8c3196"],["/archives/page/3/index.html","660a50a8d85d8b6d627f7198db8c3196"],["/archives/page/4/index.html","660a50a8d85d8b6d627f7198db8c3196"],["/archives/page/5/index.html","660a50a8d85d8b6d627f7198db8c3196"],["/archives/page/6/index.html","660a50a8d85d8b6d627f7198db8c3196"],["/archives/page/7/index.html","660a50a8d85d8b6d627f7198db8c3196"],["/categories/index.html","1bc94ef289dff7e0b7531af22ed7678e"],["/categories/出题/index.html","d09e11f6e2707ecdac685af96728309d"],["/categories/小小结/index.html","3c64a932c5d5117d24e064659287605e"],["/categories/模板/index.html","cc5fe5c181295cb767cffe42a02b7034"],["/categories/毒瘤/index.html","57081700a4fee9e5873993811dc8470e"],["/categories/随笔/index.html","2f7e2e1fd6e52f89be35a0636e0fe846"],["/categories/题解/index.html","c035e5c5beb62848c101ea71f11fe316"],["/categories/题解/page/2/index.html","90e9d794afc26b78916d6058a50f0cb9"],["/categories/题解/page/3/index.html","912ee3a3f48c95560742e95d86503d48"],["/categories/题解/page/4/index.html","e01d736b5517b3297f06a2c196db32fc"],["/categories/题解/page/5/index.html","0a5791d41fcbf858d76c2ba31369c091"],["/cfdpproblems/index.html","7744a7747e12b6d01d7a24102fa7b318"],["/css/style.css","7b3614663eb6f0a7c2d39a913cf79312"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","0af9fd47c68fe478c858a42c288ef3ae"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","99c6b9fee00db5cac5c4d4dec16834af"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","0ad85b6383f9c5512f6ce9161cb372f8"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","105f20bfb14d0957151bfe5f90c9b234"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","fefea4c2c86ea298d487a5d357a3c947"],["/js/search.js","47877d2793cfe5f28c5abfcb29186b39"],["/js/valine.js","bb9a08befeab9a2e261cdef82c994496"],["/page/2/index.html","8e5e7fb84e4d70a6a539b8064b0b38f2"],["/page/3/index.html","0ab29ed67253fe4a9b19ddf0a7cd51f1"],["/page/4/index.html","07f9db02782ba509f772ae9037946277"],["/page/5/index.html","43aad2f815823597e81684a87dde6cff"],["/page/6/index.html","70ea5d6aed4f8a96d9b9c2806b875503"],["/page/7/index.html","34ca0e9ee521a73d03b0ce9634ecd2f0"],["/schedule/index.html","858dd263dc3529aba83503ee518b42e1"],["/simpson/index.html","0b97248f9a57fea84bfb6ea552170cb2"],["/sitemap/index.html","ad6f76f0d4ca29af46c8f4cb08745c59"],["/tags/AtCoder/index.html","ad798defdc7cedfee57cadfc13ce909b"],["/tags/AtCoder/page/2/index.html","73d8e7b2607ca394c61ada700419c643"],["/tags/CodeForces/index.html","ab458674ba900f8ece7e09ea6651b3f5"],["/tags/CodeForces/page/2/index.html","1e844a3000dc202b739c3de98b9991d7"],["/tags/CodeForces/page/3/index.html","e44d1aff56bb12debdcf1c7a817c70a0"],["/tags/DP/index.html","3d473191ded48181d6e487c67f106799"],["/tags/DP/page/2/index.html","ae467f10fe2038ca01644e470a4f6af5"],["/tags/FFT/index.html","30f34c12fae9da112b838cbd75e14374"],["/tags/LCT/index.html","728aab9eeaed7675f657da1c9ca8f576"],["/tags/Lucas/index.html","f059cad2ae595c05d6a1141b1d0450ee"],["/tags/SPOJ/index.html","914882012e99f258b398c4059238f5f9"],["/tags/USACO/index.html","99cebea89f95237315140f2cfedef71b"],["/tags/UVa/index.html","c879b44d8a671f27e2959c663c4855a5"],["/tags/ZJOI/index.html","48ad2c3c73071ffaa6b6e53b26869de4"],["/tags/hash/index.html","dddea8e5ba0c40ba62abfe137b710ec6"],["/tags/index.html","519bf75ff13823b8c948b07faf49cf99"],["/tags/two-points/index.html","b6ad3e74b121d76c53110a9bbbebf776"],["/tags/二分/index.html","440c7fe38975de6c3db267e8097bf458"],["/tags/出题/index.html","3d6b0e3d268c5b183b930187f102678a"],["/tags/分块/index.html","b14f73c9a0034319597e81fa9138166f"],["/tags/博弈论/index.html","878bb765fc70e25dd913e43d39aaf90d"],["/tags/卡常/index.html","615a07e05d9266cfd76eda3e42dbb630"],["/tags/图论/index.html","47e93c45dd9b8f076d375103a61b05dc"],["/tags/字符串/index.html","a5780672ad41f44f18caa0edcae93610"],["/tags/并查集/index.html","c3671e397ea8aa587fbdd0f6ad8daf3e"],["/tags/搜索/index.html","4385118655d139bb27a22821b25a98c8"],["/tags/数学/index.html","0eb46e443deb5b22acf0b7cac63dc519"],["/tags/数学/page/2/index.html","d28dca878cc31a85c29ff201daeecc7d"],["/tags/数据结构/index.html","d774cece57519ec4fd5dbf4f30020d7d"],["/tags/数论/index.html","8585db6b66ee716b775e052ceea413ab"],["/tags/最短路/index.html","0fc70d42ae36ad1dfbf2c87505be8936"],["/tags/构造/index.html","69627bed5b291e2bd0e33b9177bcbe33"],["/tags/树状数组-线段树/index.html","8de4a1c382ae2ad67ce93eee0a87f6e9"],["/tags/树的重心/index.html","8854f43db3d466d811f164449d3c5c9d"],["/tags/模拟/index.html","9e43fe794e19a3bcf4c06964914fa900"],["/tags/模拟赛/index.html","a7dc62ab35a18d27d6a2205f8123e892"],["/tags/生成树/index.html","cf890db23d3851022f7047e9f96e79b7"],["/tags/网络流/index.html","90c9b219a34467d0ebe9d1d65bf0c43f"],["/tags/记忆化搜索/index.html","b9f89613677befc6fc4600f3b1598f95"],["/tags/贪心/index.html","b807d1604ffe2ab60841ad6c52e472d5"],["/zkw线段树优化dijkstra/index.html","af417271614ff8a0c5dce2f150204e2c"],["/一道有趣的计数问题bywzp/index.html","2efe8be6346f2a37877a194e006d5c9c"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","18807bad3e91b69ddff85fecf735813b"],["/做题记录/index.html","42bfe107219cf0af9de953e2221a8242"],["/换个主题/index.html","f1de639aee7aca49e9a652b478446d58"],["/整数分解求乘积最大/index.html","14b12bc0b069ddd16d9bffe387a55f43"],["/毒瘤/index.html","68fc3be74adb34c8b9ccafdff10b4856"],["/浮点数开根/index.html","83148552aaf5e10fcec8c42d85515340"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","6cafa14d5982939e30dc89a64e26a94a"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","63910d6c6e89ceda662db286d86c1e25"],["/第二次出模拟赛/index.html","9f5835b7876d094502a6e52167f9fbd2"],["/线段树入门/index.html","e1703e74e8dfa909da6efb1aa5f54f1b"],["/航空管制/index.html","a154c5976bb577b4d5cc3a76e41484cd"],["/造一棵树/index.html","2be9e54afac7dc00646b065add57876c"]];
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







