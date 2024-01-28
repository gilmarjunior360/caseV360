import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleteAllComponent } from './task-delete-all.component';

describe('TaskDeleteAllComponent', () => {
  let component: TaskDeleteAllComponent;
  let fixture: ComponentFixture<TaskDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
