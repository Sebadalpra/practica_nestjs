import { Injectable } from '@nestjs/common';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Instrumento } from './entities/instrumento.entity';
import { Model } from 'mongoose';

@Injectable()
export class InstrumentoService {
  constructor(@InjectModel('Instrumento') private instrumentoModel: Model<Instrumento>) {}

  async create(createInstrumentoDto: CreateInstrumentoDto) {
    const instancia = new this.instrumentoModel(createInstrumentoDto);
    const guardar = await instancia.save()
    return guardar;
  }

  findAll() {
    return `This action returns all instrumento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instrumento`;
  }

  update(id: number, updateInstrumentoDto: UpdateInstrumentoDto) {
    return `This action updates a #${id} instrumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} instrumento`;
  }
}
