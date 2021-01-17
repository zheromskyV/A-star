import { HeaderNavLinksModel } from '../models/header-nav-links';

import { dictionary } from './dictionary';
import { routes } from './routes';

export const headerNavLinks: HeaderNavLinksModel = {
  home: {
    name: dictionary.home,
    url: routes.home,
  },
  algorithm: {
    name: dictionary.algorithm,
    url: routes.algorithm,
  },
  about: {
    name: dictionary.about,
    url: routes.about,
  },
  contact: {
    name: dictionary.contact,
    url: routes.contact,
  },
};
