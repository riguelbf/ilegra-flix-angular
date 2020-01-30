import { Deserializable } from './deserializable.interface';

export class User implements Deserializable<User> {
  public email: string;
  public password: string;

  deserialize(input: User): this {
    return Object.assign(this, input);
  }
}
