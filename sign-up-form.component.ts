import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../../../services/data-service.service';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
  providers:[]
})
export class SignUpFormComponent implements OnInit {

  private signUpFormData = {}
  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit() {
    this.signUpFormData = this.dataService.organizationDataObject['source']['_value'];
  }

  goToMailCredentials(){
    this.router.navigate(['/signup/mailcredentials'])
  }
}
