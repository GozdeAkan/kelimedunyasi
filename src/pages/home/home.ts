import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireList } from 'angularfire2/database';
import { Words } from '../../obj/words';
import { Observable } from '@firebase/util';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 private itemsCollection: AngularFirestoreCollection<Words>;
 items: Words[];
 constructor(public navCtrl: NavController,
   db: AngularFirestore) {

   
   this.itemsCollection = db.collection<Words>('words');
   this.itemsCollection.valueChanges().subscribe(res => {
     this.items = res;
     console.log(this.items);
   });


 }


}

 

}
