import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateFolderDto {
  @ApiProperty({ description: "Name of the folder" })
  @IsNotEmpty()
  name: string = '';

  @ApiProperty({ description: "Folder author" })
  @IsNotEmpty()
  @IsString()
  author_id: string = '';

}

  
  