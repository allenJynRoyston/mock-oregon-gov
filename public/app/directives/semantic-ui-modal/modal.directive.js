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
var core_1 = require('@angular/core');
var uiSemanticModal = (function () {
    function uiSemanticModal(el) {
        this.el = el;
    }
    uiSemanticModal.prototype.onMouseEnter = function () {
    };
    uiSemanticModal.prototype.onMouseLeave = function () {
    };
    uiSemanticModal.prototype.onClick = function () {
        var selector = ".modal";
        if (this.options.container != undefined) {
            selector = this.options.container;
        }
        $(selector)
            .modal(this.options)
            .modal('show');
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', Object)
    ], uiSemanticModal.prototype, "options", void 0);
    uiSemanticModal = __decorate([
        core_1.Directive({
            selector: '[ui-modal]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseclick)': 'onMouseLeave()',
                '(click)': 'onClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], uiSemanticModal);
    return uiSemanticModal;
}());
exports.uiSemanticModal = uiSemanticModal;
//# sourceMappingURL=modal.directive.js.map