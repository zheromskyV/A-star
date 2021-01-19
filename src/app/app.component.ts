import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ]),
        query(':enter', [
          animate(
            '500ms ease',
            style({
              opacity: 1,
              transform: 'scale(1) translateY(0)',
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return outlet?.activatedRouteData['animation'];
  }
}
