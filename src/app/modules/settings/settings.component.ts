import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStoreService } from '../../services/local-store.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  settingsForm!: FormGroup;

  constructor(private localStoreService: LocalStoreService) {
    this.settingsForm = new FormGroup({
      clientId: new FormControl(''),
      apiKey: new FormControl(''),
      sheetId: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.setValues();
  }

  setValues(): void {
    const vals = this.localStoreService.getAllVals();

    this.settingsForm = new FormGroup({
      clientId: new FormControl(vals.clientId),
      apiKey: new FormControl(vals.apiKey),
      sheetId: new FormControl(vals.sheetId)
    });
  }

  updateLocalStorage(): void {
    const values = this.settingsForm.value;
    this.localStoreService.updateAllVals(values);
  }
}
