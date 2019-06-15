import {DefaultCrudRepository} from '@loopback/repository';
import {Ustodo, UstodoRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UstodoRepository extends DefaultCrudRepository<
  Ustodo,
  typeof Ustodo.prototype.id,
  UstodoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Ustodo, dataSource);
  }
}
