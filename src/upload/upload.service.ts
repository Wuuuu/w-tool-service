import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as COS from 'cos-nodejs-sdk-v5';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  private cos: COS;
  constructor(private readonly configService: ConfigService) {
    this.cos = new COS({
      SecretId: this.configService.get('COS_SECRET_ID'), // 推荐使用环境变量获取；用户的 SecretId，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
      SecretKey: this.configService.get('COS_SECRET_KEY'), // 推荐使用环境变量获取；用户的 SecretKey，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
    });
  }

  upload() {
    return 'upload success';
  }

  async uploadFile(localFilePath: string, cosFilePath: string): Promise<any> {
    const bucketName = this.configService.get('COS_BUCKET_NAME');
    const region = this.configService.get('COS_REGION');
    const rootPath = path.resolve(__dirname, '../..'); // 获取应用程序的根目录
    const filePath = path.join(rootPath, localFilePath); // 拼接文件路径
    return new Promise((resolve, reject) => {
      this.cos.putObject(
        {
          Bucket: bucketName,
          Region: region,
          Key: cosFilePath,
          Body: fs.createReadStream(filePath),
        },
        (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            // 删除本地文件
            fs.unlinkSync(localFilePath);
            if (err) throw new HttpException(err, 401);
            resolve({
              url: 'https://' + data.Location,
              // filename: cosName,
            });
          }
        },
      );
    });
  }
}
