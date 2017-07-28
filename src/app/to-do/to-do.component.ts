import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos: string[];

  constructor() {
    this.todos = ["Do laundry"];
  }

  ngOnInit() {
  }

  deleteToDo(i: any){
    this.todos.splice(i,1);
  }

  addToDo(todo: string){
    if(todo){
      this.todos.push(todo);
    }
  }

}
