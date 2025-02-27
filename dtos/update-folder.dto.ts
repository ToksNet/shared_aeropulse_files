import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateFolderDto {
    @ApiPropertyOptional({ description: "Updated name of the folder" })
    @IsOptional()
    name?: string = '';
  
    @ApiPropertyOptional({ description: "Updated folder path" })
    @IsOptional()
    @IsString()
    path?: string = '';
  }