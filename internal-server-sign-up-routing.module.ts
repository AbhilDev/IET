import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MailCredentialsComponent } from './mail-credentials/mail-credentials.component';
import { OrganizationDataComponent } from './organization-data/organization-data.component';

const routes: Routes = [
    {
        path:'',
        component:SignUpFormComponent
    },
    {
      path:'mailcredentials',
      component:MailCredentialsComponent
    },
    {
      path:'organizationdata',
      component:OrganizationDataComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalServerSignUpRoutingModule { }
