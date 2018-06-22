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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_service_1 = require("./app.service");
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    returnServiceText() {
        return this.appService.root();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "returnServiceText", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
let FakePostsController = class FakePostsController {
    constructor(appService) {
        this.appService = appService;
    }
    returnGet() {
        return [{ id: 1, postTitle: 'Lorem', postDescription: 'Lorem Ipsum Dores' },
            { id: 2, postTitle: 'Ipsum', postDescription: 'Ipsum Lorem Dores' }];
    }
    returnGetwithId(blogparameter) {
        return { id: `${blogparameter.id}`, postTitle: 'Lorem', postDescription: 'Lorem Ipsum Dores' };
    }
    create(items) {
        return { id: 3, postTitle: 'Lorem', postDescription: 'Lorem Ipsum Dores' };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FakePostsController.prototype, "returnGet", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FakePostsController.prototype, "returnGetwithId", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(201),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCatDto]),
    __metadata("design:returntype", void 0)
], FakePostsController.prototype, "create", null);
FakePostsController = __decorate([
    common_1.Controller('post'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], FakePostsController);
exports.FakePostsController = FakePostsController;
class CreateCatDto {
}
//# sourceMappingURL=app.controller.js.map