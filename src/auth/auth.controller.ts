import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { SignUpDto } from './dtos/signup.dto';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() authenticateRequest: AuthDto) {
    try {
       const respose:any = await this.authService.authenticateUser(authenticateRequest);
       const userId = await this.userService.getUserIdByCognitoId(respose.aud)
       return {respose,userId}
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('signup')
  async signup(@Body() signupRequest: SignUpDto) {
    try {
      let userId
      const response: any = await this.authService.signupUser(signupRequest);

      if (response) {
        const data = {
          name: signupRequest.name,
          email: signupRequest.email,
          cognitoClientId: response.pool.clientId,
        };
       const user:any =  await this.userService.create(data);
       userId = user.id
      }
      return {response,userId};
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
