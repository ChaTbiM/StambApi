const { PrismaClient, Prisma } = require('@prisma/client');


const prisma = new PrismaClient()



module.exports = {prismaClient:prisma}