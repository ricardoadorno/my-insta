import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  if (await prisma.user.findFirst({ where: { email: 'ricardo@email.com' } }))
    return;

  await prisma.user.create({
    data: {
      name: 'ricardo',
      email: 'ricardo@email.com',
      password: 'password',
    },
  });
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
