import { NoUndefPipe } from './no-undef.pipe';

describe('NoUndefPipe', () => {
  it('create an instance', () => {
    const pipe = new NoUndefPipe();
    expect(pipe).toBeTruthy();
  });
});
