import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';



  login(form: any) {
    if (form.valid) {
      // Handle login logic here
      console.log('Form Submitted', form.value);
    }
  }

  register() {
    // Handle registration logic here
    console.log('Register button clicked');
  }

}
