import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../interfaces/Task';

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
}
