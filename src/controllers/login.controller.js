import loginModel from '../models/login.js'

const login = async (req, res) => {
  const response = await loginModel.login(req.body)
  const message = { message: response.message, token: response.token }
  return res.status(response.status).send(message)
}

const veryfy = (req, res) => {
  const { authorization: token } = req.headers
  const response = loginModel.veryfy(token)
  return res.status(response.status).send(response)
}

export default { login, veryfy }