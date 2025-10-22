import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, {type ObjectId } from "mongoose";

@Schema() // Decorador que marca una colección en la base de datos.
export class Instrumento {
    // @Prop({ type: mongoose.Schema.Types.ObjectId }) // Definición del campo _id como ObjectId
    _id: ObjectId;

    // datos que vienen del DTO
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    tipo: string;

    @Prop({required: true})
    marca: string;

    // Array
    @Prop({type: [String]})
    accesorios: string[];

    // valor por defecto, fecha actual
    @Prop({default: Date.now})
    fechaCreacion: Date;

}

export const InstrumentoSchema = SchemaFactory.createForClass(Instrumento);
