import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseService {
  githubapi: any;

  constructor(
    private readonly configService: ConfigService,
    private httpService: HttpService,
  ) {
    this.githubapi = this.configService.get('githubapi');
  }

  async getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      const path = this.githubapi.baseUrl.replace("{0}", this.githubapi.userName).replace("{1}", this.githubapi.projectName);

      this.httpService
        .get(path)
        .pipe(map((response) => response.data.reverse()))
        .toPromise()
        .then(resolve)
        .catch(reject);
    });
  }
}