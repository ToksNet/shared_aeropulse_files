import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class LoginUserDto {

  @ApiProperty({ description: 'Login User with email address', example: 'user@example.com' })
  @IsEmail()
  email: string = '';

  @ApiProperty({ description: 'Login with User password', example: 'strongPassword123' })
  @IsNotEmpty()
  @IsString()
  password: string = '';
}
