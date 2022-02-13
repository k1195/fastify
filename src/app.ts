import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import routes from './route/router'
require('dotenv').config();
require('./service/seqConn')

const server: FastifyInstance = Fastify({})


routes.forEach((route:any) => {
    server.route(route)
})

const start = async () => {
    try {
      const PORT = process.env.PORT || 3000
      await server.listen(PORT)
      console.log("Connected to Port" , PORT)
    } catch (err) {
      server.log.error(err)
      process.exit(1)
    }
  }
  start()