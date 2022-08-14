if (!self.define) {
  let e,
    i = {};
  const n = (n, o) => (
    (n = new URL(n + ".js", o).href),
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (o, c) => {
    const s =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[s]) return;
    let r = {};
    const a = (e) => n(e, s),
      d = { module: { uri: s }, exports: r, require: a };
    i[s] = Promise.all(o.map((e) => d[e] || a(e))).then((e) => (c(...e), r));
  };
}
define(["./workbox-7e688afb"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "audio/alert.mp3",
          revision: "d2fa2a1496a56b6179e8fc1aed9237ad",
        },
        {
          url: "audio/finish.mp3",
          revision: "28ab7cb69f6910b466221f5a82724a89",
        },
        { url: "css/fonts.css", revision: "11c0f9f13a66754e23bd8cee3f36fc92" },
        { url: "css/main.css", revision: "cc51aedd122f169e0ecb369ca02ca679" },
        {
          url: "css/position.css",
          revision: "0791bc7918f1de558a5600aea7863c26",
        },
        { url: "css/reset.css", revision: "5f0d731c9c8c5af4020e5e437a490290" },
        {
          url: "css/responsive.css",
          revision: "99081839c85826d7fa15373cd252dac0",
        },
        {
          url: "fonts/anton.ttf",
          revision: "055c4df4e2f8c7a4d4675cdd8fa68da0",
        },
        { url: "FUNDING.yml", revision: "d71ac27283ed800598bb8fb4b731ff6c" },
        {
          url: "img/favicon.webp",
          revision: "3aac10bbde61b78119d4169576a65b32",
        },
        {
          url: "img/icons/burger.svg",
          revision: "15208ae738be2adac25d7051dffe0bae",
        },
        {
          url: "img/icons/minus.svg",
          revision: "0b9fe9904f3cfbe2846fcf2a958f1588",
        },
        {
          url: "img/icons/play.svg",
          revision: "7e4cd4f8c05e88989d609f2755e2f2f7",
        },
        {
          url: "img/icons/plus.svg",
          revision: "e3c09db8d52cb05b59591dcb6d569dca",
        },
        {
          url: "img/icons/reset.svg",
          revision: "d98dceb4eefcb90839dea47e55fc3ea6",
        },
        {
          url: "img/icons/stop.svg",
          revision: "e0ea4c9a93871d30c83981d21a4e51bc",
        },
        {
          url: "img/logos/penguin_white.png",
          revision: "58b714df1e969b055d0af96b0cf3ead9",
        },
        {
          url: "img/pwa/badges/android_en.png",
          revision: "0fb68f4e9f4829171a3fcdd8d8410512",
        },
        {
          url: "img/pwa/badges/windows_en.png",
          revision: "b0fcac80538b2edd50436817b1fb7fc4",
        },
        {
          url: "img/pwa/icons/reoneo_icon_1024x1024.png",
          revision: "8f18bbd68b0a74fbc5b5897a1b330c26",
        },
        {
          url: "img/pwa/icons/reoneo_icon_128x128.png",
          revision: "21207658fe98196af36572b6886aacba",
        },
        {
          url: "img/pwa/icons/reoneo_icon_144x144.png",
          revision: "1f3cc0434ba74d0091158c8dc4c09a8a",
        },
        {
          url: "img/pwa/icons/reoneo_icon_192x192.png",
          revision: "0aa45da43181e78ba1e1c4cd87cad844",
        },
        {
          url: "img/pwa/icons/reoneo_icon_256x256.png",
          revision: "7bdb6bb5096548f0f8112e5fc7691961",
        },
        {
          url: "img/pwa/icons/reoneo_icon_32x32.png",
          revision: "91566a3334978d2ad04efcfe2941ef8f",
        },
        {
          url: "img/pwa/icons/reoneo_icon_384x384.png",
          revision: "edc988e9556219edb26b880598db9c89",
        },
        {
          url: "img/pwa/icons/reoneo_icon_48x48.png",
          revision: "93550920de3641de7ca869063eb07323",
        },
        {
          url: "img/pwa/icons/reoneo_icon_512x512.png",
          revision: "a0930532598af9b5418fe2cb40147624",
        },
        {
          url: "img/pwa/icons/reoneo_icon_64x64.png",
          revision: "4d3480b640def4d15d315c25664cd389",
        },
        {
          url: "img/pwa/icons/reoneo_icon_72x72.png",
          revision: "4d7e5552f34e20c38dd50530bd63bffa",
        },
        {
          url: "img/pwa/icons/reoneo_icon_96x96.png",
          revision: "bd2d62513576e46fa77fd9d3df96a4fd",
        },
        { url: "index.html", revision: "3a35a6e627eba108dc491e5286cfbe25" },
        { url: "js/main.js", revision: "dbb891655eaeea1fb8d50a7387ec1946" },
        { url: "js/utility.js", revision: "46b3ea1a98db4d6b7f7d516ccb2ef4d1" },
        { url: "manifest.json", revision: "e991b6e2a6403d188132ed277ad06e97" },
        { url: "README.md", revision: "4799460292e697f4356140274d925255" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
