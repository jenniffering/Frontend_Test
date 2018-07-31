import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from '../contents/contents.component';
import { VideosComponent } from '../videos/videos.component'
import { ShowVideoComponent } from '../show-video/show-video.component';

const routes: Routes =[
  { path: 'videos', component: VideosComponent },
  { path: "videos/showVideo/:id", component: ShowVideoComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class RoutingModule { }
