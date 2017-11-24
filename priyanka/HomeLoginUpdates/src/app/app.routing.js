"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./facebook-login/index");
var index_5 = require("./guards/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_5.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'facebook-login', component: index_4.FacebookComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map