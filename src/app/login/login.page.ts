import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { FirebaseService } from '../firebase/firebase-integration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    public firebaseService: FirebaseService,
    public router: Router,
    public menu: MenuController
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('test@test.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  doLogin(): void {
    console.log('do Log In');
    this.router.navigate(['app/categories']);
  }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    this.firebaseService.doLoginFb().then( res => {
      this.router.navigate(['app/familytree']);
    }, err => {
      this.errorMessage = err.message;
      console.log(err)
    })
  }

  tryLoginFb(){
    this.firebaseService.doLoginFb().then( res => {
      this.router.navigate(['app/categories']);
      let currentUser = this.firebaseService.getCurrentUser();
      console.log('CURRENTUSERID: ' + currentUser.uid);
    }, err => {
      this.errorMessage = err.message;
      console.log(err)
    })
  }

  doGoogleLogin(): void {
    console.log('google login');
    this.router.navigate(['app/categories']);
  }

  doTwitterLogin(): void {
    console.log('twitter login');
    this.router.navigate(['app/categories']);
  }
}
