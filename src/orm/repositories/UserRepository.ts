import { EntityTarget, FindManyOptions, getRepository, Repository } from 'typeorm';

export class UserRepository<T> {
  protected readonly repository: Repository<T>;

  constructor(entityTarget: EntityTarget<T>) {
    this.repository = getRepository(entityTarget);
  }

  public async find(options?: FindManyOptions<T>) {
    return this.repository.find(options);
  }
}
