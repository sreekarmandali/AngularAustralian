import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { tap, delay, finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '@app/services/auth.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  isLoading: boolean;
  loginForm: FormGroup;
  faCoffee = faCoffee;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    
  }

  ngOnInit() {
    this.buildForm();
  }

  get f () {
    return this.loginForm.controls;
  }

  login() {
    this.isLoading = true;

    const credentials = this.loginForm.value;

    this.authService.login(credentials)
      .pipe(
        delay(5000),
        tap(user => this.router.navigate(['/dashboard'])),
        finalize(() => this.isLoading = false),
        catchError(error => of(this.error = error))
      ).subscribe();
  }

  private buildForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl ('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

}
