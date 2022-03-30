import { Inject, Injectable } from '@nestjs/common';
import { Sobre } from 'src/entities/sobre.entity';
import { SobreDto } from './dto/sobre.dto';

@Injectable()
export class SobreService {
  constructor(
    @Inject('SOBRE_REPOSITORY')
    private sobreRepository: typeof Sobre,
  ) {}

  find() {
    return this.sobreRepository.findOne({
      where: {
        id: 1,
      },
    });
  }

  async update(updateSobreDto: SobreDto): Promise<Sobre> {
    const sobre: Sobre = await this.find();
    await sobre.update({ ...updateSobreDto });
    return sobre;
  }
}
