/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DMyN52F_.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Main, b as $$H1 } from '../../chunks/Main_BsKS3veY.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DCrPzIxo.mjs';
import { g as getEntryBySlug } from '../../chunks/_astro_content_bIJIrFiM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("posts", slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": post.data.title })} ${renderComponent($$result3, "Image", $$Image, { "src": post.data.image, "width": 1024, "height": 1024 / 1.5, "alt": post.data.title, "class": "rounded-2xl shadow-xl mb-4 aspect-thumbnail object-cover" })} ${maybeRenderHead()}<div class="prose prose-2xl overflow-visible relative mb-20"> ${renderComponent($$result3, "Content", Content, {})} </div> ` })} ` })}`;
}, "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/duddn/Documents/GIT/Dec 30/Astro.APDTryTwo/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
