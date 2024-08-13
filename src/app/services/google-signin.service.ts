import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
  private CLIENT_ID = '';
  private DISCOVERY_DOC = "https://sheets.googleapis.com/$discovery/rest?version=v4";
  private API_KEY = '';
  private ACCESS_TOKEN = '';

  private tokenClient: any;

  constructor() {
    this.CLIENT_ID = window.localStorage.getItem('client-id') || '';
    this.API_KEY = window.localStorage.getItem('api-key') || '';
    this.initializeGis();
  }

  private initializeGis() {
    this.tokenClient = (google as any).accounts.oauth2.initTokenClient({
      client_id: this.CLIENT_ID,
      scope: this.SCOPES,
      callback: this.handleCredentialResponse.bind(this)
    });
  }

  private handleCredentialResponse(response: any) {
    if (response.error) {
      console.error(response);
    } else {
      this.ACCESS_TOKEN = response.access_token || '';
      console.log('google API sign in successfull');

      this.intiGoolgleSheetsAPIService();
    }
  }

  private intiGoolgleSheetsAPIService() {
    gapi.load('client', async () => {
      (gapi as any).auth.setToken({
        access_token: this.ACCESS_TOKEN
      });
    
      await gapi.client.init({
        apiKey: this.API_KEY,
        discoveryDocs: [this.DISCOVERY_DOC],
      });

      console.log('connected to google sheets successfully');
    });
  }

  public signIn() {
    this.tokenClient.requestAccessToken();
  }

  public signOut() {
    (google as any).accounts.id.disableAutoSelect();
    console.log('User signed out.');
  }
}
