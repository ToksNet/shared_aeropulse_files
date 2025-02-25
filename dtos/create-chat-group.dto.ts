// dtos/create-chat-group.dto.ts
import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class CreateChatGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string = '';

  // Optional: List of user IDs to add as initial members.
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  memberIds?: string[];
}
