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

var precacheConfig = [["/20180524模拟赛-word/index.html","72c54229be169160838cadb443ac0f78"],["/20190409模拟赛T1/index.html","07137878308e62a8f057f1b4edeb98ec"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","0efaa7d10964d4452e498dfcf51d210b"],["/CF1045B/index.html","238d522e93c6d1d4c3fd0cea84092b5a"],["/CF1137F/index.html","11bd674e1edce1018b037b3416ecfc15"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","0c93c6d1dd0159cfabe24298fae5cb61"],["/CF1264D/index.html","571e2a761163e59da0cf00f37de807ce"],["/CF1288F/index.html","a0ee2841d1a2795ba3cd6e2c7d2b8759"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","bc32408af107770b32fa0b8cc86576d6"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","6266c2e8c144e8dea6c165f613046d58"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","4b46630bd924ba39377d3fda1f187a67"],["/CF449C/index.html","f82333d443de3f1a4064170701c4e319"],["/CF512D/index.html","185ad24320474857238524fa9e810847"],["/CF516D/index.html","54dfb82bf6cba1aab4fc1350e173895e"],["/CF551C/index.html","13da992e11ed5b4753432733e18c1d14"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","583d03eaff38b6fff292e970b270b995"],["/CF576D/index.html","6eaceb155f7656568be08563436bff37"],["/CF708E/index.html","9daeea33571a75dc01a53e2b01e0a6dd"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","2a8940e243791689133d096495f13264"],["/CF875E/index.html","ff3ae9a3c1af4a34e3b1e44e561b8f10"],["/CF986B/index.html","241c1e1cec38dd3be9c7ebf67b93a8b0"],["/CSP2019后做的一些题/index.html","ceb3c5fd0df307cadbe5523315224686"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","62b08c6334d742c275c30ae08cbada6b"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","4cd48f27a5df586ea987ff4eb7ad26ad"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","1f21b5f5999043b1ec77d568039655d0"],["/SP1026/index.html","33fc0971739db59b671414dc6858c6bd"],["/SP4063/index.html","ef124934434507745b52b5762657a998"],["/UVa11600/index.html","f8ac15b49e4b66473533443272d4b516"],["/UVa12421/index.html","cfe64278db8a06cd6b7c87c8286c9070"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","e837e80f0a29d93959153dd4b8eaaeec"],["/[HEOI2015]公约数数列/index.html","cbf0b54bd03158b4b27f139fc852e579"],["/[北京省选集训2019]图的难题/index.html","bec25574ac8a3d96e953127167578976"],["/about/index.html","65c0847018a9c752341502b326f818f3"],["/agc005_c/index.html","fffa600d0377a279bd130533aa6f3ca5"],["/agc006_f/index.html","4c832f2f7eb8dcf22087b7c25e89dfcb"],["/agc012_d/index.html","907b1f56587c93960df01ea06f842bf2"],["/agc013_c/index.html","e85eaf93e791890c02e40faf667dee22"],["/agc014_d/index.html","0ba430fd681b12faa97d98d5210d0c38"],["/agc024_d/index.html","89b56174a567f76210194ee79dd9bdf0"],["/agc029_f/index.html","339f3f6f872831344464a36d79d13c14"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","12b9e58af3d479e6e72236af9e484248"],["/agc041_d/index.html","1ccd255e80322f5f1b4af28191331c79"],["/agc041_e/index.html","5e0910c5014af9805e54232f6ae3e87e"],["/agc041_f/index.html","c490b7ef9d25bc1285357b4135073190"],["/agc043_c/index.html","51acbc41bb3bfd1e058aa73cb1841367"],["/agc043_d/index.html","25f608e1026fc536e61292ae2513d8a4"],["/arc068_c/index.html","4623fb9091aa9beedc06149aa4223d88"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","cc48a3fbc63c6743babc69014dd30469"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","0f87e45b7fd4769912d0aae2a5c0a5d7"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","a330a19f22fdeb98785669a23cd9bd8d"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","56cc7eaafc687b36d5fdf26966ccfcf2"],["/archives/2018/11/index.html","588bb37dd89498f2aad3ef6c9b675f9d"],["/archives/2018/12/index.html","aa69c2a90e24fe988231adf3c94c0828"],["/archives/2018/index.html","3273b235d2c9f93c6e8ecab25d07a024"],["/archives/2019/01/index.html","ebca86ce51843bb8fcf81463fd223091"],["/archives/2019/02/index.html","cdfe7984ebe95750a8db474394148fbc"],["/archives/2019/03/index.html","63045c601a22f5eed915814cf3a58967"],["/archives/2019/04/index.html","46bebd0248fb2106c3c127bdb1a52bdc"],["/archives/2019/08/index.html","bd84ec14efeeb1902c9879d34522c30d"],["/archives/2019/09/index.html","02d525839e198f9ffec077419369a23e"],["/archives/2019/10/index.html","6463d39ff6bc6759399709869b567ffd"],["/archives/2019/12/index.html","18df99bef15c7dcd4e5daefb1f75bfd4"],["/archives/2019/index.html","c02217e4f61ed322bc40e69a7707442f"],["/archives/2019/page/2/index.html","5ab3a18c0e2b55c825d6ef301ea3167e"],["/archives/2019/page/3/index.html","bf2b66a94c8f3a500cd030c330f95bc4"],["/archives/2019/page/4/index.html","26f4239cd79870a19890db8fb486c474"],["/archives/2020/01/index.html","0c503e0124402f988535deb597902331"],["/archives/2020/02/index.html","595f79e06f4fde20b8670ad4d6c85580"],["/archives/2020/03/index.html","9a9671153be7f4d6a6f3ccf659948eae"],["/archives/2020/04/index.html","eb27f1cb6aed86720839bb79fc664f0a"],["/archives/2020/index.html","f75090c6bd83c77ecb12e83f2e0ec237"],["/archives/2020/page/2/index.html","ee232fe02055c2f6db36220ad9a86e4b"],["/archives/2020/page/3/index.html","d5ceab4b55e689203df4734a90342da7"],["/archives/index.html","b92eca9168a270a1c50747076f05ddcb"],["/archives/page/2/index.html","13c01021c6e632518968bf60138437c4"],["/archives/page/3/index.html","13c01021c6e632518968bf60138437c4"],["/archives/page/4/index.html","13c01021c6e632518968bf60138437c4"],["/archives/page/5/index.html","13c01021c6e632518968bf60138437c4"],["/archives/page/6/index.html","13c01021c6e632518968bf60138437c4"],["/archives/page/7/index.html","13c01021c6e632518968bf60138437c4"],["/categories/index.html","03786de87812a14172da55255f4bd934"],["/categories/公告/index.html","2778e3b62ee4abb0b1d72f2d8c6e9d8d"],["/categories/出题/index.html","751a5a518cc0334032fc6387ec122d80"],["/categories/小小结/index.html","d442eba9a06f6dd59ff177e809f9f56b"],["/categories/模板/index.html","92079e62f1552f732215d87f2ed9aba2"],["/categories/毒瘤/index.html","4c55eddbcb25dca50967111683eff1a5"],["/categories/随笔/index.html","5d1bf77b42e1a0cde54ad36697533719"],["/categories/题解/index.html","4bebd1ada213f63f96944d068392d61e"],["/categories/题解/page/2/index.html","99ebecea2ed8fc9a42b165a9c2292a3b"],["/categories/题解/page/3/index.html","8a24fe6671c8b6106bfdd5686a9b1cc3"],["/categories/题解/page/4/index.html","688429848c46f2dd06ed4f50b0c2b6fe"],["/categories/题解/page/5/index.html","a7291092e67e70a6135eebef5dd923db"],["/categories/题解/page/6/index.html","74031f9cdae8618fff168edd686c52d0"],["/cfdpproblems/index.html","af2cc93b2ec4280a743f2ff42d43521c"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","50cc968ee11a353ae11553bd3aa22bc4"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","9e7d7faab0a01d86b135e1cf98d557be"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","367d31208e6d40b4017b388d4f5795be"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","bd5a90ad78bf40cfd50a56f81179ac43"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","9016bf3b97ad926802977535c238916c"],["/page/3/index.html","686fae91f91e6d62e6e8ce618295433c"],["/page/4/index.html","c93946cdc18622edcfd87a0b847b985a"],["/page/5/index.html","c2db6a0512a98622fb8b95a48625153e"],["/page/6/index.html","26531e8dd5a41482bf0e8cb23b7fb644"],["/page/7/index.html","dd3b7547b522bb55ee5cf4f63e4f8697"],["/schedule/index.html","283223919b027afc32e9948d08d43471"],["/simpson/index.html","cef97f3139a707da70fa400bfd85438d"],["/sitemap/index.html","3eb7ed5d8de654ab3338259bc44d7412"],["/tags/AtCoder/index.html","a99b568026d30ba2fe041a5e8964f3fe"],["/tags/AtCoder/page/2/index.html","d7a9b9e2ec2159d7852ce445077228d5"],["/tags/CodeForces/index.html","bb65f7e6504463e3fed2cae0782974ca"],["/tags/CodeForces/page/2/index.html","1d1b8170c77cd48fde02335f74ec5696"],["/tags/CodeForces/page/3/index.html","0d3e957892df861923d614ad8958d79a"],["/tags/DP/index.html","dd0637a844c3874c90ac88d1f1fb46e1"],["/tags/DP/page/2/index.html","0d41f3db03e4ddb93a4febb7f8591d97"],["/tags/FFT/index.html","ddc3b5dfec4b3a8c19280a0f8ebe3a5c"],["/tags/LCT/index.html","2ee7021b4f8eda588aebc6c62060100a"],["/tags/Lucas/index.html","b6df8f493e76ad8e049aa71348df4569"],["/tags/SPOJ/index.html","d9f84f1c6fadbbdafdd2fcc4a15a494b"],["/tags/USACO/index.html","9df8e27fefaff49da1610bc82b174345"],["/tags/UVa/index.html","41e49eb065a9c6b47570c53ab45eb61b"],["/tags/ZJOI/index.html","238582a938ff732ce8694a1aa8e3f16a"],["/tags/hash/index.html","d01f123f399fa51df9582f8fbe75419e"],["/tags/index.html","aa0dde3cd73f363beb272888e7db4b3a"],["/tags/two-points/index.html","81d049cabe267c1e3c3a4d3b202b7686"],["/tags/二分/index.html","e96bb2e04e6ec03ccaa667a6c015fb41"],["/tags/出题/index.html","90b722beaa9de37fa8c1016b9fb70035"],["/tags/分块/index.html","197872b871a49d71049d162a596ce4f8"],["/tags/博弈论/index.html","c680de1675bd3eef0345049d671806d7"],["/tags/卡常/index.html","3169af27499ef5affd2a3f53f738a3df"],["/tags/图论/index.html","6ab89d17f9c74ae0ecea982d04f092d1"],["/tags/字符串/index.html","f57f7f74370376c8d4395a3d8eff80ae"],["/tags/并查集/index.html","fd817be380b9999130299eb73440db0c"],["/tags/搜索/index.html","4581dff185f2512a706cf82015806d19"],["/tags/数学/index.html","4efc65a66ef341c33b37fbe619d8d919"],["/tags/数学/page/2/index.html","2fdbdb4209164a1ea1dd1a6f441b1f58"],["/tags/数据结构/index.html","66611cfbabd48290093648e538b66356"],["/tags/数论/index.html","0ea56dea0264fc1cc476d05cf177250e"],["/tags/最短路/index.html","66732d30dfe6b305d82a701bde01331a"],["/tags/构造/index.html","7b1f914637788866eb7626af6f608269"],["/tags/树状数组-线段树/index.html","28c623d2af32ae06309e38656151ee3d"],["/tags/树的重心/index.html","d23e330fc1926bfb1e4c8e4123054fdc"],["/tags/模拟/index.html","ce3e1d18a9c0e56542689dc7f3369667"],["/tags/模拟赛/index.html","36837c29bdb14ce3e99cb381af80c085"],["/tags/生成树/index.html","c1e38938b405d01a17a1e2a47cb4dd07"],["/tags/网络流/index.html","d85176a45460818baf1d3b0a03bcc11e"],["/tags/记忆化搜索/index.html","1c08abc95a73a2a7de6a17e722cb97a2"],["/tags/贪心/index.html","dcd3bd95419a82dc07a8411a13b05862"],["/zkw线段树优化dijkstra/index.html","5e6b000a538f69da653c6c9def07614d"],["/一道有趣的计数问题bywzp/index.html","e1b0e5f9be6d8055bd2c06facaeff2b1"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","cfbccc5fca7e10c35ad2d05946c77a83"],["/做题记录/index.html","086af207d08eb54a417c9089680b8d79"],["/换个主题/index.html","bfcc59cb4ca3c9736350cc1683dc11c9"],["/整数分解求乘积最大/index.html","4254685d78a4142619077263976f32fe"],["/毒瘤/index.html","505b5301e9fae5da64c0acee3359f23f"],["/浮点数开根/index.html","11e9f08011a0a8db05ca5a1f62f5f1e0"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","1f292a558d7bc049dbcdd339b68bcc31"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","07f0954be84619e408eb1d997f0abbc6"],["/第二次出模拟赛/index.html","a2b14d3bad0111f295c650b0d21002bf"],["/线段树入门/index.html","66206cfee5403a73359e81c095e2fcee"],["/航空管制/index.html","1cf5a66c1fc345261b6bad8f6894e873"],["/造一棵树/index.html","8d4519d22f68520bf33e50af364f6ff5"]];
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







