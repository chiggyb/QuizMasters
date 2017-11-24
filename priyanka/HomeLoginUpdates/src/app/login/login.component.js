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
var router_1 = require("@angular/router");
var index_1 = require("../services/index");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html',
        styles: ["header{\n  padding:20px;\n  margin-top:10px;\n  color:#ffffff;\n  background: #D2B48C;\n  text-align:center;\n  border-bottom:#ffffff 3px solid;\n}\nheader a{\n  color:#ffffff;\n}\nheader nav{\n  float:right;\n  margin-top: -20px;\n}\nheader li{\n  float:left;\n  overflow:auto;\n  padding: 0 20px 0 20px;\n}\n/* Global Variable */\n.container{\n  width:80%;\n  margin:auto;\n  overflow:hidden;\n}\n/*middle*/\n#middle_bg{\n  min-height:200px;\n  color:#ffffff;\n  text-align:center;\n  background:#2471a3;\n}\n \n#middle_bg h1{\n  float:none;\n  color:#ffffff;\n}\n  \n /* email contaxt */\n#contact_email{\n  padding:15px;\n  color:#ffffff;\n  background: #2471a3;\n}\n#contact_email .h1{\n  float:left;\n  color:#ffffff;\n}\n#contact_email form{\n  float:right;\n  margin-top: 5px;\n}\n#contact_email input[type=\"email\"]{\n  height:25px;\n  width:250px;\n}\n/* email contaxt */\n/* footer */\nfooter{\n  padding:20px;\n  margin-top:10px;\n  color:#ffffff;\n  background: url(\"https://static.pexels.com/photos/405237/pexels-photo-405237.jpeg\") 0 -400px;\n  text-align:center;\n}\nbody { padding: 2em; }\n/* Shared */\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n  margin-top: 1px;\n  margin-right: 2px;\n  position: absolute;\n  top: 10x;\n  left:10x;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  margin-top: 400px;\n  margin-right: 500px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 100%;\n   \n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        index_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map