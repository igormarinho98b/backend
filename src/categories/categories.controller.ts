import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dtos/categories.dto';

@ApiBearerAuth()
@ApiTags('Categories')
@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  async getCategories(): Promise<CategoriesDto[]> {
    return await this.categoriesService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createCategory(
    @Body() category: CategoriesDto,
  ): Promise<CategoriesDto> {
    return await this.categoriesService.create(category);
  }
}
