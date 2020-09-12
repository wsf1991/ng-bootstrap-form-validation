/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "./Tokens/tokens";
import { BootstrapVersion } from "./Enums/BootstrapVersion";
import { FormGroupComponent } from "./Components/form-group/form-group.component";
import { FormControlDirective } from "./Directives/form-control.directive";
var NgBootstrapFormValidationModule = /** @class */ (function () {
    function NgBootstrapFormValidationModule() {
    }
    /**
     * @param {?=} userOptions
     * @return {?}
     */
    NgBootstrapFormValidationModule.forRoot = /**
     * @param {?=} userOptions
     * @return {?}
     */
    function (userOptions) {
        if (userOptions === void 0) { userOptions = {
            bootstrapVersion: BootstrapVersion.Four
        }; }
        return {
            ngModule: NgBootstrapFormValidationModule,
            providers: [
                {
                    provide: CUSTOM_ERROR_MESSAGES,
                    useValue: userOptions.customErrorMessages || [],
                    multi: true
                },
                {
                    provide: BOOTSTRAP_VERSION,
                    useValue: userOptions.bootstrapVersion
                },
                ErrorMessageService
            ]
        };
    };
    NgBootstrapFormValidationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        FormValidationDirective,
                        FormGroupComponent,
                        MessagesComponent,
                        FormControlDirective
                    ],
                    exports: [
                        FormValidationDirective,
                        FormGroupComponent,
                        MessagesComponent,
                        FormControlDirective
                    ]
                },] }
    ];
    return NgBootstrapFormValidationModule;
}());
export { NgBootstrapFormValidationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFM0U7SUFBQTtJQXFDQSxDQUFDOzs7OztJQXJCUSx1Q0FBTzs7OztJQUFkLFVBQ0UsV0FFQztRQUZELDRCQUFBLEVBQUE7WUFDRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJO1NBQ3hDO1FBRUQsT0FBTztZQUNMLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsbUJBQW1CLElBQUksRUFBRTtvQkFDL0MsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0I7aUJBQ3ZDO2dCQUNELG1CQUFtQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFwQ0YsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBdUJELHNDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0F0QlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUgfSBmcm9tIFwiLi9EaXJlY3RpdmVzL2Zvcm0tdmFsaWRhdGlvbi5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IENVU1RPTV9FUlJPUl9NRVNTQUdFUywgQk9PVFNUUkFQX1ZFUlNJT04gfSBmcm9tIFwiLi9Ub2tlbnMvdG9rZW5zXCI7XG5pbXBvcnQgeyBCb290c3RyYXBWZXJzaW9uIH0gZnJvbSBcIi4vRW51bXMvQm9vdHN0cmFwVmVyc2lvblwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50cy9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlT3B0aW9ucyB9IGZyb20gXCIuL01vZGVscy9OZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlT3B0aW9uc1wiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tIFwiLi9EaXJlY3RpdmVzL2Zvcm0tY29udHJvbC5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlLFxuICAgIEZvcm1Hcm91cENvbXBvbmVudCxcbiAgICBNZXNzYWdlc0NvbXBvbmVudCxcbiAgICBGb3JtQ29udHJvbERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUsXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgIEZvcm1Db250cm9sRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdCb290c3RyYXBGb3JtVmFsaWRhdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHVzZXJPcHRpb25zOiBOZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlT3B0aW9ucyA9IHtcbiAgICAgIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb24uRm91clxuICAgIH1cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDVVNUT01fRVJST1JfTUVTU0FHRVMsXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJPcHRpb25zLmN1c3RvbUVycm9yTWVzc2FnZXMgfHwgW10sXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEJPT1RTVFJBUF9WRVJTSU9OLFxuICAgICAgICAgIHVzZVZhbHVlOiB1c2VyT3B0aW9ucy5ib290c3RyYXBWZXJzaW9uXG4gICAgICAgIH0sXG4gICAgICAgIEVycm9yTWVzc2FnZVNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=