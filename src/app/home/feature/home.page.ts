import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showPassword: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/usr']);
    }
  }

  /**
   * @description Get the email form control
   * @returns AbscractControl
   */
  get emailFormControl() {
    return this.loginForm.get('email');
  }

  /**
   * @description Get the password form control
   * @returns AbscractControl
   */
  get passwordFormControl() {
    return this.loginForm.get('password');
  }
}
