import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pengguna } from './auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pengguna])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
