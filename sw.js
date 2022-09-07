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
  self.define = (n, c) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let r = {};
    const a = (e) => s(e, o),
      d = { module: { uri: o }, exports: r, require: a };
    i[o] = Promise.all(n.map((e) => d[e] || a(e))).then((e) => (c(...e), r));
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
        { url: "css/fonts.css", revision: "0b33fd739a0d416da150513f8723ddac" },
        { url: "css/main.css", revision: "7bba475985e7a8afba26ae9b328cc10e" },
        {
          url: "css/position.css",
          revision: "1b7a30a61dc38bf892ee9947da060ffc",
        },
        { url: "css/reset.css", revision: "7a4cb66395098d422e0253fd53e75cf5" },
        {
          url: "css/responsive.css",
          revision: "a80da9d8718d7f77ed4e5b8057e2cf78",
        },
        {
          url: "fonts/anton.ttf",
          revision: "055c4df4e2f8c7a4d4675cdd8fa68da0",
        },
        {
          url: "fonts/ubuntu.ttf",
          revision: "d3c3b35e6d478ed149f02fad880dd359",
        },
        { url: "FUNDING.yml", revision: "d71ac27283ed800598bb8fb4b731ff6c" },
        {
          url: "img/favicon.webp",
          revision: "25f7ca26c06995fcabf7b4ad5dde1251",
        },
        {
          url: "img/icons/burger.svg",
          revision: "15208ae738be2adac25d7051dffe0bae",
        },
        {
          url: "img/icons/edit.svg",
          revision: "c4727b11bed9db216f986ae04eecc5b5",
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
          url: "img/icons/save.svg",
          revision: "2cb6a3c54ce355a415e161f04a838fc9",
        },
        {
          url: "img/icons/stop.svg",
          revision: "e0ea4c9a93871d30c83981d21a4e51bc",
        },
        {
          url: "img/logos/penguin_white.webp",
          revision: "055e603b725c349e0cd46c0d4cc1ee14",
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
          revision: "2a5c8197730463778afd36aa8d16315d",
        },
        {
          url: "img/pwa/screenshots/mobile_six_teams.png",
          revision: "93c3e9da9b99ad6b940516d599eebc4c",
        },
        {
          url: "img/pwa/screenshots/mobile_three_teams.png",
          revision: "5c2d9a92746aa2d78323c0cdd15165ba",
        },
        {
          url: "img/pwa/screenshots/mobile_two_teams.png",
          revision: "abef1a557deb1b9fcaa49bf825e71b73",
        },
        { url: "index.html", revision: "ab478cf9731083985a400d46d8c9dab0" },
        { url: "js/main.js", revision: "ebc1e71c2d18c77c8eb2e3908ac27d2a" },
        { url: "js/utility.js", revision: "7a70971335404e9a099cb6b2797b7921" },
        {
          url: "json/languages.js",
          revision: "6cc55029e043c8d8e8804e81fa4369be",
        },
        {
          url: "json/options.js",
          revision: "fed14ace8064ab949813d41281879cef",
        },
        { url: "json/scores.js", revision: "2fab73c81dd02244fd78344d0c3cd886" },
        { url: "json/teams.js", revision: "3ec98c32e02d1e07f446a7350ac26570" },
        { url: "manifest.json", revision: "21083938951107c1492f1c7919ab5166" },
        { url: "README.md", revision: "04681dffd1eaf7df179bd4da3c68b0f0" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
