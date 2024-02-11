import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LashesSectionComponent } from './lashes-section.component';

describe('LashesSectionComponent', () => {
  let component: LashesSectionComponent;
  let fixture: ComponentFixture<LashesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LashesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LashesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
