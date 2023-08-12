import { Injectable } from '@angular/core';
import { Todo } from '../modules/todo';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }


  saveTodosLocalStorage(todos:Todo[]){
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodosFromLocalStorage(){
    const todosString=localStorage.getItem('todos');
    return todosString ? JSON.parse(todosString) : null;
  }
}
