import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { CustomerList } from '../models/customerList.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
customersCollection: AngularFirestoreCollection<CustomerList>;
customers: Observable<CustomerList[]>;
customerDoc: AngularFirestoreDocument<any>


  constructor(public afs: AngularFirestore) { 
	  this.customers = this.afs.collection('customers').valueChanges()
  }

  getCustomersList(){
	  return this.customers;
  }

  deleteCustomer(customer: any){
	this.customerDoc = this.afs.doc(`customers/${customer.id}`);
	this.customerDoc.delete();
  }

}