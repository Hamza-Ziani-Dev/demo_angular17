import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form : FormGroup = new FormGroup({});


  
constructor(private formBuilder: FormBuilder) {}

ngOnInit(): void {
  this.formModel();
}
  // form : FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  // });






private formModel() : void{
  this.form = this.formBuilder.group({
    firstName: ['',Validators.required, Validators.minLength(3)],
    lastName: ['',Validators.required, Validators.minLength(3)],
    email: ['',Validators.required, Validators.email],
    password: ['',Validators.required, Validators.minLength(6)],
    confirmPassword: ['',Validators.required, Validators.minLength(6)],
  })
}



}
