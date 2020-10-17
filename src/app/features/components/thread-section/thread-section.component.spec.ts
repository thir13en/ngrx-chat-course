import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadSectionComponent } from './thread-section.component';
import { TestingModule } from '@testing/testing.module';


describe('ThreadSectionComponent', () => {
  let component: ThreadSectionComponent;
  let fixture: ComponentFixture<ThreadSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ThreadSectionComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
