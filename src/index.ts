import 'core-js/es/string/starts-with';
import 'core-js/es/array/from';
import 'core-js/es/typed-array/slice';
import 'core-js/es/array/includes';
import 'core-js/es/string/includes';
import 'promise-polyfill/src/polyfill';
import 'fast-text-encoding';

import Auth0Client from './Auth0Client';
import * as ClientStorage from './storage';

//this is necessary to export the type definitions used in this file
import './global';
import { validateCrypto } from './utils';

export default function createAuth0Client(options: Auth0ClientOptions) {
  validateCrypto();

  const auth0 = new Auth0Client(options);

  if (!ClientStorage.get('auth0.is.authenticated')) {
    auth0
      .getTokenSilently({
        audience: options.audience,
        scope: options.scope,
        ignoreCache: true
      })
      // ignore
      .catch(e => null);
  }

  return auth0;
}
