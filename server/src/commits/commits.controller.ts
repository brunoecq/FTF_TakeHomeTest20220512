import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {

    constructor(private commitService: CommitsService){}

    @Get("/")
    async getAll(@Res() res: any){
        try {
            const commits: object = await this.commitService.getAllCommits();
            return res.status(HttpStatus.OK).json(commits);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error?.response?.statusText ?? error);
        }
    }
}
