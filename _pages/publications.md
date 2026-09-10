---
layout: single
title: ""
permalink: /publications/
author_profile: false
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/publications-page.css' | relative_url }}?v=20260909-links">
<link rel="stylesheet" href="{{ '/assets/css/lab-footer.css' | relative_url }}?v={{ site.time | date: '%Y%m%d%H%M%S' }}">

<div class="publications-page" markdown="0">

  <!-- HEADER: 기존 Instruments / News 페이지와 동일한 공통 구조 -->
  <header class="publications-header">

    <nav class="publications-nav publications-nav-left" aria-label="Research navigation">
      <a href="{{ '/research/' | relative_url }}">Research</a>
      <span aria-hidden="true">/</span>
      <a class="active" href="{{ '/publications/' | relative_url }}" aria-current="page">Publications</a>
      <span aria-hidden="true">/</span>
      <a href="{{ '/instruments/' | relative_url }}">Instruments</a>
      <span aria-hidden="true">/</span>
      <a href="{{ '/software/' | relative_url }}">Software</a>
    </nav>

    <a class="publications-logo" href="{{ '/' | relative_url }}" aria-label="NanoSpectroscopy Laboratory Home">
      <img src="{{ '/images/logo.jpg' | relative_url }}" alt="NanoSpectroscopy Laboratory">
    </a>

    <nav class="publications-nav publications-nav-right" aria-label="Laboratory navigation">
      <a href="{{ '/team/' | relative_url }}">Team</a>
      <span aria-hidden="true">/</span>
      <a href="{{ '/gallery/' | relative_url }}">Gallery</a>
      <span aria-hidden="true">/</span>
      <a href="{{ '/news/' | relative_url }}">News</a>
      <span aria-hidden="true">/</span>
      <a href="{{ '/contact/' | relative_url }}">Contact</a>

      <button class="publications-search" id="publications-search-open" type="button"
              aria-label="Search" aria-controls="site-search-panel" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="10.8" cy="10.8" r="6.4" fill="none" stroke="currentColor" stroke-width="1.6" />
          <line x1="15.5" y1="15.5" x2="20.5" y2="20.5" stroke="currentColor"
                stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

  </header>

  <main class="publications-main">

    <section class="publications-heading" aria-labelledby="publications-page-heading">
      <h1 id="publications-page-heading">PUBLICATIONS</h1>
      <div class="section-line" aria-hidden="true"></div>
    </section>

    {% assign publication_groups = "knu,prior" | split: "," %}
    {% for group_key in publication_groups %}
    <section class="publication-group{% if group_key == 'prior' %} publication-group-prior{% endif %}"
             aria-labelledby="publication-group-{{ group_key }}">

      <div class="publication-group-heading">
        <div class="publication-group-index" aria-hidden="true"></div>
        <div class="publication-group-title">
          {% if group_key == "knu" %}
          <h2 id="publication-group-{{ group_key }}">KNU</h2>
          <p>CURRENT RESEARCH AND PUBLICATIONS</p>
          {% else %}
          <h2 id="publication-group-{{ group_key }}">PRIOR TO KNU</h2>
          <p>PREVIOUS RESEARCH AND PUBLICATIONS</p>
          {% endif %}
        </div>
      </div>

      <div class="publication-list">

        {% assign group_papers = site.data.publications | where: "group", group_key %}
        {% assign year_groups = group_papers | group_by: "year" | sort: "name" | reverse %}

        {% for year_group in year_groups %}

        <div class="publication-year-group">

          <!-- YEAR -->
          <div class="publication-year-label">
            <span>{{ year_group.name }}</span>
            <div class="publication-year-line" aria-hidden="true"></div>
          </div>

          <!-- PAPERS IN THIS YEAR -->
          <div class="publication-year-items">

            {% for paper in year_group.items %}

            {% comment %}
              게재 여부와 주소를 모두 확인합니다.
              준비/투고 중이거나 주소가 없는 항목에는 링크를 만들지 않습니다.
              외부 주소는 http 또는 https 주소만 사용합니다.
            {% endcomment %}

            {% assign paper_url = paper.url | default: "" | strip %}
            {% assign https_prefix = paper_url | slice: 0, 8 %}
            {% assign http_prefix = paper_url | slice: 0, 7 %}
            {% assign has_paper_link = false %}

            {% if paper.published == true and paper_url != "" %}
              {% if https_prefix == "https://" or http_prefix == "http://" %}
                {% assign has_paper_link = true %}
              {% endif %}
            {% endif %}

            <article id="publication-{{ paper.number }}"
                     class="publication-item{% unless paper.published %} publication-item-status{% endunless %}">

              <div class="publication-number">

                {% if has_paper_link %}

                <a class="publication-number-link"
                   href="{{ paper_url | escape }}"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Publication {{ paper.number }}: {{ paper.title | escape }} (opens in a new tab)"
                   title="Open publication in a new tab">

                  <span>{{ paper.number }}</span>
                  <div class="publication-number-line" aria-hidden="true"></div>

                </a>

                {% else %}

                <span>{{ paper.number }}</span>
                <div class="publication-number-line" aria-hidden="true"></div>

                {% endif %}

              </div>


              <div class="publication-information">

                <div class="publication-title-row">

                  <h3 class="publication-title">

                    {% if has_paper_link %}

                    <a href="{{ paper_url | escape }}"
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="{{ paper.title | escape }} (opens in a new tab)"
                       title="Open publication in a new tab">

                      {{ paper.title | escape }}

                    </a>

                    {% else %}

                    {{ paper.title | escape }}

                    {% endif %}

                  </h3>


                  {% unless paper.published %}

                    {% if paper.status and paper.status != "" %}

                    <span class="publication-status-pill">
                      {{ paper.status | escape }}
                    </span>

                    {% endif %}

                  {% endunless %}

                </div>


                {% if paper.published %}

                  {% if paper.authors_html and paper.authors_html != "" %}

                  <div class="publication-authors">
                    {{ paper.authors_html }}
                  </div>

                  {% endif %}


                  {% if paper.journal and paper.journal != "" %}

                  <div class="publication-journal">
                    {{ paper.journal | escape }}
                  </div>

                  {% endif %}

                {% endif %}

              </div>

            </article>

            {% endfor %}

          </div>

        </div>

        {% endfor %}

      </div>


    </section>
    {% endfor %}

  </main>
  {% include lab-footer.html %}
</div>

<!-- SAME-PAGE SEARCH: 사이트 공통 검색 패널을 그대로 사용합니다. -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const openButton = document.getElementById("publications-search-open");
  const searchPanel = document.getElementById("site-search-panel");
  const closeButton = document.getElementById("site-search-close");
  const searchInput = document.getElementById("site-search-input");

  // 공통 검색 패널이 없는 경우에는 다른 페이지 기능에 영향을 주지 않습니다.
  if (!openButton || !searchPanel) return;

  let previousOverflow = "";
  let openedHere = false;

  function closeSearch() {
    if (!openedHere) return;
    openedHere = false;
    searchPanel.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = previousOverflow;
    openButton.focus();
  }

  openButton.addEventListener("click", function () {
    if (openedHere) return;
    previousOverflow = document.body.style.overflow;
    openedHere = true;
    searchPanel.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (searchInput) {
      window.setTimeout(function () {
        if (openedHere) searchInput.focus();
      }, 50);
    }
  });

  if (closeButton) closeButton.addEventListener("click", closeSearch);

  searchPanel.addEventListener("click", function (event) {
    if (event.target === searchPanel) closeSearch();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeSearch();
  });
});
</script>
