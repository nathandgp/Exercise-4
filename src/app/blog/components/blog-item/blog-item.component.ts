import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog} from '../../models/blog'

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit, AfterContentInit  {

  blogName = "This is my blog."

  blogs: Blog[] = [
    {
      id: 1,
      title:  "Angular Project",
      description: "How to create Angular Project",
      author: "Nathan Politico",
      comments: ['Not yet finished.', 'This is so hard.']
    },
    {
      id: 2,
      title:  "Blog Array in Angular",
      description: "Creating and displaying Arrays",
      author: "Still Nathan Politico",
      comments: ['How do I display arrays in HTML?', 'Internet is so slowwwww.']
    },
    {
      id: 3,
      title:  "Exercises in Angular",
      description: "All the pending exercises",
      author: "Yup still me, Nathan",
      comments: ['Unfinished exer3', 'Unfinished exer4', 'Unfinished exer5']
    },
  ]


  constructor() { }

  ngAfterContentInit(): void {
   // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
