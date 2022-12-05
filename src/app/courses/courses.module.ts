import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses-list/courses-list.component';

@NgModule({
  exports: [CoursesComponent],
  declarations: [CoursesComponent],
  imports: [CommonModule, MaterialModule, SharedModule, HttpClientModule],
})
export class CoursesModule {}
