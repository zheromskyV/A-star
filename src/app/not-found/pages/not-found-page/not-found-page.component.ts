import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../core/services/navigation.service';

import { dictionary } from '../../../core/constants/dictionary';
import { routes } from '../../../core/constants/routes';

@Component({
  selector: 'as-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  dictionary = dictionary;
  routes = routes;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  goToHomePage(): void {
    this.navigationService.navigateToHome();
  }
}
