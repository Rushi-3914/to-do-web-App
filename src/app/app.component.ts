import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HelperService } from './services/helper.service';
import { Todo } from './modules/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'To-Do-App';


  constructor(
    private store: Store<{todo:Todo[]}>,
    private helper: HelperService
  ) {}


  ngOnInit(){
    this.store.select('todo').subscribe({
      next: (todos) => {
        this.helper.saveTodosLocalStorage(todos);
      }
    })
  }

}
