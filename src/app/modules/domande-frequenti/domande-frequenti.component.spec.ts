import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomandeFrequentiComponent } from './domande-frequenti.component';

describe('DomandeFrequentiComponent', () => {
  let component: DomandeFrequentiComponent;
  let fixture: ComponentFixture<DomandeFrequentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomandeFrequentiComponent]
    });
    fixture = TestBed.createComponent(DomandeFrequentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
