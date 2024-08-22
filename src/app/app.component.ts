import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from './modules/shared/side-menu/side-menu.component';
import { GoogleSigninService } from './services/google-signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal';
  @ViewChild(SideMenuComponent) sideMenu!: SideMenuComponent;

  constructor(private googleSignInService: GoogleSigninService) {}

  signIn() {
    this.googleSignInService.signIn();
  }

  signOut() {
    this.googleSignInService.signOut();
  }

  connect() {
    this.googleSignInService.connect();
  }
}
