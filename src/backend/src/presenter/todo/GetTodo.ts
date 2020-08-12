import { Maybe, Todo } from 'schema/types';
import { TodoEntity } from 'domain-model/src/todo/TodoEntity';

import { GetTodoPresenter as GetTodoPresenterIF } from '../../usecase/todo/presenter.interface';

export class GetTodoPresenter implements GetTodoPresenterIF {
  private response: Maybe<Todo> = null;

  public getResponse(): Maybe<Todo> {
    return this.response;
  }

  public async output(userEntity: Maybe<TodoEntity>) {
    this.response = userEntity ? userEntity.toJSON() : null;
  }
}
