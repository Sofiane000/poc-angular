import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtlasWebServicesModule } from '../../projects/atlas-web-services/src/lib/atlas-web-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtlasWebServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
