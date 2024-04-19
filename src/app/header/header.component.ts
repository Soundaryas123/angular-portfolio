import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

constructor(private router:Router){
  if (this.router.url === '/') {
    this.router.navigateByUrl('/home');
  }
}
  navigationItems = [
    { label: 'Home', link: '/home', },
    { label: 'Portfolio', link: '/portfolio',},
    { label: 'Resume', link: '/resume', },
    { label: 'Contact', link: '/contact',  }
  ];

  isActive(link: string): boolean {
    return this.router.url === link;
  }

}
