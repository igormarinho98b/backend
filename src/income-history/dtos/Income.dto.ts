import { ApiProperty } from "@nestjs/swagger";


export class IncomeDto {
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly value: number;
  @ApiProperty()
  readonly userId: string;
}
