import { f as setContext, c as hasContext, g as getContext, j as attributes, o as clsx, k as bind_props, b as attr, n as stringify, e as escape_html, m as ensure_array_like } from "./index.js";
import { c as cn } from "./Navigation.js";
import "clsx";
import Autoplay from "embla-carousel-autoplay";
const EMBLA_CAROUSEL_CONTEXT = Symbol("EMBLA_CAROUSEL_CONTEXT");
function setEmblaContext(config) {
  setContext(EMBLA_CAROUSEL_CONTEXT, config);
  return config;
}
function getEmblaContext(name = "This component") {
  if (!hasContext(EMBLA_CAROUSEL_CONTEXT)) {
    throw new Error(`${name} must be used within a <Carousel.Root> component`);
  }
  return getContext(EMBLA_CAROUSEL_CONTEXT);
}
function Carousel_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const emblaCtx = getEmblaContext("<Carousel.Content/>");
    $$renderer2.push(`<div data-slot="carousel-content" class="overflow-hidden"><div${attributes({
      class: clsx(cn("flex", emblaCtx.orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col", className)),
      "data-embla-container": "",
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></div>`);
    bind_props($$props, { ref });
  });
}
function Carousel_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const emblaCtx = getEmblaContext("<Carousel.Item/>");
    $$renderer2.push(`<div${attributes({
      "data-slot": "carousel-item",
      role: "group",
      "aria-roledescription": "slide",
      class: clsx(cn("min-w-0 shrink-0 grow-0 basis-full", emblaCtx.orientation === "horizontal" ? "ps-4" : "pt-4", className)),
      "data-embla-slide": "",
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Carousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      opts = {},
      plugins = [],
      setApi = () => {
      },
      orientation = "horizontal",
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let carouselState = {
      api: void 0,
      scrollPrev,
      scrollNext,
      orientation,
      canScrollNext: false,
      canScrollPrev: false,
      handleKeyDown,
      options: opts,
      plugins,
      onInit,
      scrollSnaps: [],
      selectedIndex: 0,
      scrollTo
    };
    setEmblaContext(carouselState);
    function scrollPrev() {
      carouselState.api?.scrollPrev();
    }
    function scrollNext() {
      carouselState.api?.scrollNext();
    }
    function scrollTo(index, jump) {
      carouselState.api?.scrollTo(index, jump);
    }
    function onSelect() {
      if (!carouselState.api) return;
      carouselState.selectedIndex = carouselState.api.selectedScrollSnap();
      carouselState.canScrollNext = carouselState.api.canScrollNext();
      carouselState.canScrollPrev = carouselState.api.canScrollPrev();
    }
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    }
    function onInit(event) {
      carouselState.api = event.detail;
      setApi(carouselState.api);
      carouselState.scrollSnaps = carouselState.api.scrollSnapList();
      carouselState.api.on("select", onSelect);
      onSelect();
    }
    $$renderer2.push(`<div${attributes({
      "data-slot": "carousel",
      class: clsx(cn("relative", className)),
      role: "region",
      "aria-roledescription": "carousel",
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Card_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card-content",
      class: clsx(cn("px-(--card-spacing)", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Card_footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card-footer",
      class: clsx(cn("rounded-b-4xl px-(--card-spacing) [.border-t]:pt-(--card-spacing) flex items-center", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Card_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card-title",
      class: clsx(cn("text-base font-medium", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      size = "default",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "card",
      "data-size": size,
      class: clsx(cn("gap-(--card-spacing) overflow-hidden rounded-4xl bg-card py-(--card-spacing) text-sm text-card-foreground shadow-md ring-1 ring-foreground/5 [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] dark:ring-foreground/10 *:[img:first-child]:rounded-t-4xl *:[img:last-child]:rounded-b-4xl group/card flex flex-col", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Card_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { media } = $$props;
    $$renderer2.push(`<a${attr("href", `/${stringify(media.Type)}/${stringify(media.Id)}`)}>`);
    if (Card) {
      $$renderer2.push("<!--[-->");
      Card($$renderer2, {
        class: "border-0 relative aspect-[3/4] overflow-hidden rounded-lg group",
        children: ($$renderer3) => {
          if (Card_content) {
            $$renderer3.push("<!--[-->");
            Card_content($$renderer3, {
              class: "p-0 absolute top-0 left-0 w-full h-full",
              children: ($$renderer4) => {
                $$renderer4.push(`<div class="flex justify-center items-center w-full h-full"><img${attr("src", media.Poster)} class="object-cover w-full" alt=""/></div>`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push("<!--]-->");
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push("<!--]-->");
          }
          $$renderer3.push(` `);
          if (Card_footer) {
            $$renderer3.push("<!--[-->");
            Card_footer($$renderer3, {
              class: "p-2 absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-[rgba(0,0,0,0)] h-2/3 flex flex-col justify-end items-start transition-all group-hover:h-full group-hover:justify-center group-hover:items-center",
              children: ($$renderer4) => {
                if (Card_title) {
                  $$renderer4.push("<!--[-->");
                  Card_title($$renderer4, {
                    class: "text-lg md:text-xl p-0",
                    children: ($$renderer5) => {
                      $$renderer5.push(`<!---->${escape_html(media.Title.length > 40 ? media.Title.slice(0, 40) + "..." : media.Title)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer4.push("<!--]-->");
                } else {
                  $$renderer4.push("<!--[!-->");
                  $$renderer4.push("<!--]-->");
                }
              },
              $$slots: { default: true }
            });
            $$renderer3.push("<!--]-->");
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push("<!--]-->");
          }
        },
        $$slots: { default: true }
      });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</a>`);
  });
}
function List($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { mediaList } = $$props;
    if (Carousel) {
      $$renderer2.push("<!--[-->");
      Carousel($$renderer2, {
        opts: { align: "center", loop: true },
        plugins: [
          Autoplay({
            delay: 5e3,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          })
        ],
        children: ($$renderer3) => {
          if (Carousel_content) {
            $$renderer3.push("<!--[-->");
            Carousel_content($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(mediaList);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let media = each_array[$$index];
                  if (Carousel_item) {
                    $$renderer4.push("<!--[-->");
                    Carousel_item($$renderer4, {
                      class: "basis-1/2 md:basis-1/4 lg:basis-1/6",
                      children: ($$renderer5) => {
                        Card_1($$renderer5, { media });
                      },
                      $$slots: { default: true }
                    });
                    $$renderer4.push("<!--]-->");
                  } else {
                    $$renderer4.push("<!--[!-->");
                    $$renderer4.push("<!--]-->");
                  }
                }
                $$renderer4.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push("<!--]-->");
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push("<!--]-->");
          }
        },
        $$slots: { default: true }
      });
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
  });
}
export {
  List as L
};
