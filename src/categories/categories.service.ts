import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesDto } from './dtos/categories.dto';
import { Categories } from '../infra/database/my-finances/entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
  ) {}

  async findAll(): Promise<CategoriesDto[]> {
    return await this.categoryRepository.find();
  }

  async create(category: CategoriesDto): Promise<CategoriesDto> {
    return await this.categoryRepository.save(category);
  }
}
