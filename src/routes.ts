import { Router } from "https://deno.land/x/oak/mod.ts";
import { mainHandler } from "./handlers.ts";

export const router = new Router()
  .get("/", mainHandler);
