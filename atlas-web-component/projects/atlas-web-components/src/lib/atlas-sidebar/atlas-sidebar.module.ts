import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AtlasSideBarComponent } from './components/atlas-sidebar.component';
@NgModule({
    declarations: [AtlasSideBarComponent],
    imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatToolbarModule],
    exports: [RouterModule, AtlasSideBarComponent],
})
export class AtlasSideBarModule {}
