import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddataComponent } from './seconddata.component';

describe('SeconddataComponent', () => {
  let component: SeconddataComponent;
  let fixture: ComponentFixture<SeconddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
