import { LayoutModule } from '@angular/cdk/layout';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasHeaderModule, AtlasSideNavContainerModule } from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticationService } from './modules/auth/services/authentication.service';
import { SharedModule } from './modules/shared/shared.module';
// tslint:disable-next-line:ban-types
export function init_app(appLoadService: AuthenticationService): Function {
    return () => appLoadService.checkSession();
}
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        SharedModule,
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        LayoutModule,
        AtlasHeaderModule,
        AtlasSideNavContainerModule,
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '' },
        {
            provide: APP_INITIALIZER,
            useFactory: init_app,
            deps: [AuthenticationService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    // initialize data-access base URL
    constructor(private dataAccessFactory: DataAccessFactory, matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
        this.dataAccessFactory.baseUrl = environment.baseUrl;
        this.dataAccessFactory
            .createService('idm.menus')
            .module('idm')
            .url('menus');
    }
}
