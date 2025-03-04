import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ChatMessageDto {
  @ApiProperty({
    description: 'The ID of the user sending the message',
    example: 'user-123',
  })
  @IsString()
  @IsNotEmpty()
  senderId: string = '';

  @ApiProperty({
    description: 'The ID of the recipient sending the message',
    example: 'recipient-123',
  })
  @IsString()
  @IsOptional()
  recipientId?: string = '';

  @ApiPropertyOptional({
    description: 'The chat group ID if the message is being sent to a group. For direct messages, this field can be omitted.',
    example: 'group-456',
  })
  @IsOptional()
  @IsString()
  groupId?: string;

  @ApiPropertyOptional({
    description: 'The text content of the chat message. This field is optional if the message only contains an attachment.',
    example: 'Hello, team!',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'A URL or file path for an attachment, such as an image or document, if any.',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsString()
  attachmentUrl?: string;
}


export class CreateChatGroupDto {
  @ApiProperty({
    description: 'The name of the chat group',
    example: 'Team Chat',
  })
  @IsString()
  @IsNotEmpty()
  name: string = '';

  @ApiPropertyOptional({
    description: 'An optional list of user IDs to add as initial members of the chat group',
    example: ['user-id-1', 'user-id-2'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  memberIds?: string[];
}


export class AddGroupMemberDto {
  @ApiProperty({
    description: 'The ID of the chat group to which the member will be added',
    example: 'group-456',
  })
  @IsString()
  @IsNotEmpty()
  groupId: string = '';

  @ApiProperty({
    description: 'The ID of the user to add as a member of the chat group',
    example: 'user-789',
  })
  @IsString()
  @IsNotEmpty()
  userId: string = '';
}
