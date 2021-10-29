import { Component, OnInit } from '@angular/core';

interface Task {
  id : number
  name: string
  status: string
  isActive: boolean
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  taskList: Task[] = [{
    id: 1,
    name: 'learn Typescript',
    status: 'done',
    isActive: false
  },{
    id: 2,
    name: 'learn Angular',
    status: 'in progress',
    isActive: true
  },{
    id: 3,
    name: 'learn webpack',
    status: 'todo',
    isActive: false
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
