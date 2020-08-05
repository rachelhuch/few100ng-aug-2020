import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoHome } from 'src/app/models';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoSummary$: Observable<TodoHome>;
  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    this.todoSummary$ = this.service.getDashboard();
  }

}
