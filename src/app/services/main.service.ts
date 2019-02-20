import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currentMovie={
    title:"",
    year: "",
    runtime: "",
    genre: "",
    director: ""
  }
  movieID: number=null;

  constructor() { }
}
