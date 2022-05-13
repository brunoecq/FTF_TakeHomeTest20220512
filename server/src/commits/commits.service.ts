import { Injectable } from '@nestjs/common';
import { Commit } from 'src/domain/entities/commit';
import { BaseService } from 'src/domain/base.service';

@Injectable()
export class CommitsService {
    constructor(private readonly baseService: BaseService) {}

  async getAllCommits(): Promise<Commit[]> {
    return this.baseService.getAll();
  }
}
