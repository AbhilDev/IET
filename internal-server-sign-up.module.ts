import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MailCredentialsComponent } from './mail-credentials/mail-credentials.component';
import { InternalServerSignUpRoutingModule } from './internal-server-sign-up-routing.module';
import { FormsModule } from '@angular/forms';
import {WebServiceService} from '../../../../services/web-service.service';
import { DataService} from '../../../../services/data-service.service';
import { OrganizationDataComponent } from './organization-data/organization-data.component'

@NgModule({
  declarations: [SignUpFormComponent, MailCredentialsComponent, OrganizationDataComponent],
  imports: [
    CommonModule,
    InternalServerSignUpRoutingModule,
    FormsModule
  ],
  exports: [
    SignUpFormComponent
  ],
  providers:[WebServiceService,DataService]

})
export class InternalServerSignUpModule { }
