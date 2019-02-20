import { Component, OnInit } from '@angular/core';
import { CrudService} from '../services/crud.service';
import { MainService} from '../services/main.service';
import { Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
movies=[];
  constructor(private crudService: CrudService, private router: Router, private mainService: MainService) { }

  ngOnInit() {
    this.crudService.get()
    .subscribe(
      res=>this.movies = res,
      err=>{console.log("error")}
    )
  }
  bringCreateComponent(){
    this.router.navigate(['/create']);
  }
bringUpdateComponent(movie: any){
  this.mainService.currentMovie.title=movie.title;
  this.mainService.currentMovie.year=movie.year;
  this.mainService.currentMovie.runtime=movie.runtime;
  this.mainService.currentMovie.genre=movie.genre;
  this.mainService.currentMovie.director=movie.director;
  this.mainService.movieID=movie.id;
  this.router.navigate(['/update'])
}
delete(movieId: number){
  this.crudService.delete(movieId)
  .subscribe(
    res =>{this.ngOnInit()},
    err=>{console.log("error")}
  )
}
}
