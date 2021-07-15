import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeratingsComponent } from './seeratings.component';

describe('SeeratingsComponent', () => {
  let component: SeeratingsComponent;
  let fixture: ComponentFixture<SeeratingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeratingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
