import Fastify, { fastify } from "fastify"
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)


app.get('/', async (request, reply) => {
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

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err)
  }

  console.log(`Server is listen on ${address}`)
})