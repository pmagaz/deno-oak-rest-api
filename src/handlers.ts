import { Context } from "https://deno.land/x/oak/mod.ts";

export const findUser = async (ctx: Context) => {
  ctx.response.body = "Find User!";
};

export const updateUser = async (ctx: Context) => {
  ctx.response.body = "Update User!";
};

export const createUser = async (ctx: Context) => {
  ctx.response.body = "Create User!";
};

export const deleteUser = async (ctx: Context) => {
  ctx.response.body = "Delete User!";
};
