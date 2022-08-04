import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  text = 'non loggato';
  formUtenti!: FormGroup;

  constructor(private auth$: AuthService, private fb: FormBuilder) {
    this.formUtenti = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.auth$.isLogged.subscribe((res) => {
      if (res) this.text = res.email;
      else this.text = 'Non Loggato';
    });
  }
  getFormControl(name: string) {
    return this.formUtenti.get(name);
  }

  login() {
    let obj: UserSignup = {
      email: this.getFormControl('email')?.value,
      password: this.getFormControl('password')?.value,
    };
    this.auth$.login(obj);
  }
}
interface UserSignup {
  email: string;
  password: string;
}
