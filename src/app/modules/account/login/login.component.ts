import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserLogin } from 'src/app/core/model/entity/user';
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

    let user: UserLogin;

    user = {
      username: "form.value.userName",
      password: "form.value.password"
    };
  }

  onSubmit(form: FormGroup) {
    let user: UserLogin;
    this.submitted = true;

    user = {
      username: form.value.userName,
      password: form.value.password
    };


    if (form.valid) {
      this.authenticationService.login(user)
        .pipe(first())
        .subscribe({
          next: () => {
            this.router.navigate(['holidays/holidayTypeIndex']);

          },
          error: error => {
            this.error = error;
            this.loading = false;
          }
        });
    }
  }



}
