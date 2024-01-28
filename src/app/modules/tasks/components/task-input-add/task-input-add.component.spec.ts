import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInputAddComponent } from './task-input-add.component';

describe('TaskInputAddComponent', () => {
  let component: TaskInputAddComponent;
  let fixture: ComponentFixture<TaskInputAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInputAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInputAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
