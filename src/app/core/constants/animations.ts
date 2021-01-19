import { CommonModel } from '../models/common';

import { routes } from './routes';

const stdRouterAnimation = '[Router Animation] Standard';

export const routerAnimationsForRoutes: CommonModel = {
  [routes.home]: `${stdRouterAnimation} | ${routes.home}`,
  [routes.algorithm]: `${stdRouterAnimation} | ${routes.algorithm}`,
  [routes.about]: `${stdRouterAnimation} | ${routes.about}`,
  [routes.contact]: `${stdRouterAnimation} | ${routes.contact}`,
  [routes.notFound]: `${stdRouterAnimation} | ${routes.notFound}`,
};
