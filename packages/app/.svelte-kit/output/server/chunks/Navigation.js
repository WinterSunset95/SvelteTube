import { j as attributes, o as clsx$1, k as bind_props, g as getContext, m as ensure_array_like, q as element, d as derived, s as spread_props, t as noop, a as attr_class, b as attr } from "./index.js";
import { clsx } from "clsx";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils2.js";
import "@sveltejs/kit/internal/server";
import { s as state, a as render_effect, b as set, g as get } from "./root.js";
import "./state.svelte.js";
import "./client.js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = tv({
  base: "rounded-4xl border border-transparent bg-clip-padding text-sm font-medium focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-transparent dark:hover:bg-input/30",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
      destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
      xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-9",
      "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className,
      variant = "default",
      size = "default",
      ref = null,
      href = void 0,
      type = "button",
      disabled,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (href) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attributes({
        "data-slot": "button",
        class: clsx$1(cn(buttonVariants({ variant, size }), className)),
        href: disabled ? void 0 : href,
        "aria-disabled": disabled,
        role: disabled ? "link" : void 0,
        tabindex: disabled ? -1 : void 0,
        ...restProps
      })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({
        "data-slot": "button",
        class: clsx$1(cn(buttonVariants({ variant, size }), className)),
        type,
        disabled,
        ...restProps
      })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
/**
 * @file
 * @license @lucide/svelte v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @file
 * @license @lucide/svelte v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
/**
 * @file
 * @license @lucide/svelte v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LucideContext = Symbol("lucide-context");
const getLucideContext = () => getContext(LucideContext);
function Icon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const globalProps = getLucideContext() ?? {};
    const {
      name,
      color = globalProps.color ?? "currentColor",
      size = globalProps.size ?? 24,
      strokeWidth = globalProps.strokeWidth ?? 2,
      absoluteStrokeWidth = globalProps.absoluteStrokeWidth ?? false,
      iconNode = [],
      children,
      $$slots,
      $$events,
      ...props
    } = $$props;
    const calculatedStrokeWidth = derived(() => absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth);
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...!children && !hasA11yProp(props) && { "aria-hidden": "true" },
        ...props,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": calculatedStrokeWidth(),
        class: clsx$1([
          "lucide-icon lucide",
          globalProps.class,
          name && `lucide-${name}`,
          props.class
        ])
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]-->`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></svg>`);
  });
}
function Search($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([{ name: "search" }, props, { iconNode }]));
}
function Text_align_justify($$renderer, $$props) {
  let { $$slots, $$events, ...props } = $$props;
  const iconNode = [
    ["path", { "d": "M3 5h18" }],
    ["path", { "d": "M3 12h18" }],
    ["path", { "d": "M3 19h18" }]
  ];
  Icon($$renderer, spread_props([{ name: "text-align-justify" }, props, { iconNode }]));
}
function Logo($$renderer) {
  $$renderer.push(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 142"><g transform="translate(65.05999999999995 45) rotate(0 50.15636363636361 26.00000000000003)"><text x="0" y="36.64960000000003" font-family="Excalifont, Segoe UI Emoji, Montserrat" font-size="41.60000000000004px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic" class="svelte-byj55g">Sv</text></g><g stroke-linecap="round" transform="translate(10 10) rotate(0 83.5 61)"><path d="M30.5 0 C64.4 -1.42, 96.51 -2.4, 136.5 0 M30.5 0 C53.04 -0.02, 76.03 -0.39, 136.5 0 M136.5 0 C155.41 1.17, 166.65 8.89, 167 30.5 M136.5 0 C154.79 2.05, 168.59 12.11, 167 30.5 M167 30.5 C166.48 43.35, 168.65 58.49, 167 91.5 M167 30.5 C166.62 54.09, 166.59 78.74, 167 91.5 M167 91.5 C167.24 113.21, 156.78 123.9, 136.5 122 M167 91.5 C165.01 113.79, 157.02 123.7, 136.5 122 M136.5 122 C98.05 123.42, 60.57 123.11, 30.5 122 M136.5 122 C109.77 121.41, 83.32 121.21, 30.5 122 M30.5 122 C11.11 123.61, 0.8 112.64, 0 91.5 M30.5 122 C9.21 121.24, 2.02 109.94, 0 91.5 M0 91.5 C1.35 69.08, -0.28 44.77, 0 30.5 M0 91.5 C-1.51 76.11, -0.48 59.53, 0 30.5 M0 30.5 C0.91 9.65, 9.35 1.98, 30.5 0 M0 30.5 C-1.96 10.76, 9.64 -0.2, 30.5 0" stroke="#1e1e1e" stroke-width="2" fill="none" class="svelte-byj55g"></path></g><g stroke-linecap="round"><g transform="translate(45.67168638875705 21) rotate(0 56.66594189446283 48.513076304971804)"><path d="M-0.34 -0.37 C18.49 7.16, 113.15 30.22, 113.57 46.33 C113.99 62.44, 20.88 87.92, 2.15 96.27 M1.68 -1.61 C20.32 6.58, 112.73 31.13, 112.75 47.6 C112.77 64.07, 20.36 88.92, 1.79 97.19" stroke="#1e1e1e" stroke-width="2" fill="none" class="svelte-byj55g"></path></g></g><mask></mask><g stroke-linecap="round"><g transform="translate(46 19) rotate(0 0.5 48.5)"><path d="M2.69 2.78 C2.11 10.35, -0.97 32.41, -1.15 48.2 C-1.32 63.98, 1.05 89.62, 1.65 97.48 M0.7 1.81 C-0.38 11.08, -2.66 35.42, -2.92 51.93 C-3.19 68.44, -1.84 93.33, -0.89 100.85" stroke="#1e1e1e" stroke-width="2" fill="none" class="svelte-byj55g"></path></g></g><mask></mask></svg>`);
}
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function linear(t) {
  return t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
class Tween {
  #current;
  #target;
  /** @type {TweenOptions<T>} */
  #defaults;
  /** @type {import('../internal/client/types').Task | null} */
  #task = null;
  /**
   * @param {T} value
   * @param {TweenOptions<T>} options
   */
  constructor(value, options = {}) {
    this.#current = state(value);
    this.#target = state(value);
    this.#defaults = options;
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenOptions<U>} [options]
   */
  static of(fn, options) {
    const tween = new Tween(fn(), options);
    render_effect(() => {
      tween.set(fn());
    });
    return tween;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenOptions<T>} [options]
   * @returns
   */
  set(value, options) {
    set(this.#target, value);
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...this.#defaults, ...options };
    if (duration === 0) {
      this.#task?.abort();
      set(this.#current, value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    let started = false;
    let previous_task = this.#task;
    this.#task = loop((now2) => {
      if (now2 < start) {
        return true;
      }
      if (!started) {
        started = true;
        const prev = this.#current.v;
        fn = interpolate(prev, value);
        if (typeof duration === "function") {
          duration = duration(prev, value);
        }
        previous_task?.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        set(this.#current, value);
        return false;
      }
      set(this.#current, fn(easing(elapsed / /** @type {number} */
      duration)));
      return true;
    });
    return this.#task.promise;
  }
  get current() {
    return get(this.#current);
  }
  get target() {
    return get(this.#target);
  }
  set target(v) {
    this.set(v);
  }
}
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let progress = new Tween(1, {
      delay: 1e3,
      duration(from, to) {
        return 2e3;
      },
      easing: cubicOut
    });
    let query = void 0;
    let menu = false;
    $$renderer2.push(`<nav${attr_class(`${""} top-0 w-full z-10 flex flex-col ${"bg-secondary"} transition-all`)}><div${attr_class(`flex items-center justify-between p-2 md:p-4 ${"px-6 md:px-10"} ${menu ? "gap-2" : ""} lg:gap-2 flex-wrap transition-all`)}><div class="w-full lg:w-auto flex items-center justify-between"><a href="/" class="flex items-center gap-2"><div class="w-12">`);
    Logo($$renderer2);
    $$renderer2.push(`<!----></div> <h1 class="text-xl font-bold">SvelteTube</h1></a> `);
    Button($$renderer2, {
      class: "lg:hidden",
      onclick: () => menu = !menu,
      "aria-label": "menu",
      children: ($$renderer3) => {
        Text_align_justify($$renderer3, {});
        $$renderer3.push(`<!----> <span>Menu</span>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <ul${attr_class(`flex justify-between w-full text-sm md:text-lg lg:w-auto items-center gap-2 lg:gap-6 overflow-hidden ${menu ? "h-auto" : "h-0"} lg:h-auto transition-all`)}><li><a href="/home">Home</a></li> <li><a href="/" aria-disabled="true">Movies</a></li> <li><a href="/" aria-disabled="true">TV Shows</a></li> <li><a href="/" aria-disabled="true">Anime</a></li> <li><a href="/" aria-disabled="true">Rooms</a></li> <li><button class="icon">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<svg viewBox="0 0 1472 1536" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></li></ul> <form action="/search"${attr_class(`flex gap-2 bg-background rounded-lg w-full lg:w-auto overflow-hidden ${menu ? "p-2 h-auto" : "p-0 h-0"} lg:h-auto lg:p-2 transition-all border ${""}`)}><input class="bg-transparent w-full"${attr("value", query)} type="text" name="query" placeholder="Search"/> <button type="submit">`);
    Search($$renderer2, {});
    $$renderer2.push(`<!----></button></form></div> <progress${attr("value", progress.current)} max="10"${attr_class(`${"h-0"} transition-all w-full`)}></progress></nav>`);
  });
}
export {
  Button as B,
  Icon as I,
  Logo as L,
  Navigation as N,
  Search as S,
  cn as c
};
