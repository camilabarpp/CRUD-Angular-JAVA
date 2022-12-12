import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './components/courses-list/courses-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseTableComponent } from './components/course-table/course-table.component';

@NgModule({
  exports: [CoursesComponent, CourseTableComponent, CourseFormComponent],
  declarations: [CoursesComponent, CourseFormComponent, CourseTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule {}
