import { createServer } from 'rest'
import logger from 'logger'
import { RegisterRoutes } from './routes'

const port = process.env.PORT || 3000
const server = createServer({ RegisterRoutes })

server.listen(port, () => {
  logger.info(`backend running on port ${port}`)
})
