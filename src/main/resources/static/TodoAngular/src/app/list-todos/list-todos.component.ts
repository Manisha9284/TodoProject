import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
      public id:number,
      public description:string,
      public done:boolean,
      public targetDate:Date
  )
  {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
 
  todos: Todo[];
  message: String;
  //=[
  //   new Todo(1,'Learn to Dance', false, new Date()),
  //   new Todo(2,'Learn and Execute', false, new Date()),
  //   new Todo(3,'Visit India', false, new Date()),
  // {id:1,description:' Learn to Dance'},
  //          {id:2, description:'Learn and Execute'},
  //          {id:3, description:'Visit India'}   
//]


   

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retriveAllTodos('manisha').subscribe(
    response =>{
        console.log(response);
        this.todos = response;
        
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('manisha', id).subscribe(
      response=>{
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  UpdateTodo(id){
    console.log(`update todo ${id}`);
      this.router.navigate(['todos', id])
    
  }

   AddTodo(){
      this.router.navigate(['todos', -1])
    
  }
}
