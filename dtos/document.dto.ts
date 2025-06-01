import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Documents } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum DocumentPermissionType {
  VIEW = "VIEW",
  EDIT = "EDIT",
  OWNER = "OWNER"
}

export enum ActivityType {
  DOCUMENT_CREATED = "DOCUMENT_CREATED",
  DOCUMENT_UPDATED = "DOCUMENT_UPDATED",
  DOCUMENT_MOVED_TO_TRASH = "DOCUMENT_MOVED_TO_TRASH",
  DOCUMENT_MOVED_TO_FOLDER = "DOCUMENT_MOVED_TO_FOLDER",
  DOCUMENT_DELETED = "DOCUMENT_DELETED",
  DOCUMENT_SHARED = "DOCUMENT_SHARED",
  DOCUMENT_STARRED = "DOCUMENT_STARRED",
  DOCUMENT_UNSTARRED = "DOCUMENT_UNSTARRED",
  DOCUMENT_SIGNED = "DOCUMENT_SIGNED",
  PERMISSION_REQUEST = "PERMISSION_REQUEST",
  OTHER = "OTHER"
}

export enum DocumentType {
  FOLDER = "FOLDER",
  FILE = "FILE",
}


export interface DocumentResponseDTO{
  success: boolean
  message : string
  document?: Documents
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

export class updateDocumentPermissionDto {
  @ApiProperty({ 
    description: "The type of permission to grant", 
    enum: DocumentPermissionType 
  })
  @IsEnum(DocumentPermissionType)
  @IsNotEmpty()
  permission: DocumentPermissionType = DocumentPermissionType.VIEW;
}

export class CreateActivitiesDto {
  
  @ApiProperty({ description: "description of the activity" })
  @IsString()
  @IsNotEmpty()
  description: string = '';

  @ApiProperty({ 
    description: "The type of Activity", 
    enum: ActivityType 
  })
  @IsEnum(ActivityType)
  @IsNotEmpty()
  activityType: ActivityType = ActivityType.OTHER;

  @ApiProperty({ description: "ID of the author" })
  @IsString()
  @IsNotEmpty()
  author_id: string = '';

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

  @ApiProperty({ 
    description: "Type of the document", 
    enum: DocumentType 
   })
  @IsNotEmpty()
  @IsEnum(DocumentType)
  document_type: DocumentType = DocumentType.FILE

  @ApiProperty({ description: "department the document belongs to" })
  @IsNotEmpty()
  @IsString()
  department: string = '';

  @ApiProperty({ description: "Indicates if the document is native", default: true })
  @IsNotEmpty()
  @IsBoolean()
  native: boolean = true;

  @ApiProperty({ description: "Indicates if the document is marked as favorite", default: true })
  @IsOptional()
  @IsBoolean()
  starred: boolean = false;
  
  @ApiProperty({ description: "Folder ID of the document" })
  @IsOptional()
  @IsString()
  folder_id?: string = '';
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
  
  @ApiProperty({ description: "Folder ID of the document" })
  @IsOptional()
  @IsString()
  folder_id?: string = '';

  @ApiProperty({ description: "Modifier's ID of the document" })
  @IsOptional()
  @IsString()
  modified_by?: string = '';
}


export class DeleteDocumentDto {
  @ApiProperty({ description: "Indicates if the document is deleted", default: false })
  @IsNotEmpty()
  @IsBoolean()
  deleted: boolean = false;
}


export class StarDocumentDto {
  @ApiProperty({ description: "Indicates if the document is deleted", default: false })
  @IsNotEmpty()
  @IsBoolean()
  starred: boolean = false;
}


export class MoveDocumentDto {
  @ApiProperty({ description: "Folder ID of the document" })
  @IsNotEmpty()
  @IsString()
  folder_id: string = '';
}

export class ShareDocumentDto {
  @Transform(({ value }) => (Array.isArray(value) ? value : Array(value)))
  
  @ApiProperty({ description: "ID of the User you want to share the document with document" })
  @IsNotEmpty()
  @IsString()
  sharedUserId: string = '';

  @ApiProperty({ 
    description: "The type of permission to grant", 
    enum: DocumentPermissionType 
  })
  @IsEnum(DocumentPermissionType)
  @IsNotEmpty()
  permission: DocumentPermissionType = DocumentPermissionType.VIEW;
}

export class ShareDocumentWithUsersDto {
  @ApiProperty({ description: "ID of the Users you want to share the document with document" })
  @IsNotEmpty()
  @IsArray()
  sharedUserIds: string[] = [];

  @ApiProperty({ 
    description: "The type of permission to grant", 
    enum: DocumentPermissionType 
  })
  @IsEnum(DocumentPermissionType)
  @IsNotEmpty()
  permission: DocumentPermissionType = DocumentPermissionType.VIEW;
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

  @ApiProperty({ description: "Folder ID of the document" })
  @IsOptional()
  @IsString()
  folder_id?: string = '';
}

export class NotificationDto {
  @ApiProperty({
    description: 'The ID of the user sending the Notification',
    example: 'user-123',
  })
  @IsString()
  @IsNotEmpty()
  senderId: string = '';

  @ApiProperty({
    description: 'The IDs of the recipients receiving The notifications',
  })
  @IsArray()
  @IsNotEmpty()
  recipientIds?: string[] = [];


  @ApiPropertyOptional({
    description: 'The text content of the Notification.',
  })
  @IsOptional()
  @IsString()
  content?: string;
}




