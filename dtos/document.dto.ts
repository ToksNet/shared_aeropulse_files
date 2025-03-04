import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateDocumentDto {
  @ApiProperty({ description: "Name of the file" })
  @IsNotEmpty()
  file_name: string = '';

  @ApiProperty({ description: "Author ID of the document" })
  @IsNotEmpty()
  @IsString()
  author_id: string = '';

  @ApiProperty({ description: "Content of the document" })
  @IsNotEmpty()
  @IsString()
  content: string = '';

  @ApiProperty({ description: "Indicates if the document is native", default: true })
  @IsNotEmpty()
  @IsBoolean()
  native: boolean = true;
}



export class UpdateDocumentDto {
  @ApiPropertyOptional({ description: "Updated file name" })
  @IsOptional()
  fileName?: string = '';

  @ApiPropertyOptional({ description: "Updated file path" })
  @IsOptional()
  @IsString()
  path?: string = '';

  @ApiPropertyOptional({ description: "Updated MIME type" })
  @IsOptional()
  @IsString()
  mimeType?: string = '';

  @ApiPropertyOptional({ description: "Updated content of the document" })
  @IsOptional()
  @IsString()
  content?: string = '';

  @ApiProperty({ description: "Indicates if the document is native", default: true })
  @IsNotEmpty()
  @IsBoolean()
  native: boolean = true;
}

export class UploadDocumentDto {
  @ApiProperty({ description: "Name of the file" })
  @IsNotEmpty()
  file_name: string = '';

  @ApiProperty({ description: "Author ID of the document" })
  @IsNotEmpty()
  @IsString()
  author_id: string = '';

  @ApiProperty({ description: "File storage path" })
  @IsNotEmpty()
  @IsString()
  path: string = '';

  @ApiProperty({ description: "MIME type of the document" })
  @IsNotEmpty()
  @IsString()
  mime_type: string = '';

  @ApiProperty({ description: "Indicates if the document is native", default: false })
  @IsNotEmpty()
  @IsBoolean()
  native: boolean = false;
}




