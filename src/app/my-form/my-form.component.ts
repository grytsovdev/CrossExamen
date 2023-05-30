import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CalculateServiceService } from '../calculate-service.service';
import { intValidator } from './NumberValidator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {

  @Output() showResult: EventEmitter<Number> = new EventEmitter<Number>();

  inputForm!: FormGroup;


  ngOnInit() { }

  constructor(private fb: FormBuilder, private service: CalculateServiceService) {
    this.inputForm = this.fb.group({
      n: ['', [intValidator()]]
    })
  }

  onSubmit() {
    let n = this.inputForm.value.n;
    let result = this.service.calculateExpression(n)
    this.showResult.emit(result)
  }

}
