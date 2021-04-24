import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
	name: 'search'
})

export class SearchPipe implements PipeTransform {

		transform(customers,value){
			return customers.filter(customers => {
				if (value === undefined) { return customers; }
				// return customers.firstName.includes(value)
				return (customers.firstName.toLowerCase().includes(value) || customers.lastName.toLowerCase().includes(value) || customers.email.toLowerCase().includes(value)
    		   || customers.phoneNumber.toLowerCase().includes(value) || customers.address.toLowerCase().includes(value)) //  || customers.notes.toLowerCase().includes(value)
			})
		}
}