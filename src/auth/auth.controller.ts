import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { SignUpDto } from './dtos/signup.dto';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authenticateRequest: AuthDto) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('signup')
  async signup(@Body() signupRequest: SignUpDto) {
    try {
      return await this.authService.signupUser(signupRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
