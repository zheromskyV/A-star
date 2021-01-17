import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { routes } from '../constants/routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateTo(route: string[]): void {
    this.router.navigate(route);
  }

  navigateToHome(): void {
    this.navigateTo([routes.home]);
  }
}
