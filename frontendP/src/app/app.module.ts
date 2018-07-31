import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContentsComponent } from './contents/contents.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './video/video.component';
import { ShowVideoComponent } from './show-video/show-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ContentsComponent,
    VideosComponent,
    VideoComponent,
    ShowVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
