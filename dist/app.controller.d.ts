import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    findAll(): Promise<void>;
    findOne(): Promise<void>;
}
