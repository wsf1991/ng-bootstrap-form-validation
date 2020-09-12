/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { DEFAULT_ERRORS } from "../default-errors";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";
import * as i0 from "@angular/core";
import * as i1 from "../Tokens/tokens";
export class ErrorMessageService {
    /**
     * @param {?} customErrorMessages
     */
    constructor(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
        this.errorMessages = customErrorMessages.reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc.concat(cur)), this.defaultErrors);
    }
}
ErrorMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ErrorMessageService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
];
/** @nocollapse */ ErrorMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(i0.ɵɵinject(i1.CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorMessageService.prototype.defaultErrors;
    /** @type {?} */
    ErrorMessageService.prototype.errorMessages;
    /** @type {?} */
    ErrorMessageService.prototype.customErrorMessages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBTXpELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFLOUIsWUFDd0MsbUJBQXFDO1FBQXJDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBa0I7UUFMckUsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFPckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNOzs7OztRQUM3QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQzdCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOzs7WUFmRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7d0NBT0ksTUFBTSxTQUFDLHFCQUFxQjs7Ozs7Ozs7SUFML0IsNENBQXVDOztJQUV2Qyw0Q0FBcUM7O0lBR25DLGtEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VSUk9SUyB9IGZyb20gXCIuLi9kZWZhdWx0LWVycm9yc1wiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTIH0gZnJvbSBcIi4uL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRFcnJvcnMgPSBERUZBVUxUX0VSUk9SUztcblxuICBwdWJsaWMgZXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDVVNUT01fRVJST1JfTUVTU0FHRVMpIHB1YmxpYyBjdXN0b21FcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXVtdXG4gICkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IGN1c3RvbUVycm9yTWVzc2FnZXMucmVkdWNlKFxuICAgICAgKGFjYywgY3VyKSA9PiBhY2MuY29uY2F0KGN1ciksXG4gICAgICB0aGlzLmRlZmF1bHRFcnJvcnNcbiAgICApO1xuICB9XG59XG4iXX0=