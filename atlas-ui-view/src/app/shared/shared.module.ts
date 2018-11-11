import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatMenuModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatGridListModule, MatSnackBarModule } from '@angular/material';

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
    MatTabsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule

  ]
})
export class SharedModule { }
