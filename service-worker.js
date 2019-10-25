/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "efdacd16db2358f5d13dc826841cd050"
  },
  {
    "url": "assets/css/0.styles.9f6abb14.css",
    "revision": "fb81e2cdb6b4d689ea2d11d93286b2a4"
  },
  {
    "url": "assets/img/1.7e1db593.png",
    "revision": "7e1db5932a2c77ae21d1a43658740d7c"
  },
  {
    "url": "assets/img/11.c5c08d41.png",
    "revision": "c5c08d41d176a6236d023effc1560ad1"
  },
  {
    "url": "assets/img/12.75aaa91e.png",
    "revision": "75aaa91eae44e66c67389f803548c481"
  },
  {
    "url": "assets/img/2.546ac487.png",
    "revision": "546ac4870845bdae1fd686965ff8f306"
  },
  {
    "url": "assets/img/3.3b8e3c37.png",
    "revision": "3b8e3c373419b75d1b713e52a6c2fcaa"
  },
  {
    "url": "assets/img/4.daa6eaf2.png",
    "revision": "daa6eaf2671a7c3b139bc403af33488b"
  },
  {
    "url": "assets/img/5.a3a628ab.png",
    "revision": "a3a628ab01f201989621296ac8051437"
  },
  {
    "url": "assets/img/6.0ded2d21.png",
    "revision": "0ded2d214d0678ef97dc903786846996"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-blog.7765e6eb.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/kanbanniang_2.7ccb19c9.png",
    "revision": "7ccb19c90325d4daae5df43e2920bdc1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0ab87cec.js",
    "revision": "0ba84905ffa180990903e9dd3eec9f28"
  },
  {
    "url": "assets/js/10.f0170d0b.js",
    "revision": "e68ca811859ff80dcd6f8fc4cfda6445"
  },
  {
    "url": "assets/js/11.cc634914.js",
    "revision": "667144368d2fbf071c0df3c5242a8f7b"
  },
  {
    "url": "assets/js/12.8f068565.js",
    "revision": "e061200c3c9f512299234c6752a70258"
  },
  {
    "url": "assets/js/13.345f43e0.js",
    "revision": "f7e0ae251e07b7947825e578dcde829f"
  },
  {
    "url": "assets/js/14.b96f88d8.js",
    "revision": "463ce6763371f1d9cd41f2c3bc8d9379"
  },
  {
    "url": "assets/js/15.65a082c8.js",
    "revision": "1205496b5c1a8e8386ebdf8985788703"
  },
  {
    "url": "assets/js/16.a3a4e14a.js",
    "revision": "4ac08428f535a962f798e6aecde35394"
  },
  {
    "url": "assets/js/17.8e9e5ba6.js",
    "revision": "529f83a53b42ee4cfbca7cc2b622fea7"
  },
  {
    "url": "assets/js/18.9ff1b2d2.js",
    "revision": "fb9c784f2d0f76a659050843c2cc2b15"
  },
  {
    "url": "assets/js/19.a5b7e601.js",
    "revision": "2bfe0b0f5cb06c71461b7cb11aeb8d36"
  },
  {
    "url": "assets/js/20.4c91cb84.js",
    "revision": "3c74d2e5c17dd657d1fadc00923dcdac"
  },
  {
    "url": "assets/js/21.3481718a.js",
    "revision": "61903d5beb81085a0c14f9c338abfce4"
  },
  {
    "url": "assets/js/22.c5dc016a.js",
    "revision": "7090d8f3e785dbf25a49b2453dea083d"
  },
  {
    "url": "assets/js/23.2d37f687.js",
    "revision": "817c65f0570b8f3200100c21f7db28c9"
  },
  {
    "url": "assets/js/24.9e5d9edc.js",
    "revision": "d639ab17feb867ec8a94c3d8d5c52f78"
  },
  {
    "url": "assets/js/25.fcc70ecf.js",
    "revision": "5dacff099f69ee49854d63f9b93bdc9a"
  },
  {
    "url": "assets/js/26.77267786.js",
    "revision": "7e258780833307c2398cd4ac4f4624ce"
  },
  {
    "url": "assets/js/27.3a3fb8e5.js",
    "revision": "8552bae0079df988525a94f782e5d7e8"
  },
  {
    "url": "assets/js/28.009e4392.js",
    "revision": "fc466d34267ea6b795b1fb8669ad7010"
  },
  {
    "url": "assets/js/29.43f1d889.js",
    "revision": "a29f1bba334ee652d41a1f03f7581189"
  },
  {
    "url": "assets/js/3.ef010b36.js",
    "revision": "f4982455f0cc5756a0d3b0bb83e6e017"
  },
  {
    "url": "assets/js/30.728c4e6b.js",
    "revision": "970bbf9ca272aee64bb87e039bdb8b9d"
  },
  {
    "url": "assets/js/31.40983aa1.js",
    "revision": "31c7a460e83db6036318fe28b8f2d36a"
  },
  {
    "url": "assets/js/32.185b3414.js",
    "revision": "a4a7c9c10a6330dd827541516daab794"
  },
  {
    "url": "assets/js/33.8ff320c3.js",
    "revision": "ff1773fc50d021be36bf395034e9f6a3"
  },
  {
    "url": "assets/js/34.4e6b7ddf.js",
    "revision": "dc403fb01c7f075cef8690c5e3f8c33d"
  },
  {
    "url": "assets/js/35.5ebc701a.js",
    "revision": "4bd481c103aeba598c91ac893d2cc230"
  },
  {
    "url": "assets/js/36.4a443792.js",
    "revision": "14e4b43b1a61fef2db3fbe408430f8ff"
  },
  {
    "url": "assets/js/37.1401397d.js",
    "revision": "1616720f8dbc9dc0f44c06695ec391de"
  },
  {
    "url": "assets/js/38.be2ecf81.js",
    "revision": "91fcf1dbe7b1220fa3bc118f29e98cf1"
  },
  {
    "url": "assets/js/39.60f305ca.js",
    "revision": "4852ad4987326af94ef6f8def93140e8"
  },
  {
    "url": "assets/js/4.984ec004.js",
    "revision": "f27adbf4008554f2a5a7ff99a41a2e7b"
  },
  {
    "url": "assets/js/40.dd8f9953.js",
    "revision": "dc0ccdd8a9fb959755e7b82576028ee3"
  },
  {
    "url": "assets/js/41.2b69fcc0.js",
    "revision": "4a2907c1cbe96ae23f52f4e708c635ec"
  },
  {
    "url": "assets/js/42.0c1c4012.js",
    "revision": "fe3bb04c0ff5514e1ae2465598da9b40"
  },
  {
    "url": "assets/js/43.77f8289e.js",
    "revision": "b33ccfd7337b9da5b511a1d1c53ab0a3"
  },
  {
    "url": "assets/js/44.11be0210.js",
    "revision": "ffd800045b310341cab6207e2581d9ef"
  },
  {
    "url": "assets/js/45.9fc1a292.js",
    "revision": "d74d0f852e95d93241593522dbcd4029"
  },
  {
    "url": "assets/js/46.f24f6251.js",
    "revision": "97a13eb5918cf6cd041028777794966d"
  },
  {
    "url": "assets/js/47.b5915a12.js",
    "revision": "a5630f55fb7f80200eb9c4d5ee25b359"
  },
  {
    "url": "assets/js/48.7b7ae88b.js",
    "revision": "558bb9ca3fb8cc49c60b2187c23d8527"
  },
  {
    "url": "assets/js/49.cfd3fc0a.js",
    "revision": "5fb42dae07b38d8b7e700eaf30361412"
  },
  {
    "url": "assets/js/5.48bf07aa.js",
    "revision": "d56ca00741258c503cb9614e30dfdebd"
  },
  {
    "url": "assets/js/50.b66d9307.js",
    "revision": "b5b37ef4071b83fc9ee0ef96e7a4c796"
  },
  {
    "url": "assets/js/51.f2067969.js",
    "revision": "795677374a53da4ba00bc4f01b382059"
  },
  {
    "url": "assets/js/52.5659ca2e.js",
    "revision": "eed9fb1a5d392a91766e30d7af042c34"
  },
  {
    "url": "assets/js/53.101bfb22.js",
    "revision": "b32a6676da23aac005c602c50d348158"
  },
  {
    "url": "assets/js/54.2c76bec1.js",
    "revision": "6c6cfda4c07903736948e59a3514b641"
  },
  {
    "url": "assets/js/6.450a3628.js",
    "revision": "e1c014b1c05b6fd49ee27d9a7ceb7afb"
  },
  {
    "url": "assets/js/7.940754c3.js",
    "revision": "c08f2d5099839756bc7de20027d72550"
  },
  {
    "url": "assets/js/8.30f3b29f.js",
    "revision": "9567e34daf5e605bc155e604d5c31a2f"
  },
  {
    "url": "assets/js/9.2e1773f7.js",
    "revision": "704cac4e6369c1270af9605576a6c0a3"
  },
  {
    "url": "assets/js/app.b919394b.js",
    "revision": "2e141a2c4b33b7728c9f01aaf8b411a5"
  },
  {
    "url": "blogImages/0.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "blogImages/1.png",
    "revision": "0e76b92f6f84b7c06330e536fedd2c9e"
  },
  {
    "url": "blogImages/10.png",
    "revision": "3d933d4420816ba3a03fcbae8121b779"
  },
  {
    "url": "blogImages/11.png",
    "revision": "1cd519a82f374792ad66314ef367f299"
  },
  {
    "url": "blogImages/12.png",
    "revision": "44823314515c8e0ee2be59d1d395b915"
  },
  {
    "url": "blogImages/13.png",
    "revision": "ed91e9c43c4bea93423b6a9cfe4e418a"
  },
  {
    "url": "blogImages/14.png",
    "revision": "5ae1fc8142a1222e083d3265c24a2414"
  },
  {
    "url": "blogImages/15.png",
    "revision": "d3873f2d64c2f7da637b1e8b115e4d66"
  },
  {
    "url": "blogImages/16.png",
    "revision": "57f7d7defbefc174bb6cbbfa793a552c"
  },
  {
    "url": "blogImages/2.png",
    "revision": "9d506458c50a3ffba01ed1021b85adb2"
  },
  {
    "url": "blogImages/3.png",
    "revision": "c2ba93e2d6c7c1db6203acecef35f659"
  },
  {
    "url": "blogImages/4.png",
    "revision": "70697bb43202017aa6baafe19700d47d"
  },
  {
    "url": "blogImages/5.png",
    "revision": "b1119b74f767be486ba4444c5d21bd55"
  },
  {
    "url": "blogImages/6.png",
    "revision": "dc449526437cb7eff15e28d81910376c"
  },
  {
    "url": "blogImages/7.png",
    "revision": "955781ac6a70c180c82b0ff34de3c320"
  },
  {
    "url": "blogImages/8.png",
    "revision": "a64ce7c8a0d616209a3819256d634559"
  },
  {
    "url": "blogImages/9.png",
    "revision": "29004117a86c9da7d9d5f34e3fdcf93c"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "bd084afd89e332ec1bcc2d6dafc52820"
  },
  {
    "url": "categories/index.html",
    "revision": "8d211a80696754f7df29e96924ebc2d8"
  },
  {
    "url": "head.jpg",
    "revision": "350e4ac403a28d3ee7580e76d27e3202"
  },
  {
    "url": "head.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon_vuepress_reco.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "09aa5bd190d273ae00e88fd65913b865"
  },
  {
    "url": "tag/index.html",
    "revision": "f84ef246f2e33ee03f8c91df43f5e455"
  },
  {
    "url": "timeline/index.html",
    "revision": "41792a900b8888b45850e1d6f500ca66"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "626d889df854870b84812e339978abad"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "9cc0764cf603131f3c1d15ed29190903"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "22c7961fdd2f24a2e5cb7a1191b0a092"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "535f13ff96e1ee46b7e2663e37b5c00c"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "90c86393770054533a6a6367533c66cc"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "f64a15bbedb8302b313046f42058cda9"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "5d9f09b544286392179e3e3fca6ae483"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "04d5c5b25846a14cbae8a7344e042f1e"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "d81b4a473f3df8d46314638b49ff1f3c"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "2168dc1dc5ab0e1892cac0e2bd6139c1"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "a68be56f49fee1127a93efff34341f56"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "8543637adc92dc6585464b4b8682cef4"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "626d889df854870b84812e339978abad"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "006deeea476a06f74050b1feb1240027"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "22c7961fdd2f24a2e5cb7a1191b0a092"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "28dc4042ff233d09bf9fbe7dc187f608"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "10b66880b5875b8512ac01672f4b68f7"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "535f13ff96e1ee46b7e2663e37b5c00c"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "90c86393770054533a6a6367533c66cc"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "f64a15bbedb8302b313046f42058cda9"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "5d9f09b544286392179e3e3fca6ae483"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "78237262bc68baf41fadb3ab54b7de06"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "9140e8d791432ad059b28f8f5cb69919"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "d81b4a473f3df8d46314638b49ff1f3c"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "3c4da11e9d454de9fbf8deaa805ab92c"
  },
  {
    "url": "views/other/about.html",
    "revision": "aaa42203704c86beefe2b299a1026fe6"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "b4f5ec3583e3ec6ccd49c69e44fcc579"
  },
  {
    "url": "views/other/develop.html",
    "revision": "dfdef5bfe08ce9754fb5a06e326eb365"
  },
  {
    "url": "views/other/domain.html",
    "revision": "3c05352e3faf8ee4f5f254d6e36f6948"
  },
  {
    "url": "views/other/notice.html",
    "revision": "ffbb2497ce7520a5bc54bb18694e7ea6"
  },
  {
    "url": "views/other/question.html",
    "revision": "c713387fdffc5f3435d88ada7bf0c7dc"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "e9a076222b9d76624e1b0cef1eaba9b9"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "c771e9d6e15d76ec92cd63e0ed6eccd5"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "827b97e52a839f3bd25b076532ed8d04"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "5d6183ed2ce0269303b103d497dbf9c1"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "8bf35bba51f2345530763fba1882499b"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "c8327536b101b8591b71d3cea32deae2"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "d6dc1243b8f558b9249ddef4b925bb32"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "d5d140980fc4efe8f1a5b1e9868ed0a3"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "a3491455d5c20deeaa354c5287c530b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})