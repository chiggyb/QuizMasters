import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FacebookService} from 'ngx-facebook';

import { User } from '../models/index';
import { UserService } from '../services/index';

import { AlertService, AuthenticationService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
styles: [ `header{
  padding:20px;
  margin-top:10px;
  color:#ffffff;
  background: #D2B48C;
  text-align:center;
  border-bottom:#ffffff 3px solid;
}
header a{
  color:#ffffff;
}
header nav{
  float:right;
  margin-top: -20px;
}
header li{
  float:left;
  overflow:auto;
  padding: 0 20px 0 20px;
}
/* Global Variable */
.container{
  width:80%;
  margin:auto;
  overflow:hidden;
}
/*middle*/
#middle_bg{
  min-height:200px;
  color:#ffffff;
  text-align:center;
  background:#2471a3;
}
 
#middle_bg h1{
  float:none;
  color:#ffffff;
}
  
 /* email contaxt */
#contact_email{
  padding:15px;
  color:#ffffff;
  background: #2471a3;
}
#contact_email .h1{
  float:left;
  color:#ffffff;
}
#contact_email form{
  float:right;
  margin-top: 5px;
}
#contact_email input[type="email"]{
  height:25px;
  width:250px;
}
/* email contaxt */
/* footer */
footer{
  padding:20px;
  margin-top:10px;
  color:#ffffff;
  background: url("https://static.pexels.com/photos/405237/pexels-photo-405237.jpeg") 0 -400px;
  text-align:center;
}
body { padding: 2em; }
/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
  margin-top: 1px;
  margin-right: 2px;
  position: absolute;
  top: 10x;
  left:10x;
}
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

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
