import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class InviteUserDto {
  @ApiProperty({ description: 'Invite users by email', example: 'user@example.com' })
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string = '';

  @ApiProperty({ description: 'Invitee role', example: 'Admin or member' })
  @IsString({ message: 'Role must be a string' })
  @IsNotEmpty({ message: 'Role is required' })
  @MaxLength(50, { message: 'Role must not exceed 50 characters' })
  role: string = '';

  @ApiProperty({ description: 'Invitee department', example: 'IT' })
  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department is required' })
  @MaxLength(100, { message: 'Department must not exceed 100 characters' })
  department: string = '';
}
