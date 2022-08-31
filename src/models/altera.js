const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const altera = async (params) => {
  try {
    const allUsers = await prisma.user.update({
      where: {
        name: params.name,
      },
      data: {
        email: params.email,
      },
    });

    await prisma.$disconnect();

    console.log("Alterado com sucesso");

    return allUsers;
  } catch (error) {
    await prisma.$disconnect();

    console.log(error);

    process.exit(1);
  }
};

module.exports = altera;
