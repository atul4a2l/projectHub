import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  links=[
    {
      name: 'Home',
      route: '/home',
      icon: 'home'
    }
    // {
    //   name: 'Projects',
    //   route: '/projects',
    //   icon: 'library_books'
    // },
    // {
    //   name: 'Contact us',
    //   route: '/contact',
    //   icon: 'contacts'
    // }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
