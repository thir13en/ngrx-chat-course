import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppCoreModule } from '@core/app-core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreadSectionComponent } from '@features/components/thread-section/thread-section.component';

@NgModule({
  imports: [
    BrowserModule,
    AppCoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ThreadSectionComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
