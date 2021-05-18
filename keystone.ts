import { config } from '@keystone-next/keystone/schema';

import * as lists from './schema';

export default config({
  db: { adapter: 'prisma_sqlite', url: 'file:./app.db' },
  ui: {
    isAccessAllowed: () => true,
  },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists,
});
