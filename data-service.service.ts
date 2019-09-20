import { Injectable } from '@angular/core';
import 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {

    private organizationData = new BehaviorSubject({
        'user_name':"",
        'email':"",
        'pass':"",
        'imap_host':"",
        'inc_port':"",
        'smtp_host':"",
        'out_port':"",
        'tls':false,
        'email_type':""
      });
    organizationDataObject = this.organizationData.asObservable();
    
  constructor() { }
  
  updateOrganizationData(object) {
    this.organizationData.next(object)
  }


  
}
