import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, o as renderScript, b as createAstro, a as renderComponent, p as renderHead, q as renderSlot } from './astro/server_DMyN52F_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> <a href="/" class="flex items-center gap-x-4"> <img src="/heartbeat.png"${addAttribute(60, "width")}${addAttribute(60, "height")} alt="Heartbeat icon" class="rounded-2xl aspect-thumbnail object-cover"> <p class="uppercase text-3xl text-zinc-900">blog</p> </a> <ul class="flex gap-x-8"> <li><a href="/" class="text-teal-900 font-bold">Home</a></li> <li><a href="/about" class="text-teal-900 font-bold">About</a></li> <li><a href="/blog" class="text-teal-900 font-bold">Blog</a></li> </ul> </header>`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "A community of music producers and enthusiasts", image = "/images/band.jpg" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device=width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image"${addAttribute(image, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>Astro Basics</title>${renderHead()}</head> <body class="min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-teal-900 font-bold mb-16">${text}</h1>`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/components/H1.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-w-7xl mx-auto w-full max-sm:px-5"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/components/Main.astro", void 0);

export { $$Layout as $, $$Main as a, $$H1 as b };
