import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdpartySignUpComponent } from './thirdparty-sign-up/thirdparty-sign-up.component';
import { InternalServerSignUpModule } from './internal-server-sign-up/internal-server-sign-up.module';



@NgModule({
  declarations: [ThirdpartySignUpComponent],
  imports: [
    CommonModule,
    InternalServerSignUpModule
  ]
})
export class SignUpModule { }
