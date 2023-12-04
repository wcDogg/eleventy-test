# Eleventy Test

## open-props-scss

https://github.com/mayank99/open-props-scss/issues/12

## Permalink issue with collection.js but not collection.json

Repo: https://github.com/wcDogg/eleventy-test

Structure: 

- There are 2 source collections - `.src/content/blog` and `.src/content/docs`. 
- `blog` has a `blog.js`.
- `docs` has a `docs.json`.
- In both, the permalinks is like: `"/docs/{{ page.fileSlug }}/"`.

When I run the build: 

- The `docs.json` collection outputs as expected.
- The `blog.js` collection outputs nested inside `content`. 

I can't imagine why, but do have to format permalinks differently when using JS vs JSON? 

