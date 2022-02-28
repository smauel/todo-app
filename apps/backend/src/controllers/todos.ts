/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Body, Controller, Get, Path, Post, Route, SuccessResponse } from 'rest'
import { Todo } from '../models/todo'
import { TodoCreationParams, TodosService } from '../services/todosService'

@Route('todos')
export class TodosController extends Controller {
  @Get('{id}')
  public async getTodos(@Path() id: number): Promise<Todo> {
    return new TodosService().get(id)
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createTodo(@Body() body: TodoCreationParams): Promise<void> {
    this.setStatus(201)
    new TodosService().create(body)
  }
}
