import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the CustomerServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-services',
  templateUrl: 'customer-services.html',
})
export class CustomerServicesPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.slides.startAutoplay();
    console.log('ionViewDidLoad CustomerServicesPage');
  }

}
