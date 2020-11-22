import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

import { router } from "./routes.ts";
import { logger } from "./middleware.ts";

const { PORT } = config();
const app = new Application();

app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server up on port ${PORT}`);

await app.listen({ port: Number(PORT) });
