---
layout: single
title: ""
permalink: /publications/
author_profile: false
classes: wide
---

<link
  rel="stylesheet"
  href="{{ '/assets/css/publications-page.css' | relative_url }}"
>


<div class="publications-page">


  <!-- =====================================================
       HEADER
  ====================================================== -->

  <header class="publications-header">


    <!-- LEFT NAVIGATION -->
    <nav
      class="publications-nav publications-nav-left"
      aria-label="Research navigation"
    >

      <a href="{{ '/research/' | relative_url }}">
        Research
      </a>

      <span>/</span>

      <a
        class="active"
        href="{{ '/publications/' | relative_url }}"
      >
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
      class="publications-logo"
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
      class="publications-nav publications-nav-right"
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

      <a href="{{ '/news/' | relative_url }}">
        News
      </a>

      <span>/</span>

      <a href="{{ '/contact/' | relative_url }}">
        Contact
      </a>


      <!-- SEARCH -->
      <button
        class="publications-search"
        id="publications-search-open"
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

  <main class="publications-main">


    <!-- =====================================================
         PAGE HEADING
    ====================================================== -->

    <section class="publications-heading">

      <h1>
        PUBLICATIONS
      </h1>

      <div class="section-line"></div>

    </section>



    <!-- =====================================================
         CURRENT / KNU
    ====================================================== -->

    <section class="publication-group publication-group-current">


      <div class="publication-group-heading">

        <div class="publication-group-index">
      
        </div>


        <div class="publication-group-title">

          <h2>
            KNU
          </h2>

          <p>
            CURRENT RESEARCH AND PUBLICATIONS
          </p>

        </div>

      </div>



      <!-- PUBLICATIONS -->
      <div class="publication-list">


        {% for paper in site.data.publications %}

          {% if paper.group == "knu" %}


            <article
              class="publication-item{% unless paper.published %} publication-item-status{% endunless %}"
            >


              <!-- NUMBER -->
              <div class="publication-number">

                <span>
                  {% if paper.number < 10 %}
                    0{{ paper.number }}
                  {% else %}
                    {{ paper.number }}
                  {% endif %}
                </span>

                <div class="publication-number-line"></div>

              </div>



              <!-- INFORMATION -->
              <div class="publication-information">


                <!-- TITLE ROW -->
                <div class="publication-title-row">


                  <h3 class="publication-title">

                    {% if paper.paperurl %}

                      <a
                        href="{{ paper.paperurl }}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ paper.title }}
                      </a>

                    {% elsif paper.url %}

                      <a
                        href="{{ paper.url }}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ paper.title }}
                      </a>

                    {% else %}

                      {{ paper.title }}

                    {% endif %}

                  </h3>



                  <!-- STATUS -->
                  {% unless paper.published %}

                    {% if paper.status %}

                      <span class="publication-status-pill">
                        {{ paper.status }}
                      </span>

                    {% endif %}

                  {% endunless %}


                </div>



                <!-- AUTHORS -->
                {% if paper.published %}

                  {% if paper.authors_html %}

                    <div class="publication-authors">
                      {{ paper.authors_html }}
                    </div>

                  {% endif %}



                  <!-- JOURNAL -->
                  {% if paper.journal %}

                    <div class="publication-journal">
                      {{ paper.journal }}
                    </div>

                  {% endif %}



                  <!-- LINKS -->
                  {% if paper.paperurl or paper.doi %}

                    <div class="publication-links">


                      {% if paper.paperurl %}

                        <a
                          href="{{ paper.paperurl }}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          VIEW PAPER
                        </a>

                      {% endif %}


                      {% if paper.doi %}

                        <a
                          href="{{ paper.doi }}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          DOI
                        </a>

                      {% endif %}


                    </div>

                  {% endif %}


                {% endif %}


              </div>


            </article>


          {% endif %}

        {% endfor %}


      </div>

    </section>



    <!-- =====================================================
         PRIOR TO KNU
    ====================================================== -->

    <section class="publication-group publication-group-prior">


      <div class="publication-group-heading">

        <div class="publication-group-index">
      
        </div>


        <div class="publication-group-title">

          <h2>
            PRIOR TO KNU
          </h2>

          <p>
            PREVIOUS RESEARCH AND PUBLICATIONS
          </p>

        </div>

      </div>



      <div class="publication-list">


        {% for paper in site.data.publications %}

          {% if paper.group == "prior" %}


            <article class="publication-item">


              <!-- NUMBER -->
              <div class="publication-number">

                <span>
                  {% if paper.number < 10 %}
                    0{{ paper.number }}
                  {% else %}
                    {{ paper.number }}
                  {% endif %}
                </span>

                <div class="publication-number-line"></div>

              </div>



              <!-- INFORMATION -->
              <div class="publication-information">


                <!-- TITLE -->
                <h3 class="publication-title">

                  {% if paper.paperurl %}

                    <a
                      href="{{ paper.paperurl }}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ paper.title }}
                    </a>

                  {% elsif paper.url %}

                    <a
                      href="{{ paper.url }}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ paper.title }}
                    </a>

                  {% else %}

                    {{ paper.title }}

                  {% endif %}

                </h3>



                <!-- AUTHORS -->
                {% if paper.authors_html %}

                  <div class="publication-authors">
                    {{ paper.authors_html }}
                  </div>

                {% endif %}



                <!-- JOURNAL -->
                {% if paper.journal %}

                  <div class="publication-journal">
                    {{ paper.journal }}
                  </div>

                {% endif %}



                <!-- LINKS -->
                {% if paper.paperurl or paper.doi %}

                  <div class="publication-links">


                    {% if paper.paperurl %}

                      <a
                        href="{{ paper.paperurl }}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW PAPER
                      </a>

                    {% endif %}


                    {% if paper.doi %}

                      <a
                        href="{{ paper.doi }}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DOI
                      </a>

                    {% endif %}


                  </div>

                {% endif %}


              </div>


            </article>


          {% endif %}

        {% endfor %}


      </div>

    </section>


  </main>

</div>



<!-- =========================================================
     SEARCH
========================================================= -->

<script>

document.addEventListener("DOMContentLoaded", function () {

  const openButton =
    document.getElementById("publications-search-open");

  const searchPanel =
    document.getElementById("site-search-panel");

  const closeButton =
    document.getElementById("site-search-close");

  const searchInput =
    document.getElementById("site-search-input");


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


  if (closeButton && searchPanel) {

    closeButton.addEventListener("click", function () {

      searchPanel.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow = "";

    });

  }


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