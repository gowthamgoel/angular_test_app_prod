import { Injectable } from '@angular/core';
import { CurrentReading } from '../models/current-reading';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  currentReadingName: string = 'current-reading';

  getCurrentReading(): CurrentReading[] {
    try {
      const readings: any = localStorage.getItem(this.currentReadingName);
      const res = JSON.parse(readings);
      return res;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  updateCurrentReading(reading: CurrentReading): boolean {
    try {
      const readings = this.getCurrentReading() || [];
      readings.push(reading);

      localStorage.setItem(this.currentReadingName, JSON.stringify(readings));
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  updateWholeReadings(readings: CurrentReading[]): CurrentReading[] {
    try {
      localStorage.setItem(this.currentReadingName, JSON.stringify(readings));
      return this.getCurrentReading();
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}
