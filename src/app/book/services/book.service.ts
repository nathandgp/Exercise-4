import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksArray: FormArray

  constructor() { }
}
