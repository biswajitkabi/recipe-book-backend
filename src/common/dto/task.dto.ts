import { ApiProperty } from '@nestjs/swagger';

export class TaskRunDto {
  @ApiProperty({ example: true })
  runNow: boolean;
}
