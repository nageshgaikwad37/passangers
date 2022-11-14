import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/model';
import { PassService } from 'src/app/service/pass.service';

@Component({
  selector: 'app-passdashbord',
  templateUrl: './passdashbord.component.html',
  styleUrls: ['./passdashbord.component.scss']
})
export class PassdashbordComponent implements OnInit {
  passCount!:Ipass[];
  checkInpass!:number;
  constructor(private passanger:PassService) { }

  ngOnInit(): void {
  console.log(this.passanger.passengers);
  this.passCount= this.passanger.passengers
  this.checkInpass = this.passanger.passengers.filter(pass => pass.checkedIn).length
  
  }
  onRemove(eve:number){
    this.passCount.forEach((ele, index) =>{
      if(ele.id === eve){
        this.passCount.splice(index,1)
      }
    })
  this.checkInpass = this.passanger.passengers.filter(pass => pass.checkedIn).length

  }

}
