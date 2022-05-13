import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsController } from './commits/commits.controller';
import { CommitsService } from './commits/commits.service';
import configuration from './config/configuration';
import { BaseService } from './domain/base.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HttpModule
  ],
  controllers: [AppController, CommitsController],
  providers: [AppService, CommitsService, BaseService, ConfigService],
})
export class AppModule {}
