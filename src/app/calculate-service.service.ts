import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {

  constructor() { }

  calculateExpression(N: number): number {
    let result = 0;
    let sum = 0;

    for (let i = 1; i <= N; i++) {
      sum += Math.sin(i);
      result += 1 / sum;
    }

    return result;
  }


}
