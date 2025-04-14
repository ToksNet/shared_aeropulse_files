import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';


export class RegisterUserDto {
  @ApiProperty({ description: 'User email address', example: 'user@example.com' })
  @IsEmail()
  email: string = '';

  @ApiProperty({ description: 'User password', example: 'strongPassword1234' })
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
  @IsEnum(UserRole)
  role: UserRole = '';

  @ApiProperty({ description: 'User department', example: 'IT' })
  @IsNotEmpty()
  @IsString()
  department: string = '';


  @ApiPropertyOptional({ description: 'User phone number', example: '+1234567890' })
  @IsOptional()
  @IsString()
  phoneNumber?: string; 

  @ApiPropertyOptional({ description: 'Profile picture URL', example: 'https://example.com/profile.jpg' })
  @IsOptional()
  @IsString()
  profilePicture?: string;

  @ApiPropertyOptional({ description: 'Invitation token (if applicable)' })
  @IsOptional()
  @IsString()
  inviteToken?: string;
}

export class UpdateUserDto extends PartialType(RegisterUserDto) {
}

export class InviteUserDto {
  @ApiProperty({ description: 'Invited User email via address', example: 'user@example.com' })
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string = '';

  @ApiProperty({ description: 'Invited role', example: 'Admin or member' })
  @IsString({ message: 'Role must be a string' })
  @IsNotEmpty({ message: 'Role is required' })
  @IsEnum(UserRole)
  role: UserRole = '';

  @ApiProperty({ description: 'Invited User department', example: 'IT' })
  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department is required' })
  @MaxLength(100, { message: 'Department must not exceed 100 characters' })
  department: string = '';
}


export class LoginUserDto {

  @ApiProperty({ description: 'Login User with email address', example: 'user1@example.com' })
  @IsEmail()
  email: string = '';

  @ApiProperty({ description: 'Login with User password', example: 'strongPassword123' })
  @IsNotEmpty()
  @IsString()
  password: string = '';
}

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Engineering', description: 'Name of the department.' })
  @IsString()
  @MinLength(2)
  name: string = '';
}


