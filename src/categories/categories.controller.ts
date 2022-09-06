import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoriesDto } from './dtos/categories.dto';

@ApiTags('Categories')
@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('list')
  async getCategories(): Promise<CategoriesDto[]> {
    return await this.categoriesService.findAll();
  }

  @Post('create')
  async createCategory(
    @Body() category: CategoriesDto,
  ): Promise<CategoriesDto> {
    return await this.categoriesService.create(category);
  }
}
