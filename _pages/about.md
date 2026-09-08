---
permalink: /
title:
author_profile: false
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/lab-home.css' | relative_url }}">

<div class="ns-home">

  <section class="ns-hero">

    <!-- =====================================================
         16:9 RESPONSIVE STAGE
    ====================================================== -->
    <div class="ns-stage">


      <!-- =====================================================
           BACKGROUND / RAMAN IMAGE
      ====================================================== -->
      <img
        class="ns-background-image"
        src="{{ '/images/raman-main.png' | relative_url }}"
        alt="Raman spectroscopy research"
      >



      <!-- =====================================================
           HEADER
      ====================================================== -->
      <header class="ns-header">


        <!-- LEFT MENU -->
        <nav class="ns-nav ns-nav-left">

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
          class="ns-logo"
          href="{{ '/' | relative_url }}"
          aria-label="NanoSpectroscopy Laboratory Home"
        >

          <img
            src="{{ '/images/logo.png' | relative_url }}"
            alt="NanoSpectroscopy Laboratory"
          >

        </a>



        <!-- RIGHT MENU -->
        <nav class="ns-nav ns-nav-right">

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