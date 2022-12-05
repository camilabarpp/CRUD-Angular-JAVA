import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CategoryPipe } from './pipe/category.pipe';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    CategoryPipe,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmationDialogComponent,
    CategoryPipe,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
