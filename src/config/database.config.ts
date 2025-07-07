import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'Biswa@711',
  database: process.env.DB_NAME || 'recipe-book-app',
  ssl: false, // true for production
  synchronize: true,
  autoLoadEntities: true,
}));
