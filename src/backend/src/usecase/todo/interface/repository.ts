import { Maybe, CreateTodoRequest } from 'schema/types';
import { TodoEntity } from 'domain-model/src/todo/TodoEntity';

export interface TodoRepository {
  getById(id: string): Promise<Maybe<TodoEntity>>;

  create(input: CreateTodoRequest): Promise<TodoEntity>;
  update(input: TodoEntity): Promise<TodoEntity>;
}