import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  const roles = [
    { id: uuidv4(), name: 'Admin', description: 'Administrator role with full access' },
    { id: uuidv4(), name: 'Passenger', description: 'Passenger role with limited access' },
    { id: uuidv4(), name: 'Train Operator', description: 'Role responsible for operating trains' },
    { id: uuidv4(), name: 'Ticket Booth Attendant', description: 'Role responsible for managing the ticket booth' },
    { id: uuidv4(), name: 'Maintenance Technician', description: 'Role responsible for train maintenance' },
  ];

  for (const role of roles) {
    await prisma.role.create({
      data: role,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
