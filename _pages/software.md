---
layout: single
title: ""
permalink: /software/
author_profile: false
classes: wide
---

<link
  rel="stylesheet"
  href="{{ '/assets/css/software-page.css' | relative_url }}"
>
<link rel="stylesheet" href="{{ '/assets/css/lab-footer.css' | relative_url }}?v={{ site.time | date: '%Y%m%d%H%M%S' }}">

<div class="software-page">


  <!-- =====================================================
       HEADER
  ====================================================== -->

  <header class="software-header">


    <!-- LEFT NAVIGATION -->
    <nav
      class="software-nav software-nav-left"
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

      <a
        class="active"
        href="{{ '/software/' | relative_url }}"
      >
        Software
      </a>

    </nav>



    <!-- CENTER LOGO -->
    <a
      class="software-logo"
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
      class="software-nav software-nav-right"
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
        class="software-search"
        id="software-search-open"
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

  <main class="software-main">


    <!-- =====================================================
         PAGE HEADING
    ====================================================== -->

    <section class="software-heading">

      <h1>
        SOFTWARE
      </h1>

      <div class="section-line"></div>

    </section>



    <!-- =====================================================
         SIMULATION & MODELLING
    ====================================================== -->

    <section class="software-section">


      <!-- SECTION TITLE -->
      <div class="software-section-heading">

        <h2>
          SIMULATION &amp; MODELLING
        </h2>

        <div class="software-section-line"></div>

      </div>



      <!-- ===================================================
           SOFTWARE GRID
      ==================================================== -->

      <div class="software-grid">


        <!-- =================================================
             01 ANSYS LUMERICAL FDTD
        ================================================== -->

        <article class="software-card">

          <div class="software-card-top">


            <!-- NUMBER -->
            <div class="item-number">

              <span>
                01
              </span>

              <div class="item-number-line"></div>

            </div>



            <!-- TYPOGRAPHIC VISUAL -->
            <div class="software-visual">

              <div class="software-visual-code">
                FDTD
              </div>

              <div class="software-visual-line"></div>

              <div class="software-visual-label">
                ELECTROMAGNETIC SIMULATION
              </div>

            </div>

          </div>



          <!-- CONTENT -->
          <div class="software-content">

            <h3>
              Ansys Lumerical FDTD
            </h3>

            <div class="software-category">
              Electromagnetic &amp; Nanophotonic Simulation
            </div>

            <div class="software-use">
              Plasmonics · Nanogap modes · Electric field · Optical spectra
            </div>

          </div>

        </article>



        <!-- =================================================
             02 SCM ADF
        ================================================== -->

        <article class="software-card">

          <div class="software-card-top">


            <!-- NUMBER -->
            <div class="item-number">

              <span>
                02
              </span>

              <div class="item-number-line"></div>

            </div>



            <!-- TYPOGRAPHIC VISUAL -->
            <div class="software-visual">

              <div class="software-visual-code">
                ADF
              </div>

              <div class="software-visual-line"></div>

              <div class="software-visual-label">
                MOLECULAR MODELLING
              </div>

            </div>

          </div>



          <!-- CONTENT -->
          <div class="software-content">

            <h3>
              SCM Amsterdam Density Functional
              <span class="software-short-name">(ADF)</span>
            </h3>

            <div class="software-category">
              Density Functional Theory
            </div>

            <div class="software-use">
              DFT · Molecular structure · Vibrational modes · Raman analysis
            </div>

          </div>

        </article>


      </div>

    </section>


  </main>
  {% include lab-footer.html %}
</div>



<!-- =========================================================
     SAME-PAGE SEARCH CONTROL
========================================================= -->

<script>

document.addEventListener("DOMContentLoaded", function () {

  const openButton =
    document.getElementById("software-search-open");

  const searchPanel =
    document.getElementById("site-search-panel");

  const closeButton =
    document.getElementById("site-search-close");

  const searchInput =
    document.getElementById("site-search-input");


  /* OPEN SEARCH */
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


  /* CLOSE BUTTON */
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


  /* ESC KEY */
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