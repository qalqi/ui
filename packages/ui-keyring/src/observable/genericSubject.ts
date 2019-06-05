// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubjectInfo, AddressSubject, SingleAddress, ObservableParams } from './types';
import { KeyringJson, KeyringStore } from '../types';

import { BehaviorSubject } from 'rxjs';

import createOptionItem from '../options/item';
import development from './development';

const callNext = (
  current: SubjectInfo,
  subject: BehaviorSubject<any>,
  withTest: boolean,
  params: ObservableParams = {}
): void => {
  const { genesisHash } = params;
  const isDevMode = development.isDevelopment();

  subject.next(
    Object.keys(current).reduce((filtered, key) => {
      const { json: { meta: { contract = undefined, isTesting = false } = {} } = {} } = current[key];

      console.log({ withTest, isDevMode, genesisHash, contract });
      if (
        (!withTest || isDevMode || isTesting !== true) &&
        (!genesisHash || !contract || (contract && contract.genesisHash === genesisHash))
      ) {
        filtered[key] = current[key];
      }

      return filtered;
    }, {} as SubjectInfo)
  );
};

export default function genericSubject (keyCreator: (address: string) => string, withTest: boolean = false): (params?: ObservableParams) => AddressSubject {
  return (params?: ObservableParams): AddressSubject => {
    let current: SubjectInfo = {};
    const subject = new BehaviorSubject({});
    const next = (): void =>
      callNext(current, subject, withTest, params);

    development.subject.subscribe(next);

    return {
      add: (store: KeyringStore, address: string, json: KeyringJson): SingleAddress => {
        current = { ...current };

        current[address] = {
          json: {
            ...json,
            address
          },
          option: createOptionItem(address, json.meta.name, !json.meta.isRecent)
        };

        const isDevMode = development.isDevelopment();

        if (!json.meta.isInjected && (!json.meta.isTesting || isDevMode)) {
          store.set(keyCreator(address), json);
        }

        next();

        console.log(current);

        return current[address];
      },
      remove: (store: KeyringStore, address: string) => {
        current = { ...current };

        delete current[address];

        store.remove(keyCreator(address));
        next();
      },
      subject
    };
  };
}
