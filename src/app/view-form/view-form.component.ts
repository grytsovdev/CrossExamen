import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss'],
})
export class ViewFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  result: Number = 0;

  showResult(event: any) {
    let res: Number = event;
    this.result = parseFloat(res.toFixed(2));
  }

}
