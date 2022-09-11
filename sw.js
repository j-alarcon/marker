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
    let a = {};
    const r = (e) => s(e, o),
      d = { module: { uri: o }, exports: a, require: r };
    i[o] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (c(...e), a));
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
        { url: "css/main.css", revision: "efaf888a4c3d3a34fc4504c4d4a4a2cd" },
        {
          url: "css/position.css",
          revision: "be53a178a10731778985db62e1b87354",
        },
        { url: "css/reset.css", revision: "7a4cb66395098d422e0253fd53e75cf5" },
        {
          url: "css/responsive.css",
          revision: "f89150ad080975a8caa32f8eb9e93a57",
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
          url: "img/favicon.png",
          revision: "4f8d8ea6936a9cf8c82e1c61873cad95",
        },
        {
          url: "img/icons/burger.svg",
          revision: "15208ae738be2adac25d7051dffe0bae",
        },
        {
          url: "img/icons/edit.svg",
          revision: "25b4cb816f89061e4927444690a0e9d3",
        },
        {
          url: "img/icons/minus.svg",
          revision: "c6360e3a580ab61645956ef208d7447e",
        },
        {
          url: "img/icons/play.svg",
          revision: "abdc792160641708bd9023528c4f9dac",
        },
        {
          url: "img/icons/plus.svg",
          revision: "0b246f00531334b41b6687e112905468",
        },
        {
          url: "img/icons/reset.svg",
          revision: "d98dceb4eefcb90839dea47e55fc3ea6",
        },
        {
          url: "img/icons/save.svg",
          revision: "772fde0db777c95212f3c2c7a471f809",
        },
        {
          url: "img/icons/stop.svg",
          revision: "f65ef53b36ca81f5f4eb21bd0be42e2c",
        },
        {
          url: "img/logos/white_penguin.webp",
          revision: "e9c5b5979755a65a313836f86e8c896b",
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
          revision: "e8387d4d57d08e9eeddd5452ba58e6d1",
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
          revision: "bac3e46b933df0e262c809f4f10b465f",
        },
        {
          url: "img/pwa/screenshots/computer_nine_teams.png",
          revision: "9b1426b8364528891a76882099689eaf",
        },
        {
          url: "img/pwa/screenshots/computer_six_teams.png",
          revision: "51bc6be0a57db30136bc94a3c00baf7b",
        },
        {
          url: "img/pwa/screenshots/computer_two_teams.png",
          revision: "26f4624a4829dc6d36875240a40f8aa8",
        },
        {
          url: "img/pwa/screenshots/mobile_five_teams.png",
          revision: "e55886d0b1eb02f0ec873e10a8cfecd3",
        },
        {
          url: "img/pwa/screenshots/mobile_nine_teams.png",
          revision: "66abce98c2384a7e749e7b00fc57e2e6",
        },
        {
          url: "img/pwa/screenshots/mobile_six_teams.png",
          revision: "d230b4712d92caf06d49455eeb67e73f",
        },
        {
          url: "img/pwa/screenshots/mobile_two_teams.png",
          revision: "de63f69d293fb703063979b16c6a2c14",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_five_teams.png",
          revision: "ae16262e89004c9050121ce9d0ced014",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_nine_teams.png",
          revision: "6b327d77bcdc384e10b0f6ebc82f5762",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_six_teams.png",
          revision: "c9d450411e11e029a0c47644d167daef",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_two_teams.png",
          revision: "d3e4beee0eb29a9b2d52262e4747ce2a",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_five_teams.png",
          revision: "498f7a59d5ae38e70bb42bff4e7ddae8",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_nine_teams.png",
          revision: "faccf1c42b1c8fbc38555b77091502c2",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_six_teams.png",
          revision: "f105613921824ec28c301a0985692d68",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_two_teams.png",
          revision: "50e8d5c02c016e44d9f5b05d9f919d2d",
        },
        { url: "index.html", revision: "b22c4ec7ca9858f41c82694f08ee4b42" },
        { url: "js/main.js", revision: "a9b058720e22cf6f61c12740310bcff5" },
        { url: "js/utility.js", revision: "78e23c633122994d36750e321d3c2e4a" },
        {
          url: "json/languages.js",
          revision: "6cc55029e043c8d8e8804e81fa4369be",
        },
        {
          url: "json/options.js",
          revision: "b7cb175470cde3dacad3d5c14a5486c1",
        },
        { url: "json/scores.js", revision: "2fab73c81dd02244fd78344d0c3cd886" },
        { url: "json/teams.js", revision: "3ec98c32e02d1e07f446a7350ac26570" },
        { url: "manifest.json", revision: "b5fd2b7eeca51e5cc52f2a593ec77ebc" },
        { url: "README.md", revision: "0c92fc5ea404073eced3ce8f8c7aad94" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
