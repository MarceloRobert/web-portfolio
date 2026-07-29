import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({url: "file:./prisma/db/dev.db"});

export const prisma = new PrismaClient({ adapter });

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@email.com" },
    update: {},
    create: {
      username: "alice",
      name: "Alice",
      email: "alice@email.com",
      password: "alice123",
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@email.com" },
    update: {},
    create: {
      username: "bob",
      name: "Bob",
      email: "bob@email.com",
      password: "bob123",
      projects: {
        create: [
          {
            title: "My First Project",
            description: "This is my first project."
          }
        ]
      },
    },
  });
  console.log({ alice, bob });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
