import { Injectable } from '@angular/core';
import {DataService} from '../services/data-service.service';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'

})
export class WebServiceService {

  public baseUrl = "http://localhost:3000/";

  constructor(private dataService:DataService) { }
  
  organizationSignUp(){
    console.log(this.dataService.organizationDataObject['source']['value']);
    return console.log("Success")

  }
}
