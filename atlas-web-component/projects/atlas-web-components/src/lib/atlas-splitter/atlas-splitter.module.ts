import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { AtlasSplitterComponent } from './components/atlas-splitter.component';
@NgModule({
    declarations: [AtlasSplitterComponent],
    imports: [CommonModule, LayoutModule],
    exports: [AtlasSplitterComponent],
})
export class AtlasSplitterModule {}
