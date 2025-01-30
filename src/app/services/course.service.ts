import { Injectable } from '@angular/core';
import { Course } from '../course/courses/model/couse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  list():Course[]{
    return [
      {_id:'1',name:'Angular',category:'front'}
    ]
  }
}
