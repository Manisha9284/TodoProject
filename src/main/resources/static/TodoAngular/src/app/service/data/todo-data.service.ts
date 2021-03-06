import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient 
  ) { }

   retriveAllTodos(username){
    return  this.http.get<Todo []>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    // console.log("Execute Hello World Bean Service");
    
  }

  deleteTodo(username, id){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

   retriveTodo(username, id){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

   updateTodo(username, id, todo){
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
}
