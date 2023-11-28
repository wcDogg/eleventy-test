---
title: "Test Internal Links"
description: "A test page."
---

- Authors do not know what a site's final output structure will be. 
- They only know the relationship of content in the `scr` directory.
- Meaning we can only ask authors to pass a source relationship to the shortcode - they don't know the output relationship.

We can account for arbitrary changes to the current page - like `/c_blog/topic.md` to `/blog/topic/index.html` - by looking at `this.page.outputPath`.

I want to do the same thing with the linked page, but can't figure out how to get this information if all the author can supply is a relative source path. 

## What's working

These links:

- {% inlink "Post B", "post-b" %}
- {% inlink "Doc A", "../docs/doc-a" %}

Are made with these:

```html
{% raw %}
{% inlink "Post B", "post-b" %}
{% inlink "Doc A", "../docs/doc-a" %}
{% endraw %}
```

<a href="{{ "../../docs/doc-a" | url }}">Manual Link</a>

