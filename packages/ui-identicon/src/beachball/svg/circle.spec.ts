// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import xmlserializer from 'xmlserializer';

import circle from './circle';

describe('circle', (): void => {
  it('creates a basic SVG circle element', (): void => {
    expect(
      xmlserializer.serializeToString(
        circle(123, 12, 34)
      )
    ).toEqual('<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="34" r="123"/>');
  });
});
