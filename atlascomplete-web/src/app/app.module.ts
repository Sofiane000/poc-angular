import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { APP_BASE_HREF } from '@angular/common';
import { AtlasContentModule, AtlasSideBarModule, AtlasHeaderModule, AtlasMenuModule } from 'atlas-web-components';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { DataAccessFactory } from 'atlas-web-services';
import { environment } from '../environments/environment';
import { MatIconRegistry } from '@angular/material';
import { AuthenticationService } from './modules/auth/services/authentication.service';
export function init_app(appLoadService: AuthenticationService): Function {
  return () => appLoadService.checkSession();
}
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
  providers: [{ provide: APP_BASE_HREF, useValue: '' },
  {
    provide: APP_INITIALIZER,
    useFactory: init_app,
    deps: [AuthenticationService], multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  // initialize data-access base URL
  constructor(private dataAccessFactory: DataAccessFactory,
    matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.dataAccessFactory.baseUrl = environment.baseUrl;
  }
}
