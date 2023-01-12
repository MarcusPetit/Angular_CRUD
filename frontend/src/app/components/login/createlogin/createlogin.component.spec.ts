import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateloginComponent } from './createlogin.component';

describe('CreateloginComponent', () => {
  let component: CreateloginComponent;
  let fixture: ComponentFixture<CreateloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
