import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/component/video.component';
import { VideoListComponent } from './video-list/component/video-list.component';
import { WallpaperComponent } from './wallpaper/component/wallpaper.component';
import { WallpaperListComponent } from './wallpaper-list/component/wallpaper-list.component';
import { InfosComponent } from './infos/infos.component';
import { InstaFeedComponent } from './insta-feed/component/insta-feed.component';
import { InstaItemDetailComponent } from './insta-item-detail/insta-item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/videos', pathMatch: 'full', data: {depth: 1} },
  { path: 'videos', component: VideoListComponent, data: {depth: 1} },
  { path: 'videos/:i', component: VideoComponent, data: {depth: 2} },
  { path: 'wallpapers', component: WallpaperListComponent, data: {depth: 1} },
  { path: 'wallpapers/:i', component: WallpaperComponent, data: {depth: 2} },
  { path: 'infos', component: InfosComponent, data: {depth: 2} },
  { path: 'instaFeed', component: InstaFeedComponent, data: {depth: 1} },
  { path: 'instaFeed/:i', component: InstaItemDetailComponent, data: {depth: 2} },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
