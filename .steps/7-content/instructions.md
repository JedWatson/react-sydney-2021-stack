install document field:

```
yarn add @keystone-next/fields-document @keystone-next/document-renderer
```

replace `text()` with `document()`

```tsx
document({
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
```

update query:

```tsx
query: 'id title description { document }',
```

display JSON:

```tsx
<p>{JSON.stringify(talk.description)}</p>
```

replace with renderer:

```tsx
import { DocumentRenderer } from '@keystone-next/document-renderer';

<DocumentRenderer document={talk.description.document} />;
```
