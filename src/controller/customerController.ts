import {FastifyRequest, FastifyReply} from 'fastify'
import { Interface } from 'readline'
import { CustomInspectFunction } from 'util'
import Customer from '../model/model'

export const getAllCustomer = async (req:FastifyRequest, reply:FastifyReply) => {
    try {
        const data = await Customer.findAll()
        reply.status(200)
        reply.send(data)
        
    } 
    catch (error) {
        reply.status(500)
        reply.send(error)
    }
}

export const addCustomer = async (req:FastifyRequest, reply:FastifyReply) => {
  
    let newCustomer : any = req.body

    try {
        const data = await Customer.create(newCustomer)
        reply.status(200)
        reply.send(data)
    } 
    catch (error) {
        reply.status(500)
        reply.send(error)
    }
}

