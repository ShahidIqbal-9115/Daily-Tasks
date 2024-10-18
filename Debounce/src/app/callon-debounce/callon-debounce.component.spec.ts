import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallonDebounceComponent } from './callon-debounce.component';

describe('CallonDebounceComponent', () => {
  let component: CallonDebounceComponent;
  let fixture: ComponentFixture<CallonDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallonDebounceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallonDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
