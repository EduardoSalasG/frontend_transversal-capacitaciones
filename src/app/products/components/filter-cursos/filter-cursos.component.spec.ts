import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCursosComponent } from './filter-cursos.component';

describe('FilterCursosComponent', () => {
  let component: FilterCursosComponent;
  let fixture: ComponentFixture<FilterCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCursosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
