import { Injectable } from '@angular/core';

import { Task } from './task-manager-component/task';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Array<Task>> {
   // const params = new HttpParams()
   // params.append('task', 'tasl');
   // params.append('parentTask', 'tasl');
   // params.append('startPriority', '');
   // params.append('endPriority', '');
   // params.append('startDate', '');
   // params.append('endDate', '');
   const params = new HttpParams({
    fromObject: {
      task: '',
      parentTask: '',
      startPriority: '',
      endPriority: '',
      startDate: '',
      endDate: '',
    }
  });
   return this.http.get<Array<Task>>('http://localhost:8080/task-mgr/taskMgr/listTasks/' , {params: params});
  }

  getTask(title: string): Observable<Task> {
    const params = new HttpParams()
    .set('id', title);
    return this.http.get<Task>('http://localhost:8080/task-mgr/taskMgr/viewTask/' + title);
  }

  postTask(task: Task) {
    console.log('add task');
    this.http.post('http://localhost:8080/task-mgr/taskMgr/addTask', task).subscribe();
  }

  updateTask(task: Task) {
    console.log('update task');
    const params = new HttpParams()
    .set('id', task.id);
    this.http.put('http://localhost:8080/task-mgr/taskMgr/updateTask', task).subscribe();
  }

  deleteTask(title: string) {
    const params = new HttpParams()
    .set('id', title);
    return this.http.delete('http://localhost:8080/task-mgr/taskMgr/deleteTask/' + title + '').subscribe();
  }
}