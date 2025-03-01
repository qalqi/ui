// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from '@polkadot/util-crypto/address/types';
import { IdentityProps as Props, Props as ComponentProps } from './types';

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import settings from '@polkadot/ui-settings';
import { isHex, isU8a, u8aToHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

import { Beachball, Empty, Jdenticon, Polkadot } from './icons';

const Fallback = Beachball;

interface State {
  address: string;
  publicKey: string;
}

const DEFAULT_SIZE = 64;
const Components: { [index: string]: React.ComponentType<ComponentProps> } = {
  beachball: Beachball,
  jdenticon: Jdenticon,
  polkadot: Polkadot,
  substrate: Jdenticon
};
const Wrapper = styled.div`
  cursor: copy;
  display: inline-block;
  line-height: 0;

  > .container {
    position: relative;

    > div,
    > svg {
      position: relative;
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px #e0e0e0;
      content: '';
    }

    &.highlight:before {
      box-shadow: 0 0 5px 2px red;
    }
  }
`;

export default class IdentityIcon extends React.PureComponent<Props, State> {
  public state: State = {
    address: '',
    publicKey: '0x'
  };

  private static prefix?: Prefix = undefined;

  public static setDefaultPrefix (prefix: Prefix): void {
    IdentityIcon.prefix = prefix;
  }

  public static getDerivedStateFromProps ({ prefix = IdentityIcon.prefix, value }: Props, prevState: State): State | null {
    try {
      const address = isU8a(value) || isHex(value)
        ? encodeAddress(value, prefix)
        : (value || '');
      const publicKey = u8aToHex(decodeAddress(address, false, prefix));

      return address === prevState.address
        ? null
        : {
          address,
          publicKey
        };
    } catch (error) {
      return {
        address: '',
        publicKey: '0x'
      };
    }
  }

  public render (): React.ReactNode {
    const { address } = this.state;
    const wrapped = this.getWrapped(this.state);

    return !address
      ? wrapped
      : (
        <CopyToClipboard
          onCopy={this.onCopy}
          text={address}
        >
          {wrapped}
        </CopyToClipboard>
      );
  }

  private getWrapped ({ address, publicKey }: State): React.ReactNode {
    const { className, isHighlight = false, size = DEFAULT_SIZE, style, theme = settings.uiTheme } = this.props;
    const Component = !address
      ? Empty
      : Components[theme] || Fallback;

    return (
      <Wrapper
        className={`ui--IdentityIcon ${className}`}
        key={address}
        style={style}
      >
        <Component
          address={address}
          className={isHighlight ? 'highlight' : ''}
          publicKey={publicKey}
          size={size}
        />
      </Wrapper>
    );
  }

  private onCopy = (): void => {
    const { onCopy } = this.props;
    const { address } = this.state;

    if (address && onCopy) {
      onCopy(address);
    }
  }
}
