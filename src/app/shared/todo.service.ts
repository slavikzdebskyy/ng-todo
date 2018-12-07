import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable()
export class TodoService {
  todoList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  getListFromDb() {
    this.todoList = this.db.list('todo');
    console.log('get Todos', this.todoList);
    return this.todoList;
  }

  addToDb(todo: string) {
    console.log('add Todo', todo);

    this.todoList.push({
      todo,
      isDone: false
    });
  }

  updateTodo(key: string, done: boolean) {
    console.log('update Todo', key);
    this.todoList.update(key, {
      isDone: done
    });
  }

  removeTodo(key: string) {
    console.log('remove Todo', key);
    this.todoList.remove(key);
  }
}
