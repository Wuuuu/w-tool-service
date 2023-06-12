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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const COS = require("cos-nodejs-sdk-v5");
const fs = require("fs");
const path = require("path");
let UploadService = exports.UploadService = class UploadService {
    constructor(configService) {
        this.configService = configService;
        this.cos = new COS({
            SecretId: this.configService.get('COS_SECRET_ID'),
            SecretKey: this.configService.get('COS_SECRET_KEY'),
        });
    }
    upload() {
        return 'upload success';
    }
    async uploadFile(localFilePath, cosFilePath) {
        const bucketName = this.configService.get('COS_BUCKET_NAME');
        const region = this.configService.get('COS_REGION');
        const rootPath = path.resolve(__dirname, '../..');
        const filePath = path.join(rootPath, localFilePath);
        return new Promise((resolve, reject) => {
            this.cos.putObject({
                Bucket: bucketName,
                Region: region,
                Key: cosFilePath,
                Body: fs.createReadStream(filePath),
            }, (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    fs.unlinkSync(localFilePath);
                    if (err)
                        throw new common_1.HttpException(err, 401);
                    resolve({
                        url: 'https://' + data.Location,
                    });
                }
            });
        });
    }
};
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UploadService);
//# sourceMappingURL=upload.service.js.map