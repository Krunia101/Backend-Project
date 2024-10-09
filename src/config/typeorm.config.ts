import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/app/auth/auth.entity';
import { Book } from 'src/book/book.entity';
import { Pengguna } from 'src/project/auth/auth.entity';
import { Siswa } from 'src/ujian/ujian.entity';

export const typeOrm: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), 
  username: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE,
  entities: [Siswa, Book, User,Pengguna],
  synchronize: true,
  logging: true,
};