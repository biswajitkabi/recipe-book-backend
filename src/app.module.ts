import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';
import { Recipe } from './recipes/recipe.entity';
import { User } from './users/user.entity';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig], 
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const db = configService.get('database'); 
        return {
          type: db.type,
          host: db.host,
          port: db.port,
          username: db.username,
          password: db.password,
          database: db.database,
          ssl: db.ssl,
          synchronize: db.synchronize,
          autoLoadEntities: db.autoLoadEntities,
          entities: [Recipe, User], 
        };
      },
    }),

    // For scheduling tasks
    // This module is used to run cron jobs and other scheduled tasks
    ScheduleModule.forRoot(), 

    RecipesModule,
    UsersModule,
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
