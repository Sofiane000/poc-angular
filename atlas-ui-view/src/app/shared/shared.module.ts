import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatMenuModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class SharedModule { }
