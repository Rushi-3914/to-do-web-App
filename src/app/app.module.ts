import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { TodoListViewComponent } from './components/todo-list-view/todo-list-view.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewTodosComponent,
    ViewTodoComponent,
    UpdateTodoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TodoListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({
      'todo':todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
