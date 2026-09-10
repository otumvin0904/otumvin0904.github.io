/* Add a PI link to the existing laboratory headers without rewriting each page.
   Loaded by lab-footer.html. Re-running it never duplicates a link. */
(function () {
  "use strict";
  if (window.__nanoPiNavigationLoaded) return;
  window.__nanoPiNavigationLoaded = true;

  const loader = document.currentScript || document.querySelector("script[data-lab-navigation]");
  const piHref = loader && loader.dataset.piUrl ? loader.dataset.piUrl : "/pi/";

  function pathOf(value) {
    try { return new URL(value, document.baseURI).pathname.replace(/\/+$/, "") || "/"; }
    catch (_) { return ""; }
  }

  function findLink(nav, tail) {
    return Array.from(nav.querySelectorAll("a[href]")).find(function (a) {
      return pathOf(a.href).endsWith(tail);
    });
  }

  function init() {
    document.querySelectorAll("header").forEach(function (header) {
      const navs = Array.from(header.querySelectorAll("nav"));
      const right = navs.find(function (nav) { return !!findLink(nav, "/team"); });
      const left = navs.find(function (nav) {
        return nav !== right && !!findLink(nav, "/research");
      });
      const logo = header.querySelector('a[class*="logo"], a[aria-label*="Laboratory Home"]');
      if (!left || !right || !logo) return;

      const team = findLink(right, "/team");
      // These custom headers put each anchor directly inside <nav>.
      // Unrelated list-based theme headers are left untouched.
      if (!team || team.parentElement !== right) return;

      let pi = Array.from(right.querySelectorAll("a[href]")).find(function (a) {
        return pathOf(a.href) === pathOf(piHref);
      });
      if (!pi) {
        pi = document.createElement("a");
        pi.href = piHref;
        pi.textContent = "PI";
        pi.className = "lab-nav-pi-link";
        pi.setAttribute("aria-label", "Principal Investigator");
        const separator = document.createElement("span");
        const sample = team.nextElementSibling;
        if (sample && sample.tagName === "SPAN") separator.className = sample.className;
        separator.textContent = "/";
        separator.setAttribute("aria-hidden", "true");
        right.insertBefore(pi, team);
        right.insertBefore(separator, team);
      }

      header.classList.add("lab-global-header");
      left.classList.add("lab-global-nav-left");
      right.classList.add("lab-global-nav-right");
      logo.classList.add("lab-global-logo");
      if (!left.hasAttribute("aria-label")) left.setAttribute("aria-label", "Research navigation");
      if (!right.hasAttribute("aria-label")) right.setAttribute("aria-label", "Laboratory navigation");
      if (pathOf(location.href) === pathOf(piHref)) {
        pi.classList.add("active");
        pi.setAttribute("aria-current", "page");
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once: true});
  else init();
}());
