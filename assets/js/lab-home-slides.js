/* ==========================================================
   NanoSpectroscopy — independent Research / Gallery slideshows

   - Reads the site's rendered /research/ and /gallery/ pages.
   - Never executes scripts from fetched pages.
   - Supports the existing Gallery data-gallery-base/count format.
   - Loads only the current / next images; skips missing files.
   - Native JavaScript: no additional plugin or build dependency.
   ========================================================== */
(function () {
  "use strict";

  const PAGE_TIMEOUT = 15000;
  const IMAGE_TIMEOUT = 12000;
  const DEFAULT_INTERVAL = 5000;
  const ICON_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 10 7-10 7Z"/></svg>';
  const ICON_PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg>';
  const EXCLUDED = 'header, nav, footer, .sidebar, .author__avatar, #site-search-panel, .ns-hero, .ns-showcase, [data-home-slide-ignore]';

  /** @typedef {{src: string, alt: string, caption: string}} Slide */

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  // Reject script / placeholder URLs instead of inserting them into the home.
  function imageURL(value, base) {
    const raw = cleanText(value);
    if (!raw || raw.includes("{{") || raw.startsWith("#")) return "";
    try {
      const url = new URL(raw, base);
      if (!/^https?:$/.test(url.protocol)) return "";
      if (/(?:^|\/)(?:logo(?:[-_.]|$)|favicon|icon(?:[-_.]|$)|spacer\.)/i.test(url.pathname)) return "";
      return url.href;
    } catch (_) {
      return "";
    }
  }

  function largestSrcset(value) {
    // The existing site uses ordinary URL srcsets, not data-URI srcsets.
    return String(value || "").split(",").map(function (part) {
      const pieces = part.trim().split(/\s+/);
      return { url: pieces[0], size: parseFloat(pieces[1]) || 1 };
    }).filter(function (item) {
      return item.url && !item.url.startsWith("data:");
    }).sort(function (a, b) {
      return b.size - a.size;
    }).map(function (item) {
      return item.url;
    })[0] || "";
  }

  function imageSource(img, base) {
    const sources = [
      img.getAttribute("data-src"),
      img.getAttribute("data-lazy-src"),
      img.getAttribute("data-original"),
      largestSrcset(img.getAttribute("data-srcset") || img.getAttribute("srcset")),
      img.getAttribute("src")
    ];
    const picture = img.closest("picture");
    if (picture) {
      picture.querySelectorAll("source").forEach(function (source) {
        sources.push(largestSrcset(source.getAttribute("srcset")));
      });
    }
    for (const source of sources) {
      const url = imageURL(source, base);
      if (url) return url;
    }
    return "";
  }

  function scopeFor(doc, kind) {
    const selectors = kind === "gallery"
      ? [".gallery-main", ".gallery-page", "#main .page__content", "main", "#main"]
      : [".research-main", ".research-page", "#main .page__content", "main", "#main"];
    for (const selector of selectors) {
      const root = doc.querySelector(selector);
      if (root) return root;
    }
    return doc.body;
  }

  function captionFor(img, fallback) {
    const figure = img.closest("figure");
    const caption = figure && figure.querySelector("figcaption");
    if (caption && cleanText(caption.textContent)) return cleanText(caption.textContent);
    const explicit = cleanText(img.getAttribute("data-caption") || img.getAttribute("alt"));
    if (explicit) return explicit;
    const card = img.closest("article, .research-card, .research-item, .gallery-card, section");
    const title = card && card.querySelector("h3, h2");
    return cleanText(title && title.textContent) || fallback;
  }

  function collectImages(root, base, label) {
    const items = [];
    root.querySelectorAll("img").forEach(function (img) {
      if (img.closest(EXCLUDED)) return;
      const width = Number(img.getAttribute("width"));
      const height = Number(img.getAttribute("height"));
      if (width > 0 && height > 0 && width < 80 && height < 80) return;
      const src = imageSource(img, base);
      if (!src) return;
      const caption = captionFor(img, label);
      items.push({ src: src, alt: cleanText(img.getAttribute("alt")) || caption, caption: caption });
    });
    return items;
  }

  function extractResearch(doc, base) {
    const scope = scopeFor(doc, "research");
    const items = collectImages(scope, base, "Research");
    // Also support inline background-image when no <img> is used.
    // External CSS background images and arbitrary dynamic scripts are not guessed.
    if (!items.length) {
      scope.querySelectorAll('[style*="background"]').forEach(function (node) {
        if (node.closest(EXCLUDED)) return;
        const style = node.getAttribute("style") || "";
        const match = /url\(\s*["']?([^"')]+)["']?\s*\)/i.exec(style);
        const src = match && imageURL(match[1], base);
        if (src) {
          const text = cleanText(node.getAttribute("aria-label") || node.getAttribute("data-caption")) || "Research";
          items.push({ src: src, alt: text, caption: text });
        }
      });
    }
    return items;
  }

  function extractGallery(doc, base, rootPath) {
    const scope = scopeFor(doc, "gallery");
    const items = [];
    let galleryRoot = imageURL(rootPath, base);
    // Read the existing Gallery's literal imageRoot; do not run its scripts.
    for (const script of Array.from(doc.scripts)) {
      const match = /\b(?:const|let|var)\s+(?:imageRoot|galleryRoot)\s*=\s*["']([^"']+)["']\s*;/.exec(script.textContent || "");
      if (match) {
        galleryRoot = imageURL(match[1], base) || galleryRoot;
        break;
      }
    }
    if (galleryRoot && !galleryRoot.endsWith("/")) galleryRoot += "/";

    // The current Gallery creates img nodes in JS, so its initial HTML has
    // empty tracks. Reconstruct exactly its confirmed base-NN.jpg convention.
    scope.querySelectorAll(".gallery-card[data-gallery-base]").forEach(function (card) {
      const baseName = cleanText(card.dataset.galleryBase);
      const count = Math.min(500, Math.max(1, parseInt(card.dataset.galleryCount || "1", 10) || 1));
      const heading = card.querySelector("h3");
      const caption = cleanText(heading && heading.textContent) || cleanText(card.dataset.galleryAlt) || "Gallery";
      const alt = cleanText(card.dataset.galleryAlt) || caption;
      if (!baseName || !galleryRoot) return;
      for (let number = 1; number <= count; number += 1) {
        const src = imageURL(baseName + "-" + String(number).padStart(2, "0") + ".jpg", galleryRoot);
        if (src) items.push({ src: src, alt: alt + " " + number, caption: caption });
      }
    });
    // Ordinary Gallery img tags, including older/static versions, work as well.
    return items.concat(collectImages(scope, base, "Gallery"));
  }

  function uniqueSlides(items) {
    const seen = new Set();
    return items.filter(function (item) {
      if (!item.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
  }

  async function fetchSlides(root) {
    const source = new URL(root.dataset.source, window.location.href);
    if (source.origin !== window.location.origin) throw new Error("Slideshow source must be a page on this site.");
    const controller = new AbortController();
    const timer = window.setTimeout(function () { controller.abort(); }, PAGE_TIMEOUT);
    try {
      const response = await fetch(source.href, {
        credentials: "same-origin", cache: "no-cache", signal: controller.signal
      });
      if (!response.ok) throw new Error("Page request failed: HTTP " + response.status);
      const doc = new DOMParser().parseFromString(await response.text(), "text/html");
      const base = response.url || source.href;
      const items = root.dataset.homeSlideshow === "gallery"
        ? extractGallery(doc, base, root.dataset.galleryRoot)
        : extractResearch(doc, base);
      return uniqueSlides(items);
    } finally {
      window.clearTimeout(timer);
    }
  }

  class HomeSlideshow {
    constructor(root) {
      this.root = root;
      this.label = root.dataset.homeSlideshow === "gallery" ? "Gallery" : "Research";
      this.viewport = root.querySelector(".ns-home-slides__viewport");
      this.host = root.querySelector(".ns-home-slides__slides");
      this.link = root.querySelector(".ns-home-slides__image-link");
      this.message = root.querySelector(".ns-home-slides__message");
      this.caption = root.querySelector(".ns-home-slides__caption");
      this.counter = root.querySelector(".ns-home-slides__counter");
      this.controls = root.querySelector(".ns-home-slides__controls");
      this.toggle = root.querySelector('[data-slide-action="toggle"]');
      this.interval = Math.max(1500, parseInt(root.dataset.interval, 10) || DEFAULT_INTERVAL);
      this.motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.paused = this.motion.matches;
      this.hovered = false;
      this.focusBlocked = false;
      this.visible = true;
      this.busy = false;
      this.index = -1;
      this.items = [];
      this.failed = new Set();
      this.loads = new Map();
      this.timer = null;
      this.suppressClickUntil = 0;
      this.bindEvents();
      this.load();
    }

    async load() {
      try {
        this.items = await fetchSlides(this.root);
        if (!this.items.length) throw new Error("No supported images were found in the source page.");
        await this.show(0, 1, false);
      } catch (error) {
        console.warn("[Home " + this.label + "]", error);
        this.showError("Images could not be loaded. Please use View " + this.label + ".");
      }
    }

    available() {
      return this.items.filter((item) => !this.failed.has(item.src));
    }

    canPlay() {
      return !this.paused && !this.hovered && !this.focusBlocked && this.visible &&
        !document.hidden && !this.busy && this.index >= 0 && this.available().length > 1;
    }

    stopTimer() {
      if (this.timer !== null) window.clearTimeout(this.timer);
      this.timer = null;
    }

    schedule() {
      this.stopTimer();
      this.host.setAttribute("aria-live", this.canPlay() ? "off" : "polite");
      if (this.canPlay()) {
        this.timer = window.setTimeout(() => this.show(this.index + 1, 1, false), this.interval);
      }
    }

    updateControls() {
      const available = this.available();
      const current = this.items[this.index];
      const position = current ? available.indexOf(current) + 1 : 0;
      this.counter.textContent = String(position).padStart(2, "0") + " / " + String(available.length).padStart(2, "0");
      this.counter.setAttribute("aria-label", "Image " + position + " of " + available.length);
      this.controls.hidden = this.index < 0 || available.length < 2;
      this.controls.querySelectorAll("button").forEach((button) => {
        button.disabled = available.length < 2;
      });
      this.toggle.innerHTML = this.paused ? ICON_PLAY : ICON_PAUSE;
      const action = this.paused ? "Play" : "Pause";
      this.toggle.setAttribute("aria-label", action + " " + this.label + " slideshow");
      this.toggle.title = action + " slideshow";
    }

    // Promise cache keeps at most three candidate images, not the entire gallery.
    imageFor(item) {
      if (this.failed.has(item.src)) return Promise.resolve(null);
      if (this.loads.has(item.src)) return this.loads.get(item.src);
      const result = new Promise((resolve) => {
        const image = new Image();
        let complete = false;
        const finish = (success) => {
          if (complete) return;
          complete = true;
          window.clearTimeout(timeout);
          image.onload = null;
          image.onerror = null;
          if (!success) {
            this.failed.add(item.src);
            console.warn("[Home " + this.label + "] Skipping image:", item.src);
          }
          resolve(success ? image : null);
        };
        const timeout = window.setTimeout(() => finish(false), IMAGE_TIMEOUT);
        image.alt = item.alt;
        image.decoding = "async";
        image.draggable = false;
        image.onload = async () => {
          if (!image.naturalWidth) return finish(false);
          try { if (image.decode) await image.decode(); } catch (_) { /* onload is sufficient */ }
          finish(true);
        };
        image.onerror = () => finish(false);
        image.src = item.src;
      });
      this.loads.set(item.src, result);
      while (this.loads.size > 3) this.loads.delete(this.loads.keys().next().value);
      return result;
    }

    async show(start, direction, manual) {
      if (this.busy || !this.items.length) return;
      this.busy = true;
      this.stopTimer();
      if (manual) this.host.setAttribute("aria-live", "polite");
      try {
        const count = this.items.length;
        for (let tries = 0; tries < count; tries += 1) {
          const index = ((start + tries * direction) % count + count) % count;
          const item = this.items[index];
          if (this.failed.has(item.src)) continue;
          const image = await this.imageFor(item);
          if (!image) continue;
          // An automatic request can finish after the pointer/focus paused it.
          if (!manual && this.index >= 0 && (this.paused || this.hovered || this.focusBlocked || !this.visible || document.hidden)) return;
          if (index !== this.index) this.render(index, image);
          this.updateControls();
          this.preloadNext();
          return;
        }
        this.showError("No images are currently available. Please use View " + this.label + ".");
      } finally {
        this.busy = false;
        this.schedule();
      }
    }

    render(index, image) {
      const oldSlides = Array.from(this.host.children);
      const item = this.items[index];
      const slide = document.createElement("div");
      slide.className = "ns-home-slides__slide";
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", item.caption || this.label);
      // Clone the loaded node: returning to a slide must not move an old DOM node.
      slide.appendChild(image.cloneNode(true));
      this.host.appendChild(slide);
      // Commit the starting opacity, then fade without changing image geometry.
      void slide.offsetWidth;
      slide.classList.add("is-active");
      oldSlides.forEach(function (old) {
        old.setAttribute("aria-hidden", "true");
        old.classList.remove("is-active");
        window.setTimeout(function () { old.remove(); }, 500);
      });
      this.index = index;
      this.root.dataset.currentIndex = String(index);
      this.caption.textContent = item.caption;
      this.caption.title = item.caption;
      this.message.hidden = true;
      this.viewport.setAttribute("aria-busy", "false");
    }

    preloadNext() {
      if (this.available().length < 2) return;
      for (let step = 1; step < this.items.length; step += 1) {
        const item = this.items[(this.index + step) % this.items.length];
        if (!this.failed.has(item.src)) {
          this.imageFor(item).then(() => this.updateControls());
          return;
        }
      }
    }

    showError(text) {
      this.paused = true;
      this.stopTimer();
      this.message.textContent = text;
      this.message.hidden = false;
      this.viewport.setAttribute("aria-busy", "false");
      this.controls.hidden = true;
    }

    bindEvents() {
      this.root.querySelector('[data-slide-action="previous"]').addEventListener("click", () => this.show(this.index - 1, -1, true));
      this.root.querySelector('[data-slide-action="next"]').addEventListener("click", () => this.show(this.index + 1, 1, true));
      this.toggle.addEventListener("click", () => {
        this.paused = !this.paused;
        this.updateControls();
        this.schedule();
      });
      this.viewport.addEventListener("mouseenter", () => { this.hovered = true; this.schedule(); });
      this.viewport.addEventListener("mouseleave", () => { this.hovered = false; this.schedule(); });
      const updateFocus = () => {
        this.focusBlocked = this.root.contains(document.activeElement) && document.activeElement !== this.toggle;
        this.schedule();
      };
      this.root.addEventListener("focusin", updateFocus);
      this.root.addEventListener("focusout", () => window.setTimeout(updateFocus, 0));
      this.link.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const direction = event.key === "ArrowLeft" ? -1 : 1;
        this.show(this.index + direction, direction, true);
      });
      let touch = null;
      this.link.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "touch") touch = { x: event.clientX, y: event.clientY };
      });
      this.link.addEventListener("pointercancel", () => { touch = null; });
      this.link.addEventListener("pointerup", (event) => {
        if (!touch) return;
        const dx = event.clientX - touch.x;
        const dy = event.clientY - touch.y;
        touch = null;
        if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.3) return;
        this.suppressClickUntil = Date.now() + 600;
        const direction = dx < 0 ? 1 : -1;
        this.show(this.index + direction, direction, true);
      });
      this.link.addEventListener("click", (event) => {
        if (Date.now() < this.suppressClickUntil) event.preventDefault();
      });
      document.addEventListener("visibilitychange", () => this.schedule());
      if ("IntersectionObserver" in window) {
        this.observer = new IntersectionObserver((entries) => {
          this.visible = entries[0].isIntersecting;
          this.schedule();
        }, { threshold: 0.05 });
        this.observer.observe(this.viewport);
      }
      this.motion.addEventListener("change", (event) => {
        if (event.matches) this.paused = true;
        this.updateControls();
        this.schedule();
      });
    }
  }

  function start() {
    document.querySelectorAll("[data-home-slideshow]").forEach(function (root) {
      if (root.dataset.homeSlidesReady) return;
      root.dataset.homeSlidesReady = "true";
      new HomeSlideshow(root);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
}());
