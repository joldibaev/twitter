import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'nurlan@joldibaev.uz',
  })
  readonly email: string;

  @IsString()
  @ApiProperty({
    example: '123456',
  })
  readonly password: string;
}
