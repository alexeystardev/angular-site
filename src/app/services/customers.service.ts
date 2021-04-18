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


  constructor(public afs: AngularFirestore) { 
	  this.customers = this.afs.collection('customers').valueChanges()
  }

  getCustomersList(){
	  return this.customers;
  }

}