import { Context } from "https://deno.land/x/oak/mod.ts";

export const mainHandler = async (ctx: Context) => {
  ctx.response.body = "Create User!";
};
