import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeleteAllComponent } from './list-delete-all.component';

describe('ListDeleteAllComponent', () => {
  let component: ListDeleteAllComponent;
  let fixture: ComponentFixture<ListDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
