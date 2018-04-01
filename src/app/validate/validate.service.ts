import { Injectable } from '@angular/core';
import { LocationModel } from '../core/models/location.model';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLocation(location: LocationModel): boolean {
    if (location.latitude === undefined ||
      location.longitude === undefined ||
      location.userID === undefined) {
      return false;
    }

    if (location.latitude === null ||
      location.longitude === null ||
      location.userID === null) {
      return false;
    }

    return true;
  }

}
