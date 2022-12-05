import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, first, tap } from 'rxjs/operators';
import { Course } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/api.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
