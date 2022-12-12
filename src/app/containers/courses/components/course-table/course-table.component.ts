import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../model/model';

@Component({
  selector: 'course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss'],
})
export class CourseTableComponent {
  displayedColumns = ['name', 'category', 'actions'];
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  onAdd() {
    this.add.emit(true);
  }
}
