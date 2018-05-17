/**
 * Created by: MetaMagic
 * Date: 17/05/2018
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
        dropdownData:any; 
  constructor(private http: HttpClient) {
    this.customerregisterationModel=new CustomerregisterationModel();
     	 	this.dropdownData=[[{"gender":"male","genderId":"1"},{"gender":"female","genderId":"2"}]];
	  }
        onBlur_firstname(eventData:any){} 
      input_firstname(eventData:any){} 
      focus_firstname(eventData:any){} 
        onBlur_lastname(eventData:any){} 
      input_lastname(eventData:any){} 
      focus_lastname(eventData:any){} 
        onBlur_phone(eventData:any){} 
      input_phone(eventData:any){} 
      focus_phone(eventData:any){} 
        onBlur_dob(eventData:any){} 
      input_dob(eventData:any){} 
      focus_dob(eventData:any){} 
        onBlur_address(eventData:any){} 
      input_address(eventData:any){} 
      focus_address(eventData:any){} 
        onBlur_gender(eventData:any){} 
      input_gender(eventData:any){} 
      onClick_gender(eventData:any){} 
      onSingleSelect_gender(eventData:any){} 
      onMultiSelect_gender(eventData:any){} 
        onBlur_password(eventData:any){} 
      input_password(eventData:any){} 
      focus_password(eventData:any){} 
        onClick_cancel(eventData:any){} 
        onClick_btn(eventData:any){} 
    ngOnInit(){
 	  }
 	 	

   
}
export class CustomerregisterationModel{
  firstname: string;  lastname: string;  phone: number;  dob: string;  address: string;  gender: string;  password: string; }
