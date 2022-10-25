import { ApiProperty } from "@nestjs/swagger";

export class BalanceDetailsDto {
	@ApiProperty()
	readonly description: string;
	@ApiProperty()
	readonlyvalue: number;
	@ApiProperty()
	readonly date: string;
	@ApiProperty()
	readonly userId: string;
	@ApiProperty()
	readonly ategoriesId:string
	@ApiProperty()
	readonly type: string;
}
  