import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfintroComponent } from './selfintro.component';

describe('SelfintroComponent', () => {
  let component: SelfintroComponent;
  let fixture: ComponentFixture<SelfintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
