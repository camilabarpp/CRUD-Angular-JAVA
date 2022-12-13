import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';

import { CoursesService } from '../../services/courses.service';
import { Course } from './../../../model/model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup = this.formBuilder.group({
    id: [Validators.required],
    name: [Validators.required],
    category: [Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
    private courseService: CoursesService,
    private formBuilder: NonNullableFormBuilder
  ) {
    const course: Course = route.snapshot.data['course'];
    this.form.setValue({
      id: course.id,
      name: course.name,
      category: course.category,
    });
  }

  onSubmit() {
    if (this.form.value.name && this.form.value.category) {
      this.courseService.save(this.form.value).subscribe(
        pipe(
          () => {
            console.log(this.form.value);
            this.onSuccess();
          },
          () => {
            this.onError();
          }
        )
      );
    }
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso!', '', { duration: 5000 });
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesse!', '', { duration: 5000 });
    this.onCancel();
  }
}
