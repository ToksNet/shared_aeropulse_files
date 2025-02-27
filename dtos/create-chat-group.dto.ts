import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

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
