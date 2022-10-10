import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharonComponent } from './sharon.component';

describe('SharonComponent', () => {
  let component: SharonComponent;
  let fixture: ComponentFixture<SharonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
