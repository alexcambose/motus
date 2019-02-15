import {throwError} from '../../src/helpers/';
import { UNKNOWN_PROPERTY_VALUE } from '../../src/enum/errorEnum';

describe('throwError', () => {
  it('throws error', () => {
    expect(() => {
      throwError();
    }).toThrow();
  });
  it('calls custom error string function with arguments', () => {
    const param = 123;
    expect(() => {
      throwError(UNKNOWN_PROPERTY_VALUE, param);
    }).toThrowError(new Error(UNKNOWN_PROPERTY_VALUE(param)));
  });
});