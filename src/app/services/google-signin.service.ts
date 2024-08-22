import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
  private DISCOVERY_DOC = "https://sheets.googleapis.com/$discovery/rest?version=v4";
  private ACCESS_TOKEN = '';
  private tokenClient: any;

  private get CLIENT_ID() {
    return this.localStoreService.getClientId();
  }

  private get API_KEY() {
    return this.localStoreService.getApiKey();
  }

  constructor(private localStoreService: LocalStoreService) {
    this.initializeGis();
  }

  public resetCreds(): void {
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
