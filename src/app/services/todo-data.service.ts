import { TodoListItem, TodoHome } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { computeDigest } from '@angular/compiler/src/i18n/digest';
import * as cuid from 'cuid';
import { map } from 'rxjs/operators';
export class TodoDataService {

  private items: TodoListItem[] = [
    { id: cuid(), description: 'Clean Gutters', completed: false },
    { id: cuid(), description: 'Sell old music gear', completed: false }, // This will NEVER be completed
    { id: cuid(), description: 'Build Shelves', completed: true }
  ];
  private subject = new BehaviorSubject<TodoListItem[]>(this.items);
  getAll(): void {
    // make the api call, get the data. add it to the list of items.
    // Fake it!

    this.subject.next(this.items);
  }

  getObservable(): Observable<TodoListItem[]> {
    return this.subject.asObservable();
  }
  addOne(description: string): void {
    // TODO: Send it to the API, wait for the response.
    this.items = [{
      id: cuid(),
      description,
      completed: false
    }, ...this.items];

    this.subject.next(this.items);
  }

  markComplete(item: TodoListItem): void {
    const foundItem = this.items.find(i => i.id === item.id);
    if (foundItem) {
      foundItem.completed = true;
      this.subject.next(this.items);
    }
  }

  hasCompleted(): Observable<boolean> {
    return this.subject.pipe( // [{TodoListItem}, {TodoListItem}]
      map(items => items.some(i => i.completed)) // true | false
    );
  }

  clearCompleted(): void {
    // do the api stuff or whatever.
    this.items = this.items.filter(item => item.completed === false);
    this.subject.next(this.items);
  }

  getDashboard(): Observable<TodoHome> {
    return this.subject.pipe(
      map(items => {
        return {
          total: items.length,
          incomplete: items.filter(i => !i.completed).length,
          completed: items.filter(i => i.completed).length
        } as TodoHome;
      })
    );
  }
}
