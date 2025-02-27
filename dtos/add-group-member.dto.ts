import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

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
