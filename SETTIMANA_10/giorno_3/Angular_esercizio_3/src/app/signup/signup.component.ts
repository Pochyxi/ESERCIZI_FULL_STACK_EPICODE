import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formUtenti!: FormGroup;

  constructor(private fb: FormBuilder, private auth$: AuthService) {}

  ngOnInit(): void {
    this.formUtenti = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  getFormControl(name: string) {
    return this.formUtenti.get(name);
  }
  getFormControlArray(name: string) {
    return this.getFormControl(name) as FormArray;
  }

  formSubmit() {
    let obj: UserSignup = {
      email: this.getFormControl('email')?.value,
      password: this.getFormControl('password')?.value,
    };
    console.log(obj);

    this.auth$.signup(obj);
  }
}
interface UserSignup {
  email: string;
  password: string;
}
