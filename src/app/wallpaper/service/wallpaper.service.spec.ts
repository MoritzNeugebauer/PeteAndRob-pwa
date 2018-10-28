import { TestBed, inject } from '@angular/core/testing';

import { WallpaperService } from './wallpaper.service';

describe('WallpaperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallpaperService]
    });
  });

  it('should be created', inject([WallpaperService], (service: WallpaperService) => {
    expect(service).toBeTruthy();
  }));
});
