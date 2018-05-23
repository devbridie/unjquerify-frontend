import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualPaneComparisonComponent } from './dual-pane-comparison.component';

describe('DualPaneComparisonComponent', () => {
  let component: DualPaneComparisonComponent;
  let fixture: ComponentFixture<DualPaneComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualPaneComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualPaneComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
