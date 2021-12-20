import { extendEnvironment } from 'hardhat/config';
import { lazyFunction } from 'hardhat/plugins';

import './type-extensions';

extendEnvironment((hre) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  hre.astar = lazyFunction(() => require('@astar/sdk-core'));
});
