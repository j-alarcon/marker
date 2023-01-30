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
    let a = {};
    const r = (e) => s(e, c),
      d = { module: { uri: c }, exports: a, require: r };
    i[c] = Promise.all(n.map((e) => d[e] || r(e))).then((e) => (o(...e), a));
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
        { url: "css/main.css", revision: "6234e6466cd72541e774b73c98884692" },
        {
          url: "css/position.css",
          revision: "0b0c7b7bf40137e5512d3297ec7ed4e6",
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
          url: "img/logos/white_penguin_128x128.png",
          revision: "521069a5755644473fe94126ee966ab5",
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
          revision: "5d0fb6ad81202d44db3807b3a680fe58",
        },
        {
          url: "img/pwa/icons/reoneo_icon_128x128.png",
          revision: "28eeb870520bea48687e477fb0f96a3e",
        },
        {
          url: "img/pwa/icons/reoneo_icon_144x144.png",
          revision: "b76bf7cbd2b1ea163f92b174755ff93a",
        },
        {
          url: "img/pwa/icons/reoneo_icon_192x192.png",
          revision: "2e0becc3136c010fa5db66dc9ca188c9",
        },
        {
          url: "img/pwa/icons/reoneo_icon_256x256.png",
          revision: "1b41595135dbb74d3fa04d3e7dc57800",
        },
        {
          url: "img/pwa/icons/reoneo_icon_32x32.png",
          revision: "e667b95363b51d1b2aee74169ddb68b8",
        },
        {
          url: "img/pwa/icons/reoneo_icon_384x384.png",
          revision: "68fe488dab7781e9ba73552f20583173",
        },
        {
          url: "img/pwa/icons/reoneo_icon_48x48.png",
          revision: "15087e6d2028ebd1f8ce5b7c4671c44e",
        },
        {
          url: "img/pwa/icons/reoneo_icon_512x512.png",
          revision: "3f4ef19f960ef77094e41cd905e1d148",
        },
        {
          url: "img/pwa/icons/reoneo_icon_64x64.png",
          revision: "7a54b8844c605bcb5895bcccade02acb",
        },
        {
          url: "img/pwa/icons/reoneo_icon_72x72.png",
          revision: "7b5f3bfb45f2b5690775366d8f8dc7ae",
        },
        {
          url: "img/pwa/icons/reoneo_icon_96x96.png",
          revision: "4044529632911d6192bfa76cc10df6ab",
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
        { url: "index.html", revision: "cecd05bde52e947260987297a32a9fe3" },
        { url: "js/main.js", revision: "73ec441e3063510b13295d0d63bbfbad" },
        { url: "js/utility.js", revision: "35d1b0baaa3be2999b4fcade2acc0872" },
        {
          url: "json/languages.js",
          revision: "3d2704c0e560eef351d8e6dc89615a63",
        },
        {
          url: "json/options.js",
          revision: "729f462a6f4048b19abe4dfcd636d53a",
        },
        { url: "json/scores.js", revision: "a70354ae8cbe81b4f488b1fa95f51f81" },
        { url: "json/teams.js", revision: "48be72e91e473e6cc9f779d1b6978dee" },
        { url: "manifest.json", revision: "14208eff63d146d71363445a3b0149dc" },
        { url: "README.md", revision: "090fda91f07abb58c4805a709ac81a40" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
