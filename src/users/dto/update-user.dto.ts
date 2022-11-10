import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsAlpha, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'nurlan@joldibaev.uz',
  })
  readonly email: string;

  @IsOptional()
  @IsAlpha()
  @ApiPropertyOptional({
    example: 'Nurlan',
  })
  readonly name?: string;
}
