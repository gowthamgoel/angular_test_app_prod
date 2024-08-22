import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  private get SPREADSHEET_ID() {
    return this.localStoreService.getSheetId();
  }

  constructor(private localStoreService: LocalStoreService) { }

  // 'Sheet1!A1:D10' sample range
  public getSheetData(range: string): Promise<gapi.client.Response<any>> {
    return (gapi as any).client.sheets.spreadsheets.values.get({
      spreadsheetId: this.SPREADSHEET_ID,
      range,
    });
  }

  // sample range 'Sheet1!A1'
  // sample value [['Test Val'], ['First', 'Second Third']]
  public updateSheetData(range: string, values: any): Promise<gapi.client.Response<any>> {
    return (gapi as any).client.sheets.spreadsheets.values.update({
      spreadsheetId: this.SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      resource: { values },
    });
  }

  // sample value
  // data = [
  //   { range: 'Master!A6', values: [['New Value 1', 'New Value 2'], ['New Value 3', 'New Value 4']] },
  //   { range: 'Sheet2!C3', values: [['Another Value 1', 'Another Value 2'], ['Another Value 3', 'Another Value 4']] },
  // ];
  public batchUpdate(data: { range: string; values: any[][] }[]): Promise<gapi.client.Response<any>> {
    const requests = data.map(item => ({
      range: item.range,
      values: item.values,
    }));

    return (gapi as any).client.sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: this.SPREADSHEET_ID,
      valueInputOption: 'RAW', // or 'USER_ENTERED' if you want Google Sheets to interpret the input
      data: requests,
    });
  }

  // sample range ['Master!A1:B2', 'Sheet2!C3:D4'];
  public batchGetData(ranges: string[]): Promise<gapi.client.Response<any>> {
    return (gapi as any).client.sheets.spreadsheets.values.batchGet({
      spreadsheetId: this.SPREADSHEET_ID,
      ranges
    });
  }

  // sample range ['Master!A6', 'Sheet2!C3']
  public batchClearData(ranges: string[]) {
    return (gapi as any).client.sheets.spreadsheets.values.batchClear({
      spreadsheetId: this.SPREADSHEET_ID,
      ranges
    });
  }
}
