// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ColorGen } from './types';

import newSeeder from './seeder';
import newColors from './colors';

describe('colors', (): void => {
  let colors: ColorGen;

  beforeEach((): void => {
    colors = newColors(newSeeder());
  });

  it('generates using default alpha', (): void => {
    expect(
      colors()
    ).toEqual(
      // 'hsla(166.70000000000005, 98.6%, 27.6%, 0.9)'
      'hsl(37.19999999999999, 100%, 54.9%)'
    );
  });

  it('applies specified alpha', (): void => {
    expect(
      colors(0.5)
    ).toEqual(
      // 'hsla(166.70000000000005, 98.6%, 27.6%, 0.5)'
      'hsla(37.19999999999999, 100%, 54.9%, 0.5)'
    );
  });

  it('rolates colors', (): void => {
    colors();

    expect(
      colors()
    ).not.toEqual('hsla(166.70000000000005, 98.6%, 27.6%, 0.9)');
  });

  it('works in edge conditions (0xff)', (): void => {
    const u8a = new Uint8Array(32);

    u8a.fill(255);

    expect(
      colors = newColors(newSeeder(u8a))
    ).not.toThrow();

    expect(
      colors()
    ).toEqual(
      // 'hsla(234.39999999999998, 75.9%, 51.2%, 0.9)'
      'hsl(15, 0%, 100%)'
    );
  });
});
