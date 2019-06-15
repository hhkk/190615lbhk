import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Ustodo extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  utdtext: string;


  constructor(data?: Partial<Ustodo>) {
    super(data);
  }
}

export interface UstodoRelations {
  // describe navigational properties here
}

export type UstodoWithRelations = Ustodo & UstodoRelations;
