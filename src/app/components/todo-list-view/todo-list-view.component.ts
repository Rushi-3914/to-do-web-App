import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/modules/todo';
import { deleteTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent {
  @Input() singleTodo:Todo=new Todo();

  constructor(private store:Store<{todo:Todo[]}>){}


  deleteMyTodo(todoId:string){
   let ans= confirm("Do you want to delete?..")
    if(ans){
      this.store.dispatch(deleteTodo({todoId:todoId}))
    }
  }

}
