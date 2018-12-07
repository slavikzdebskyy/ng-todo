import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() item: Todo;
  @Output() updateTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<string>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  update(item) {
    const itemToUpdate = {...item};
    this.updateTodo.emit(itemToUpdate);
  }

  delete(key: string) {
    this.deleteTodo.emit(key);
  }
}
