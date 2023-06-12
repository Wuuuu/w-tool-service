import { ConfigService } from '@nestjs/config';
export declare class UploadService {
    private readonly configService;
    private cos;
    constructor(configService: ConfigService);
    upload(): string;
    uploadFile(localFilePath: string, cosFilePath: string): Promise<any>;
}
