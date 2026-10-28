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

Hi! I am a third-year EE Ph.D. student at [EECS, UC Berkeley](https://eecs.berkeley.edu/), advised by [Prof. Robert Pilawa-Podgurski](https://scholar.google.com/citations?user=YsleL5sAAAAJ&hl=en) in the [Pilawa Research Group](https://pilawa-group.berkeley.edu/). I received my B.Eng. in Electrical Engineering from [Huazhong University of Science and Technology](https://english.hust.edu.cn/). Before starting my Ph.D., I spent one year as a master's student at [Stanford University](https://www.stanford.edu/).

My research focuses on **high-performance power delivery for AI infrastructure**. I am particularly interested in fast-transient point-of-load voltage regulation, coupled magnetics, hybrid switched-capacitor converters, high-density integration, and power management integrated circuits (PMICs). My broader goal is to co-design converter architectures, magnetics, control, and power integration for next-generation data centers.

---

## Research Highlights

<div class="research-feed">
{% for item in site.data.research %}
  {% include research-item.html item=item %}
{% endfor %}
</div>
