import { Router } from "https://deno.land/x/oak/mod.ts";
import { createUser, deleteUser, findUser, updateUser } from "./handlers.ts";

export const router = new Router()
  .get("/api/users/:userId", findUser)
  .delete("/api/users/:userId", deleteUser)
  .patch("/api/users", updateUser)
  .post("/api/users", createUser);
