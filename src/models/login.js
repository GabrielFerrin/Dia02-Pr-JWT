import db from '../db.js'
import { SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

const login = async (body) => {
  const { username, password } = body
  if (!username || !password)
    return { status: 400, message: 'Invalid entries. Try again.' }
  let conn = null
  try {
    conn = await db.getConnection()
    const query = `SELECT * FROM login WHERE username = ?`
    const response = await conn.query(query, [username])
    if (response.length === 0)
      return { status: 401, message: 'Invalid entries. Try again.' }
    if (response[0].hash !== password)
      return { status: 401, message: 'Invalid entries. Try again.' }
    const token = jwt
      .sign({ id: response[0].user_id }, SECRET, { expiresIn: '60s' })
    return { status: 200, message: 'Logged in!!!', token }
  } catch (error) {
    return { status: 500, message: error.stack }
  } finally {
    if (conn) conn.end()
  }
}

const veryfy = (token) => {
  if (!token)
    return { status: 401, message: 'Invalid session. Try again.' }
  try {
    const decoded = jwt.verify(token, SECRET)
    if (!decoded)
      return { status: 401, message: 'Invalid session. Try again.' }
    return { status: 200, message: 'Session verified', decoded }
  } catch (error) {
    if (error.name === 'TokenExpiredError')
      return { status: 401, message: 'Expired session. Login again.' }
    return { status: 401, message: 'Invalid session. Try again.' }
  }
  return jwt.verify(token, SECRET)
}

export default { login, veryfy }