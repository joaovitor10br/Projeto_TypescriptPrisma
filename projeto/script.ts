import { PrismaClient } from '@prisma/client'
import UserServices from './src/services/UserServices'

const prisma = new PrismaClient()

async function main() {
 UserServices.insertUser({email: 'joaovitor@gmail.com'})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
