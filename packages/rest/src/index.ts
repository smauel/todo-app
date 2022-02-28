import { json, urlencoded } from 'body-parser'
import express, { Router } from 'express'
import cors from 'cors'
import { restLogger } from 'logger'

export * from 'tsoa'

export type Options = {
  RegisterRoutes: (r: Router) => void
}

// eslint-disable-next-line import/prefer-default-export
export const createServer = ({ RegisterRoutes }: Options) => {
  const app = express()
  app
    .disable('x-powered-by')
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(restLogger)

  RegisterRoutes(app)

  return app
}
