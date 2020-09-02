import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user-management-component/user';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private env: EnvService) { }

  getAllUsers(): Observable<Array<User>> {
   return this.http.get<Array<User>>(this.env.apiUrl+'task-mgr/userMgr/listUsers/');
  }

  getUser(userId: string): Observable<User> {
    const params = new HttpParams()
    .set('id', userId);
    return this.http.get<User>(this.env.apiUrl+'task-mgr/userMgr/viewUser/' + userId);
  }

  postUser(user: User) {
    this.http.post(this.env.apiUrl+'task-mgr/userMgr/addUser', user).subscribe();
  }

  updateUser(user: User) {
    const params = new HttpParams()
    .set('id', user.id);
    this.http.put(this.env.apiUrl+'task-mgr/userMgr/updateUser', user).subscribe();
  }

  deleteUser(userId: string) {
    const params = new HttpParams()
    .set('id', userId);
    return this.http.delete(this.env.apiUrl+'task-mgr/userMgr/deleteUser/' + userId + '').subscribe();
  }
}
