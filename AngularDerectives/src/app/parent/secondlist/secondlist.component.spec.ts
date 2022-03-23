import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondlistComponent } from './secondlist.component';

describe('SecondlistComponent', () => {
  let component: SecondlistComponent;
  let fixture: ComponentFixture<SecondlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
