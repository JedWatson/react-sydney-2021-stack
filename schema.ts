import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';
import { document } from '@keystone-next/fields-document';

function slug() {
  return text({
    defaultValue: ({ originalInput }: any) => {
      const input = originalInput?.name || originalInput?.title || 'new-item';
      return (
        input
          .trim()
          .toLowerCase()
          .replace(/[^\w ]+/g, '')
          .replace(/ +/g, '-') ?? ''
      );
    },
    ui: { createView: { fieldMode: 'hidden' } },
  });
}

export const Talk = list({
  fields: {
    title: text({ isRequired: true }),
    slug: slug(),
    description: document({
      ui: {
        createView: { fieldMode: 'hidden' },
      },
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    speaker: relationship({ ref: 'Speaker.talks' }),
  },
});

export const Speaker = list({
  fields: {
    name: text(),
    slug: slug(),
    talks: relationship({ ref: 'Talk.speaker', many: true }),
  },
});
