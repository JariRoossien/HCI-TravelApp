import { Routes } from '@angular/router';
import {ExploreOverviewComponent} from "./components/explore/explore-overview/explore-overview.component";
import {ExploreCategoryComponent} from "./components/explore/explore-category/explore-category.component";
import {ExploreCardDetailComponent} from "./components/explore/explore-card-detail/explore-card-detail.component";
import {ProfileOverviewComponent} from "./components/profile/profile-overview/profile-overview.component";
import {MainOverviewComponent} from "./components/main/main-overview/main-overview.component";
import {RewardOverviewComponent} from "./components/rewards/reward-overview/reward-overview.component";
import {RewardDetailComponent} from "./components/rewards/reward-detail/reward-detail.component";
import {BookmarkOverviewComponent} from "./components/bookmark/bookmark-overview/bookmark-overview.component";
import {VisitedLocationsComponent} from "./components/profile/visited-locations/visited-locations.component";
import {ProfileRewardOverviewComponent} from "./components/profile/reward-overview/profile-reward-overview.component";

export const routes: Routes = [
  {path: 'explore', component: ExploreOverviewComponent},
  {path: 'explore/:categoryId', component: ExploreCategoryComponent},
  {path: 'explore/detail/:itemId', component: ExploreCardDetailComponent},
  {path: 'profile', component: ProfileOverviewComponent},
  {path: 'profile/visited', component: VisitedLocationsComponent},
  {path: 'profile/rewards', component: ProfileRewardOverviewComponent},
  {path: 'rewards', component: RewardOverviewComponent},
  {path: 'rewards/detail/:rewardId', component: RewardDetailComponent},
  {path: 'bookmarks', component: BookmarkOverviewComponent},
  {path: 'home', component: MainOverviewComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];
