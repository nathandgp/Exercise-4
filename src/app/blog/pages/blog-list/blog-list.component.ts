import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {

  blogListArray?: Blog[] = [];

  constructor(private blogService: BlogService ) { }

  ngOnInit(): void {
    this.blogListArray = this.blogService.showBlogs()
  }

}
