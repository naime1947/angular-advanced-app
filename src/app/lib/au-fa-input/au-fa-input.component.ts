import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss'],
})
export class AuFaInputComponent implements OnInit {
  @Input() icon!: string;
  constructor() {}

  ngOnInit(): void {}

  get classes() {
    const cssClasses: any = {};

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
