import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdashbordComponent } from './passdashbord.component';

describe('PassdashbordComponent', () => {
  let component: PassdashbordComponent;
  let fixture: ComponentFixture<PassdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
