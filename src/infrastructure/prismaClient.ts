import { PrismaClient } from "@prisma/client";

const databaseClient = new PrismaClient({
  log: ["error", "info", "warn", "query"],
});


export { databaseClient };
