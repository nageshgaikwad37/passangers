import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passcount',
  templateUrl: './passcount.component.html',
  styleUrls: ['./passcount.component.scss']
})
export class PasscountComponent implements OnInit {
@Input() passcount!:number;
@Input() checkInpass!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
