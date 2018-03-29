import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLocation(location) {
    if (location.latitude === undefined ||
      location.longitude === undefined ||
      location.username === undefined) {
      return false;
    }

    if (location.latitude === null ||
      location.longitude === null ||
      location.username === null) {
      return false;
    }

    return true;
  }

}
