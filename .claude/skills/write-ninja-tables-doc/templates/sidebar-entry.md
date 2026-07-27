Minimal shape of one sidebar leaf entry to insert into the correct nested `items` array in
`.vitepress/config.mts` (this is a TypeScript object literal inside `themeConfig.sidebar`, not a
separate JSON file):

```ts
{ text: '<Doc Title — matches the H1>', link: '/guide/<category>/<slug>' }
```

No `.md` extension on `link`. Find the right nested group first — see `CLAUDE.md` for the full
sidebar tree (11 top-level groups, several with `collapsed: true` sub-groups up to 2 levels deep).
