import { Application } from "https://deno.land/x/oak/mod.ts";
import { Context, Router } from "https://deno.land/x/oak/mod.ts";

const port = 8000;
const router = new Router();
const app = new Application();
app.use(router.routes());

router.get("/", (context: Context) => {
  context.response.body = "Hello world!";
});

console.log(`Server up on port ${port}`);

await app.listen({ port });
