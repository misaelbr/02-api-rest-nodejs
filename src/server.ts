import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'
const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(transactionRoutes, {
  prefix: '/transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server started')
  })
