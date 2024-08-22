import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  isMenuOpen = false;
  pages = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Test',
      route: '/cr'
    },
    {
      name: 'Settings',
      route: '/settings'
    }
  ];

  openMenu() {
    this.isMenuOpen = true;
    document.getElementById('menuOverlay')!.style.display = 'block';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.getElementById('menuOverlay')!.style.display = 'none';
  }
}
