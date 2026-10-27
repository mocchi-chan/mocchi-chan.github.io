---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% assign cv_pdf = site.static_files | where: 'path', '/files/Shuyu_Zhang_CV.pdf' | first %}
{% if cv_pdf %}
<p><a class="btn btn--primary" href="{{ cv_pdf.path | relative_url }}">Download CV (PDF)</a></p>
{% endif %}

## Education

**University of California, Berkeley**<br>
Ph.D. student in Electrical Engineering and Computer Sciences<br>
Advisor: Prof. Robert Pilawa-Podgurski · [Pilawa Research Group](https://pilawa-group.berkeley.edu/)

**Huazhong University of Science and Technology**<br>
B.Eng. in Electrical Engineering

## Research Interests

High-performance power delivery for AI infrastructure, including:

- Fast-transient point-of-load voltage regulation
- Coupled magnetics
- Hybrid switched-capacitor converters
- High-density 48-V power conversion

## Publications

See my [Google Scholar profile]({{ site.author.googlescholar }}) for publications.

## Contact

[{{ site.author.email }}](mailto:{{ site.author.email }}) · [LinkedIn](https://www.linkedin.com/in/{{ site.author.linkedin }}/)
