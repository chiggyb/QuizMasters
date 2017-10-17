import { Component } from '@angular/core';
import {FacebookService} from 'ngx-facebook';


@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
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
  min-height:400px;
  color:#ffffff;
  text-align:center;
  background: url("https://static.pexels.com/photos/33972/pexels-photo.jpg")  -1400px;
}

 
#middle_bg h1{
  float:none;
  color:#ffffff;
}
  
 /* email contaxt */
#contact_email{
  padding:15px;
  color:#ffffff;
  background: url("https://static.pexels.com/photos/33972/pexels-photo.jpg") 0 -400px;
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


/* square box */
#Square_box{
  margin-top:20px;
}


#Square_box .box{
  float:left;
  text-align: center;
  width: 30%;
  padding:10px;  
}

#Square_box .box img{
  width: 200px;
}




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
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
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
export class AppComponent  { 
	name = 'Angular'; 

	constructor(private fb: FacebookService){}	


}
