import dotenv from 'dotenv'
import http from 'http'
import path from 'path'
import * as R from 'ramda'
import app from './app'

const envPath = R.equals(process.env.NODE_ENV, 'production') ? path.join(__dirname, '../.env') : path.join(__dirname, '../.env.development')
dotenv.config({ path: envPath })

console.log(process.env.PORT)
const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
// server.on('listening', onListening)

function normalizePort (val) {
  const normalizedPort = parseInt(val, 10)

  if (isNaN(normalizedPort)) {
    // named pipe
    return val
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort
  }

  return false
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      throw new Error(bind + ' requires elevated privileges')
    case 'EADDRINUSE':
      throw new Error(bind + ' is already in use')
    default:
      throw error
  }
}
