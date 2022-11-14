import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassdashbordComponent } from './passdashbord/passdashbord.component';
import { PassService } from '../service/pass.service';
import { PasscountComponent } from './passdashbord/passcount/passcount.component';
import { PassDetailsComponent } from './passdashbord/pass-details/pass-details.component';



@NgModule({
  declarations: [
    PassdashbordComponent,
    PasscountComponent,
    PassDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PassdashbordComponent],
  providers:[PassService]

})
export class PassangerModule { }
