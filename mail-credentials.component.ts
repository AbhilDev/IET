import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../../services/data-service.service';
import {WebServiceService} from '../../../../../services/web-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mail-credentials',
  templateUrl: './mail-credentials.component.html',
  styleUrls: ['./mail-credentials.component.css']
})
export class MailCredentialsComponent implements OnInit {

  private mailCredentialsData = {};
  constructor(private webService:WebServiceService, private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.mailCredentialsData = this.dataService.organizationDataObject['source']['value'];
  }

  sendEmail(){
    this.dataService.organizationDataObject['source']['value']['email_type']="internal";


    // if(this.dataService.organizationDataObject['source']['value']['tls']==true)
    //   this.dataService.organizationDataObject['source']['value']['tls']="true";
    // else
    //   this.dataService.organizationDataObject['source']['value']['tls']="false";

       this.dataService.organizationDataObject['source']['value']['tls'] = String((this.dataService.organizationDataObject['source']['value']['tls']))


       


    this.webService.organizationSignUp();
  }

  
}
