---
permalink: /
title:
author_profile: false
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/lab-home.css' | relative_url }}">

<!-- 모든 페이지에서 사용하는 하단 주소 바 -->
<link rel="stylesheet" href="{{ '/assets/css/lab-footer.css' | relative_url }}?v=footer-bottom-2-{{ site.time | date: '%Y%m%d%H%M%S' }}">

<!-- 메인 전체 폭 · 문구 · 회베이지 슬라이드쇼 · 기존 남색 주소 바 -->
<link rel="stylesheet" href="{{ '/assets/css/lab-home-fullwidth.css' | relative_url }}?v=home-3col-publications-20260910-1-{{ site.time | date: '%Y%m%d%H%M%S' }}">

<link rel="stylesheet" href="{{ '/assets/css/lab-navigation.css' | relative_url }}?v=pi-nav-1">

<div class="ns-home lab-page-shell ns-home--fullwidth ns-home--slides" markdown="0">

  <section class="ns-hero">

    <!-- =====================================================
         FULL-WIDTH STAGE / ORIGINAL IMAGE ASPECT RATIO
    ====================================================== -->
    <div class="ns-stage">


      <!-- =====================================================
           BACKGROUND / RAMAN IMAGE
      ====================================================== -->
    <div class="ns-hero-visual">

      <!-- 메인 문구: 아래 세 텍스트만 바꾸면 됩니다. -->
      <div class="ns-hero-copy" lang="en">
        <h1 class="ns-hero-copy__title">NanoSpectroscopy group</h1>
        <p class="ns-hero-copy__description">
          Probing plasmon-driven chemistry with Raman spectroscopy
        </p>
      </div>

      <img
        class="ns-background-image"
        src="{{ '/images/raman-main.png' | relative_url }}"
        alt="Raman spectroscopy research"
      >
    </div>



      <!-- =====================================================
           HEADER
      ====================================================== -->
      <header class="ns-header lab-global-header">


        <!-- LEFT MENU -->
        <nav class="ns-nav ns-nav-left lab-global-nav-left" aria-label="Research navigation">

          <a href="{{ '/research/' | relative_url }}">
            Research
          </a>

          <span class="ns-divider">/</span>

          <a href="{{ '/publications/' | relative_url }}">
            Publications
          </a>

          <span class="ns-divider">/</span>

          <a href="{{ '/instruments/' | relative_url }}">
            Instruments
          </a>

          <span class="ns-divider">/</span>

          <a href="{{ '/software/' | relative_url }}">
            Software
          </a>

        </nav>



        <!-- CENTER LOGO -->
        <a
          class="ns-logo lab-global-logo"
          href="{{ '/' | relative_url }}"
          aria-label="NanoSpectroscopy Laboratory Home"
        >

          <img
            src="{{ '/images/logo.png' | relative_url }}"
            alt="NanoSpectroscopy Laboratory"
          >

        </a>



        <!-- RIGHT MENU -->
        <nav class="ns-nav ns-nav-right lab-global-nav-right" aria-label="Laboratory navigation">

          <a href="{{ '/pi/' | relative_url }}" class="lab-nav-pi-link" aria-label="Principal Investigator">
            PI
          </a>

          <span class="ns-divider" aria-hidden="true">/</span>

          <a href="{{ '/team/' | relative_url }}">
            Team
          </a>

          <span class="ns-divider">/</span>

          <a href="{{ '/gallery/' | relative_url }}">
            Gallery
          </a>

          <span class="ns-divider">/</span>

          <a href="{{ '/news/' | relative_url }}">
            News
          </a>

          <span class="ns-divider">/</span>

          <a href="{{ '/contact/' | relative_url }}">
            Contact
          </a>


          <!-- SEARCH -->
          <button
            class="ns-search"
            id="ns-search-open"
            type="button"
            aria-label="Search"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >

              <circle
                cx="10.8"
                cy="10.8"
                r="6.4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />

              <line
                x1="15.5"
                y1="15.5"
                x2="20.5"
                y2="20.5"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
              />

            </svg>

          </button>

        </nav>

      </header>

    </div>

  </section>

  <!-- =====================================================
       RESEARCH / GALLERY / PUBLICATIONS
       Research와 Gallery는 기존 페이지의 이미지를 자동 전환합니다.
       Publications는 _data/publications.yml에서 최신 게재 논문 3편을 자동 표시합니다.
       Research / Gallery의 속도는 data-interval을 수정합니다. 5000 = 5초.
  ====================================================== -->
  <section class="ns-showcase" aria-label="Research, gallery, and publications highlights">
    <div class="ns-showcase__grid">

      <!-- ===================================================
           RESEARCH
      ==================================================== -->
      <section
        class="ns-showcase-card ns-showcase-card--research"
        data-home-slideshow="research"
        data-source="{{ '/research/' | relative_url }}"
        data-interval="5000"
        aria-labelledby="home-research-title"
        aria-roledescription="carousel"
      >
        <div class="ns-showcase-card__heading">
          <h2 id="home-research-title">Research</h2>
        </div>

        <div class="ns-home-slides__viewport" aria-busy="true">
          <a
            class="ns-home-slides__image-link"
            href="{{ '/research/' | relative_url }}"
            aria-label="Open Research"
          >
            <div class="ns-home-slides__slides" id="home-research-slides" aria-live="off"></div>
          </a>
          <p class="ns-home-slides__message" role="status">Loading Research images…</p>
        </div>

        <p class="ns-home-slides__caption" aria-live="off"></p>

        <div class="ns-showcase-card__bottom">
          <a class="ns-showcase-card__more" href="{{ '/research/' | relative_url }}">
            View Research <span aria-hidden="true">→</span>
          </a>

          <div class="ns-home-slides__controls" hidden>
            <span class="ns-home-slides__counter" aria-label="Image number">01 / 01</span>
            <button
              class="ns-home-slides__button"
              type="button"
              data-slide-action="previous"
              aria-label="Previous Research image"
              aria-controls="home-research-slides"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
            <button
              class="ns-home-slides__button"
              type="button"
              data-slide-action="toggle"
              aria-label="Pause Research slideshow"
              aria-controls="home-research-slides"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg></button>
            <button
              class="ns-home-slides__button"
              type="button"
              data-slide-action="next"
              aria-label="Next Research image"
              aria-controls="home-research-slides"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
          </div>
        </div>
      </section>

      <!-- ===================================================
           GALLERY
      ==================================================== -->
      <section
        class="ns-showcase-card ns-showcase-card--gallery"
        data-home-slideshow="gallery"
        data-source="{{ '/gallery/' | relative_url }}"
        data-gallery-root="{{ '/images/gallery/' | relative_url }}"
        data-interval="5000"
        aria-labelledby="home-gallery-title"
        aria-roledescription="carousel"
      >
        <div class="ns-showcase-card__heading">
          <h2 id="home-gallery-title">Gallery</h2>
        </div>

        <div class="ns-home-slides__viewport" aria-busy="true">
          <a
            class="ns-home-slides__image-link"
            href="{{ '/gallery/' | relative_url }}"
            aria-label="Open Gallery"
          >
            <div class="ns-home-slides__slides" id="home-gallery-slides" aria-live="off"></div>
          </a>
          <p class="ns-home-slides__message" role="status">Loading Gallery images…</p>
        </div>

        <p class="ns-home-slides__caption" aria-live="off"></p>

        <div class="ns-showcase-card__bottom">
          <a class="ns-showcase-card__more" href="{{ '/gallery/' | relative_url }}">
            View Gallery <span aria-hidden="true">→</span>
          </a>

          <div class="ns-home-slides__controls" hidden>
            <span class="ns-home-slides__counter" aria-label="Image number">01 / 01</span>
            <button
              class="ns-home-slides__button"
              type="button"
              data-slide-action="previous"
              aria-label="Previous Gallery image"
              aria-controls="home-gallery-slides"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
            <button
              class="ns-home-slides__button"
              type="button"
              data-slide-action="toggle"
              aria-label="Pause Gallery slideshow"
              aria-controls="home-gallery-slides"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg></button>
            <button
              class="ns-home-slides__button"
              type="button"
              data-slide-action="next"
              aria-label="Next Gallery image"
              aria-controls="home-gallery-slides"
            ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
          </div>
        </div>
      </section>

      <!-- ===================================================
           PUBLICATIONS
           _data/publications.yml의 순서를 따라 게재된 논문 3편을 표시합니다.
           preprint와 in preparation / submitted 항목은 제외합니다.
      ==================================================== -->
      <section
        class="ns-showcase-card ns-showcase-card--publications"
        aria-labelledby="home-publications-title"
      >
        <div class="ns-showcase-card__heading">
          <h2 id="home-publications-title">Publications</h2>
        </div>

        <div class="ns-home-publications" aria-label="Latest publications">
          {% assign home_publication_count = 0 %}
          {% for publication in site.data.publications %}
            {% if publication.published == true and publication.type != "preprint" and home_publication_count < 3 %}

              {% assign home_publication_url = publication.url | default: "" | strip %}

              {% if home_publication_url != "" %}
              <a
                class="ns-home-publication"
                href="{{ home_publication_url | escape }}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="{{ publication.title | escape }} (opens in a new tab)"
              >
              {% else %}
              <a
                class="ns-home-publication"
                href="{{ '/publications/' | relative_url }}"
                aria-label="View {{ publication.title | escape }} on Publications page"
              >
              {% endif %}

                <div class="ns-home-publication__meta">
                  <span class="ns-home-publication__number">No. {{ publication.number }}</span>
                  {% if publication.year %}
                  <span class="ns-home-publication__year">{{ publication.year }}</span>
                  {% endif %}
                </div>

                <h3 class="ns-home-publication__title">
                  {{ publication.title | escape }}
                </h3>

                {% if publication.journal and publication.journal != "" %}
                <p class="ns-home-publication__journal">
                  {{ publication.journal | escape }}
                </p>
                {% endif %}

              </a>

              {% assign home_publication_count = home_publication_count | plus: 1 %}
            {% endif %}
          {% endfor %}
        </div>

        <p class="ns-home-publications__caption">Latest published work</p>

        <div class="ns-showcase-card__bottom">
          <a class="ns-showcase-card__more" href="{{ '/publications/' | relative_url }}">
            View Publications <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <noscript>
        <p class="ns-showcase__noscript">
          Enable JavaScript to play the Research and Gallery slideshows, or use the Research, Gallery, and Publications links.
        </p>
      </noscript>

    </div>
  </section>

  <!-- 주소 바는 기존 공통 남색 배경과 밝은 글씨를 유지 -->
  {% include lab-footer.html %}

</div>



<!-- =========================================================
     SEARCH PANEL CONTROL
========================================================= -->

<script>
document.addEventListener("DOMContentLoaded", function () {

  const searchOpen =
    document.getElementById("ns-search-open");

  const searchPanel =
    document.getElementById("site-search-panel");

  const searchClose =
    document.getElementById("site-search-close");

  const searchInput =
    document.getElementById("site-search-input");


  if (searchOpen && searchPanel) {

    searchOpen.addEventListener("click", function () {

      searchPanel.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";

      if (searchInput) {

        setTimeout(function () {
          searchInput.focus();
        }, 50);

      }

    });

  }


  if (searchClose && searchPanel) {

    searchClose.addEventListener("click", function () {

      searchPanel.setAttribute("aria-hidden", "true");

      document.body.style.overflow = "";

    });

  }


  if (searchPanel) {

    searchPanel.addEventListener("click", function (event) {

      if (event.target === searchPanel) {

        searchPanel.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

      }

    });

  }


  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      searchPanel &&
      searchPanel.getAttribute("aria-hidden") === "false"
    ) {

      searchPanel.setAttribute("aria-hidden", "true");

      document.body.style.overflow = "";

    }

  });

});
</script>

<!-- 외부 라이브러리 없이 작동하는 메인 홈 전용 자동 슬라이드쇼 -->
<script src="{{ '/assets/js/lab-home-slides.js' | relative_url }}?v=home-slides-1-{{ site.time | date: '%Y%m%d%H%M%S' }}" defer></script>
