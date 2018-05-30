import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireList } from 'angularfire2/database';
import { Words } from '../../obj/words';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:AngularFireList<any>;
  constructor(public navCtrl: NavController,
    db: AngularFirestore) {
    db.collection('words').valueChanges().subscribe(res => {
     
    })
  }

 

}
