import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutacionComponent } from './mutacion.component';

describe('MutacionComponent', () => {
  let component: MutacionComponent;
  let fixture: ComponentFixture<MutacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
