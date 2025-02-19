import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterUserDto {
  @IsEmail()
  email: string = '';

  @IsNotEmpty()
  @IsString()
  password: string = '';

  @IsNotEmpty()
  @IsString()
  firstName: string = '';

  @IsNotEmpty()
  @IsString()
  lastName: string = '';

  @IsNotEmpty()
  @IsString()
  role: string = '';

  @IsNotEmpty()
  @IsString()
  department: string = '';

  @IsOptional()
  @IsString()
  phoneNumber?: string; 

  @IsOptional()
  @IsString()
  profilePicture?: string;

  // New property for invitation token
  @IsOptional()
  @IsString()
  inviteToken?: string;
}
