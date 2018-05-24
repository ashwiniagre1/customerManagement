/**
 * Created by: MetaMagic
 * Date: 24/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'customerregisteration',
  templateUrl: 'customerregisteration.component.html'
})
export class CustomerregisterationComponent implements OnInit{
  customerregisterationModel:CustomerregisterationModel;
        typeaheadData:any; 
  constructor(private http: HttpClient) {
    this.customerregisterationModel=new CustomerregisterationModel();
     	 	this.typeaheadData={"data":[{"companyId":"1","companyName":"ABC"},{"companyId":"2","companyName":"companyone"},{"companyId":"3","companyName":"metamagic"},{"companyId":"4","companyName":"betamagic"}]};
	  }
        onClick_Company(eventData:any){} 
    ngOnInit(){
 	  }
 	 	

   
}
export class CustomerregisterationModel{
  Company: string; }
