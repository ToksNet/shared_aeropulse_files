import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UploadDocumentDto {
  @IsNotEmpty()
  file_name: string = '';

  @IsNotEmpty()
  @IsString()
  author_id: string = '';

  @IsNotEmpty()
  @IsString()
  path: string = '';

  @IsNotEmpty()
  @IsString()
  mime_type: string = '';

  @IsNotEmpty()
  @IsBoolean()
  native: boolean = false;
}

export class CreateDocumentDto {
  @IsNotEmpty()
  file_name: string = '';

  @IsNotEmpty()
  @IsString()
  author_id: string = '';

  @IsNotEmpty()
  @IsString()
  content: string = '';

  @IsNotEmpty()
  @IsBoolean()
  native: boolean = true;
}

export class UpdateDocumentDto {
  @IsNotEmpty()
  fileName?: string = '';

  @IsOptional()
  @IsString()
  path?: string = '';

  @IsOptional()
  @IsString()
  mimeType?: string = '';
  
  @IsOptional()
  @IsString()
  content?: string = '';

  @IsNotEmpty()
  @IsBoolean()
  native: boolean = true;
  
}

export class FolderDto {
  @IsNotEmpty()
  name: string = '';

  @IsNotEmpty()
  @IsString()
  path?: string = '';
}

export class updateFolderDto {
  @IsNotEmpty()
  name?: string = '';

  @IsNotEmpty()
  @IsString()
  path?: string = '';
}