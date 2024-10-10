import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUseableCardComponent } from './re-useable-card.component';

describe('ReUseableCardComponent', () => {
  let component: ReUseableCardComponent;
  let fixture: ComponentFixture<ReUseableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReUseableCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReUseableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
