if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, o) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let r = {};
    const a = (e) => s(e, c),
      d = { module: { uri: c }, exports: r, require: a };
    i[c] = Promise.all(n.map((e) => d[e] || a(e))).then((e) => (o(...e), r));
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
        { url: "css/main.css", revision: "adbea5723998afe1683c507614467c29" },
        {
          url: "css/position.css",
          revision: "3f6f78084cd83fbd5248ad186b580080",
        },
        { url: "css/reset.css", revision: "5f0d731c9c8c5af4020e5e437a490290" },
        {
          url: "css/responsive.css",
          revision: "f92e2add79d880af8c3ca6a7352ad408",
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
        {
          url: "img/pwa/screenshots/computer_five_teams.png",
          revision: "82f5e0e1f0fc788c6fdf2242c9116bd2",
        },
        {
          url: "img/pwa/screenshots/computer_nine_teams.png",
          revision: "09d1d700d21223f08086f96dba548e9c",
        },
        {
          url: "img/pwa/screenshots/computer_three_teams.png",
          revision: "55e5265de9b2a9f48e01970c8d783380",
        },
        {
          url: "img/pwa/screenshots/computer_two_teams.png",
          revision: "c94a41e1b86a817f18c58992700b4dbe",
        },
        {
          url: "img/pwa/screenshots/mobile_nine_teams.png",
          revision: "57e1741c2a3f97e19870a90dbc760a18",
        },
        {
          url: "img/pwa/screenshots/mobile_six_teams.png",
          revision: "9ec8e52b7106833403fb83c5a760ee9f",
        },
        {
          url: "img/pwa/screenshots/mobile_three_teams.png",
          revision: "65dfd1265dd30c3f027af7b95bc90040",
        },
        {
          url: "img/pwa/screenshots/mobile_two_teams.png",
          revision: "30552280ecc2fba78f28a4d1b81c8f83",
        },
        { url: "index.html", revision: "25de18ff410ffbadbf92a92b739dfad1" },
        { url: "js/main.js", revision: "2ec3ef5ecda47538b79da79ac2e8b626" },
        { url: "js/utility.js", revision: "46b3ea1a98db4d6b7f7d516ccb2ef4d1" },
        {
          url: "json/languages.js",
          revision: "8b1c7153989aafa6b8ec4ecf5febcb04",
        },
        {
          url: "json/options.js",
          revision: "d449a1d7c300b32b44b838dbae224c71",
        },
        { url: "json/scores.js", revision: "b9c5b2d93288c36b3935727906c35fe2" },
        { url: "json/teams.js", revision: "d5afd27a9adc62975c793ea2346a97fc" },
        { url: "manifest.json", revision: "38862720530b36866d5dd6af9033b654" },
        { url: "README.md", revision: "09bd387d66c7abf75e1c4a2763b7133a" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
