import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  register(event, myForm: NgForm) {
    if(myForm.valid) {
      console.log('register', event, myForm);
    } else {
      alert('NIE!');
    }
  }

}
