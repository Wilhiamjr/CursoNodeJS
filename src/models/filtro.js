const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const filtro = async function (params) {
  const allUsers = await prisma.user.findUnique({
      where: {
        email: params,
      },
    })
    .then(async () => {
      await prisma.$disconnect();

      console.log("Sucesso");

      return allUsers;
    })
    .catch(async (e) => {
      await prisma.$disconnect();

      console.error(e);

      process.exit(1);
    });

  //  console.log('Aqui!!',allUsers)
};

module.exports = filtro;
