import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AtlasWebServicesModule } from '../../projects/atlas-web-services/src/lib/atlas-web-services.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AtlasWebServicesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
