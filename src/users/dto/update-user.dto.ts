import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'nurlan@joldibaev.uz',
    required: false,
  })
  email?: string;

  @ApiProperty({
    example: 'Nurlan',
    required: false,
  })
  name?: string;
}
