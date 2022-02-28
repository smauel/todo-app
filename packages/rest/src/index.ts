import { json, urlencoded } from 'body-parser'
import express from 'express'
import cors from 'cors'
import { restLogger } from 'logger'

// eslint-disable-next-line import/prefer-default-export
export const createServer = () => {
  const app = express()
  app
    .disable('x-powered-by')
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(restLogger)

  return app
}
