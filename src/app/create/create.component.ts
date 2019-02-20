import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CrudService} from '../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
currentMovie={
  title:"",
  year: "",
  runtime: "",
  genre: "",
  director: ""
}
  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit() {
  
  }
  saveData(){
    this.crudService.post(this.currentMovie)
    .subscribe(
      res=>{
        this.router.navigate(['/read']);   
      },
      err=>{console.log("error")}
    )
  }
  cancel(){
    this.router.navigate(['/read']);
  }
}
