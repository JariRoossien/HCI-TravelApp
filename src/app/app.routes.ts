import { Routes } from '@angular/router';
import {ExploreOverviewComponent} from "./components/explore/explore-overview/explore-overview.component";
import {ExploreCategoryComponent} from "./components/explore/explore-category/explore-category.component";
import {ExploreCardDetailComponent} from "./components/explore/explore-card-detail/explore-card-detail.component";
import {ProfileOverviewComponent} from "./components/profile/profile-overview/profile-overview.component";
import {MainOverviewComponent} from "./components/main/main-overview/main-overview.component";
import {RewardOverviewComponent} from "./components/rewards/reward-overview/reward-overview.component";
import {RewardDetailComponent} from "./components/rewards/reward-detail/reward-detail.component";

export const routes: Routes = [
  {path: 'explore', component: ExploreOverviewComponent},
  {path: 'explore/:categoryId', component: ExploreCategoryComponent},
  {path: 'explore/detail/:itemId', component: ExploreCardDetailComponent},
  {path: 'profile', component: ProfileOverviewComponent},
  {path: 'rewards', component: RewardOverviewComponent},
  {path: 'rewards/detail/:rewardId', component: RewardDetailComponent},
  {path: 'home', component: MainOverviewComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];
