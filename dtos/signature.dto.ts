import { ApiProperty } from "@nestjs/swagger";
import { IsArray , IsNotEmpty, IsString } from "class-validator";

export class CreateESignatureDto {
  @ApiProperty({ description: "Name of the file" })
  @IsNotEmpty()
  path: string = '';

  @ApiProperty({ description: "user ID of the ESignature" })
  @IsNotEmpty()
  @IsString()
 user_id: string = '';
}

export class UpdateESignatureDto {
  @ApiProperty({ description: "Name of the file" })
  @IsNotEmpty()
  path: string = '';
}