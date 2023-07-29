import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../interfaces/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // NOTE: This is using the proxy.conf.json file to resolve CORS browser issues -> https://stackoverflow.com/questions/66288953/angular-blocked-by-cors-policy-the-access-control-allow-origin-header-conta
  private apiUrl: string = '/api';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
