import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  values = [2, 3, 4, 5, 6];


  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

  constructor() { }

  ngOnInit() {
  }

}
