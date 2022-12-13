import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { first, map } from 'rxjs/operators';
import { Course } from 'src/app/containers/model/model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/api/courses/';

  constructor(
    private _activedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(first());
  }

  save(record: Partial<Course>) {
    if (record.id == undefined) {
      return this.update(record);
    }
    return this.create(record);
  }

  getByID(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  deleteById(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${record.id}`, record);
  }
}
