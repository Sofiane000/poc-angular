import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector, ElementRef } from '@angular/core';
import { AtlasButtonModule } from '../../projects/atlas-web-components/src/lib/atlas-button/atlas-button.module';
import { AtlasTreeModule } from '../../projects/atlas-web-components/src/lib/atlas-tree/atlas-tree.module';
import { AtlasGridModule } from '../../projects/atlas-web-components/src/lib/atlas-grid/atlas-grid.module';
import { AtlasInputModule } from '../../projects/atlas-web-components/src/lib/atlas-input/atlas-input.module';
import { AtlasToolbarModule } from '../../projects/atlas-web-components/src/lib/atlas-toolbar/atlas-toolbar.module';
import { createCustomElement } from '@angular/elements';
import { AtlasInputComponent } from '../../projects/atlas-web-components/src/lib/atlas-input/components/atlas-input.component';
import { AtlasToolbarComponent } from '../../projects/atlas-web-components/src/lib/atlas-toolbar/components/atlas-toolbar.component';
import { AtlasTreeComponent } from '../../projects/atlas-web-components/src/lib/atlas-tree/components/atlas-tree.component';
import { AtlasGridComponent } from '../../projects/atlas-web-components/src/lib/atlas-grid/components/atlas-grid.component';
import { AtlasButtonComponent } from '../../projects/atlas-web-components/src/lib/atlas-button/components/atlas-button.component';
import { POPUP_CONTAINER } from '@progress/kendo-angular-popup';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AtlasButtonModule,
        AtlasTreeModule,
        AtlasGridModule,
        AtlasInputModule,
        AtlasToolbarModule
    ],
    exports: [
        AtlasButtonModule,
        AtlasTreeModule,
        AtlasGridModule,
        AtlasInputModule,
        AtlasToolbarModule,
    ],
    providers: [
        {
            provide: POPUP_CONTAINER,
            useFactory: () => {
              return ({ nativeElement: document.body } as ElementRef);
            }
          }
    ]
})
export class ElementModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const elements: any[] = [
            [AtlasButtonComponent, 'atlas-button'],
            [AtlasGridComponent, 'atlas-grid'],
            [AtlasTreeComponent, 'atlas-tree'],
            [AtlasToolbarComponent, 'atlas-toolbar'],
            [AtlasInputComponent, 'atlas-input']
          ];
          for (const [component, name] of elements) {
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
          }
    }
}
