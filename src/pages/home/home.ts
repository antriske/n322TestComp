import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }


  showAbout() {
    this.navCtrl.push(AboutPage);
  }

  showAlert() {
      let alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Hannah Montana, just accepted your friend request!',
          buttons: ['OK']
      });
      alert.present();
  }
}
