import { ElementRef, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { POPUP_CONTAINER } from '@progress/kendo-angular-popup';
import { AtlasCardModule } from 'projects/atlas-web-components/src/lib/atlas-card/atlas-card.module';
import { AtlasCardFieldComponent } from 'projects/atlas-web-components/src/lib/atlas-card/components/atlas-card-field/atlas-card-field.component';
import { AtlasCardItemComponent } from 'projects/atlas-web-components/src/lib/atlas-card/components/atlas-card-item/atlas-card-item.component';
import { AtlasCardComponent } from 'projects/atlas-web-components/src/lib/atlas-card/components/atlas-card/atlas-card.component';
import { AtlasContentModule } from 'projects/atlas-web-components/src/lib/atlas-content/atlas-content.module';
import { AtlasContentComponent } from 'projects/atlas-web-components/src/lib/atlas-content/components/atlas-content.component';
import { AtlasDatePickerModule } from 'projects/atlas-web-components/src/lib/atlas-date-picker/atlas-date-picker.module';
import { AtlasDatePickerComponent } from 'projects/atlas-web-components/src/lib/atlas-date-picker/components/atlas-date-picker.component';
import { AtlasDocViewerModule } from 'projects/atlas-web-components/src/lib/atlas-doc-viewer/atlas-doc-viewer.module';
import { AtlasDocViewerComponent } from 'projects/atlas-web-components/src/lib/atlas-doc-viewer/components/atlas-doc-viewer.component';
import { AtlasDropdownModule } from 'projects/atlas-web-components/src/lib/atlas-dropdown/atlas-dropdown.module';
import { AtlasMultiselectComponent } from 'projects/atlas-web-components/src/lib/atlas-dropdown/components/atlas-multiselect/atlas-multiselect.component';
import { AtlasHeaderModule } from 'projects/atlas-web-components/src/lib/atlas-header/atlas-header.module';
import { AtlasHeaderComponent } from 'projects/atlas-web-components/src/lib/atlas-header/components/atlas-header.component';
import { AtlasMenuModule } from 'projects/atlas-web-components/src/lib/atlas-menu/atlas-menu.module';
import { AtlasMenuItemComponent } from 'projects/atlas-web-components/src/lib/atlas-menu/components/atlas-menu-item.component';
import { AtlasMenuComponent } from 'projects/atlas-web-components/src/lib/atlas-menu/components/atlas-menu.component';
import { AtlasSideBarModule } from 'projects/atlas-web-components/src/lib/atlas-sidebar/atlas-sidebar.module';
import { AtlasSideBarComponent } from 'projects/atlas-web-components/src/lib/atlas-sidebar/components/atlas-sidebar.component';
import { AtlasSideNavContainerModule } from 'projects/atlas-web-components/src/lib/atlas-sidenav-container/atlas-sidenav-container.module';
import { AtlasSideNavContainerComponent } from 'projects/atlas-web-components/src/lib/atlas-sidenav-container/components/atlas-sidenav-container.component';
import { AtlasDialogContentModule } from 'projects/atlas-web-components/src/lib/layout/atlas-dialog-layout/atlas-dialog-content/atlas-dialog-content.module';
import { AtlasDialogContentComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-dialog-layout/atlas-dialog-content/components/atlas-dialog-content.component';
import { AtlasDialogFooterModule } from 'projects/atlas-web-components/src/lib/layout/atlas-dialog-layout/atlas-dialog-footer/atlas-dialog-footer.module';
import { AtlasDialogFooterComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-dialog-layout/atlas-dialog-footer/components/atlas-dialog-footer.component';
import { AtlasDialogHeaderModule } from 'projects/atlas-web-components/src/lib/layout/atlas-dialog-layout/atlas-dialog-header/atlas-dialog-header.module';
import { AtlasDialogHeaderComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-dialog-layout/atlas-dialog-header/components/atlas-dialog-header.component';
import { AtlasPageContentModule } from 'projects/atlas-web-components/src/lib/layout/atlas-page-layout/atlas-page-content/atlas-page-content.module';
import { AtlasPageContentComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-page-layout/atlas-page-content/components/atlas-page-content.component';
import { AtlasPageFooterModule } from 'projects/atlas-web-components/src/lib/layout/atlas-page-layout/atlas-page-footer/atlas-page-footer.module';
import { AtlasPageFooterComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-page-layout/atlas-page-footer/components/atlas-page-footer.component';
import { AtlasPageHeaderModule } from 'projects/atlas-web-components/src/lib/layout/atlas-page-layout/atlas-page-header/atlas-page-header.module';
import { AtlasPageHeaderComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-page-layout/atlas-page-header/components/atlas-page-header.component';
import { AtlasTabLayoutModule } from 'projects/atlas-web-components/src/lib/layout/atlas-tab-layout/atlas-tab-layout.module';
import { AtlasTabLayoutComponent } from 'projects/atlas-web-components/src/lib/layout/atlas-tab-layout/components/atlas-tab-layout.component';
import { AtlasButtonModule } from '../../projects/atlas-web-components/src/lib/atlas-button/atlas-button.module';
import { AtlasButtonComponent } from '../../projects/atlas-web-components/src/lib/atlas-button/components/atlas-button.component';
import { AtlasGridModule } from '../../projects/atlas-web-components/src/lib/atlas-grid/atlas-grid.module';
import { AtlasGridComponent } from '../../projects/atlas-web-components/src/lib/atlas-grid/components/atlas-grid.component';
import { AtlasInputModule } from '../../projects/atlas-web-components/src/lib/atlas-input/atlas-input.module';
import { AtlasInputComponent } from '../../projects/atlas-web-components/src/lib/atlas-input/components/atlas-input.component';
import { AtlasToolbarModule } from '../../projects/atlas-web-components/src/lib/atlas-toolbar/atlas-toolbar.module';
import { AtlasToolbarComponent } from '../../projects/atlas-web-components/src/lib/atlas-toolbar/components/atlas-toolbar.component';
import { AtlasTreeModule } from '../../projects/atlas-web-components/src/lib/atlas-tree/atlas-tree.module';
import { AtlasTreeComponent } from '../../projects/atlas-web-components/src/lib/atlas-tree/components/atlas-tree.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AtlasButtonModule,
        AtlasTreeModule,
        AtlasGridModule,
        AtlasInputModule,
        AtlasToolbarModule,
        AtlasCardModule,
        AtlasContentModule,
        AtlasDatePickerModule,
        AtlasDocViewerModule,
        AtlasDropdownModule,
        AtlasHeaderModule,
        AtlasMenuModule,
        AtlasSideBarModule,
        AtlasSideNavContainerModule,
        AtlasDialogContentModule,
        AtlasDialogFooterModule,
        AtlasDialogHeaderModule,
        AtlasPageContentModule,
        AtlasPageFooterModule,
        AtlasPageHeaderModule,
        AtlasTabLayoutModule,
    ],
    exports: [
        AtlasButtonModule,
        AtlasTreeModule,
        AtlasGridModule,
        AtlasInputModule,
        AtlasToolbarModule,
        AtlasCardModule,
        AtlasContentModule,
        AtlasDatePickerModule,
        AtlasDocViewerModule,
        AtlasDropdownModule,
        AtlasHeaderModule,
        AtlasMenuModule,
        AtlasSideBarModule,
        AtlasSideNavContainerModule,
        AtlasDialogContentModule,
        AtlasDialogFooterModule,
        AtlasDialogHeaderModule,
        AtlasPageContentModule,
        AtlasPageFooterModule,
        AtlasPageHeaderModule,
        AtlasTabLayoutModule,
    ],
    providers: [
        {
            provide: POPUP_CONTAINER,
            useFactory: () => {
                // tslint:disable-next-line:no-object-literal-type-assertion
                return { nativeElement: document.body } as ElementRef;
            },
        },
    ],
})
export class ElementModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const elements: any[] = [
            [AtlasButtonComponent, 'atlas-button'],
            [AtlasGridComponent, 'atlas-grid'],
            [AtlasTreeComponent, 'atlas-tree'],
            [AtlasToolbarComponent, 'atlas-toolbar'],
            [AtlasInputComponent, 'atlas-input'],
            [AtlasCardComponent, 'atlas-card'],
            [AtlasCardFieldComponent, 'atlas-card-field'],
            [AtlasCardItemComponent, 'atlas-card-item'],
            [AtlasContentComponent, 'atlas-content'],
            [AtlasDatePickerComponent, 'atlas-date-picker'],
            [AtlasDocViewerComponent, 'atlas-doc-viewer'],
            [AtlasHeaderComponent, 'atlas-header'],
            [AtlasMenuComponent, 'atlas-menu'],
            [AtlasMenuItemComponent, 'atlas-menu-item'],
            [AtlasSideBarComponent, 'atlas-sidebar'],
            [AtlasSideNavContainerComponent, 'atlas-sidenav-container'],
            [AtlasMultiselectComponent, 'atlas-multiselect'],
            [AtlasDialogContentComponent, 'atlas-dialog-content'],
            [AtlasDialogFooterComponent, 'atlas-dialog-footer'],
            [AtlasDialogHeaderComponent, 'atlas-dialog-header'],
            [AtlasPageContentComponent, 'atlas-page-content'],
            [AtlasPageFooterComponent, 'atlas-page-footer'],
            [AtlasPageHeaderComponent, 'atlas-page-header'],
            [AtlasTabLayoutComponent, 'atlas-tab-layout'],
        ];
        for (const [component, name] of elements) {
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
}
