import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todos/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  todoListArray: Todo[];
  toDo: number;
  done: number;
  all: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getListFromDb().snapshotChanges().subscribe(
      items => {
        const unsortedList = [];
        items.forEach(el => {
          const { payload, key } = el;
          const item = payload.toJSON();
          unsortedList.push({...item, key});
        });
        this.all = unsortedList.length;
        this.done = unsortedList.filter(item => item.isDone === true).length;
        this.toDo = this.all - this.done;
        
      }
    );
  }
  

 

}
