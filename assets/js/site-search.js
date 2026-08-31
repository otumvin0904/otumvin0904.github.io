(() => {
  "use strict";

  const openButton = document.getElementById("site-search-open");
  const closeButton = document.getElementById("site-search-close");
  const panel = document.getElementById("site-search-panel");
  const input = document.getElementById("site-search-input");
  const resultsWrap = document.getElementById("site-search-results-wrap");
  const count = document.getElementById("site-search-count");
  const results = document.getElementById("site-search-results");

  if (!openButton || !closeButton || !panel || !input || !resultsWrap || !count || !results) {
    return;
  }

  let searchData = [];
  let dataLoaded = false;

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalize(value) {
    return String(value ?? "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  async function loadSearchData() {
    if (dataLoaded) return;

    try {
      const response = await fetch("/search.json", { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`search.json 로드 실패: ${response.status}`);
      }

      const data = await response.json();

      searchData = Array.isArray(data)
        ? data.filter(item => item && item.url && item.url !== "/search.json")
        : [];

      dataLoaded = true;
    } catch (error) {
      console.error("[NanoSpec Search]", error);
      searchData = [];
      dataLoaded = true;
    }
  }

  async function openSearch() {
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("site-search-open");

    await loadSearchData();

    window.setTimeout(() => input.focus(), 30);
  }

  function closeSearch() {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("site-search-open");

    input.value = "";
    results.innerHTML = "";
    count.textContent = "";
    resultsWrap.hidden = true;
  }

  function runSearch() {
    const query = normalize(input.value);

    if (!query) {
      results.innerHTML = "";
      count.textContent = "";
      resultsWrap.hidden = true;
      return;
    }

    const matches = searchData
      .filter(item => {
        return normalize(item.title).includes(query) ||
               normalize(item.content).includes(query);
      })
      .slice(0, 20);

    resultsWrap.hidden = false;
    count.textContent = `${matches.length}개의 검색 결과`;

    if (matches.length === 0) {
      results.innerHTML =
        '<div class="site-search-empty">검색 결과가 없습니다.</div>';
      return;
    }

    results.innerHTML = matches.map(item => {
      let description = String(item.content ?? "")
        .replace(/\s+/g, " ")
        .trim();

      if (description.length > 150) {
        description = description.slice(0, 150) + "...";
      }

      return `
        <a class="site-search-result" href="${escapeHTML(item.url)}">
          <div class="site-search-result__title">
            ${escapeHTML(item.title || "Untitled")}
          </div>
          <div class="site-search-result__description">
            ${escapeHTML(description)}
          </div>
        </a>
      `;
    }).join("");
  }

  openButton.addEventListener("click", openSearch);
  closeButton.addEventListener("click", closeSearch);
  input.addEventListener("input", runSearch);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) {
      closeSearch();
    }
  });
})();
