import { Component } from '@angular/core';
import {MyFavoritePage} from '../my-favorite/my-favorite'
import { AboutPage } from '../about/about';
import { TopRatedPage } from '../top-rated/top-rated';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = MyFavoritePage;
  tab4Root = TopRatedPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
