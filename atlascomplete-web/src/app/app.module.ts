import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { APP_BASE_HREF } from '@angular/common';
import { AtlasContentModule, AtlasSideBarModule, AtlasHeaderModule, AtlasMenuModule } from 'atlas-ui-angular';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { DataAccessFactory } from 'atlas-web-services';
import { environment } from '../environments/environment';
import { MatIconRegistry } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    LayoutModule,
    AtlasContentModule,
    AtlasSideBarModule,
    AtlasHeaderModule,
    AtlasMenuModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // initialize data-access base URL
  constructor(private dataAccessFactory: DataAccessFactory, matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.dataAccessFactory.baseUrl = environment.baseUrl;
  }
}
