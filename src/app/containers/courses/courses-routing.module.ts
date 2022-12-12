import { CourseFormComponent } from './components/course-form/course-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './components/courses-list/courses-list.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  {
    path: 'new',
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}