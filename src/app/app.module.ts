import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MyFavoritePage } from '../pages/my-favorite/my-favorite';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { TopRatedPage } from '../pages/top-rated/top-rated';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    MyFavoritePage,
    TopRatedPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MyFavoritePage,
    HomePage,
    TopRatedPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
