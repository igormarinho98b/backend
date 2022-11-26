import { BadRequestException, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BalanceDetailsService } from './balance-details.service';
import { BalanceDetailsDto } from './dtos/balance-details.dto';
@ApiBearerAuth()
@ApiTags('Balance')
@Controller('api/v1/balance-details')
export class BalanceDetailsController {

  constructor(private balanceDetailsService: BalanceDetailsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get(':userId')
  async findAllBalanceDetailsById(@Param('userId') userId: string): Promise<BalanceDetailsDto[] | []>{
    try {
      return await this.balanceDetailsService.findAll(userId);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
