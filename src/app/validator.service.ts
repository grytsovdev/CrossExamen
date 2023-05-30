import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  validateInt(number: number): boolean {
    return Number.isInteger(number);
  }

}
