install classnames field:

```
yarn add classnames
```

copy renderers

```
content/renderers.tsx
```

add `renderers` prop to the `DocumentRenderer`

```tsx
<DocumentRenderer renderers={renderers} document={talk.description.document} />
```
