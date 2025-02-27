import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class FolderDto {
    @ApiProperty({ description: "Name of the folder" })
    @IsNotEmpty()
    name: string = '';
  
    @ApiProperty({ description: "Folder path" })
    @IsNotEmpty()
    @IsString()
    path?: string = '';
  }
  
  