import { config, list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

const Talk = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text(),
    description: text(),
  },
});

export default config({
  db: { adapter: 'prisma_sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Talk },
});
