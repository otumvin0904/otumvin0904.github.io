---
layout: single
title: ""
permalink: /news/
author_profile: false
classes: wide
---

<div class="news-page">

  <header class="news-page__header">
    <h1>NEWS</h1>
    <div class="news-page__title-line"></div>
  </header>

  <section class="news-page__list">

    {% for item in site.data.news %}

      <div class="news-page__item">

        <time datetime="{{ item.datetime }}">
          {{ item.date }}
        </time>

        <p>
          {{ item.text }}
        </p>

      </div>

    {% endfor %}

  </section>

</div>