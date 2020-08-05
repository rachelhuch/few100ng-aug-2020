import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'tip-calculator',
    component: TipCalculatorComponent
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
