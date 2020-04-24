import { BaseHttpService } from './../../core/services/base-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private baseHttp: BaseHttpService) { }

  public getTasksAll() {
    return this.baseHttp.get('tasks');
  }

}
