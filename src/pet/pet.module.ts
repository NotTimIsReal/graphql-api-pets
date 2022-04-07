import { TypeOrmModule } from '@nestjs/typeorm';
import { PetResolver } from './pet.resolver';
import { Pet } from './pet.entity';
import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  controllers: [PetController],
  providers: [PetService, PetResolver],
})
export class PetModule {}
