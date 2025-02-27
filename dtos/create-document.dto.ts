import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


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

