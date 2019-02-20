import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
url: string = "http://localhost:3000/movies"
  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get<any>(this.url);
  }
  post(item: any){
    return this.httpClient.post<any>(this.url, item);
  }
  put(item: any, id: number){
    return this.httpClient.put<any>(this.url+"/"+id, item);
  }
  delete(id: number){
    return this.httpClient.delete<any>(this.url+"/"+id);
  }
}

