import { IsNotEmpty, IsString } from "class-validator";

export class CreateInstrumentoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

    @IsString()
    @IsNotEmpty()
    marca: string;
}
