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
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[a]) return;
    let o = {};
    const r = (e) => s(e, a),
      d = { module: { uri: a }, exports: o, require: r };
    i[a] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (c(...e), o));
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
          url: "img/logos/white_penguin.png",
          revision: "e47c3d85bd0d48f18f8e599a912d9fba",
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
          revision: "f5c8eba2b2c1d77d6b8d835a51cc0a59",
        },
        {
          url: "img/pwa/screenshots/computer_nine_teams.png",
          revision: "3f4195d8efa77e833560b92e2d7fcabc",
        },
        {
          url: "img/pwa/screenshots/computer_six_teams.png",
          revision: "2123d9392afd918d58ace44e310f15ec",
        },
        {
          url: "img/pwa/screenshots/computer_two_teams.png",
          revision: "a3145d827d912f772afd387924f74206",
        },
        {
          url: "img/pwa/screenshots/mobile_five_teams.png",
          revision: "20a2cfec113699fe260dbb0b459b21ed",
        },
        {
          url: "img/pwa/screenshots/mobile_nine_teams.png",
          revision: "be4b4966db04db090ac09be551de8982",
        },
        {
          url: "img/pwa/screenshots/mobile_six_teams.png",
          revision: "222d7f3c6ecb8038d5f468c494962a46",
        },
        {
          url: "img/pwa/screenshots/mobile_two_teams.png",
          revision: "382ec3db74ea5bd3c7768cfcf9f48e03",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_five_teams.png",
          revision: "e79d63ffa03adb75947de52cb67a5db3",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_nine_teams.png",
          revision: "5138f31c60b80234133e7f3e300a08da",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_six_teams.png",
          revision: "d61a76470dd891339367fe6bd109d6a3",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_two_teams.png",
          revision: "18e49f09ccaafa8219d63975c7a4695f",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_five_teams.png",
          revision: "ba876eec70dbfabba8bfaa8a2f56de01",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_nine_teams.png",
          revision: "2fa194c6f0d116b9249d5b61ec1b60d8",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_six_teams.png",
          revision: "d6042e9affd7175b513c321026680c6f",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_two_teams.png",
          revision: "3a3f3983b747bbd07a60e15d50aa0c83",
        },
        { url: "index.html", revision: "9bf8357e4331c7a70dbb1d0b6ff365b3" },
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
