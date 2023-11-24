# Eleventy permalink raises output conflict when more than 2 pages are added to a collection



Hello - I'm having the strangest issue with permalinks and could use some help. 

I discovered this in a larger project and reproduced it in a basic repo: 

- There 2 collections defined in `.eleventy.js` - `blog` and `docs`. 
- Each collection has it's own a directory - `c_blog` and `c_docs`.
- Each directory has a JSON with a permalink like this: `"permalink": "/blog/{{ title | slugify }}/"`.
- Each directory has an `index.html` with a permalink like this: `permalink: /blog/`.

This works as expected for the `index.html`, `test-a.md`, and `test-b.md`. 

However, once a `test-c.md` is added to either collection, I get this:

```bash
[11ty] Output conflict: multiple input files are writing to `public/blog/index.html`. Use distinct `permalink` values to resolve this conflict.
[11ty]   1. ./src/c_blog/index.html
[11ty]   2. ./src/c_blog/index.html (via DuplicatePermalinkOutputError)
```


