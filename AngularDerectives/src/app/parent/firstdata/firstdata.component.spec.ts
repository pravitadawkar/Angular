import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstdataComponent } from './firstdata.component';

describe('FirstdataComponent', () => {
  let component: FirstdataComponent;
  let fixture: ComponentFixture<FirstdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
