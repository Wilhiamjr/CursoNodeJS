//import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const consulta = async function () {
  try {
    const allUsers = await prisma.user.findMany({});

    await prisma.$disconnect();

    console.log("Sucesso");

    return allUsers;
  } catch (e) {
    await prisma.$disconnect();

    console.error(e);

    process.exit(1);
  }

  //  console.log('Aqui!!',allUsers)
};
module.exports = consulta;
