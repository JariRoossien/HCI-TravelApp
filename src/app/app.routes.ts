import { Routes } from '@angular/router';
import {ExploreOverviewComponent} from "./components/explore/explore-overview/explore-overview.component";
import {ExploreCategoryComponent} from "./components/explore/explore-category/explore-category.component";
import {ExploreCardDetailComponent} from "./components/explore/explore-card-detail/explore-card-detail.component";

export const routes: Routes = [
  {path: 'explore', component: ExploreOverviewComponent},
  {path: 'explore/:categoryId', component: ExploreCategoryComponent},
  {path: 'explore/detail/:itemId', component: ExploreCardDetailComponent}
];
