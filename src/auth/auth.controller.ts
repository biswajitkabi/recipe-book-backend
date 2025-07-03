import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from '../common/dto/auth.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({ type: RegisterDto }) 
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiBody({ type: LoginDto }) 
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
