(() => {
  /* ------------------------------------------------------------------
     BASE PATH
     Pages inside /products/ load this file as "../js/common.js", so every
     link we build has to be prefixed with "../" there. We read it from the
     <script src> so the same file works at any folder depth.
     ------------------------------------------------------------------ */
  const scriptTag = document.currentScript;
  const base = scriptTag
    ? (scriptTag.getAttribute("src") || "").replace(/js\/common\.js.*$/, "")
    : "";
  const path = window.location.pathname;
  const currentPage = path.split("/").pop() || "index.html";
  const inProducts = /\/products\/[^/]*$/.test(path);

  /* ------------------------------------------------------------------
     SITE DETAILS  (change here once, updates header + footer everywhere)
     ------------------------------------------------------------------ */
  const PHONE_TEL = "+917275746520";
  const PHONE_LABEL = "+91 72757 46520";
  const WHATSAPP = "https://wa.me/917275746520";
  const EMAIL = "skyluxeelevators@gmail.com";
  const ADDRESS = "Harsh Plaza, 201, Hazratganj, Lucknow, Uttar Pradesh 226001";
  const HOURS = "Mon – Sat: 9:00 AM – 6:00 PM";

  // Social links: apne real page ke link yaha daal do ("#" = placeholder)
  const social = [
    { icon: "fa-brands fa-facebook-f", label: "Facebook", url: "#" },
    { icon: "fa-brands fa-instagram", label: "Instagram", url: "#" },
    { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", url: "#" },
    { icon: "fa-brands fa-youtube", label: "YouTube", url: "#" },
    { icon: "fa-brands fa-whatsapp", label: "WhatsApp", url: WHATSAPP },
  ];

  const pages = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About Us" },
    { href: "products.html", label: "Products" },
    { href: "services.html", label: "Services" },
    { href: "blogs.html", label: "Our Blogs" },
    { href: "contact.html", label: "Contact" },
  ];

  const products = [
    { href: "products/hydraulic-elevator.html", label: "Hydraulic Elevator" },
    { href: "products/traction-elevators.html", label: "Traction Elevators" },
    { href: "products/pneumatic-elevator.html", label: "Pneumatic Elevator" },
    { href: "products/mrl-elevator.html", label: "MRL Elevator" },
  ];

  const services = [
    { href: "services.html#installation", label: "Installation" },
    { href: "services.html#maintenance", label: "AMC &amp; Maintenance" },
    { href: "services.html#emergency", label: "Emergency Repairs" },
    { href: "services.html#modernization", label: "Modernization" },
    { href: "services.html#consultation", label: "Consultation" },
    { href: "services.html#spare-parts", label: "Spare Parts" },
  ];

  const isActive = (href) =>
    href === "products.html" ? inProducts || currentPage === href : !inProducts && href === currentPage;

  const pageLinks = pages
    .map(({ href, label }) => {
      const active = isActive(href);
      const mobileOnly = href === "contact.html" ? " shared-nav-link-contact" : "";
      return `<a class="shared-nav-link${mobileOnly}${active ? " is-active" : ""}" href="${base}${href}"${
        active ? ' aria-current="page"' : ""
      }>${label}</a>`;
    })
    .join("");

  const listLinks = (items) =>
    items
      .map(
        ({ href, label }) =>
          `<li><a href="${base}${href}"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i>${label}</a></li>`
      )
      .join("");

  const socialLinks = social
    .map(
      ({ icon, label, url }) =>
        `<li><a href="${url}" aria-label="${label}" title="${label}"${
          url !== "#" ? ' target="_blank" rel="noopener"' : ""
        }><i class="${icon}" aria-hidden="true"></i></a></li>`
    )
    .join("");

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (!headerMount || !footerMount) {
    throw new Error("Shared header and footer mount points are required.");
  }

  /* ------------------------------------------------------------------
     HEADER
     ------------------------------------------------------------------ */
  headerMount.innerHTML = `
    <header class="shared-header">
      <div class="shared-nav-wrap">
        <a class="shared-brand" href="${base}index.html" aria-label="Skyluxe Elevators home">
          <span class="shared-brand-mark"><i class="fa-solid fa-arrows-up-down" aria-hidden="true"></i></span>
          <span class="shared-brand-name"><span>SKYLUXE</span> ELEVATORS</span>
        </a>
        <nav class="shared-nav-links" id="primary-navigation" aria-label="Primary navigation">
          ${pageLinks}
        </nav>
        <a class="shared-nav-cta${currentPage === "contact.html" && !inProducts ? " is-active" : ""}" href="${base}contact.html"${
          currentPage === "contact.html" && !inProducts ? ' aria-current="page"' : ""
        }>Contact Us<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        <button class="shared-menu-toggle" type="button" aria-controls="primary-navigation"
          aria-expanded="false" aria-label="Open navigation">
          <span class="shared-menu-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
    </header>`;

  /* ------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------ */
  footerMount.innerHTML = `
    <footer class="shared-footer">
      <div class="footer-glow footer-glow-1" aria-hidden="true"></div>
      <div class="footer-glow footer-glow-2" aria-hidden="true"></div>
      <div class="footer-watermark" aria-hidden="true">SKYLUXE</div>

      <div class="shared-footer-content">

        <div class="footer-emergency">
          <div class="fe-icon"><i class="fa-solid fa-headset" aria-hidden="true"></i></div>
          <div class="fe-text">
            <h2>Lift stuck or need a quote?</h2>
            <p>Talk to our team for breakdown support, new installations and AMC enquiries.</p>
          </div>
          <div class="fe-actions">
            <a class="fbtn fbtn-light" href="tel:${PHONE_TEL}"><i class="fa-solid fa-phone" aria-hidden="true"></i>Call Now</a>
            <a class="fbtn fbtn-ghost" href="${WHATSAPP}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i>WhatsApp</a>
          </div>
        </div>

        <div class="shared-footer-grid">
          <div class="shared-footer-brand">
            <a class="shared-brand" href="${base}index.html" aria-label="Skyluxe Elevators home">
              <span class="shared-brand-mark"><i class="fa-solid fa-arrows-up-down" aria-hidden="true"></i></span>
              <span class="shared-brand-name"><span>SKYLUXE</span> ELEVATORS</span>
            </a>
            <p>Quality, safety and innovation in every lift we install. Elevator installation, repair and modernization for homes and businesses, backed by reliable service and customer care.</p>
            <ul class="footer-social">${socialLinks}</ul>
          </div>

          <div>
            <h2 class="footer-title">Quick Links</h2>
            <ul class="shared-footer-links">${listLinks(pages)}</ul>
          </div>

          <div>
            <h2 class="footer-title">Our Products</h2>
            <ul class="shared-footer-links">${listLinks(products)}</ul>
          </div>

          <div>
            <h2 class="footer-title">Our Services</h2>
            <ul class="shared-footer-links">${listLinks(services)}</ul>
          </div>

          <div class="shared-footer-contact-col">
            <h2 class="footer-title">Contact Us</h2>
            <ul class="shared-footer-contact">
              <li>
                <span class="fc-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></span>
                <div><small>Call us</small><a href="tel:${PHONE_TEL}">${PHONE_LABEL}</a></div>
              </li>
              <li>
                <span class="fc-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></span>
                <div><small>Email us</small><a href="mailto:${EMAIL}">${EMAIL}</a></div>
              </li>
              <li>
                <span class="fc-icon"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></span>
                <div><small>Visit us</small><span class="fc-text">${ADDRESS}</span></div>
              </li>
              <li>
                <span class="fc-icon"><i class="fa-solid fa-clock" aria-hidden="true"></i></span>
                <div><small>Business hours</small><span class="fc-text">${HOURS}<br>Sunday: Closed</span></div>
              </li>
            </ul>
          </div>
        </div>

        <div class="shared-footer-bottom">
          <p>© ${new Date().getFullYear()} Skyluxe Elevators. All rights reserved.</p>
          <span class="footer-tagline">Quality <i class="fa-solid fa-circle" aria-hidden="true"></i> Safety <i class="fa-solid fa-circle" aria-hidden="true"></i> Innovation</span>
        </div>
      </div>
    </footer>

    <button class="back-to-top" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up" aria-hidden="true"></i></button>`;

  /* ------------------------------------------------------------------
     NAV BEHAVIOUR
     ------------------------------------------------------------------ */
  const header = headerMount.querySelector(".shared-header");
  const menuToggle = headerMount.querySelector(".shared-menu-toggle");
  const navigation = headerMount.querySelector(".shared-nav-links");
  const overlay = headerMount.querySelector("#nav-overlay");
  const backToTop = footerMount.querySelector(".back-to-top");

  function closeMenu() {
    navigation.classList.remove("is-open");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.style.overflow = "";
  }

  function openMenu() {
    navigation.classList.add("is-open");
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    document.body.style.overflow = "hidden";
  }

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    if (isExpanded) { closeMenu(); } else { openMenu(); }
  });

  overlay.addEventListener("click", closeMenu);

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) closeMenu();
  });

  // shadow + compact bar after scrolling, back-to-top button
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle("is-scrolled", y > 10);
    backToTop.classList.toggle("is-visible", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ------------------------------------------------------------------
     GSAP SCROLL ANIMATIONS
     ------------------------------------------------------------------ */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";

  if (hasGsap && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // header / footer / accordion are not animated
    const animatable = (el) => !el.closest(".shared-header, .shared-footer, .accordion");

    // Text animates from left
    gsap.utils
      .toArray("h1, h2, h3, h4, p, .section-copy, .product-desc, .about-lead, .footer-description")
      .filter(animatable)
      .forEach((text) => {
        gsap.from(text, {
          scrollTrigger: { trigger: text, start: "top 85%", toggleActions: "play none none reverse" },
          x: -60, opacity: 0, duration: 0.8, ease: "power2.out"
        });
      });

    // Images animate from right
    gsap.utils
      .toArray("img")
      .filter(animatable)
      .forEach((img) => {
        gsap.from(img, {
          scrollTrigger: { trigger: img, start: "top 85%", toggleActions: "play none none reverse" },
          x: 60, opacity: 0, duration: 0.8, ease: "power2.out"
        });
      });
  }

  /* ------------------------------------------------------------------
     ANIMATED COUNTERS
     ------------------------------------------------------------------ */
  function initCounters() {
    document.querySelectorAll(".num[data-count]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      var duration = 2000;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = (timestamp - startTime) / duration;
        if (progress > 1) progress = 1;
        var val = Math.floor(progress * target);
        el.textContent = val + (target >= 1000 ? "+" : "");
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + "+";
        }
      }

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !el.classList.contains("counted")) {
            el.classList.add("counted");
            requestAnimationFrame(step);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(el);
    });
  }

  initCounters();
})();
