import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'Ivan123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
