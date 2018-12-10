import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../todos/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit { 
  todoListArray: Todo[];

  constructor(private todoService: TodoService) { }

  @ViewChild('addTodoForm')
  newTodoItemInForm: NgForm;
  
  ngOnInit() {
    this.todoService.getListFromDb().snapshotChanges().subscribe(
      items => {
        const unsortedList = [];
        items.forEach(el => {
          const { payload, key } = el;
          const item = payload.toJSON();
          unsortedList.push({...item, key});
        });
        this.todoListArray = this.sortTodoList(unsortedList);
        console.log('Todos', this.todoListArray);
      }
    );
  }

  sortTodoList(list: any[]): any[] {
    if (list.length) {
      return list.sort((a, b) => a.isDone - b.isDone);
    }
  }

  addTodo(todoTitle) {
    console.log('TODO =>', todoTitle )
    this.todoService.addToDb(todoTitle.value);
    todoTitle.value = null;
  }

  update(todo: Todo) {
    this.todoService.updateTodo(todo.key, !todo.isDone);
  }

  remove(key: string) {
    this.todoService.removeTodo(key);
  }
}
