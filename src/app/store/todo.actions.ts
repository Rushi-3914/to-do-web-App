import { createAction, props } from "@ngrx/store";
import { Todo } from "../modules/todo";

export const addTodo=createAction('ADD_TODO',props<Todo>()); //action and data->payload

export const updateTodo=createAction('UPDATE_TODO',props<{todoId:string,todo:Todo}>());

export const deleteTodo=createAction('DELETE_TODO',props<{todoId:string}>());