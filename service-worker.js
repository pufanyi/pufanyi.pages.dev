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

var precacheConfig = [["/20180524模拟赛-word/index.html","cbbe55dc07124a676553d1f69578f314"],["/20190409模拟赛T1/index.html","d4dcde3fb8b6ad8e9c75b1235c06d699"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","9b1046d6c74081d5ecb49dd8af81524d"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","4948a1ff498e3afc53d250b63e1aa2e4"],["/CF1045B/index.html","d6067bb20c20e4a3d3c3449375fe4348"],["/CF1137F/index.html","7cb9f906274fbde495e72ebe598ef0d9"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","e42584ad23696e875948344217428f69"],["/CF1264D/index.html","7a6f9d9267854f2bcf90315ed979db2e"],["/CF1288F/index.html","488e242b9667e916fa57c48ffee1e113"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","30fdfd38bbdfca71998d3d6095ea063d"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","e7b2a2bddcb53c5b9d3201d347bf14d2"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","0a345d91a876d4b51281719bf534dd02"],["/CF449C/index.html","02f7006decaa81f04646e21b0741a75f"],["/CF512D/index.html","930ab505e9cbdfca9ff868df8ef82224"],["/CF516D/index.html","d46f31202486865992480edea319d803"],["/CF551C/index.html","88da95bc6d521d8c29407a16307cc3b1"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","ab346f74c7b7e164dba7e0e52b026e45"],["/CF576D/index.html","23cbfe9207681e11c33bc70174f0a508"],["/CF708E/index.html","80548696ce27010dcf447f2c2a30924c"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","3ef94d86fbfd7ac6b52be5c2f5a95da2"],["/CF875E/index.html","f6f13e38dfadbbf0aab55f889218e3ce"],["/CF986B/index.html","6400cafe34ab64dc5acfa4b09eca7a5f"],["/CSP2019后做的一些题/index.html","5e2f32f2aa0e73ae822f407532843667"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","cb5c4ad9ab4a42ec2b65d2ed8c30bb5f"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","09e6b2c0bb452f6824f5c9332eaa3448"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","412bfde7b54791808283641d77581096"],["/SP1026/index.html","967205bce241bd7802fcae87b18ed104"],["/SP4063/index.html","d677225bb43b4e8a612031947af4c62e"],["/UVa11600/index.html","e4479ebfd0b390eb4be2837de7c5fc11"],["/UVa12421/index.html","c9323132df3941333c0176ccbb59855b"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","664052d43fe2918e9f8181d6993ec45b"],["/[HEOI2015]公约数数列/index.html","63efc27eb71a3f204f95ec41adcdac7e"],["/[北京省选集训2019]图的难题/index.html","e9accadba34c8101ed2a629ca7a5620d"],["/about/index.html","8db23f3a67ea5d4b526480cc47aaffd5"],["/agc005_c/index.html","4e1f01e736387a16079b76f0c14d05df"],["/agc006_f/index.html","53193d83865263e05667ed591b330d6b"],["/agc012_d/index.html","b27b129d8ebd467cc6dbcd0a83f9cc9c"],["/agc013_c/index.html","21d683976b93225a0afad9a180f0807e"],["/agc014_d/index.html","dc09d0ad51360038014d4d7729795469"],["/agc024_d/index.html","1179e32ae9d93c958ea4bd0e29aed5c5"],["/agc029_f/index.html","5f782ef715a65fc2725542c1d38466e1"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","971d7dc4b3620bf5a65cb01d0436b69b"],["/agc041_d/index.html","b7df8030de1b8adef8715844e728f50f"],["/agc041_e/index.html","a7ca2e75edf77c36f1c2e9caa2dcd0c9"],["/agc041_f/index.html","5045af793ba99641bac00a08ed4cf16b"],["/arc068_c/index.html","ea17d856b3fadf94d5e4336bfda10996"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","d8c70eff2a0d7327d041541fe32cd534"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","b02e1170d9352f9c7d0187d89e16c1c6"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","bb1e0b61a7c471c2b671f279483d08d4"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","49368c7a8f7bdae8a63a5d083d6a0d31"],["/archives/2018/11/index.html","1803745b34cd3d09334af4ae6813d028"],["/archives/2018/12/index.html","3902b990f1aec34e956811ae575db09a"],["/archives/2018/index.html","61ff776b60ac7ff7f99bd1690de645c3"],["/archives/2019/01/index.html","36b4373e1a87e40007bf9d1d4f24afc9"],["/archives/2019/02/index.html","5ca4788a8f154045c932321fcc48d738"],["/archives/2019/03/index.html","1bcf4c9a26aed8aae37366acc335dcad"],["/archives/2019/04/index.html","24150b7213f499f0d51d0672e3e9673d"],["/archives/2019/08/index.html","7035271b0e12177a99c6dffbf3a1b9b3"],["/archives/2019/09/index.html","68269dc785de664bc6130ed96fb4f151"],["/archives/2019/10/index.html","6727d8e08ff8a0df902d87f8bf3a80dd"],["/archives/2019/12/index.html","158ad85c3a850ac3f5b29fabfbd1bf07"],["/archives/2019/index.html","66ca3f888437ecd2d8d36dbae2877658"],["/archives/2019/page/2/index.html","dcaef72eb8831e7ea7d5d534ca9ac2be"],["/archives/2019/page/3/index.html","d50564fbe4d6fdc26ef074c8e3b99305"],["/archives/2019/page/4/index.html","a55e1b1cdbb930260fce69f2d1a4e86c"],["/archives/2020/01/index.html","96a13457624816bf31e9ebedb0fd7dfe"],["/archives/2020/03/index.html","fcb13c6266aaf38148c1dbbfbf2a2778"],["/archives/2020/03/page/2/index.html","36afe9f81aa905facf15ef063b6f3447"],["/archives/2020/index.html","5d7aebbde9612a46a9a072c8aff78096"],["/archives/2020/page/2/index.html","ece85f02305a8b23fc0763876827cb79"],["/archives/index.html","6d4741d7876a0a4e2b4376d27454ffe4"],["/archives/page/2/index.html","faece3979fd5ad6e6d3d643c7cdd2bd2"],["/archives/page/3/index.html","faece3979fd5ad6e6d3d643c7cdd2bd2"],["/archives/page/4/index.html","faece3979fd5ad6e6d3d643c7cdd2bd2"],["/archives/page/5/index.html","faece3979fd5ad6e6d3d643c7cdd2bd2"],["/archives/page/6/index.html","faece3979fd5ad6e6d3d643c7cdd2bd2"],["/archives/page/7/index.html","faece3979fd5ad6e6d3d643c7cdd2bd2"],["/categories/index.html","40168c561e1bae456293a6488992c316"],["/categories/出题/index.html","0e95da40098a1dc1056dd362b4ccba2c"],["/categories/小小结/index.html","f7cb39e26a10a91e84084aa265f8ddb9"],["/categories/模板/index.html","ae2b5b2ead543e1963555a7e5a599e97"],["/categories/毒瘤/index.html","463efc1b580afc84dbb54dedc65921ac"],["/categories/随笔/index.html","d92542a7c4ccb270049d9f6e95ce3cde"],["/categories/题解/index.html","39fa3f4271a2b93d199ff4c7115f4012"],["/categories/题解/page/2/index.html","24f533ff10ca284b2950550a5417db48"],["/categories/题解/page/3/index.html","2ab517343f30d1b6a1cc281b0dfdb962"],["/categories/题解/page/4/index.html","4b424552984f82eb9c752b77eb20277c"],["/categories/题解/page/5/index.html","61051af47a8998559f0eb996a0190b5c"],["/cfdpproblems/index.html","17ab39274f7cd20b931335bad43acf3b"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","5d33166b4ac0fc10f907d84148794ead"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","9074e34d297ad00029ab7d48b57527ef"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","83824bf111b4d6fd73eab681f9a08671"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/my/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/img/my/2.svg","50db548bb8c719d65c354439f14e4e23"],["/img/my/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/img/my/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/img/my/5.jpg","808915bfa2532b01ef806958ba257b69"],["/img/my/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/img/my/index.html","8cbd662e644735fcbf78a1168e2db97d"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","9a58735d3c903b45f016f3ef8f9d8eff"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","8dbb1c902cd789dff98a87fc8372be06"],["/page/3/index.html","6ddbf775f568e8cd4e4eb7f71acbcbc2"],["/page/4/index.html","bcce2c7c793b35fb3d0a51f7fee8e0be"],["/page/5/index.html","d697826f5ae5a8886af6f630b779d266"],["/page/6/index.html","121df42a2f784b75ce8a70ee7e34ef1e"],["/page/7/index.html","5588d3f1259e1dff3bacfcfbb38390f8"],["/schedule/index.html","01ea62e43559951bf5235943d0db7fb7"],["/simpson/index.html","bd3126619810ecb65658d62c08c73d7f"],["/sitemap/index.html","5e8abef39ab4692678215292c961bbc3"],["/tags/AtCoder/index.html","e7e7a30a76287b9ab25e4c8762831a5d"],["/tags/AtCoder/page/2/index.html","2fa00177f3b093f21d02f3d987b3776d"],["/tags/CodeForces/index.html","da683108adf9e8ee43c5047859a18cd0"],["/tags/CodeForces/page/2/index.html","fc2cabd446f5f0f5f3f340ec13b38225"],["/tags/CodeForces/page/3/index.html","8dd1885d1711f0c6767c823b0ce22f1e"],["/tags/DP/index.html","8fc762fc85bcdeaf091cd9cf07010102"],["/tags/DP/page/2/index.html","9178f7687fe27b40d01dec592a1bf2b6"],["/tags/FFT/index.html","543e23cdc787418064f16977dd0f968f"],["/tags/LCT/index.html","971e0aa3bd1745f6155703ff6d280e12"],["/tags/Lucas/index.html","0b5949448a2c6e24e98e0f99ec173124"],["/tags/SPOJ/index.html","59fc2997ed55d6f011173da9840ad44e"],["/tags/USACO/index.html","0bc403306bda490f33a22576d3c1e84b"],["/tags/UVa/index.html","761d3c9c3bfbf56662a6f2d04a065868"],["/tags/ZJOI/index.html","5d60047746e2d114f8258bb1c8a6b09d"],["/tags/hash/index.html","ce5fe5409d10d34d13aa6c96c0d2a73f"],["/tags/index.html","9a0a7ac954f003d495e542d9f5cee8e8"],["/tags/two-points/index.html","406356556eeb549800e38daa20781762"],["/tags/二分/index.html","27662063da8dc3828f274a7b1dc94807"],["/tags/出题/index.html","54ba3eaa9694f090acab84c8e346192a"],["/tags/分块/index.html","55ea552616fc5bfcc690f1a97f5d8c1d"],["/tags/博弈论/index.html","a0a4a889f364304caca36e54c5ab3fbf"],["/tags/卡常/index.html","37bf9117ff8e0cd55123738837b899e1"],["/tags/图论/index.html","2f2da937597b56db2907e5c06e8218bf"],["/tags/字符串/index.html","adac05bf1a4597c79c90f2c4761e0d73"],["/tags/并查集/index.html","4a0e1fb64f6a609284e14e706965994c"],["/tags/搜索/index.html","b94a06ec94fdd55cdf8fc49785aeba72"],["/tags/数学/index.html","c45f258638f136059c2d7c133c6c7612"],["/tags/数学/page/2/index.html","5fdc3d7f767511084f1f85a0bd040d3e"],["/tags/数据结构/index.html","3efa0c00bdc9d89f4c21783fee21337d"],["/tags/数论/index.html","9edd79e0daf4d0817a27e992a566b709"],["/tags/最短路/index.html","eec03043df48e13b1478ed83cd5e7725"],["/tags/构造/index.html","6098bdfd509ffecc2014689c387066d0"],["/tags/树状数组-线段树/index.html","eaa6f5697ce102b428ccf2dc58be68ce"],["/tags/树的重心/index.html","607bb2d173138a03fd3c6619e0bda4f0"],["/tags/模拟/index.html","d03c5abeda34f4876b82b921f24543c7"],["/tags/模拟赛/index.html","53b0745b2589816b73b6cb0b1279bc7f"],["/tags/生成树/index.html","aba959b93f60e9c25d0433ccc492e9fb"],["/tags/网络流/index.html","089edb1b261640443cd7020829da28e4"],["/tags/记忆化搜索/index.html","729c5b535d0b2323f53e0803fe4a70e3"],["/tags/贪心/index.html","9c94e2591b09f9de840c40ab185563c0"],["/zkw线段树优化dijkstra/index.html","69875bb96aa9c5f7a0fcaef8097ab9d6"],["/一道有趣的计数问题bywzp/index.html","90fced9e4e283db2efdb92cfb2282938"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","fb355ad440e6eac4af5c7cb11a28c26c"],["/做题记录/index.html","07980b38ba8383429b778a1a044ce1f7"],["/换个主题/index.html","2b2aa25a15051360a4c850846d995c63"],["/整数分解求乘积最大/index.html","3be54625e234be7e1356c8d2295b2df3"],["/毒瘤/index.html","7f0eec5e8646042910ef84fa1e5958ba"],["/浮点数开根/index.html","f26390fa86806091b07da92e7e89f48f"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","b37e56f56d6696047bcfebaa76bc3a42"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","d54337710fa8af2f236dc0281587dfb3"],["/第二次出模拟赛/index.html","dfe536f3ea98507e6b3f9f433a80907f"],["/线段树入门/index.html","74963d39143f1ed785f015605ad1a65c"],["/航空管制/index.html","6773d8d7aed7f67832ee15ac5bf29bd6"],["/造一棵树/index.html","240fb04bf14132fd174288d7314b8b6a"]];
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







