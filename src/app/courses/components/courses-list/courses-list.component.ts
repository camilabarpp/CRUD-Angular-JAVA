import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { CoursesService } from '../../services/courses.service';
import { Course } from './../../../model/model';

@Component({
  selector: 'app-courses',
  templateUrl: '../courses-list/courses-list.component.html',
  styleUrls: ['../courses-list/courses-list.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  // courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
