/* eslint-disable class-methods-use-this */
import { Todo } from '../models/todo'

export type TodoCreationParams = Pick<Todo, 'name' | 'status'>

export class TodosService {
  public get(id: number): Todo {
    return {
      id,
      name: 'something something',
      status: 'DONE',
    }
  }

  public create(params: TodoCreationParams): Todo {
    return {
      id: Math.floor(Math.random() * 10000),
      ...params,
    }
  }
}
