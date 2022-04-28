import { User } from '../entities/users/User';

import { UserRepository } from './UserRepository';

export class UnitOfWork {
  public readonly userRepository: UserRepository<User>;

  // private static instance: UnitOfWork;

  constructor() {
    this.userRepository = new UserRepository(User);
  }

  // public static get(): UnitOfWork {
  //   if (!UnitOfWork.instance) {
  //     UnitOfWork.instance = new UnitOfWork();
  //   }
  //   return UnitOfWork.instance;
  // }
}

// const unitOfWork = UnitOfWork.get();
//
// export { unitOfWork as orm };
