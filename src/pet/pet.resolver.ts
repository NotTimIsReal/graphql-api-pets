import { CreatePetInput } from './dto/create-pet-input';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
@Resolver((of) => Pet)
export class PetResolver {
  constructor(private petService: PetService) {}
  @Query((returns) => Pet)
  async pet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return await this.petService.findOne(id);
  }
  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    const pet = await this.petService.findAll();
    return pet;
  }
  @Mutation((returns) => Pet)
  async createPet(
    @Args('createPetInput') CreatePetInput: CreatePetInput,
  ): Promise<Pet | string> {
    return await this.petService.createPet(CreatePetInput);
  }
}
