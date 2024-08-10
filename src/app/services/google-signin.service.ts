import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private CLIENT_ID = '625527147603-t5meslpda5l89p5d3fv4soh99ttb3ej2.apps.googleusercontent.com';
  private SCOPES = 'https://www.googleapis.com/auth/drive.file';

  private tokenClient: any;

  constructor() {
    this.initializeGis();
  }

  initializeGis() {
    this.tokenClient = (google as any).accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: this.handleCredentialResponse.bind(this)
    });
  }

  handleCredentialResponse(response: any) {
    if (response.error) {
      console.error(response);
    } else {
      console.log('Received access token:', response);
    }
  }

  signIn() {
    this.tokenClient.requestAccessToken();
  }

  signOut() {
    (google as any).accounts.id.disableAutoSelect();
    console.log('User signed out.');
  }
}
