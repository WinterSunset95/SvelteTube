import { h as head } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { L as List } from "../../../chunks/List.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1j6ictg", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>SvelteTube, stream and download</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Download anime, stream and chat live as you watch"/>`);
    });
    Navigation($$renderer2);
    $$renderer2.push(`<!----> <main class="p-4 flex flex-col gap-2 h-dvh"><h1 class="text-lg md:text-xl">Trending Shows</h1> `);
    List($$renderer2, { mediaList: data.tv.boo });
    $$renderer2.push(`<!----> <h1 class="text-lg md:text-xl">Trending Movies</h1> `);
    List($$renderer2, { mediaList: data.movies.boo });
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
