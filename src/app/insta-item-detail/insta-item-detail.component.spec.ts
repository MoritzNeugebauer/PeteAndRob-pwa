import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaItemDetailComponent } from './insta-item-detail.component';

describe('InstaItemDetailComponent', () => {
  let component: InstaItemDetailComponent;
  let fixture: ComponentFixture<InstaItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
