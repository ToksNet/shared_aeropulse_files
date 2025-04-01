import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum DocumentPermissionType {
  VIEW = "VIEW",
  EDIT = "EDIT",
  OWNER = "OWNER"
}

export enum ActivityType {
  DOCUMENT_CREATED = "DOCUMENT_CREATED",
  DOCUMENT_UPDATED = "DOCUMENT_UPDATED",
  DOCUMENT_DELETED = "DOCUMENT_DELETED",
  DOCUMENT_SHARED = "DOCUMENT_SHARED",
  DOCUMENT_SIGNED = "DOCUMENT_SIGNED",
  OTHER = "OTHER"
}

export class CreateDocumentPermissionDto {
  @ApiProperty({ 
    description: "The type of permission to grant", 
    enum: DocumentPermissionType 
  })
  @IsEnum(DocumentPermissionType)
  @IsNotEmpty()
  permission: DocumentPermissionType = DocumentPermissionType.VIEW;

  @ApiProperty({ description: "ID of the user to grant permission to" })
  @IsString()
  @IsNotEmpty()
  userId: string = '';

  @ApiProperty({ description: "ID of the document" })
  @IsString()
  @IsNotEmpty()
  documentId: string = '';
}

export class CreateActivitiesDto {
  
  @ApiProperty({ description: "description of the activity" })
  @IsString()
  @IsNotEmpty()
  description: string = '';

  @ApiProperty({ 
    description: "The type of Activity", 
    enum: DocumentPermissionType 
  })
  @IsEnum(DocumentPermissionType)
  @IsNotEmpty()
  type: ActivityType = ActivityType.OTHER;

  @ApiProperty({ description: "ID of the author" })
  @IsString()
  @IsNotEmpty()
  authorId: string = '';

  @ApiProperty({ description: "ID of the document" })
  @IsString()
  @IsNotEmpty()
  documentId: string = '';
}

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
  @IsOptional()
  @IsBoolean()
  native?: boolean = true;

  @ApiProperty({ description: "Indicates if the document is starred", default: false })
  @IsOptional()
  @IsBoolean()
  starred?: boolean = false;
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




