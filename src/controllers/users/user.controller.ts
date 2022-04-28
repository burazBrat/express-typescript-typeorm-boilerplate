import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

// import { orm } from '../../orm/repositories/UnitOfWork';
import { UnitOfWork } from '../../orm/repositories/UnitOfWork';
import { CustomError } from '../../utils/response/custom-error/CustomError';

/**
 * Manage incoming requests for api/{version}/users
 */
export class UserController {
  private readonly orm: UnitOfWork;
  constructor() {
    this.orm = new UnitOfWork();
  }

  public async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.orm.userRepository.find();
      res.customSuccess(200, 'List of users.', null);
    } catch (err) {
      const customError = new CustomError(400, 'Raw', `Can't retrieve list of users.`, null, err);
      return next(customError);
    }
  }
}
