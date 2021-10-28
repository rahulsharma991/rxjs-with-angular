import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OFandFromComponent } from './ofand-from.component';

describe('OFandFromComponent', () => {
  let component: OFandFromComponent;
  let fixture: ComponentFixture<OFandFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OFandFromComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OFandFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
