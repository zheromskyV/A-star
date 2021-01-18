import { Component, OnInit } from '@angular/core';

import { dictionary } from '../../constants/dictionary';

@Component({
  selector: 'as-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  dictionary = dictionary;

  constructor() {}

  ngOnInit(): void {}
}
