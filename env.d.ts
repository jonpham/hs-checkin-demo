import { PrismaClient } from "@prisma/client";

declare global {
    interface global extends Global { 
        prisma: PrismaClient
    }
}