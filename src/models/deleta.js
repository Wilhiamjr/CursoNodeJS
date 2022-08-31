//import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Delete = async function (params) {
  const result = await prisma.user.delete({
      where: {
        name: params,
      },
    })
    .then(async (res) => {
      await prisma.$disconnect();

      //return console.log("Deletado com sucesso");
      return res;
    })
    .catch(async (e) => {
      await prisma.$disconnect();

      console.error(e);

      process.exit(1);
    });
  return result;
};

module.exports = Delete;
