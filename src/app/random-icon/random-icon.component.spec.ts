import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIconComponent } from './random-icon.component';

describe('RandomIconComponent', () => {
  let component: RandomIconComponent;
  let fixture: ComponentFixture<RandomIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
