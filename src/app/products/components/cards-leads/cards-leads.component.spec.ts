import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLeadsComponent } from './cards-leads.component';

describe('CardsLeadsComponent', () => {
  let component: CardsLeadsComponent;
  let fixture: ComponentFixture<CardsLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsLeadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
