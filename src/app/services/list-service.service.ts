import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { List } from '../modules/lists/models/list';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }


  getAllLists(){

    return this.http.get<List[]>(`${environment.api_url}/lists`,  {observe: 'response'});

  }

  createList(list:List){

    return this.http.post(`${environment.api_url}/lists`,list,{observe: 'response'});

  }

  updateList(list:List){

    return this.http.put(`${environment.api_url}/lists`,list,{observe: 'response'});

  }

  deleteList(list:List){

    return this.http.delete<List[]>(`${environment.api_url}/lists/${list.id}`, {observe: 'response'});

  }

  deleteAllLists(){

    return this.http.delete<List[]>(`${environment.api_url}/lists`, {observe: 'response'});

  }


}
