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
  self.define = (n, a) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let o = {};
    const r = (e) => s(e, c),
      d = { module: { uri: c }, exports: o, require: r };
    i[c] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (a(...e), o));
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
        { url: "css/fonts.css", revision: "c7f6911f047994d4b81b317a8c9a5d09" },
        { url: "css/main.css", revision: "725cad70b95cb8739e39215e6611aef3" },
        {
          url: "css/position.css",
          revision: "bb57a2d1c7f6e41858281c5d959e549c",
        },
        { url: "css/reset.css", revision: "821f47d254bfd553248ed3c8a060b4dd" },
        {
          url: "css/responsive.css",
          revision: "d5fedcae4fae200d1528e3472e1be1b4",
        },
        {
          url: "fonts/anton.ttf",
          revision: "055c4df4e2f8c7a4d4675cdd8fa68da0",
        },
        {
          url: "fonts/ubuntu.ttf",
          revision: "d3c3b35e6d478ed149f02fad880dd359",
        },
        { url: "FUNDING.yml", revision: "c21af649c611bd5a3389bd3401dd5c71" },
        {
          url: "img/favicon.png",
          revision: "784f0f20382217254bf54cd388728115",
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
          revision: "4af174c330d334424b2e206cc9dc4c62",
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
          revision: "640d43b62a11d92859f472fba96ba81a",
        },
        {
          url: "img/pwa/icons/reoneo_icon_128x128.png",
          revision: "a4a0623ddf7392081ad2728071e96eaf",
        },
        {
          url: "img/pwa/icons/reoneo_icon_144x144.png",
          revision: "b76bf7cbd2b1ea163f92b174755ff93a",
        },
        {
          url: "img/pwa/icons/reoneo_icon_192x192.png",
          revision: "ae78a709825ecdcc548f6aeb4b7fd9f1",
        },
        {
          url: "img/pwa/icons/reoneo_icon_256x256.png",
          revision: "859d24a7ba1d8482e6b2a3551a866b64",
        },
        {
          url: "img/pwa/icons/reoneo_icon_32x32.png",
          revision: "8edf24242f30e7ad232d792989cef8a4",
        },
        {
          url: "img/pwa/icons/reoneo_icon_384x384.png",
          revision: "e3ea94a5ca43cc8ab824ccdec56877a7",
        },
        {
          url: "img/pwa/icons/reoneo_icon_48x48.png",
          revision: "332c4d54e59a9cc0c5f57a4809f33afd",
        },
        {
          url: "img/pwa/icons/reoneo_icon_512x512.png",
          revision: "813d233ef18489b54b936fe3c650ab4f",
        },
        {
          url: "img/pwa/icons/reoneo_icon_64x64.png",
          revision: "8f291ca3c72ad57e57e86af81218ad61",
        },
        {
          url: "img/pwa/icons/reoneo_icon_72x72.png",
          revision: "e9429a30bd2ab6e95a33cc0cb6a9b855",
        },
        {
          url: "img/pwa/icons/reoneo_icon_96x96.png",
          revision: "0035b11253e34e0885b4cbc04fdbf696",
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
          revision: "97d19b3321ead93b408580a2bc38392b",
        },
        {
          url: "img/pwa/screenshots/mobile_nine_teams.png",
          revision: "26dbb1fd8a3a96fd4b3f1c703759f200",
        },
        {
          url: "img/pwa/screenshots/mobile_six_teams.png",
          revision: "a420c3a4f36c583d4fcc696a9faf396d",
        },
        {
          url: "img/pwa/screenshots/mobile_two_teams.png",
          revision: "3bd5779739715abef89bae9e3c23d344",
        },
        {
          url: "img/pwa/screenshots/tablet_10inch_five_teams.png",
          revision: "befdef8b8a8ac6a15a298078c2bfa34e",
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
          revision: "0bfe14febc91970844f3830e5f7595cd",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_five_teams.png",
          revision: "02bc6a31f80a3e5cf96180419ded1c77",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_nine_teams.png",
          revision: "44d0f079fcd66cf5e4492c2d8e43ee36",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_six_teams.png",
          revision: "b1e0361f2b1aeb76dd38848362142ed0",
        },
        {
          url: "img/pwa/screenshots/tablet_7inch_two_teams.png",
          revision: "ca08deda589a20b632d71f96d3a05ed2",
        },
        { url: "index.html", revision: "aff502007884f829883bb6b715b7eca6" },
        { url: "js/main.js", revision: "4f9501a38d25a675b4c0e9693b47fd28" },
        { url: "js/utility.js", revision: "fb23d76d295a96902b2e69ba14b39a04" },
        {
          url: "json/languages.js",
          revision: "113413b3754ed16a9a5138e1d12dadf1",
        },
        {
          url: "json/options.js",
          revision: "729f462a6f4048b19abe4dfcd636d53a",
        },
        { url: "json/scores.js", revision: "a70354ae8cbe81b4f488b1fa95f51f81" },
        { url: "json/teams.js", revision: "48be72e91e473e6cc9f779d1b6978dee" },
        { url: "manifest.json", revision: "26671a7ab2e88bd9d5fa6d4a3d9f2eb0" },
        { url: "README.md", revision: "4c04123eb36bc048ccab67ba66c2982c" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
