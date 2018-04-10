import { expect } from './support/TestSupport';

import { helloWorld } from '../src/lib';

describe('helloWorld', () => {
  it('should work', () => {
    expect(helloWorld('world')).to.equal('hello world!');
  });
});
