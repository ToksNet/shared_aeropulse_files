import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFolderDto {
  @ApiProperty({ description: "Name of the folder" })
  @IsNotEmpty()
  name: string = '';

  @ApiPropertyOptional({ description: "Updated folder ID of the document" })
  @IsOptional()
  @IsString()
  folder_id?: string = '';

  @ApiProperty({ description: "Folder author" })
  @IsNotEmpty()
  @IsString()
  author_id: string = '';  

}


export class UpdateFolderDto {
  @ApiPropertyOptional({ description: "Updated name of the folder" })
  @IsOptional()
  name?: string = '';

  @ApiPropertyOptional({ description: "Updated folder ID of the document" })
  @IsOptional()
  @IsString()
  folder_id?: string = '';

  @ApiPropertyOptional({ description: "Updated folder path" })
  @IsOptional()
  @IsString()
  path?: string = '';
}

  
  