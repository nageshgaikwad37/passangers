import { Component, Input, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/model';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss']
})
export class PassDetailsComponent implements OnInit {
 @Input() newObj!:Ipass;
 
 public flag:boolean= true;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.flag = ! this.flag
  }
  onedit(event:Event){
    this.newObj.fullname = (<HTMLInputElement>event.target).value
  }
}
