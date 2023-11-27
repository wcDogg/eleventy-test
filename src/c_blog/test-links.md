---
title: "Test Internal Links"
description: "A test page."
---

- Authors do not know what a site's final output structure will be. 
- They only know the relationship of content in the `scr` directory.
- Meaning we can only ask authors to pass a source relationship to the shortcode - they don't know the output relationship.

We can account for arbitrary changes to the current page - like `/c_blog/topic.md` to `/blog/topic/index.html` - by looking at `this.page.outputPath`.

What I'm looking for is a way to handle arbitrary changes to the linked page - like moving it from Blog to Docs. I believe the solution is the same - use `outputPath`. 

However, I can figure out how to get this information if all the author can supply is a relative source path. 

## Source in same dir

{% inlink "Post B", "post-b.md" %}

## Source in different dir

{% inlink "Doc A", "../c_docs/doc-a.md" %}

## Source file moved, but no one remembered to update me

{% inlink "Moved from blog to docs", "post-move.md" %}

