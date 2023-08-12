import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/modules/todo';
import { addTodo } from 'src/app/store/todo.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit{

  todo=new Todo();

  // store:Todo[]=[];
  todos:Todo[]=[]


  ngOnInit(): void{
    this.store.select('todo').subscribe({
      // using subscribe we return the data
      next:(data)=>{
        this.todos=data
      }
    })
  }

  constructor(private store:Store<{'todo':Todo[]}>){}

  formSubmited(event:SubmitEvent){

    event.preventDefault();

    this.todo.id=uuidv4()
    console.log(this.todo);
    // this.store.push(this.todo);
    this.store.dispatch(addTodo(this.todo));

    alert("Todo Added Successfully.....")

    this.todo=new Todo();
  }
}
