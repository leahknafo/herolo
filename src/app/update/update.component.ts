import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private mainService: MainService, private router: Router, private crudService: CrudService) { }

  ngOnInit() {
  }
  updateData() {
    this.crudService.put(this.mainService.currentMovie, this.mainService.movieID)
      .subscribe(
        res =>{
          this.mainService.currentMovie = {
            title: "",
            year: "",
            runtime: "",
            genre: "",
            director: ""
          }
          this.mainService.movieID=null;
          this.router.navigate(['/read']);
        },
        err=>{console.log("error")}
      )
}
     
cancelUpdating(){
  this.router.navigate(['/read']);
}
}
