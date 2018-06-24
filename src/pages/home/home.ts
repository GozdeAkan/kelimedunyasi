import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireList } from 'angularfire2/database';
import { Words } from '../../obj/words';
import { Observable } from '@firebase/util';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private itemsCollection: AngularFirestoreCollection<Words>;
  items: Words[];
  constructor(public navCtrl: NavController,
    db: AngularFirestore,private alertCtrl: AlertController) {

     
   // this.itemsCollection = db.collection<Words>('words');
    //this.itemsCollection.valueChanges().subscribe(res => {
   //   this.items = res;
     // console.log(this.items);
    //});


  }
  heartClick(){
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();

  }
 

}
