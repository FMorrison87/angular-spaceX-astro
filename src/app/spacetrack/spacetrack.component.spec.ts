import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacetrackComponent } from './spacetrack.component';

describe('SpacetrackComponent', () => {
  let component: SpacetrackComponent;
  let fixture: ComponentFixture<SpacetrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacetrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
