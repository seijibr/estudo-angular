import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';

import { BaseService } from './../../../core/services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private base: BaseService, private tasks: TasksService ) { }

  ngOnInit(): void {
    this.base.hello();

    this.tasks.getTasksAll().subscribe( result => {
      console.log('resultado', result);
    });
  }

}
