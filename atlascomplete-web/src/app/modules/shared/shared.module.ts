import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule,
  MatCardModule, MatMenuModule, MatTabsModule,
  MatFormFieldModule, MatProgressSpinnerModule,
  MatInputModule, MatGridListModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { ModuleWithProviders } from '@angular/compiler/src/core';

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
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
