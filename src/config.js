import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const HOST = process.env.HOST
export const USER = process.env.USER
export const PASS = process.env.PASS
export const DB = process.env.DB
export const DB_PORT = process.env.DB_PORT
export const SECRET = process.env.JWT