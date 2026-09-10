---
layout: single
title: "PI"
permalink: /pi/
author_profile: false
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/pi-page.css' | relative_url }}?v=pi-page-1">
<link rel="stylesheet" href="{{ '/assets/css/lab-footer.css' | relative_url }}?v=footer-bottom-2">
<link rel="stylesheet" href="{{ '/assets/css/lab-navigation.css' | relative_url }}?v=pi-nav-1">

<!-- Sources checked 2026-09-09:
  Laboratory biography: https://sites.google.com/view/nspec/team/pi
  Faculty profile: https://chemistry.kangwon.ac.kr/chemistry/professor/professor.do?key=$cms$IwBgHArBxA&mode=view
  Current rank: https://cms.kangwon.ac.kr/chemistry/graduate/intro.do
  Existing footer address is deliberately kept unchanged.
-->

<div class="pi-page lab-page-shell" markdown="0">

      <header class="pi-header lab-global-header">


        <!-- LEFT MENU -->
        <nav class="pi-nav pi-nav-left lab-global-nav-left" aria-label="Research navigation">

          <a href="{{ '/research/' | relative_url }}">
            Research
          </a>

          <span class="pi-divider">/</span>

          <a href="{{ '/publications/' | relative_url }}">
            Publications
          </a>

          <span class="pi-divider">/</span>

          <a href="{{ '/instruments/' | relative_url }}">
            Instruments
          </a>

          <span class="pi-divider">/</span>

          <a href="{{ '/software/' | relative_url }}">
            Software
          </a>

        </nav>



        <!-- CENTER LOGO -->
        <a
          class="pi-logo lab-global-logo"
          href="{{ '/' | relative_url }}"
          aria-label="NanoSpectroscopy Laboratory Home"
        >

          <img
            src="{{ '/images/logo.png' | relative_url }}"
            alt="NanoSpectroscopy Laboratory"
          >

        </a>



        <!-- RIGHT MENU -->
        <nav class="pi-nav pi-nav-right lab-global-nav-right" aria-label="Laboratory navigation">

          <a href="{{ '/pi/' | relative_url }}" class="lab-nav-pi-link active" aria-current="page" aria-label="Principal Investigator">
            PI
          </a>

          <span class="pi-divider" aria-hidden="true">/</span>

          <a href="{{ '/team/' | relative_url }}">
            Team
          </a>

          <span class="pi-divider">/</span>

          <a href="{{ '/gallery/' | relative_url }}">
            Gallery
          </a>

          <span class="pi-divider">/</span>

          <a href="{{ '/news/' | relative_url }}">
            News
          </a>

          <span class="pi-divider">/</span>

          <a href="{{ '/contact/' | relative_url }}">
            Contact
          </a>


          <!-- SEARCH -->
          <button
            class="pi-search"
            id="pi-search-open"
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

  <main class="pi-main">
    <div class="pi-heading">
      <h1>PI</h1>
      <span class="pi-heading__line" aria-hidden="true"></span>
    </div>

    <section class="pi-profile" aria-labelledby="pi-name">
      <div class="pi-photo-column">
        <!-- Optional local replacement: images/pi/prof-kang.jpg.
             Otherwise use the photograph supplied on the KNU faculty profile. -->
        <div class="pi-portrait">
          <div class="pi-portrait__fallback" aria-hidden="true">
            <span>GK</span>
          </div>
          <img
            src="{{ '/images/pi/prof_kang.jpg' | relative_url }}"
            alt="Portrait from the KNU faculty profile"
            width="189" height="253"
            decoding="async"
            onerror="this.hidden = true; this.parentElement.classList.add('is-unavailable');"
          >
        </div>
        <p class="pi-photo-caption">NanoSpectroscopy Laboratory</p>
      </div>

      <div class="pi-profile__information">
        <p class="pi-profile__label">KANGWON NATIONAL UNIVERSITY</p>
        <h2 id="pi-name">Gyeongwon Kang <span lang="ko">강경원</span></h2>
        <p class="pi-profile__position">Assistant Professor</p>
        <p class="pi-profile__department">Department of Chemistry</p>
        <p class="pi-profile__intro">
          Research in nanoplasmonics and molecular spectroscopy,
          focusing on chemical processes at surfaces and interfaces.
        </p>

        <dl class="pi-contact">
          <div><dt>Email</dt><dd><a href="mailto:gkang@kangwon.ac.kr">gkang@kangwon.ac.kr</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:+82332508487">+82 (0)33-250-8487</a></dd></div>
        </dl>

        <div class="pi-profile__links">
          <a href="{{ '/publications/' | relative_url }}">Publications <span aria-hidden="true">→</span></a>
          <a href="https://chemistry.kangwon.ac.kr/chemistry/professor/professor.do?key=%24cms%24IwBgHArBxA&amp;mode=view"
             target="_blank" rel="noopener noreferrer">Faculty profile <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <div class="pi-details">
      <section class="pi-section" aria-labelledby="pi-education-title">
        <h2 id="pi-education-title">Education</h2>
        <div class="pi-entry">
          <p class="pi-entry__date">2015–2021</p>
          <h3>Ph.D. in Chemistry</h3>
          <p class="pi-entry__institution">Northwestern University</p>
          <p class="pi-entry__note">Advisors: George C. Schatz and Richard P. Van Duyne</p>
        </div>
        <div class="pi-entry">
          <p class="pi-entry__date">2009–2015</p>
          <h3>B.S. in Chemistry</h3>
          <p class="pi-entry__institution">KAIST</p>
          <p class="pi-entry__note">Advisors: Hyungjun Kim and Bongsoo Kim</p>
        </div>
      </section>

      <section class="pi-section" aria-labelledby="pi-appointments-title">
        <h2 id="pi-appointments-title">Appointments</h2>
        <div class="pi-entry">
          <p class="pi-entry__date">2023–Present</p>
          <h3>Assistant Professor</h3>
          <p class="pi-entry__institution">Department of Chemistry, Kangwon National University</p>
        </div>
        <div class="pi-entry">
          <p class="pi-entry__date">2021–2023</p>
          <h3>Research Associate</h3>
          <p class="pi-entry__institution">Cavendish Laboratory, University of Cambridge</p>
          <p class="pi-entry__note">Jeremy J. Baumberg group</p>
        </div>
      </section>

      <section class="pi-section" aria-labelledby="pi-research-title">
        <h2 id="pi-research-title">Research Interests</h2>
        <ul class="pi-research-list">
          <li>Plasmonically active nanostructures</li>
          <li>Single-molecule and single-particle chemistry using SERS and TERS</li>
          <li>Spectroscopic studies of catalyst and electrode surfaces</li>
          <li>Electronic-structure calculations and surface optical modeling</li>
        </ul>
        <a class="pi-inline-link" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">→</span></a>
      </section>

      <section class="pi-section" aria-labelledby="pi-honors-title">
        <h2 id="pi-honors-title">Honors &amp; Fellowships</h2>
        <div class="pi-entry">
          <p class="pi-entry__date">2015–2020</p>
          <h3>Study Abroad Fellowship</h3>
          <p class="pi-entry__institution">Korea Foundation for Advanced Studies (KFAS)</p>
        </div>
        <div class="pi-entry">
          <p class="pi-entry__date">2015</p>
          <h3>Summa Cum Laude</h3>
          <p class="pi-entry__institution">KAIST</p>
        </div>
      </section>
    </div>

    <p class="pi-source-note">
      Profile sources:
      <a href="https://sites.google.com/view/nspec/team/pi" target="_blank" rel="noopener noreferrer">Laboratory biography</a>
      <span aria-hidden="true">·</span>
      <a href="https://chemistry.kangwon.ac.kr/chemistry/professor/professor.do?key=%24cms%24IwBgHArBxA&amp;mode=view" target="_blank" rel="noopener noreferrer">KNU faculty profile</a>
    </p>
  </main>

  {% include lab-footer.html %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {

  const searchOpen =
    document.getElementById("pi-search-open");

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
