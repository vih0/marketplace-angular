import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Course } from './model/couse';
import { CourseService } from '../../services/course.service';




@Component({
  selector: 'app-courses',
  imports: [MatTableModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses:Course[]= [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'React', category: 'front-end'},
    {_id: '3', name: 'Vue.js', category: 'front-end'},
    {_id: '4', name: 'Node.js', category: 'back-end'},
    {_id: '5', name: 'Express', category: 'back-end'},
    {_id: '6', name: 'Django', category: 'back-end'},
    {_id: '7', name: 'Bootstrap', category: 'front-end'},
    {_id: '8', name: 'Tailwind CSS', category: 'front-end'},
    {_id: '9', name: 'Laravel', category: 'back-end'}
  ]
  displayedColumns=['name','category']
  courseService:CourseService;
  constructor(){
    this.courseService = new CourseService()
    this.courses= this.courseService.list()
  }

}





