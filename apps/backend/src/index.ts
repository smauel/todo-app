import { createServer } from 'rest'
import { RegisterRoutes } from './routes'

const port = process.env.PORT || 3000
const server = createServer()

RegisterRoutes(server)

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`backend running on port ${port}`)
})
