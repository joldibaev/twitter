import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'nurlan@joldibaev.uz',
  })
  email: string;

  @ApiProperty({
    example: 'Nurlan',
    required: false,
  })
  name?: string;
}
