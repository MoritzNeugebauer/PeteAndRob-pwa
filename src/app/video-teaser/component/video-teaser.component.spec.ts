import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTeaserComponent } from './video-teaser.component';

describe('VideoTeaserComponent', () => {
  let component: VideoTeaserComponent;
  let fixture: ComponentFixture<VideoTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
