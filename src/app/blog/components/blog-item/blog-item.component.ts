import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit, AfterContentInit  {



  blogName = "This is my blog."

  constructor() { }

  ngAfterContentInit(): void {
   // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
