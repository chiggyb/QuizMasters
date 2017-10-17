"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ngx_facebook_1 = require("ngx-facebook");
var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./app.component.html",
        styles: ["header{\n  padding:20px;\n  margin-top:10px;\n  color:#ffffff;\n  background: #D2B48C;\n  text-align:center;\n  border-bottom:#ffffff 3px solid;\n}\n\nheader a{\n  color:#ffffff;\n}\nheader nav{\n  float:right;\n  margin-top: -20px;\n}\nheader li{\n  float:left;\n  overflow:auto;\n  padding: 0 20px 0 20px;\n}\n\n\n/* Global Variable */\n.container{\n  width:80%;\n  margin:auto;\n  overflow:hidden;\n}\n\n/*middle*/\n#middle_bg{\n  min-height:400px;\n  color:#ffffff;\n  text-align:center;\n  background: url(\"https://static.pexels.com/photos/33972/pexels-photo.jpg\")  -1400px;\n}\n\n \n#middle_bg h1{\n  float:none;\n  color:#ffffff;\n}\n  \n /* email contaxt */\n#contact_email{\n  padding:15px;\n  color:#ffffff;\n  background: url(\"https://static.pexels.com/photos/33972/pexels-photo.jpg\") 0 -400px;\n}\n\n\n#contact_email .h1{\n  float:left;\n  color:#ffffff;\n}\n\n#contact_email form{\n  float:right;\n  margin-top: 5px;\n}\n\n#contact_email input[type=\"email\"]{\n  height:25px;\n  width:250px;\n}\n\n/* email contaxt */\n\n\n/* square box */\n#Square_box{\n  margin-top:20px;\n}\n\n\n#Square_box .box{\n  float:left;\n  text-align: center;\n  width: 30%;\n  padding:10px;  \n}\n\n#Square_box .box img{\n  width: 200px;\n}\n\n\n\n\n/* footer */\nfooter{\n  padding:20px;\n  margin-top:10px;\n  color:#ffffff;\n  background: url(\"https://static.pexels.com/photos/405237/pexels-photo-405237.jpeg\") 0 -400px;\n  text-align:center;\n}\n\nbody { padding: 2em; }\n\n\n/* Shared */\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n\n\n"]
    }),
    __metadata("design:paramtypes", [ngx_facebook_1.FacebookService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map