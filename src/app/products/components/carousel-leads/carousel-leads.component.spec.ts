import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLeadsComponent } from './carousel-leads.component';

describe('CarouselLeadsComponent', () => {
  let component: CarouselLeadsComponent;
  let fixture: ComponentFixture<CarouselLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
