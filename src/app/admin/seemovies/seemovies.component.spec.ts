import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemoviesComponent } from './seemovies.component';

describe('SeemoviesComponent', () => {
  let component: SeemoviesComponent;
  let fixture: ComponentFixture<SeemoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeemoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
