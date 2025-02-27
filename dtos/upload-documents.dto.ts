import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

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
