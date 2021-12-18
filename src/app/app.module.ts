import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { USER_STORY_REPOSITORY } from "./core/di/di";
import { UserStoryJsonRepository } from "./features/user-story/infrastructure/user-story-json-repository";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: USER_STORY_REPOSITORY, useClass: UserStoryJsonRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
