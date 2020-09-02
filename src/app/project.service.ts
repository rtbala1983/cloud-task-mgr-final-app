import { Injectable } from '@angular/core';
import { Project } from './project-management-component/project';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient, private  env: EnvService 
   ) { }

  getAllProjects(): Observable<Array<Project>> {
   return this.http.get<Array<Project>>(this.env.apiUrl+'task-mgr/projectMgr/listProjects/');
  }

  getProject(projectId: string): Observable<Project> {
    const params = new HttpParams()
    .set('id', projectId);
    return this.http.get<Project>(this.env.apiUrl+'task-mgr/projectMgr/viewProject/' + projectId);
  }

  postProject(project: Project) {
    this.http.post(this.env.apiUrl+'task-mgr/projectMgr/addProject', project).subscribe();
  }

  updateProject(project: Project) {
    const params = new HttpParams()
    .set('id', project.id);
    this.http.put(this.env.apiUrl+'task-mgr/projectMgr/updateProject', project).subscribe();
  }

  deleteProject(projectId: string) {
    const params = new HttpParams()
    .set('id', projectId);
    return this.http.delete(this.env.apiUrl+'task-mgr/projectMgr/deleteProject/' + projectId + '').subscribe();
  }
}
