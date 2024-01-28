import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInputAddComponent } from './list-input-add.component';

describe('ListInputAddComponent', () => {
  let component: ListInputAddComponent;
  let fixture: ComponentFixture<ListInputAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInputAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInputAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
