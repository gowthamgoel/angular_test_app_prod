import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from './modules/shared/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal';
  @ViewChild(SideMenuComponent) sideMenu!: SideMenuComponent;
}
