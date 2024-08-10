import { Component } from '@angular/core';
import { GoogleSigninService } from '../../services/google-signin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private googleSignInService: GoogleSigninService) { }

  signIn() {
    this.googleSignInService.signIn();
  }

  signOut() {
    this.googleSignInService.signOut();
  }
}
