import { Component } from '@angular/core';
import { Customer } from "./CutomerApp.model";

@Component({
  selector: 'app-root',
  templateUrl: './Customerapp.view.html',

})
export class CustomerComponent {
  title = 'CustomerAplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel)
    this.CustomerModel = new Customer(); // clear UI
  }
}
