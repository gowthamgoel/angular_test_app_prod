import { Component } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer.service';
import { CurrentReading } from '../../models/current-reading';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-current-reading',
  templateUrl: './current-reading.component.html',
  styleUrl: './current-reading.component.scss'
})
export class CurrentReadingComponent {

  readings: CurrentReading[] = [];

  constructor(private dts: DataTransferService) { }

  ngOnInit(): void {
    this.getAllReadings();
  }

  getAllReadings(): void {
    this.readings = this.dts.getCurrentReading();
  }

  submit(formCtrl: NgForm): void {
    try {
      const formStatus = formCtrl.form.status;
      if (formStatus === 'VALID') {
        this.dts.updateCurrentReading(formCtrl.value);
        this.getAllReadings();
        formCtrl.reset();
      }
    } catch (err) {
      console.log(err);
    }
  }

  removeReading(ind: number): void {
    const resp = confirm('Are you sure?');

    if (resp) {
      this.readings.splice(ind, 1);
      this.readings = this.dts.updateWholeReadings(this.readings);
    }
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
