import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdpartySignUpComponent } from './installation-module/authentication/sign-up/thirdparty-sign-up/thirdparty-sign-up.component';


const routes: Routes = [
  {
    path:"signup",
    loadChildren: () => import('./installation-module/authentication/sign-up/internal-server-sign-up/internal-server-sign-up.module').then(mod => mod.InternalServerSignUpModule)
  },
  {
    path:"",
    component:ThirdpartySignUpComponent
    // loadChildren: () => import('./installation-module/authentication/sign-up/internal-server-sign-up/internal-server-sign-up.module').then(mod => mod.InternalServerSignUpModule)
  },
  {
    path:'signup/mailcredentials',
    loadChildren: () => import('./installation-module/authentication/sign-up/internal-server-sign-up/internal-server-sign-up.module').then(mod => mod.InternalServerSignUpModule)    
  },
  {
    path:'signup/organizationdata',
    loadChildren:() => import('./installation-module/authentication/sign-up/internal-server-sign-up/internal-server-sign-up.module').then(mod => mod.InternalServerSignUpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
