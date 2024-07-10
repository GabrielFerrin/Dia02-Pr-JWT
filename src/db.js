import { createPool } from 'mariadb'
import { DB, DB_PORT, HOST, PASS, USER } from './config.js'

const pool = createPool({
  host: HOST,
  user: USER,
  password: PASS,
  database: DB,
  port: DB_PORT,
  connectionLimit: 5
})

export default pool