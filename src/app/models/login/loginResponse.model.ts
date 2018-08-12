import { BaseResponseModel } from '../baseResponse.model';

export class LoginResponseModel extends BaseResponseModel {
  public token: string;
  public expiresIn: number;
  public userId: number;

  constructor ()  {
    super();
  }
}
