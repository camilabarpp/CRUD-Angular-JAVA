import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { first } from 'rxjs/operators';
import { Course } from 'src/app/containers/model/model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(
    private _activedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(first());
  }

  save(course: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }

  edit(course: Partial<Course>) {
    const id = this._activedRoute.snapshot.params['id'];
    return this.httpClient.put<Course>(`${this.API}/${id}`, course);
  }

  getByID(id: string) {
    return this.httpClient.get(`${this.API}/${id}`);
  }
}
