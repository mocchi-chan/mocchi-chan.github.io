---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

Browse the pages on this site. An [XML sitemap]({{ '/sitemap.xml' | relative_url }}) is also available for search engines.

## Pages

[Home]({{ '/' | relative_url }})

{% for post in site.pages %}
  {% if post.title and post.title != "" and post.redirect_to == nil and post.sitemap != false and post.url != "/404.html" and post.url != "/sitemap/" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

{% if site.posts.size > 0 %}
<h2>Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
  {% if collection.output and collection.label != "posts" and collection.docs.size > 0 %}
    <h2>{{ collection.label | capitalize }}</h2>
    {% for post in collection.docs %}
      {% include archive-single.html %}
    {% endfor %}
  {% endif %}
{% endfor %}
