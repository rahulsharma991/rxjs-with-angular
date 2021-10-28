import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalandtimerComponent } from './intervalandtimer.component';

describe('IntervalandtimerComponent', () => {
  let component: IntervalandtimerComponent;
  let fixture: ComponentFixture<IntervalandtimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalandtimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalandtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
