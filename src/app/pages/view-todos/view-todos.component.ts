import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/modules/todo';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})

export class ViewTodosComponent implements OnInit{

  todos:Todo[]=[];

  constructor(private store:Store<{todo:Todo[]}>){

  }

  ngOnInit(): void{
    this.store.select('todo').subscribe({
      next:(data)=>{
        this.todos=data
      }
    })
  }


}
