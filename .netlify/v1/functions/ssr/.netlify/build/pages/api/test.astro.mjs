export { renderers } from '../../renderers.mjs';

async function GET() {
  return new Response(
    JSON.stringify({ msg: "Hello" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
const POST = async ({ params, request }) => {
  const body = await request.json();
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
