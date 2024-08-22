import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private clientIdKeyName = 'client-id';
  private apiKeyKeyName = 'api-key';
  private spreadSheetIdKeyName = 'spreadsheet-id';

  public getClientId(): string {
    return window.localStorage.getItem(this.clientIdKeyName) || '';
  }

  public setClientId(value: string): void {
    window.localStorage.setItem(this.clientIdKeyName, value);
  }

  public getApiKey(): string {
    return window.localStorage.getItem(this.apiKeyKeyName) || '';
  }

  public setApiKey(value: string): void {
    window.localStorage.setItem(this.apiKeyKeyName, value);
  }

  public getSheetId(): string {
    return window.localStorage.getItem(this.spreadSheetIdKeyName) || '';
  }

  public setSheetId(value: string): void {
    window.localStorage.setItem(this.spreadSheetIdKeyName, value);
  }

  public getAllVals(): any {
    return {
      clientId: this.getClientId(),
      apiKey: this.getApiKey(),
      sheetId: this.getSheetId()
    }
  }

  public updateAllVals(value: any): void {
    window.localStorage.setItem(this.clientIdKeyName, value.clientId);
    window.localStorage.setItem(this.apiKeyKeyName, value.apiKey);
    window.localStorage.setItem(this.spreadSheetIdKeyName, value.sheetId);
  }
}
