import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { CoursesComponent } from './components/courses-list/courses-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  exports: [CoursesComponent],
  declarations: [CoursesComponent, CourseFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ],
})
export class CoursesModule {}
