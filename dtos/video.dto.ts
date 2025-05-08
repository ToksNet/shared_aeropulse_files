import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';


export class CreateCallDto {
  @ApiProperty({ description: 'Initiator user ID' })
  @IsString() initiatorId: string;

  @ApiPropertyOptional({ description: 'Invitee user IDs', type: [String] })
  @IsOptional() @IsArray() @IsString({ each: true })
  participantIds?: string[];
}
  
  // src/dtos/join-call.dto.ts
  export class JoinCallDto {
    @ApiProperty({ description: 'Call session ID' })
    @IsInt() callSessionId: number;
  
    @ApiProperty({ description: 'User ID joining' })
    @IsString() userId: string;
  }

  // src/dtos/send-offer.dto.ts
  export class SendOfferDto {
    @ApiProperty() @IsInt() callSessionId: number;
    @ApiProperty() @IsString() senderId: string;
    @ApiProperty() @IsString() receiverId: string;
    @ApiProperty() @IsObject() offer: any;
  }

  // src/dtos/send-answer.dto.ts
export class SendAnswerDto {
  @ApiProperty({ description: 'Call session ID' })
  @IsInt()
  callSessionId: number;

  @ApiProperty({ description: 'Sender user ID' })
  @IsString()
  senderId: string;

  @ApiProperty({ description: 'Receiver user ID' })
  @IsString()
  receiverId: string;

  @ApiProperty({ description: 'SDP answer payload' })
  @IsObject()
  answer: any;
}

  // src/dtos/send-ice.dto.ts
  export class SendIceDto {
    @ApiProperty({ description: 'Call session ID' })
    @IsInt()
    callSessionId: number;
  
    @ApiProperty({ description: 'Sender user ID' })
    @IsString()
    senderId: string;
  
    @ApiProperty({ description: 'Receiver user ID' })
    @IsString()
    receiverId: string;
  
    @ApiProperty({ description: 'ICE candidate object' })
    @IsObject()
    candidate: any;
  }

  // src/dtos/raise-hand.dto.ts
  export class RaiseHandDto {
    @ApiProperty({ description: 'Call session ID' })
    @IsInt()
    callSessionId: number;
  
    @ApiProperty({ description: 'User ID raising hand' })
    @IsString()
    userId: string;
  }

  // src/dtos/toggle-screen.dto.ts
  export class ToggleScreenDto {
    @ApiProperty({ description: 'Call session ID' })
    @IsInt()
    callSessionId: number;
  
    @ApiProperty({ description: 'User ID toggling screen share' })
    @IsString()
    userId: string;
  
    @ApiProperty({
      description: 'true = start sharing, false = stop sharing',
    })
    @IsBoolean()
    isSharing: boolean;
  }


  export class InCallChatDto {
    @ApiProperty({ description: 'Video call session ID' })
    @IsInt() callSessionId: number;
  
    @ApiProperty({ description: 'User ID sending the message' })
    @IsString() senderId: string;
  
    @ApiProperty({ description: 'Chat message content' })
    @IsString() message: string;
  }

  // src/dtos/leave-call.dto.ts
  export class LeaveCallDto {
    @ApiProperty({ description: 'Call session ID' })
    @IsInt()
    callSessionId: number;
  
    @ApiProperty({ description: 'User ID leaving the call' })
    @IsString()
    userId: string;
  }
  