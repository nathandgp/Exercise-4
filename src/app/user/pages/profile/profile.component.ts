import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  profileName = "This is my profile page."

  // model: User = {
  //   name: '',
  //   email: '',
  //   bio: '',
  //   active: true
  // }

  userForm: FormGroup

  constructor(fb:FormBuilder){
    this.userForm = fb.group({
      name: [''],
      email: [''],
      bio: [''],
      active: []
    })
  }
  ngAfterViewInit(): void {
    // this.userForm = fb.group({
    //   name: [''],
    //   email: [''],
    //   bio: [''],
    //   active: []
    // })
  }


  ngOnInit(): void {
    this.userForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }


  submit() {
    console.log(this.userForm.value)
  }
}
