---
permalink: /
title: ""
author_profile: true
home_feed: true
redirect_from:
  - /about/
  - /about.html
---

## Welcome!

Hi! I am a Ph.D. student in Electrical Engineering and Computer Sciences at the University of California, Berkeley, advised by [Prof. Robert Pilawa-Podgurski](https://scholar.google.com/citations?user=YsleL5sAAAAJ&hl=en) in the [Pilawa Research Group](https://pilawa-group.berkeley.edu/). I received my B.Eng. in Electrical Engineering from [Huazhong University of Science and Technology](https://english.hust.edu.cn/).

My research focuses on **high-performance power delivery for AI infrastructure**. I am particularly interested in fast-transient point-of-load voltage regulation, coupled magnetics, hybrid switched-capacitor converters, and high-density 48-V power conversion. My broader goal is to co-design converter architectures, magnetics, control, and power integration for next-generation processors and data centers.

---

## Research Highlights

<div class="research-feed">
{% for item in site.data.research %}
  {% include research-item.html item=item %}
{% endfor %}
</div>
