import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiLogComponent } from './dai-log.component';

describe('DaiLogComponent', () => {
  let component: DaiLogComponent;
  let fixture: ComponentFixture<DaiLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaiLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaiLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
