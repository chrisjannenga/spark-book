import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent() {
        this.isLoggedIn = false;
    }
    LoginPageComponent.prototype.checkLoginStatus = function () {
        if (this.isLoggedIn === true) {
            console.log('I am Logged in!');
        }
        else {
            console.log('I am not logged in!');
        }
    };
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map