import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ContextMenuModule, MenuModule } from '@progress/kendo-angular-menu';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { AtlasToolbarModule } from '../atlas-toolbar/atlas-toolbar.module';
import { AtlasTreeComponent } from './components/atlas-tree.component';
@NgModule({
    declarations: [AtlasTreeComponent],
    entryComponents: [AtlasTreeComponent],
    imports: [
        CommonModule,
        FormsModule,
        TreeViewModule,
        MenuModule,
        ContextMenuModule,
        ButtonModule,
        MatIconModule,
        MatButtonModule,
        AtlasToolbarModule,
    ],
    exports: [AtlasTreeComponent],
})
export class AtlasTreeModule {}
