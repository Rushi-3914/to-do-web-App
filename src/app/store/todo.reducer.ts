import { createReducer ,on} from "@ngrx/store";
import { Todo } from "../modules/todo";
import { addTodo, deleteTodo, updateTodo } from "./todo.actions";
// import { state } from "@angular/animations";

const todosString=localStorage.getItem('todos');
const initialstate:Todo[]=todosString? JSON.parse(todosString):[];

// Save the initial state to localStorage (if it was not available before)
// if (!todosString) {
//     localStorage.setItem('todos',JSON.stringify(initialstate));
//   }


export const todoReducer=createReducer(
    initialstate,
    on(addTodo,(state,payload)=>{

        console.log("add todo action fired..")
        console.log(payload);
        // we cant chanege the state
        return [...state,payload];
    }),
    on(deleteTodo,(state,payload)=>{
        const newTodo=state.filter((todo)=>todo.id != payload.todoId);
        return newTodo;
    }),
    on(updateTodo,(state,payload)=>{
        
        console.log("updating todo......")
      const newList=state.map((todo)=>{
            if(todo.id==payload.todoId){
                // update and return
            
                return new Todo(
                    payload.todo.id,
                    payload.todo.title,
                    payload.todo.content,
                    payload.todo.status,
                    payload.todo.addedDate
                );
            }
            else{
                return todo;
            }
        })
        return newList;
    }),
  


)
