import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/repository/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private authenticationService: AuthenticationService, private router: Router
  ) {

  }

  get f() { return this.myForm.controls; }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl("newuser000", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      password: new FormControl("password", [Validators.minLength(1), Validators.maxLength(25)]),
    });
  }
  onSubmit(form: FormGroup) {

  }



}
