import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class ChatMessageDto {
  @ApiProperty({ description: 'Unique message ID (for ack)', example: 'uuid-123', required: false })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({ description: 'Action: send a new message or ack a received one', example: 'send' })
  @IsString()
  @IsNotEmpty()
  action!: 'send' | 'ack';

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
  attachments?: string[];

  @ApiPropertyOptional({ description: 'ID of the message being acknowledged (only for ack)', example: 'uuid-123' })
  @IsOptional()
  @IsString()
  ackForMessageId?: string;
}

export class UpdateChatMessageDto extends PartialType(ChatMessageDto) {}

export class UpdateGroupPermissionsDto {
  @ApiProperty({ description: 'Permission to edit group settings (name, description)', required: false, default: false })
  @IsOptional()
  @IsBoolean()
  canEditSettings?: boolean;

  @ApiProperty({ description: 'Permission to send messages in the group', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  canSendMessage?: boolean;

  @ApiProperty({ description: 'Permission to add members to the group', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  canAddMembers?: boolean;
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
    description: 'An optional list of users IDs  add as initial members of the chat group',
    example: ['user-id-1', 'user-id-2'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  memberIds?: string[];

  @ApiProperty({description: 'This is the creator of the group',
    example: 'creators id'
  })
  @IsString()
  @IsNotEmpty()
  creatorId: string = '';

  
  @ApiPropertyOptional({
    description: 'Group profile picture URL',
    example: 'https://example.com/group-picture.png',
  })
  @IsOptional()
  @IsString()
  profilePicture?: string;

  @ApiPropertyOptional({
    description: 'Group description',
    example: 'This group is for discussing project updates',
  })
  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateChatGroupDto extends PartialType(CreateChatGroupDto) {}



export class AddGroupMemberDto {
  @ApiProperty({
    description: 'The ID of the chat group to which the member will be added',
    example: 'group-456',
  })
  @IsString()
  @IsNotEmpty()
  groupId: string = '';

  @ApiProperty({
    description: 'List of user IDs to add/remove',
    type: [String],
    example: ['user-123', 'user-456'],
  })
  @IsString()
  @IsArray()
  @IsNotEmpty()
  userId: string[] = [];
}

export class UpdateGroupMemberDto extends PartialType(AddGroupMemberDto) {}

