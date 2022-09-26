import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileName = "This is my profile page."

  model: User = {
    name: "",
    email: "",
    bio: "",
    active: true
  }

  constructor() { }

  ngOnInit(): void {
  }


  submit() {
    console.log(this.model)
  }
}
