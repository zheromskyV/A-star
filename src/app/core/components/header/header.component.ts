import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized, Event as RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

import { dictionary } from '../../constants/dictionary';
import { headerNavLinks } from '../../constants/header-nav-links';

@Component({
  selector: 'as-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  dictionary = dictionary;
  navLinks = headerNavLinks;

  isHamburgerMenuOpened = false;
  activeTabName: string;
  routerSubscription: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof RoutesRecognized) {
        const activeTabName = event.state.root.firstChild?.data.activeTabName;
        this.activeTabName = activeTabName || null;
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  toggleHamburgerMenu(): void {
    this.isHamburgerMenuOpened = !this.isHamburgerMenuOpened;
  }

  closeHamburgerMenu(): void {
    this.isHamburgerMenuOpened = false;
  }
}
