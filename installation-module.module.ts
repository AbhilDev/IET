import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { InstallationModuleRoutingModule } from './installation-module-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstallationModuleRoutingModule,
    AuthenticationModule,
    RouterModule
  ]
})
export class InstallationModuleModule { }
