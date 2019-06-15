import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Ustodo} from '../models';
import {UstodoRepository} from '../repositories';

export class UstodoController {
  constructor(
    @repository(UstodoRepository)
    public ustodoRepository : UstodoRepository,
  ) {}

  @post('/ustodos', {
    responses: {
      '200': {
        description: 'Ustodo model instance',
        content: {'application/json': {schema: {'x-ts-type': Ustodo}}},
      },
    },
  })
  async create(@requestBody() ustodo: Ustodo): Promise<Ustodo> {
    return await this.ustodoRepository.create(ustodo);
  }

  @get('/ustodos/count', {
    responses: {
      '200': {
        description: 'Ustodo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ustodo)) where?: Where<Ustodo>,
  ): Promise<Count> {
    return await this.ustodoRepository.count(where);
  }

  @get('/ustodos', {
    responses: {
      '200': {
        description: 'Array of Ustodo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Ustodo}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ustodo)) filter?: Filter<Ustodo>,
  ): Promise<Ustodo[]> {
    return await this.ustodoRepository.find(filter);
  }

  @patch('/ustodos', {
    responses: {
      '200': {
        description: 'Ustodo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() ustodo: Ustodo,
    @param.query.object('where', getWhereSchemaFor(Ustodo)) where?: Where<Ustodo>,
  ): Promise<Count> {
    return await this.ustodoRepository.updateAll(ustodo, where);
  }

  @get('/ustodos/{id}', {
    responses: {
      '200': {
        description: 'Ustodo model instance',
        content: {'application/json': {schema: {'x-ts-type': Ustodo}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Ustodo> {
    return await this.ustodoRepository.findById(id);
  }

  @patch('/ustodos/{id}', {
    responses: {
      '204': {
        description: 'Ustodo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() ustodo: Ustodo,
  ): Promise<void> {
    await this.ustodoRepository.updateById(id, ustodo);
  }

  @put('/ustodos/{id}', {
    responses: {
      '204': {
        description: 'Ustodo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ustodo: Ustodo,
  ): Promise<void> {
    await this.ustodoRepository.replaceById(id, ustodo);
  }

  @del('/ustodos/{id}', {
    responses: {
      '204': {
        description: 'Ustodo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ustodoRepository.deleteById(id);
  }
}
