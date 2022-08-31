//import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const gravar = async function (data) {
  await prisma.user.create({
      data: {
        name: data.nome,

        email: data.Email,
      },
    })
    .then(async () => {
      await prisma.$disconnect();

      return console.log("Gravado com sucesso");
    })
    .catch(async (e) => {
      await prisma.$disconnect();

      console.error(e);

      process.exit(1);
    });
};

module.exports = gravar;
