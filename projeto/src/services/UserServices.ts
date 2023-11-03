import {Prisma, PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

class UserServices {
    constructor(){

    }

    async insertUser(user: Prisma.UserCreateInput) {
        
        const newUser = await prisma.user.create({
            data: user
        }) 
    }
}

export default new UserServices();
