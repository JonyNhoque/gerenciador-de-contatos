import { IsNotEmpty } from "class-validator";

export class CriarUsuarioDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
