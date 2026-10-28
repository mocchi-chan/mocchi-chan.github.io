---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<p class="cv-download"><a href="{{ '/files/cv/Shuyu-Zhang-CV.pdf' | relative_url }}" target="_blank" rel="noopener">View / download CV (PDF)</a></p>

<div class="cv-preview" aria-label="CV preview">
  {% for page in (1..3) %}
  <figure>
    <a href="{{ '/files/cv/Shuyu-Zhang-CV.pdf' | relative_url }}#page={{ page }}" target="_blank" rel="noopener" aria-label="Open CV page {{ page }} in the PDF">
      <img src="{{ '/images/cv/cv-page-' | append: page | append: '.webp' | relative_url }}" alt="Shuyu Zhang's CV, page {{ page }} of 3" width="1360" height="1760" {% if page > 1 %}loading="lazy"{% endif %} decoding="async">
    </a>
  </figure>
  {% endfor %}
</div>
