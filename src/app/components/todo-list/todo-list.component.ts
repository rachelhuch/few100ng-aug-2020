import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../../models';
import { TodoDataService } from '../../services/todo-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items$: Observable<TodoListItem[]>;
  hasCompleted$: Observable<boolean>;

  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    this.items$ = this.service.getObservable();
    this.hasCompleted$ = this.service.hasCompleted();
    this.service.getAll();
  }

  markCompleted(item: TodoListItem): void {
    this.service.markComplete(item);
  }

  addItem(item: HTMLInputElement): void {
    const description = item.value;

    item.value = ''; // Clear that sucker out!
    item.focus(); // put the cursor (focus) back in the text box so they can add another
    this.service.addOne(description);
  }

  clearCompleted(): void {
    this.service.clearCompleted();
  }
}
