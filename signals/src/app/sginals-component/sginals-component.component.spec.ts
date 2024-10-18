import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SginalsComponentComponent } from './sginals-component.component';

describe('SginalsComponentComponent', () => {
  let component: SginalsComponentComponent;
  let fixture: ComponentFixture<SginalsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SginalsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SginalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
