import { ApiProperty } from "@nestjs/swagger";


export class OutcomeDto {
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly value: number;
  @ApiProperty()
  readonly userId: string;
  @ApiProperty()
  readonly categoriesId:string
}
