import { Deserializable } from './deserializable.interface';
import { BaseModel } from './base.model';
export class User extends BaseModel implements Deserializable<User> {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
  }

  deserialize(input: User): this {
    return Object.assign(this, input);
  }
}
