// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type Options = {
  disabled?: boolean;
  text: string;
  value: string;
}[]

export interface SettingsStruct {
  apiUrl: string;
  i18nLang: string;
  locking: string;
  uiMode: string;
  uiTheme: string;
}
