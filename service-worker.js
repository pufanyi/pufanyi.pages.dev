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

var precacheConfig = [["/20180524模拟赛-word/index.html","c750e5d201c508d8bfe559999f65b2e8"],["/20190409模拟赛T1/index.html","029e3315401c923a592a837700cd5d98"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","6e85bec0ee8ba8d6445b9ddf56c0e012"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","e6846ab7573fc56f4bd1ee948532d326"],["/CF1045B/index.html","5d4f7f14131058ef177dd09ce7778328"],["/CF1137F/index.html","9c450c8d05c00c0bb417b1b358084ca6"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","535e912fee7a51e230e7489628536e48"],["/CF1264D/index.html","cff8212cfd50dcf2922a7e1a62df3855"],["/CF1288F/index.html","8055fbc1a904100961d9053db3bc70da"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","36b9d8d6104a1aa50b0587e7b8ee15c8"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","6a610a7911b68e065c7577798e655ef1"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","950a235b20bf415ac7faa7ff97a00e90"],["/CF449C/index.html","e13ce9214cf8ca89c0f39a45ad3868fb"],["/CF512D/index.html","e4da6809c8a3fd42301ca6176362525c"],["/CF516D/index.html","c9a093106b770b48ee597ec653d1e46c"],["/CF551C/index.html","298b2ef0228eb97d7afaa7f2facb4eda"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","0c5b2a7f35eaa1a12eab06e3c74db66b"],["/CF576D/index.html","df9836a59555028231bca5198249c768"],["/CF708E/index.html","d0b4564b4e3e9cbc279190b75c5b4515"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","ca2898875e5ad42395e7cdc504e4bd6d"],["/CF875E/index.html","8299992e8abb6ddcbab707f6777fa969"],["/CF986B/index.html","99b91a756d632a709bfa266eaf7a7dda"],["/CSP2019后做的一些题/index.html","331199f3175b4576e538a8fc7b54a6ca"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","7c0db943c0c94b7238876ad72bdeb0b4"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","ddf5051ba0f62bc20eca69a7fd7d308c"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","7765c3770d701775c8cbb156adf55d64"],["/SP1026/index.html","ea5013c8844605a26909721268b81efe"],["/SP4063/index.html","cef58cf8ead71b801655328c02f9d02d"],["/UVa11600/index.html","5e3604fffe213ab7d878608ec8a7abd7"],["/UVa12421/index.html","7d0a02580eae42d1bd3e8eca0f02c678"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","8c2fa13e84f9951e0d4f1d96a30438ac"],["/[HEOI2015]公约数数列/index.html","75f2569d0b70c69eed80b00bc9158c42"],["/[北京省选集训2019]图的难题/index.html","9e09d2e5424bd0c5b911bfa59ca6d009"],["/about/index.html","49023d3104b6dce95521656366ef8eef"],["/agc005_c/index.html","c10724b928cb25cbdf5fefd1fad39b89"],["/agc006_f/index.html","80d0c680b662b8a927ef649811d41a86"],["/agc012_d/index.html","f31466ca481cc27326d165d6161ae60e"],["/agc013_c/index.html","037cc90ace07cf091369b8d97543520f"],["/agc014_d/index.html","511b0bc1f6d1d89077ef1449fd9b2cb3"],["/agc024_d/index.html","7b1d2bc0a0ac26fbce896acc6c562521"],["/agc029_f/index.html","20099fedb5ae931b3451504b8273229f"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","98cc6dc371cd95a64c38f403b622c5e5"],["/agc041_d/index.html","706097ac0041e0e958065606857bd7a0"],["/agc041_e/index.html","9f0d67edacfd67be7f482de10ff308b2"],["/agc041_f/index.html","94297c96f09a5678f9a20869d0131aa2"],["/agc043_c/index.html","689310a59b60299f4b93c086123e210d"],["/agc043_d/index.html","e61cfb2210d55872e1ace0908d7e5ada"],["/arc068_c/index.html","54e6ba61f76a695fbcddcf725a4d1787"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","57a143166968d25748eed876075fca11"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","082575ef0b821a2673d0ea6a37388e7c"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","98c9fa7c18433afe1a094ad5c832979d"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","1ad004a555236832d45ac62749e9684b"],["/archives/2018/11/index.html","e90b214eef9ed083c0fc8b3a680f5330"],["/archives/2018/12/index.html","a2ca78826298ca27815ed5616be932ff"],["/archives/2018/index.html","28fb7b6a9519ab0488bff67993da128c"],["/archives/2019/01/index.html","f120d31a627f06a9136f99090bae83b5"],["/archives/2019/02/index.html","1a4c81f5737c0f6003c5b1ec7aa915c3"],["/archives/2019/03/index.html","e722c1bf67a4073a8984014ae7dc4644"],["/archives/2019/04/index.html","b095b1cdca1a644393bd9408877d0e87"],["/archives/2019/08/index.html","34ce3bb193da6ea35dd8cd1f4eff7785"],["/archives/2019/09/index.html","d5bcfbd392630cf354c12bdecb85e9ec"],["/archives/2019/10/index.html","7ed2000f67a10639f4de8740ffa8a479"],["/archives/2019/12/index.html","e2e4c411cb857bee1e5e0089c21641b7"],["/archives/2019/index.html","68bd5abccfee219b8765baff85253cae"],["/archives/2019/page/2/index.html","5cef62edd7e2e405c9aa6b6015bbbec7"],["/archives/2019/page/3/index.html","357f084dbbf60740ce7a5c9b3c20a618"],["/archives/2019/page/4/index.html","0bc014cb21cbc99b8f34f0315f60a295"],["/archives/2020/01/index.html","ecbc55849a04b14858d85f17137bf3dd"],["/archives/2020/02/index.html","6e00a6cdd90bf9201a384d8291915a69"],["/archives/2020/03/index.html","fd0cb83394fc837f249cf0fd5c2ab9ac"],["/archives/2020/04/index.html","44e5b66b9e7e4cdcd01ddf16102d16fb"],["/archives/2020/index.html","c9092335c55c29154a54d6dc5a51fd78"],["/archives/2020/page/2/index.html","32218dedef03bb26bc8fdfc99bd29ad9"],["/archives/2020/page/3/index.html","0c762bcfdc25a0d644e69e8bbcbf7ed4"],["/archives/index.html","1edc0c7b95535cb87fb6f1963fd416e3"],["/archives/page/2/index.html","3e9fadf1e3ee9c15eb01280c2a064f46"],["/archives/page/3/index.html","3e9fadf1e3ee9c15eb01280c2a064f46"],["/archives/page/4/index.html","3e9fadf1e3ee9c15eb01280c2a064f46"],["/archives/page/5/index.html","3e9fadf1e3ee9c15eb01280c2a064f46"],["/archives/page/6/index.html","3e9fadf1e3ee9c15eb01280c2a064f46"],["/archives/page/7/index.html","3e9fadf1e3ee9c15eb01280c2a064f46"],["/categories/index.html","9f8f577c14d8064c1567a55ed80d3e1a"],["/categories/公告/index.html","4fcc9ee553aa268ac16a089f2ad7a12d"],["/categories/出题/index.html","868e1220b5e682153d8a13867299cbae"],["/categories/小小结/index.html","c7411306ce914219745d16d382d51b13"],["/categories/模板/index.html","57a931b3d9caa3ab48843dcba67afe3e"],["/categories/毒瘤/index.html","747fe7bf9a1885cec383eadceaf53d9a"],["/categories/随笔/index.html","fac90abdeb76b16f5caee7bd197f8f82"],["/categories/题解/index.html","376200d68f8fb020e5dddb8092cfb5f1"],["/categories/题解/page/2/index.html","fc205afc149797ed7081c4c41ea3a8c9"],["/categories/题解/page/3/index.html","0bd3f15f506b001958c76cfcc860efc9"],["/categories/题解/page/4/index.html","2bb5cdee089557997314f9cb2f56d37c"],["/categories/题解/page/5/index.html","2c3955c37f8351d13c059434ffd6630a"],["/categories/题解/page/6/index.html","311f37c3fa4fc6437846b097cf81b0ab"],["/cfdpproblems/index.html","4eef038f58fca42309c5e8c89dc97953"],["/css/style.css","f8516e2dbfbff9a8e350d5199fadb879"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","c58f434e50770f647e135834c299329f"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","641331666e00b227d37c20b114796d87"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","dc36ff226500f86919ff18cd2c662312"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","e1378877c6b8125a4ae2f40ff8a720cf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","9c23f995dc8bd3092c2086c44cba5f4d"],["/js/search.js","8f39634b8c68f34832f97138e1888bde"],["/js/valine.js","39bc19de1df728b58e6816f0ec86c921"],["/page/2/index.html","d2a8089c3b3610a9c0e4bc8254b4ee90"],["/page/3/index.html","c7027402c76a04378ef5a85d952a9845"],["/page/4/index.html","ee317742de91d4c77295b7d06e4cafd8"],["/page/5/index.html","a63a0bb2df957e4258c68a8555b51006"],["/page/6/index.html","194e832f92a5beb242d802ea4bbb0db1"],["/page/7/index.html","e59e7999c03acabe481f4ad4bd7a16db"],["/schedule/index.html","48cd59cbd5130e221c65f59308e2d6ce"],["/simpson/index.html","f01123154e6557fed6dd11d5ff8e2633"],["/sitemap/index.html","f6cfe37e15358e3e6c03c237cf411695"],["/tags/AtCoder/index.html","af7de4657c71a304c644578f0038925f"],["/tags/AtCoder/page/2/index.html","64da3dabcf034118a4965eae00d5044a"],["/tags/CodeForces/index.html","0cf66fdcda928ba40f23601fb5e94073"],["/tags/CodeForces/page/2/index.html","2ca88c456800f13fdb9ca0bb3b048480"],["/tags/CodeForces/page/3/index.html","d873d14cd01d404c34f2e2451c5ce2f9"],["/tags/DP/index.html","c51cceaf8a9044406a18c55c022f4350"],["/tags/DP/page/2/index.html","d212274e67baec9e9fe133605293e407"],["/tags/FFT/index.html","135614bb366eb22de22a00d8211de1f6"],["/tags/LCT/index.html","a504485e4e1c90a2b0ccf5c0a1bc271e"],["/tags/Lucas/index.html","1e37f9506e6d79613a8a4c3368737363"],["/tags/SPOJ/index.html","e32108647c2f500ef4ab9310002d48c1"],["/tags/USACO/index.html","e94ed92a6648c79281f06a642238c87a"],["/tags/UVa/index.html","f658f111a9b63b1684c005e5d9064ca8"],["/tags/ZJOI/index.html","d3a8ac158b592658391b4e0b7242bde2"],["/tags/hash/index.html","3b18dd63e0dfd0cb8ad418561e99f966"],["/tags/index.html","e19c0767cd48850e6ba458985e02338c"],["/tags/two-points/index.html","fa3058d0a276a74b9ee4997742ef480b"],["/tags/二分/index.html","bbb2c63626e6ca65eb7013fc5094d75e"],["/tags/出题/index.html","d47c81d18b64f0e3e15bc6db39a05f95"],["/tags/分块/index.html","835e9dc59468bf21f057f067d7233f80"],["/tags/博弈/index.html","ba81b58f56192f7b97f14893dc41f75b"],["/tags/卡常/index.html","efe59e435b84cb6d028967cd4900dda7"],["/tags/图论/index.html","da00fa14b56c58777c8444f430b9d921"],["/tags/字符串/index.html","bf6011f26ff479df68c05a4ff6a5b93a"],["/tags/并查集/index.html","fe73005f32b6fff5d4bc8e7c8bd43141"],["/tags/搜索/index.html","5bbc824acaf149dfeaf13ebd23786761"],["/tags/数学/index.html","e794004048da360141c6f5db9925f44e"],["/tags/数学/page/2/index.html","2c8ec3dcab712282b2654c9e19b329cc"],["/tags/数据结构/index.html","d2e636511a3860a261d5072079703314"],["/tags/数论/index.html","363a350e10d14eef772721871759df61"],["/tags/最短路/index.html","3e13f3f711ee044a14ddb86dc4ad4d7e"],["/tags/构造/index.html","bac52fc7faf06835dbe09cbbadf27a79"],["/tags/树状数组-线段树/index.html","42d42678c1efd13e1bec5ded579c4739"],["/tags/树的重心/index.html","d56261ae2ac4c136b502a58420cb3447"],["/tags/模拟/index.html","4d06b44d834433d7443c4b286e9765c5"],["/tags/模拟赛/index.html","8fe41c17b4f51db215a4b892d7354799"],["/tags/生成树/index.html","f4b3e897f59b2bfeae0df2e72f426879"],["/tags/网络流/index.html","a054be2564d865af189e30ee93349ed8"],["/tags/记忆化搜索/index.html","7504d5701db21f27b946a8934dfc5a5d"],["/tags/贪心/index.html","4e5196e0a13a6197899a9504c81540c2"],["/zkw线段树优化dijkstra/index.html","4d739289f52a8c9e77273f077dc13dca"],["/一道有趣的计数问题bywzp/index.html","da5196aae3db8ce0178a12104356a19a"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","07839042323bb6558a2fc99c74aba1a6"],["/做题记录/index.html","e26025908fdaab1700f04531b1f60f9d"],["/换个主题/index.html","84a65640e26124baee9bd9b0d34d7b7c"],["/整数分解求乘积最大/index.html","a4c9987e9e93d096ab3cadadfa96eaec"],["/毒瘤/index.html","8b6c29bd95a9c54c14b55f191fbd43bd"],["/浮点数开根/index.html","3ffb7c2af7c8e972bec8e3011bd25b12"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","6903dfbaf4824af20e0bcdc62418fc01"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","9f778c60c42d0fab9ec26eab2a0d5033"],["/第二次出模拟赛/index.html","c11c68e3286379be2ce54cc7560d73a6"],["/线段树入门/index.html","409d02a96caf6e77c45d046af70dc0ed"],["/航空管制/index.html","06c31df0ecc797a179f8b20a24d3e9fd"],["/造一棵树/index.html","42a44650a99daa19e20712e5f92d0374"]];
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







