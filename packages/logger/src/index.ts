import pino from 'pino'
import pinoHttp from 'pino-http'

const logger = pino()

export const restLogger = pinoHttp()

export default logger
