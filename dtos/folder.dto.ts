import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { DocumentType } from "./document.dto";

export class CreateFolderDto {
  @ApiProperty({ description: "Name of the folder" })
  @IsNotEmpty()
  name: string = '';


  @ApiProperty({ description: "Document type" })
  @IsNotEmpty()
  @IsEnum(DocumentType)
  document_type: DocumentType = DocumentType.FOLDER;  
  

  @ApiProperty({ description: "Folder author" })
  @IsNotEmpty()
  @IsString()
  author_id: string = '';  

}


export class UpdateFolderDto {
  @ApiPropertyOptional({ description: "Updated name of the folder" })
  @IsOptional()
  name?: string = '';
}

