import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MenuModule, ContextMenuModule } from '@progress/kendo-angular-menu';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { AtlasTreeComponent } from './components/atlas-tree.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { AtlasToolbarModule } from '../atlas-toolbar/atlas-toolbar.module';
import { createCustomElement } from '@angular/elements';
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
