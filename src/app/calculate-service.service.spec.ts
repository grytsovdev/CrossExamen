import { TestBed } from '@angular/core/testing';

import { CalculateServiceService } from './calculate-service.service';

describe('CalculateServiceService', () => {
  let service: CalculateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Перевірка розрахунків", () => {
    expect(service.calculateExpression(5).toFixed(2)).toBe("8.85")
  })
});
