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
var ngx_facebook_1 = require("ngx-facebook");
var FacebookComponent = (function () {
    function FacebookComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.name = 'Angular';
    }
    return FacebookComponent;
}());
FacebookComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'facebook.component.html',
        styles: ["\n    \n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  margin-top: 400px;\n  margin-right: 500px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 100%;\n   \n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        ngx_facebook_1.FacebookService])
], FacebookComponent);
exports.FacebookComponent = FacebookComponent;
//# sourceMappingURL=facebook.component.js.map