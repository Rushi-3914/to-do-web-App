import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/modules/todo';
import { deleteTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit{
todo: Todo | undefined;

constructor(private store:Store<{todo:Todo[]}>,private activatedRoute:ActivatedRoute){}
// @Input() singleTodo:Todo=new Todo();

ngOnInit(): void{
  let todoId=this.activatedRoute.snapshot.paramMap.get('todoId')

  this.store.select('todo').subscribe({
    next:(todos)=>{
      this.todo=todos.find((todo)=>todo.id==todoId)
    }
  })
}


deleleteMyTodo(todoId:string){
  let ans= confirm("Do you want to delete?..")
   if(ans){
     this.store.dispatch(deleteTodo({todoId:todoId}))
   }
 }

}
