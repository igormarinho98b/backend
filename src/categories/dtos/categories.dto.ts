import { ApiProperty } from '@nestjs/swagger';

export class CategoriesDto {
  @ApiProperty()
  readonly name: string;
}
