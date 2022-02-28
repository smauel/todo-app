export interface Todo {
  id: number
  name: string
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'DONE'
}
