import { PrismaClient } from "@prisma/client";

let db = PrismaClient;

var __db = undefined;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
  db.$connect();
} else {
  if (!__db) {
    __db = new PrismaClient();
    __db.$connect();
  }
  db = __db;
}

export { db };
