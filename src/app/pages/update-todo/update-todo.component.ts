import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/modules/todo';
import { updateTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})

export class UpdateTodoComponent implements OnInit{


constructor(private activatedRoute:ActivatedRoute,private store:Store<{todo:Todo[]}>){}

  todo:Todo | undefined=new Todo()

  ngOnInit(): void{
   const todoId= this.activatedRoute.snapshot.paramMap.get('todoId');
  //  fist we get single todo
  this.store.select('todo').subscribe({
    next:(data)=>{
      let todo=data.find((todo)=>todo.id==todoId); //temp
      console.log(this.todo);

      this.todo=new Todo(
        todo?.id,
        todo?.title,
        todo?.content,
        todo?.status,
        todo?.addedDate
        )
    }
  })

  }

  updateFormSubmited(event:SubmitEvent){
    event.preventDefault();

    // update action dispatch
    this.store.dispatch(updateTodo({
      todoId:this.todo!.id,
      todo:{
        id:this.todo!.id,
        title:this.todo!.title,
        content:this.todo!.content,
        status:this.todo!.status,
        addedDate:this.todo!.addedDate
      }
    }))

    alert("Todo Updated Successfully....")

  }

  // !-> non null assertion operator....
  // ?->optional



}
