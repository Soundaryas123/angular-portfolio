import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isSideNavOpen: boolean = false;

  constructor(private router: Router) {
    if (this.router.url === '/') {
      this.isSideNavOpen = false;
      this.router.navigateByUrl('/home');
    }
  }

  public navigationItems = [
    { label: 'Home', link: '/home', showInTopNav: true },
    { label: 'Portfolio', link: '/portfolio', showInTopNav: true },
    { label: 'Resume', link: '/resume', showInTopNav: true },
    { label: 'Contact', link: '/contact', showInTopNav: false }
  ];

  public isActive(link: string): boolean {
    return this.router.url === link;
  }

  public toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  public closeSideNav() {
    this.isSideNavOpen = false;
    console.log('first');
  }
}
