import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  values = [];


  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
    this.values = f.value;
    console.log(this.values);
  }

  clearValues(){
    this.values = [];
    console.log(this.values);

  }

  constructor() { }

  ngOnInit() {
  }

}
