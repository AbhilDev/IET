import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../../services/data-service.service';
import {WebServiceService} from '../../../../../services/web-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-data',
  templateUrl: './organization-data.component.html',
  styleUrls: ['./organization-data.component.css']
})
export class OrganizationDataComponent implements OnInit {

  private organizationData = {};
  constructor() { }

  ngOnInit() {
  }

}
