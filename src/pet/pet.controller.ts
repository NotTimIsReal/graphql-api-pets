import { PetService } from './pet.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Pet } from './pet.entity';

@Controller('pet')
export class PetController {}
