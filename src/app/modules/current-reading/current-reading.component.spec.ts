import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReadingComponent } from './current-reading.component';

describe('CurrentReadingComponent', () => {
  let component: CurrentReadingComponent;
  let fixture: ComponentFixture<CurrentReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentReadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
