import type { User, Uuid } from "../types/user.ts";
import { v4 } from "https://deno.land/std@0.77.0/uuid/mod.ts";

//Fake Db Queries
export const findUserById = async (uuid: Uuid): Promise<User> =>
  new Promise((resolve, reject) => {
    if (uuid !== "23ceab21-98e3-42c1-85fa-d28ed3f5afb7") {
      throw new Error("User not found");
    }
    setTimeout(() => {
      resolve({
        uuid,
        name: "Paul",
        birthDate: new Date(),
      });
    }, 50);
  });

export const createUser = async (
  name: string,
  birthDate: Date,
): Promise<User> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        uuid: v4.generate(),
        name,
        birthDate,
      });
    }, 50);
  });
