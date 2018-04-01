import { assert } from 'chai';
import { validateNif } from '../src/index';

describe('Nif test', () => {
  it('should be a valid NIF', () => {
    assert(validateNif('62805436A') >= 0);
  });

  it('should be a invalid NIF', () => {
    assert(validateNif('62805436X') < 0);
  });
});
