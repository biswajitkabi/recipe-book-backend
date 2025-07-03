// src/common/dto/auth.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'john@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'xxxxxx', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: "user/admin"})
  @IsString()
  role: string; // Default to 'user' if not provided
}


export class LoginDto {
  
  @ApiProperty({ example: 'john@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'xxxxxx' })
  @IsString()
  password: string;
}