import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/book'

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  bookName = "This is my book."

  books: Book[] = [
    {
      id: 1,
      name:  "The Hunger Games",
      authors: ["Suzanne Collins", "Collins Suzanne"],
      isbn: '1112223339'
    },
    {
      id: 2,
      name:  "Catching Fire",
      authors: ["Susana Roces", "Aling Susan"],
      isbn: '1234554321'
    },
    {
      id: 3,
      name:  "The Mockingjay",
      authors: ["Suzy Collin", "Susan Roces"],
      isbn: '1234554321'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
