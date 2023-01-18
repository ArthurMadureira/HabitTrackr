import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance) {
  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const habit = await prisma.habit.findMany({
      where: {
        title: {
          startsWith: 'Beber'
        }
      },
      select: {
        title: true
      }
    })

    return reply.code(200).send(habit)
  })

}