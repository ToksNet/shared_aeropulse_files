import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class InviteUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string = '';

  @IsString({ message: 'Role must be a string' })
  @IsNotEmpty({ message: 'Role is required' })
  @MaxLength(50, { message: 'Role must not exceed 50 characters' })
  role: string = '';

  @IsString({ message: 'Department must be a string' })
  @IsNotEmpty({ message: 'Department is required' })
  @MaxLength(100, { message: 'Department must not exceed 100 characters' })
  department: string = '';
}
