import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from '../common/dto/auth.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Post('register')
  @ApiBody({ type: RegisterDto }) 
  register(@Body() dto: RegisterDto) {
    // .....
  }

  @Post('login')
  @ApiBody({ type: LoginDto }) 
  login(@Body() dto: LoginDto) {
    // .....
  }
}
