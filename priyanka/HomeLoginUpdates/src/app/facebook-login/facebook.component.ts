import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FacebookService} from 'ngx-facebook';

@Component({
    moduleId: module.id,
    templateUrl: 'facebook.component.html',

styles: [ `
    
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  margin-top: 400px;
  margin-right: 500px;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
   
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}
` ]   
})


export class FacebookComponent {
   name = 'Angular'; 
    constructor(
        private router: Router,
        private fb: FacebookService) { }

    
}