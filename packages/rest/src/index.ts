import { json, urlencoded } from 'body-parser'
import express from 'express'
import cors from 'cors'

// eslint-disable-next-line import/prefer-default-export
export const createServer = () => {
  const app = express()
  app
    .disable('x-powered-by')
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())

  return app
}
