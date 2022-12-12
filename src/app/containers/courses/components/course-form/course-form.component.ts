import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private location: Location,
    private snackBar: MatSnackBar,
    private courseService: CoursesService,
    private formBuilder: NonNullableFormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.courseService.save(this.form.value).subscribe(
      (data) => {
        this.onSuccess();
      },
      (error) => {
        this.onError();
      }
    );
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

  onEdit() {
    this.courseService.getByID(this.form.value.id)
      .subscribe((response) => {
        console.log(response)
      });
  }
}
