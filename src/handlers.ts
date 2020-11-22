import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import type { User } from "./types.ts";
import * as db from "./db.ts";

export const findUser = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  try {
    let user: User = await db.findUserById(userId);
    ctx.response.status = 200;
    ctx.response.body = user;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const createUser = async (ctx: Context) => {
  const { name, birthDate } = await ctx.request.body().value;
  try {
    let createdUser: User = await db.createUser(name, birthDate);
    ctx.response.status = 200;
    ctx.response.body = createdUser;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};

export const updateUser = async (ctx: Context) => {
  ctx.response.status = 200;
  ctx.response.body = { msg: "User updated!" };
};

export const deleteUser = async (ctx: Context) => {
  ctx.response.status = 200;
  ctx.response.body = { msg: "User deleted!" };
};
