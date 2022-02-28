import { createServer } from 'rest'

const port = process.env.PORT || 3000
const server = createServer()

server.get('/todos', (req, res) =>
  res.json({ todos: [{ name: 'setup repo', status: 'IN_PROGRESS' }] })
)

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`backend running on port ${port}`)
})
