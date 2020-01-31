import { User } from './user.model';

describe('User.Model', () => {
  it('should create an instance', () => {
    expect(new User('fakeEmail@gmail.com', '123456')).toBeTruthy();
  });
});
