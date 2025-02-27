import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
  
  