import { Injectable } from '@angular/core';
import {TravelUser} from "../../entity/travel-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  travelUser: TravelUser
  constructor() {
    this.travelUser = new TravelUser();
  }
}
