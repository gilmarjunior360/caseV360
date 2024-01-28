import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Task } from '../modules/tasks/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }


  getAllTasks(id:Number){

    return this.http.get<Task[]>(`${environment.api_url}/tasks/${id}`,  {observe: 'response'});

  }

  createTask(task:Task){

    return this.http.post<Task>(`${environment.api_url}/tasks`,task,{observe: 'response'});

  }

  updateTask(task:Task){

    return this.http.put<Task>(`${environment.api_url}/tasks`,task,{observe: 'response'});

  }

  deleteTask(task:Task){

    return this.http.delete<Task>(`${environment.api_url}/tasks/${task.id}`, {observe: 'response'});

  }
  
  deleteAllTasks(list_id:Number){

    return this.http.delete<Task>(`${environment.api_url}/tasks/list/${list_id}`, {observe: 'response'});

  } 


}
