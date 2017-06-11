import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerServicesPage } from './customer-services';

@NgModule({
  declarations: [
    CustomerServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerServicesPage),
  ],
  exports: [
    CustomerServicesPage
  ]
})
export class CustomerServicesPageModule {}
