// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import React from 'react';
import jdenticon from 'jdenticon';

export default class Jdenticon extends React.PureComponent<Props> {
  public render (): React.ReactNode {
    const { className, publicKey, size, style } = this.props;

    return (
      <div
        className={`container ${className}`}
        style={style}
        dangerouslySetInnerHTML={ {
          __html: jdenticon.toSvg(publicKey.substr(2), size)
        } }
      />
    );
  }
}
