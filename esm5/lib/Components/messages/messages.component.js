/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from "@angular/core";
import { BootstrapVersion } from "../../../lib/Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../../Tokens/tokens";
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = (/**
         * @return {?}
         */
        function () { return []; });
    }
    Object.defineProperty(MessagesComponent.prototype, "className", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.bootstrapVersion) {
                case BootstrapVersion.Three:
                    return "help-block";
                case BootstrapVersion.Four:
                    return "invalid-feedback";
            }
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: "bfv-messages",
                    template: "\n    <span [ngClass]=\"className\" *ngFor=\"let message of messages()\">{{message}}</span>\n  ",
                    styles: ["\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = function () { return [
        { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    MessagesComponent.propDecorators = {
        messages: [{ type: Input }]
    };
    return MessagesComponent;
}());
export { MessagesComponent };
if (false) {
    /** @type {?} */
    MessagesComponent.prototype.messages;
    /**
     * @type {?}
     * @private
     */
    MessagesComponent.prototype.bootstrapVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhEO0lBMkJFLDJCQUNxQyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVpoRSxhQUFROzs7UUFBRyxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUUsRUFBQztJQWF4QixDQUFDO0lBWEosc0JBQUksd0NBQVM7Ozs7UUFBYjtZQUNFLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM3QixLQUFLLGdCQUFnQixDQUFDLEtBQUs7b0JBQ3pCLE9BQU8sWUFBWSxDQUFDO2dCQUN0QixLQUFLLGdCQUFnQixDQUFDLElBQUk7b0JBQ3hCLE9BQU8sa0JBQWtCLENBQUM7YUFDN0I7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGlHQUVUOzZCQUVDLDZGQUtDO2lCQUVKOzs7O2dCQWhCUSxnQkFBZ0IsdUJBK0JwQixNQUFNLFNBQUMsaUJBQWlCOzs7MkJBYjFCLEtBQUs7O0lBZVIsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQWhCWSxpQkFBaUI7OztJQUM1QixxQ0FDMkI7Ozs7O0lBWXpCLDZDQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCb290c3RyYXBWZXJzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uXCI7XG5pbXBvcnQgeyBCT09UU1RSQVBfVkVSU0lPTiB9IGZyb20gXCIuLi8uLi9Ub2tlbnMvdG9rZW5zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJiZnYtbWVzc2FnZXNcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBbbmdDbGFzc109XCJjbGFzc05hbWVcIiAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlcygpXCI+e3ttZXNzYWdlfX08L3NwYW4+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5pbnZhbGlkLWZlZWRiYWNrLFxuICAgICAgLnZhbGlkLWZlZWRiYWNrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIG1lc3NhZ2VzID0gKCkgPT4gW107XG5cbiAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuYm9vdHN0cmFwVmVyc2lvbikge1xuICAgICAgY2FzZSBCb290c3RyYXBWZXJzaW9uLlRocmVlOlxuICAgICAgICByZXR1cm4gXCJoZWxwLWJsb2NrXCI7XG4gICAgICBjYXNlIEJvb3RzdHJhcFZlcnNpb24uRm91cjpcbiAgICAgICAgcmV0dXJuIFwiaW52YWxpZC1mZWVkYmFja1wiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQk9PVFNUUkFQX1ZFUlNJT04pIHByaXZhdGUgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvblxuICApIHt9XG59XG4iXX0=