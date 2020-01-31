import { Deserializable } from './deserializable.interface';

export class User implements Deserializable<User> {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  deserialize(input: User): this {
    return Object.assign(this, input);
  }
}
