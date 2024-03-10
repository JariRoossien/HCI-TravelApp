import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AppViewEnum} from "./enums/app-view-enum";
import {ExploreOverviewComponent} from "./components/explore/explore-overview/explore-overview.component";
import {UserHeaderComponent} from "./components/header/user-header/user-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExploreOverviewComponent, UserHeaderComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HCI-TravelApp';
}
