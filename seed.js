const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@ibda3.com';
  const plainPassword = 'admin';

  const existingAdmin = await prisma.admin.findUnique({ where: { email } });
  
  if (existingAdmin) {
    console.log('Admin already exists! You can login with admin@ibda3.com and your password.');
    return;
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  
  await prisma.admin.create({
    data: {
      email,
      password: hashedPassword
    }
  });

  console.log('Admin created successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
