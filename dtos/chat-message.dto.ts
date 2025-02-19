import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ChatMessageDto {
  @IsString()
  @IsNotEmpty()
  senderId: string = '';

  // For group chats; if absent, this can be treated as a direct/private message.
  @IsString()
  @IsOptional()
  groupId?: string;

  // The text content of the message (optional if sending only an attachment)
  @IsString()
  @IsOptional()
  content?: string;

  // URL or path to an attachment, e.g., a document, image, etc.
  @IsString()
  @IsOptional()
  attachmentUrl?: string;
}
