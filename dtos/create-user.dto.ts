import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({ description: 'User email address', example: 'user@example.com' })
  @IsEmail()
  email: string = '';

  @ApiProperty({ description: 'User password', example: 'strongPassword123' })
  @IsNotEmpty()
  @IsString()
  password: string = '';

  @ApiProperty({ description: 'User first name', example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName: string = '';

  @ApiProperty({ description: 'User last name', example: 'Ayodele' })
  @IsNotEmpty()
  @IsString()
  lastName: string = '';

  @ApiProperty({ description: 'User role', example: 'Admin' })
  @IsNotEmpty()
  @IsString()
  role: string = '';

  @ApiProperty({ description: 'User department', example: 'IT' })
  @IsNotEmpty()
  @IsString()
  department: string = '';

  @ApiPropertyOptional({ description: 'User phone number', example: '+1234567890' })
  @IsOptional()
  @IsString()
  phoneNumber?: string; 

  @ApiPropertyOptional({ description: 'Profile picture URL', example: 'https://example.com/image.jpg' })
  @IsOptional()
  @IsString()
  profilePicture?: string;

  @ApiPropertyOptional({ description: 'Invitation token if applicable' })
  @IsOptional()
  @IsString()
  inviteToken?: string;
}
