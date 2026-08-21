import { s as spread_props, h as head, a as attr_class, b as attr } from "../../chunks/index.js";
import { I as Icon, N as Navigation, L as Logo, S as Search, B as Button } from "../../chunks/Navigation.js";
import { F as Footer } from "../../chunks/Footer.js";
function Circle_alert($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
    [
      "line",
      { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "circle-alert" }, props, { iconNode }]));
}
function Circle_arrow_right($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m12 16 4-4-4-4" }],
    ["path", { "d": "M8 12h8" }]
  ];
  Icon($$renderer, spread_props([{ name: "circle-arrow-right" }, props, { iconNode }]));
}
function Circle_check($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([{ name: "circle-check" }, props, { iconNode }]));
}
function Contact($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M16 2v2" }],
    ["path", { "d": "M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" }],
    ["path", { "d": "M8 2v2" }],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }],
    [
      "rect",
      { "x": "3", "y": "3", "width": "18", "height": "18", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "contact" }, props, { iconNode }]));
}
function Folder_git($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["circle", { "cx": "12", "cy": "13", "r": "2" }],
    [
      "path",
      {
        "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { "d": "M14 13h3" }],
    ["path", { "d": "M7 13h3" }]
  ];
  Icon($$renderer, spread_props([{ name: "folder-git" }, props, { iconNode }]));
}
function Keyboard($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M10 8h.01" }],
    ["path", { "d": "M12 12h.01" }],
    ["path", { "d": "M14 8h.01" }],
    ["path", { "d": "M16 12h.01" }],
    ["path", { "d": "M18 8h.01" }],
    ["path", { "d": "M6 8h.01" }],
    ["path", { "d": "M7 16h10" }],
    ["path", { "d": "M8 12h.01" }],
    [
      "rect",
      { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "keyboard" }, props, { iconNode }]));
}
function Mail($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([{ name: "mail" }, props, { iconNode }]));
}
function Repeat_2($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m2 9 3-3 3 3" }],
    ["path", { "d": "M13 18H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "m22 15-3 3-3-3" }],
    ["path", { "d": "M11 6h6a2 2 0 0 1 2 2v10" }]
  ];
  Icon($$renderer, spread_props([{ name: "repeat-2" }, props, { iconNode }]));
}
function Square_check_big($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"
      }
    ],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  Icon($$renderer, spread_props([{ name: "square-check-big" }, props, { iconNode }]));
}
function Square_dot($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "1" }]
  ];
  Icon($$renderer, spread_props([{ name: "square-dot" }, props, { iconNode }]));
}
function Square_x($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "3",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "m15 9-6 6" }],
    ["path", { "d": "m9 9 6 6" }]
  ];
  Icon($$renderer, spread_props([{ name: "square-x" }, props, { iconNode }]));
}
function _page($$renderer) {
  let query = void 0;
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>SvelteTube, stream and download</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Download anime, stream and chat live as you watch"/>`);
  });
  Navigation($$renderer);
  $$renderer.push(`<!----> <main class="flex flex-col justify-center items-center w-full p-6 pt-40 md:p-10 gap-4"><a href="/home"><div class="w-24">`);
  Logo($$renderer);
  $$renderer.push(`<!----></div></a> <form action="/search"${attr_class(`flex gap-2 bg-secondary rounded-lg w-full max-w-[60rem] overflow-hidden p-2 lg:h-auto lg:p-2 transition-all`)}><input class="bg-transparent w-full"${attr("value", query)} type="text" name="query" placeholder="Start searching . . ."/> <button type="submit">`);
  Search($$renderer, {});
  $$renderer.push(`<!----></button></form> `);
  Button($$renderer, {
    href: "/home",
    class: "flex justify-center items-center",
    children: ($$renderer2) => {
      $$renderer2.push(`<span>View Full Site</span> `);
      Circle_arrow_right($$renderer2, {});
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> <div class="pt-40"></div> <h2 class="svelte-1uha8ag">📩 Contact and Support</h2> <p class="svelte-1uha8ag">Since SvelteTube is a free and open-source project, direct support is limited. <br/> However you can contact me on one of the following platforms:</p> <ul class="flex gap-1 svelte-1uha8ag"><li>`);
  Button($$renderer, {
    href: "https://github.com/WinterSunset95",
    target: "_blank",
    children: ($$renderer2) => {
      Folder_git($$renderer2, {});
      $$renderer2.push(`<!----> <span class="hidden md:flex">WinterSunset95</span>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></li> <li>`);
  Button($$renderer, {
    href: "https://instagram.com/wallace.thiago",
    children: ($$renderer2) => {
      $$renderer2.push(`<span class="hidden md:flex">@wallace.thiago</span>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></li> <li>`);
  Button($$renderer, {
    href: "https://wa.me/+916009341754",
    children: ($$renderer2) => {
      Contact($$renderer2, {});
      $$renderer2.push(`<!----> <span class="hidden md:flex">WhatsApp</span>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></li> <li>`);
  Button($$renderer, {
    href: "mailto:wintersunset95@gmail.com",
    children: ($$renderer2) => {
      Mail($$renderer2, {});
      $$renderer2.push(`<!----> <span class="hidden md:flex">wintersunset95@gmail.com</span>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></li></ul> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">📢 Disclaimer!! Use an Adblocker for a Better Experience!!</h2> <p class="svelte-1uha8ag">SvelteTube serves as a video aggregation platform by embedding video players from multiple third-party sources. These sources may contain advertisements that are beyond our control. We strongly recommend using an ad blocker while browsing to ensure a smoother, uninterrupted viewing experience.</p> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">🌟 What is SvelteTube?</h2> <p class="svelte-1uha8ag">SvelteTube is a free, open-source streaming platform designed for seamless access to Movies, TV Shows, Anime, and Dramas. Launched in 2024, SvelteTube provides high-quality content without requiring any registration or subscription fees. With an easy-to-navigate interface, multiple streaming servers, and a robust search feature, SvelteTube offers an unparalleled entertainment experience.</p> <h3 class="svelte-1uha8ag">Key features:</h3> <ul class="svelte-1uha8ag"><li>`);
  Circle_check($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Completely Free - No hidden fees, no paywalls.</li> <li>`);
  Circle_check($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->No Ads on Our End - We'll never serve ads directly.</li> <li>`);
  Circle_check($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Multiple Streaming Servers - Choose from 10+ servers for the best performance.</li> <li>`);
  Circle_check($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->HD Quality Streaming - Enjoy high-definition content for free.</li> <li>`);
  Circle_check($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Fast and Lightweight - Powered by Svelte, ensuring a smooth experience.</li></ul> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">🛠 How Does SvelteTube Work?</h2> <p class="svelte-1uha8ag">SvelteTube functions as a frontend for various media providers, sourcing content through open APIs from platforms like:</p> <ul class="svelte-1uha8ag"><li><a href="https://github.com/WinterSunset95/peek-a-boo.ts" target="_blank">peek-a-boo.ts</a> - A powerful aggregation tool for collecting media data.</li> <li><a href="https://github.com/consumet/consumet.ts" target="_blank">consumet.ts</a> - A backend library for retrieving media data.</li> <li><a href="https://themoviedb.org" target="_blank">The Movie Database (TMDB)</a> - For movie metadata, posters, and more.</li></ul> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">🚫 What SvelteTube is NOT</h2> <p class="svelte-1uha8ag">While SvelteTube aims to provide an open and accessible entertainment hub, it is important to clarify what it does not represent:</p> <ul class="svelte-1uha8ag"><li><b>`);
  Square_x($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Not a company</b> - SvelteTube is an independent, community-driven project with no corporate backing.</li> <li><b>`);
  Square_x($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Not an official source</b> - It does not host, store, or distribute any movies, TV shows, or anime. It simply provides a convenient way to access publicly available media from third-party providers.</li> <li><b>`);
  Square_x($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Not a NSFW platform</b> - No adult content is supported, and it never will be.</li> <li><b>`);
  Square_x($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!---->Not created for profit</b> - This is a passion project, not a business venture.</li></ul> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">🎯 Goals and Roadmap</h2> <p class="svelte-1uha8ag">We are committed to improving SvelteTube with exciting new features. Here's what we have planned:</p> <h3 class="svelte-1uha8ag">✅ Already implemented</h3> <ul class="svelte-1uha8ag"><li>`);
  Square_check_big($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!----> <span>Search and stream Anime</span></li> <li>`);
  Square_check_big($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!----> <span>Search and stream Movies</span></li> <li>`);
  Square_check_big($$renderer, { class: "inline-block mx-2" });
  $$renderer.push(`<!----> <span>Search and stream TV Shows</span></li></ul> <h3 class="svelte-1uha8ag">🚧 In Progress</h3> <ul class="svelte-1uha8ag"><li>`);
  Repeat_2($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!----> <span>Download Anime</span></li> <li>`);
  Repeat_2($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!----> <span>Download Movies</span></li> <li>`);
  Repeat_2($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!----> <span>Download TV Shows</span></li> <li>`);
  Repeat_2($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!----> <span>"Rooms" for realtime streaming and chat with friends</span></li></ul> <p class="svelte-1uha8ag">Our roadmap is continuously evolving, and community contributions are always welcome!</p> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">❌ What SvelteTube will NEVER do!</h2> <p class="svelte-1uha8ag">Certain things go against our principles. Here’s what you’ll never find on SvelteTube:</p> <ul class="svelte-1uha8ag"><li><b>`);
  Circle_alert($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!---->Advertisements</b> - We hate ads as much as you do. SvelteTube will remain ad-free on our end. <strong>ANY AD YOU FIND IS FROM THE EMBED SERVER!!</strong></li> <li><b>`);
  Circle_alert($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!---->NSFW Content</b> - We strictly prohibit adult content of any kind.</li> <li><b>`);
  Circle_alert($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!---->Tracking &amp; Data Collection</b> - We value your privacy. No tracking, no accounts, no personalized recommendations. This means: <ul class="svelte-1uha8ag"><li>`);
  Square_dot($$renderer, { class: "inline-block mx-1 ml-8" });
  $$renderer.push(`<!----> No "Continue Watching"</li> <li>`);
  Square_dot($$renderer, { class: "inline-block mx-1 ml-8" });
  $$renderer.push(`<!----> No "Recently Watched"</li> <li>`);
  Square_dot($$renderer, { class: "inline-block mx-1 ml-8" });
  $$renderer.push(`<!----> No Data collection of any sort</li></ul></li></ul> <hr class="svelte-1uha8ag"/> <h2 class="svelte-1uha8ag">🤝 Contribute to SvelteTube</h2> <p class="svelte-1uha8ag">SvelteTube is a community-driven, open-source project, and we welcome contributions!</p> <h3 class="svelte-1uha8ag">Ways to contribute:</h3> <ul class="svelte-1uha8ag"><li><b>`);
  Keyboard($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!---->Developers</b> - Help us improve the codebase on <a href="https://github.com/WinterSunset95/SvelteTube">GitHub</a>.</li> <li><b>`);
  Keyboard($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!---->Bug reports &amp; Feature Requests</b> - Report issues or suggest features to make SvelteTube better.</li> <li><b>`);
  Keyboard($$renderer, { class: "inline-block mx-1" });
  $$renderer.push(`<!---->Spread the word</b> - Share SvelteTube with your friends and help build a strong user community!</li></ul></main> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
