import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { Course } from '../../../model/model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'list-courses',
  templateUrl: '../courses-list/courses-list.component.html',
  styleUrls: ['../courses-list/courses-list.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[] | null> | undefined;

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.refresh();
  }

  refresh() {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course.id], { relativeTo: this.route });
  }

  onDelete(course: Course) {
    this.coursesService.deleteById(course.id).subscribe(
      () => {
        this.refresh(),
          this.snackBar.open('Curso removido com sucesso!', 'X', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
      },
      (error) => this.onError('Erro ao tentar remover o curso!')
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
