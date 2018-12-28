import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessTsComponent } from './chess-ts.component';

describe('ChessTsComponent', () => {
  let component: ChessTsComponent;
  let fixture: ComponentFixture<ChessTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
