import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { Recipe } from './recipes/recipe.entity';
import { User } from './users/user.entity';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig], //  Load the custom config
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const db = configService.get('database'); // Fetch the whole 'database' config
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

    RecipesModule,
    UsersModule,
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
