import { CreatePetInput } from './dto/create-pet-input';
import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}
  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }
  async createPet(pet: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(pet);
    return await this.petRepository.save(newPet);
  }
  async findOne(id: number): Promise<Pet> {
    return await this.petRepository.findOneBy({ id });
  }
}
