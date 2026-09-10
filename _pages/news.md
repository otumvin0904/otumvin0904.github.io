---
layout: single
title: ""
permalink: /news/
author_profile: false
classes: wide
---

<link
  rel="stylesheet"
  href="{{ '/assets/css/news-page.css' | relative_url }}"
>
<link rel="stylesheet" href="{{ '/assets/css/lab-footer.css' | relative_url }}?v={{ site.time | date: '%Y%m%d%H%M%S' }}">

<div class="news-page">


  <!-- =====================================================
       HEADER
  ====================================================== -->

  <header class="news-header">


    <!-- LEFT NAVIGATION -->
    <nav
      class="news-nav news-nav-left"
      aria-label="Research navigation"
    >

      <a href="{{ '/research/' | relative_url }}">
        Research
      </a>

      <span>/</span>

      <a href="{{ '/publications/' | relative_url }}">
        Publications
      </a>

      <span>/</span>

      <a href="{{ '/instruments/' | relative_url }}">
        Instruments
      </a>

      <span>/</span>

      <a href="{{ '/software/' | relative_url }}">
        Software
      </a>

    </nav>



    <!-- CENTER LOGO -->
    <a
      class="news-logo"
      href="{{ '/' | relative_url }}"
      aria-label="NanoSpectroscopy Laboratory Home"
    >

      <img
        src="{{ '/images/logo.jpg' | relative_url }}"
        alt="NanoSpectroscopy Laboratory"
      >

    </a>



    <!-- RIGHT NAVIGATION -->
    <nav
      class="news-nav news-nav-right"
      aria-label="Laboratory navigation"
    >

      <a href="{{ '/team/' | relative_url }}">
        Team
      </a>

      <span>/</span>

      <a href="{{ '/gallery/' | relative_url }}">
        Gallery
      </a>

      <span>/</span>

      <a
        class="active"
        href="{{ '/news/' | relative_url }}"
      >
        News
      </a>

      <span>/</span>

      <a href="{{ '/contact/' | relative_url }}">
        Contact
      </a>


      <!-- SEARCH -->
      <button
        class="news-search"
        id="news-search-open"
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



  <!-- =====================================================
       MAIN
  ====================================================== -->

  <main class="news-main">


    <!-- =====================================================
         PAGE HEADING
    ====================================================== -->

    <section class="news-heading">

      <h1>
        NEWS
      </h1>

      <div class="section-line"></div>

    </section>



    <!-- =====================================================
         NEWS CONTENT
    ====================================================== -->

    <section class="news-content">


      {% assign sorted_news = site.data.news | sort: "date" | reverse %}

      {% assign current_year = "" %}
      {% assign news_number = 0 %}



      {% for item in sorted_news %}


        {% assign item_year = item.date | date: "%Y" %}



        <!-- =================================================
             NEW YEAR
        ================================================== -->

        {% if item_year != current_year %}


          {% if current_year != "" %}

              </div>

            </section>

          {% endif %}


          {% assign current_year = item_year %}
          {% assign news_number = 0 %}



          <section class="news-year-section">


            <!-- YEAR -->
            <div class="news-year">

              <span>
                {{ item_year }}
              </span>

              <div class="news-year-line"></div>

            </div>



            <!-- NEWS LIST -->
            <div class="news-list">


        {% endif %}



        {% assign news_number = news_number | plus: 1 %}



        <!-- =================================================
             NEWS ITEM
        ================================================== -->

        <article
          class="news-item{% if item.image %} news-item-with-image{% endif %}"
        >


          <!-- NUMBER -->
          <div class="news-number">

            <span>

              {% if news_number < 10 %}

                0{{ news_number }}

              {% else %}

                {{ news_number }}

              {% endif %}

            </span>

            <div class="news-number-line"></div>

          </div>



          <!-- =================================================
               NEWS BODY
          ================================================== -->

          <div class="news-body">


            <!-- DATE -->
            {% if item.date %}

              <div class="news-date">

                <span class="news-date-month">
                  {{ item.date | date: "%b" }}
                </span>

                <span class="news-date-day">
                  {{ item.date | date: "%d" }}
                </span>

              </div>

            {% endif %}



            <!-- INFORMATION -->
            <div class="news-information">


              <!-- TITLE -->
              {% if item.title %}

                <h2 class="news-title">


                  {% if item.url %}

                    <a href="{{ item.url }}">
                      {{ item.title }}
                    </a>


                  {% elsif item.link %}

                    <a
                      href="{{ item.link }}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ item.title }}
                    </a>


                  {% else %}

                    {{ item.title }}

                  {% endif %}


                </h2>

              {% endif %}



              <!-- DESCRIPTION -->
              {% if item.description %}

                <div class="news-description">
                  {{ item.description }}
                </div>


              {% elsif item.content %}

                <div class="news-description">
                  {{ item.content }}
                </div>


              {% elsif item.text %}

                <div class="news-description">
                  {{ item.text }}
                </div>

              {% endif %}



              <!-- CATEGORY -->
              {% if item.category %}

                <div class="news-category">
                  {{ item.category }}
                </div>

              {% endif %}



              <!-- LINK -->
              {% if item.link %}

                <div class="news-links">

                  <a
                    href="{{ item.link }}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    READ MORE
                  </a>

                </div>

              {% endif %}


            </div>


          </div>



          <!-- OPTIONAL IMAGE -->
          {% if item.image %}

            <div class="news-image">

              <img
                src="{{ item.image | relative_url }}"
                alt="{{ item.title }}"
              >

            </div>

          {% endif %}


        </article>


      {% endfor %}



      <!-- CLOSE FINAL YEAR -->

      {% if current_year != "" %}

          </div>

        </section>

      {% endif %}


    </section>


  </main>
  {% include lab-footer.html %}
</div>



<!-- =========================================================
     SEARCH CONTROL
========================================================= -->

<script>

document.addEventListener("DOMContentLoaded", function () {

  const openButton =
    document.getElementById("news-search-open");

  const searchPanel =
    document.getElementById("site-search-panel");

  const closeButton =
    document.getElementById("site-search-close");

  const searchInput =
    document.getElementById("site-search-input");


  /* OPEN */

  if (openButton && searchPanel) {

    openButton.addEventListener("click", function () {

      searchPanel.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow = "hidden";


      if (searchInput) {

        setTimeout(function () {

          searchInput.focus();

        }, 50);

      }

    });

  }



  /* CLOSE */

  if (closeButton && searchPanel) {

    closeButton.addEventListener("click", function () {

      searchPanel.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow = "";

    });

  }



  /* CLICK OUTSIDE */

  if (searchPanel) {

    searchPanel.addEventListener("click", function (event) {

      if (event.target === searchPanel) {

        searchPanel.setAttribute(
          "aria-hidden",
          "true"
        );

        document.body.style.overflow = "";

      }

    });

  }



  /* ESC */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      searchPanel &&
      searchPanel.getAttribute("aria-hidden") === "false"
    ) {

      searchPanel.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow = "";

    }

  });

});

</script>