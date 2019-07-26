import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
  };

  validCheck = `(pass.value !== cpass.value)`;

  constructor() {

  }

  onSubmit(form) {
    if (!form.valid) {
      console.log(form);
    }
  }
}
