import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user-management-component/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Array<User>> {
   return this.http.get<Array<User>>('http://localhost:8080/task-mgr/userMgr/listUsers/');
  }

  getUser(userId: string): Observable<User> {
    const params = new HttpParams()
    .set('id', userId);
    return this.http.get<User>('http://localhost:8080/task-mgr/userMgr/viewUser/' + userId);
  }

  postUser(user: User) {
    this.http.post('http://localhost:8080/task-mgr/userMgr/addUser', user).subscribe();
  }

  updateUser(user: User) {
    const params = new HttpParams()
    .set('id', user.id);
    this.http.put('http://localhost:8080/task-mgr/userMgr/updateUser', user).subscribe();
  }

  deleteUser(userId: string) {
    const params = new HttpParams()
    .set('id', userId);
    return this.http.delete('http://localhost:8080/task-mgr/userMgr/deleteUser/' + userId + '').subscribe();
  }
}
