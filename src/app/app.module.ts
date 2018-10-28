import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/component/video.component';
import { VideoListComponent } from './video-list/component/video-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/header/component/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { WallpaperListComponent } from './wallpaper-list/component/wallpaper-list.component';
import { WallpaperComponent } from './wallpaper/component/wallpaper.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageLazyLoadModule } from './elements/image-lazy-load/image-lazy-load.module';
import { VideoTeaserComponent } from './video-teaser/component/video-teaser.component';
import { InfosComponent } from './infos/infos.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingSpinnerComponent } from './elements/loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from './modules/error-message/error-message.component';
import { ButtonComponent } from './elements/button/button.component';
import { InstaFeedComponent } from './insta-feed/component/insta-feed.component';
import { InstaItemComponent } from './insta-item/insta-item.component';
import { InstaItemDetailComponent } from './insta-item-detail/insta-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoListComponent,
    HeaderComponent,
    FooterComponent,
    WallpaperListComponent,
    WallpaperComponent,
    VideoTeaserComponent,
    InfosComponent,
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    ButtonComponent,
    InstaFeedComponent,
    InstaItemComponent,
    InstaItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ImageLazyLoadModule,
    ServiceWorkerModule.register('../ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
