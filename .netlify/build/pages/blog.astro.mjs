/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../chunks/astro/server_DMyN52F_.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_bIJIrFiM.mjs';
import { a as $$Main, b as $$H1, $ as $$Layout } from '../chunks/Main_BsKS3veY.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_DCrPzIxo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "width": 600, "height": 600 / 1.5, "alt": post.data.title, "class": "rounded-2xl shadow-xl mb-4 aspect-thumbnail object-cover" })} </a> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-4xl text-zinc-900 font-semibold inline-block"> <h2>${post.data.title}</h2> </a> <p class="text-zinc-500 text-2xl line-clamp-2"> ${post.body} </p> </article>`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/components/Post.astro", void 0);

const $$Astro = createAstro();
const $$PostList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-14 max-md:grid-cols-1 mb-24"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)} </div>`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/components/PostList.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Rhythm Nation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Rhythm Nation Blog" })} ${posts.map((post) => renderTemplate`${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })}`)}` })} ` })}`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/pages/blog.astro", void 0);

const $$file = "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
