import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPanelComponent } from './solution-panel.component';

describe('SolutionPanelComponent', () => {
  let component: SolutionPanelComponent;
  let fixture: ComponentFixture<SolutionPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionPanelComponent]
    });
    fixture = TestBed.createComponent(SolutionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
