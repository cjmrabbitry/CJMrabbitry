/* =========================================================
   CJM Legacy Rabbitry — shared header + footer
   Every page has <div id="site-header"></div> and
   <div id="site-footer"></div>; this file swaps them for the
   real header and footer. Edit the menu or footer HERE and
   every page on the site updates.
   Header/footer STYLES live in css/site.css.
   ========================================================= */

(function () {

/* ---------------- HEADER + MOBILE MENU ---------------- */
var HEADER_HTML = `
<header class="site-header">
  <div class="header-inner">
    <a href="./" class="brand" aria-label="CJM Legacy Rabbitry, home">
      <span class="brand-word">
        <span class="cjm">CJM</span><span class="legacy">LEGACY</span><span class="rabbitry">RABBITRY</span>
      </span>
    </a>
    <nav class="primary-nav" id="primaryNav">
      <div class="nav-item simple" data-item="why">
        <button class="nav-trigger" data-toggle="why">
          WHY CJM?
          <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="simple-drop">
          <a href="why-cjm/our-story" class="coming-soon">Our Story <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="what-is-arba" class="arw">What is ARBA?  <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="why-buy">Why Buy From Us <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
      <div class="nav-item" data-item="learning">
        <button class="nav-trigger" data-toggle="learning">
          LEARNING HUB
          <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="mega-wrap">
          <div class="mega-panel">
            <div class="mega-grid">
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5C6 4.5 9 4.5 12 6c3-1.5 6-1.5 8-.5v13c-2-1-5-1-8 .5-3-1.5-6-1.5-8-.5V5.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M12 6v13" stroke="currentColor" stroke-width="1.3"/></svg>
                </div>
                <h4 class="col-title">Standard of Perfection</h4>
                <p class="col-desc">The ARBA benchmark.</p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="hl-sop">Holland Lop Guide <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="dh-sop">Dwarf Hotot Guide <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="sop-guide" class="cta-link">Browse All Breed Standards <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M7 4c0 4 10 4 10 8s-10 4-10 8M17 4c0 4-10 4-10 8s10 4 10 8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
                </div>
                <h4 class="col-title">Rabbit Genetics</h4>
                <p class="col-desc">Inheritance and color, explained for breeders and buyers alike.</p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="hl-genetics">Holland Lop Genetics 101 <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="vienna-gene" class="arw">The Vienna Gene <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="genetics/dwarf-hotot-banded" class="coming-soon">Dwarf Hotot Banded Gene <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="hl-genetics" class="cta-link coming-soon">Explore All Genetics <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4.5 7 4.5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4 4.5 8-2.5 4.15-9.5 8.5-9.5 8.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
                </div>
                <h4 class="col-title">Rabbit Care &amp; Health</h4>
                <p class="col-desc">Thoughtful guidance for keeping rabbits healthy, happy, comfortable, and thriving. </p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="rabbit-feed-guide" class="arw">Feeding &amp; Nutrition<svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="rabbit-care/housing-enclosures" class="coming-soon">Housing &amp; Enclosures <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="rabbit-care/health-medications" class="coming-soon">Health &amp; Medications <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="rabbit-care/find-a-vet" class="cta-link coming-soon">Find a Rabbit Vet <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-4.5L21 9l-9 4.5L3 9Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M7 11v4c0 1.5 9 1.5 10 0v-4" stroke="currentColor" stroke-width="1.3"/></svg>
                </div>
                <h4 class="col-title">Beginner's Academy</h4>
                <p class="col-desc">Start here if you're new to rabbits — or new to breeding.</p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="academy/choosing-a-breed" class="coming-soon">Choosing a Breed <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="academy/bringing-home-your-rabbit" class="coming-soon">Bringing Home Your Rabbit <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="academy/temperament-bucks-does" class="coming-soon">Temperament: Bucks vs. Does <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="academy/faq" class="coming-soon">Rabbit FAQ <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="academy" class="cta-link coming-soon">Explore Academy <span class="soon-tag">Soon</span> <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
            </div>
            <div class="mega-footer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v13M7 11h10M9 20c-3-1-5-3.5-5-7M15 20c3-1 5-3.5 5-7"/></svg>
              <span>Southern Maryland Rooted</span>
              <span class="dot"></span>
              <span>ARBA Member</span>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item" data-item="rabbits">
        <button class="nav-trigger" data-toggle="rabbits">
          OUR RABBITS
          <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="mega-wrap" style="width:min(760px,92vw);">
          <div class="mega-panel">
            <div class="mega-grid cols-3">
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 21c-4.5-3-8-6.2-8-10.2A4.8 4.8 0 0 1 12 7.5a4.8 4.8 0 0 1 8 3.3C20 14.8 16.5 18 12 21Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
                </div>
                <h4 class="col-title">Holland Lops</h4>
                <p class="col-desc">The Hallmark Breed</p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="our-rabbits?breed=holland-lop&age=senior">Seniors <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="our-rabbits?breed=holland-lop&age=junior">Juniors <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.3"/></svg>
                </div>
                <h4 class="col-title">Dwarf Hotots</h4>
                <p class="col-desc">The Eye of the Fancy</p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="our-rabbits?breed=dwarf-hotot&age=senior">Seniors <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="our-rabbits?breed=dwarf-hotot&age=junior">Juniors <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
              <div class="mega-col">
                <div class="col-icon">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M4.5 8.5c0 3 3 4 7.5 4s7.5-1 7.5-4M4.5 8.5c0-2 3-3 7.5-3s7.5 1 7.5 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
                </div>
                <h4 class="col-title">Availability</h4>
                <p class="col-desc">Find a New Friend</p>
                <div class="col-divider"></div>
                <ul class="col-links">
                  <li><a href="our-rabbits?status=available">Available Now <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                  <li><a href="our-rabbits" class="arw">All Rabbits <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="cta-group">
      <a href="get-in-touch" class="cta-btn">
        <span>Get in Touch</span>
        <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <button class="hamburger" aria-label="Open menu" id="mobileMenuBtn"><span></span></button>
    </div>
  </div>
</header>
<!-- ============ MOBILE MENU ============ -->
<div class="mobile-overlay" id="mobileOverlay"></div>
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-head">
    <span class="brand-word">
      <span class="cjm">CJM</span><span class="legacy">LEGACY</span><span class="rabbitry">RABBITRY</span>
    </span>
    <button class="mobile-close" id="mobileCloseBtn" aria-label="Close menu">
      <svg viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="mobile-nav-body">
    <div class="mobile-section" data-mobile-section>
      <button class="mobile-section-trigger">
        Why CJM?
        <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="mobile-section-panel">
        <ul class="mobile-links">
          <li><a href="why-cjm/our-story" class="coming-soon">Our Story <span class="soon-tag">Soon</span></a></li>
          <li><a href="what-is-arba">What is ARBA?</a></li>
          <li><a href="why-buy">Why Buy From Us</a></li>
        </ul>
      </div>
    </div>
    <div class="mobile-section" data-mobile-section>
      <button class="mobile-section-trigger">
        Learning Hub
        <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="mobile-section-panel">
        <p class="mobile-group-title">Standard of Perfection</p>
        <ul class="mobile-links">
          <li><a href="hl-sop">Holland Lop Guide <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
          <li><a href="dh-sop">Dwarf Hotot Guide <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
          <li><a href="sop-guide" class="cta-link">Browse All Breed Standards <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
        </ul>
        <p class="mobile-group-title">Rabbit Genetics</p>
        <ul class="mobile-links">
          <li><a href="hl-genetics">Holland Lop Genetics 101 <svg class="arw" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
          <li><a href="vienna-gene" class="arw">The Vienna Gene</a></li>
          <li><a href="genetics/dwarf-hotot-banded" class="coming-soon">Dwarf Hotot Banded Gene <span class="soon-tag">Soon</span></a></li>
          <li><a href="genetics" class="cta-link coming-soon">Explore All Genetics <span class="soon-tag">Soon</span></a></li>
        </ul>
        <p class="mobile-group-title">Rabbit Care &amp; Health</p>
        <ul class="mobile-links">
          <li><a href="rabbit-feed-guide" class="arw">Feeding &amp; Nutrition </a></li>
          <li><a href="rabbit-care/housing-enclosures" class="coming-soon">Housing &amp; Enclosures <span class="soon-tag">Soon</span></a></li>
          <li><a href="rabbit-care/health-medications" class="coming-soon">Health &amp; Medications <span class="soon-tag">Soon</span></a></li>
          <li><a href="rabbit-care/find-a-vet" class="cta-link coming-soon">Find a Rabbit Vet <span class="soon-tag">Soon</span></a></li>
        </ul>
        <p class="mobile-group-title">Beginner's Academy</p>
        <ul class="mobile-links">
          <li><a href="academy/choosing-a-breed" class="coming-soon">Choosing a Breed <span class="soon-tag">Soon</span></a></li>
          <li><a href="academy/bringing-home-your-rabbit" class="coming-soon">Bringing Home Your Rabbit <span class="soon-tag">Soon</span></a></li>
          <li><a href="academy/temperament-bucks-does" class="coming-soon">Temperament: Bucks vs. Does <span class="soon-tag">Soon</span></a></li>
          <li><a href="academy/faq" class="coming-soon">Rabbit FAQ <span class="soon-tag">Soon</span></a></li>
          <li><a href="academy" class="cta-link coming-soon">Explore Academy <span class="soon-tag">Soon</span></a></li>
        </ul>
      </div>
    </div>
    <div class="mobile-section" data-mobile-section>
      <button class="mobile-section-trigger">
        Our Rabbits
        <svg class="caret" viewBox="0 0 10 10" fill="none"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="mobile-section-panel">
        <p class="mobile-group-title">Holland Lops</p>
        <ul class="mobile-links">
          <li><a href="our-rabbits?breed=holland-lop&age=senior" class="arw">Seniors</a></li>
          <li><a href="our-rabbits?breed=holland-lop&age=junior">Juniors</a></li>
        </ul>
        <p class="mobile-group-title">Dwarf Hotots</p>
        <ul class="mobile-links">
          <li><a href="our-rabbits?breed=dwarf-hotot&age=senior">Seniors</a></li>
          <li><a href="our-rabbits?breed=dwarf-hotot&age=junior">Juniors</a></li>
        </ul>
        <p class="mobile-group-title">Availability</p>
        <ul class="mobile-links">
          <li><a href="our-rabbits?status=available" class="cta-link">Available Now</a></li>
          <li><a href="our-rabbits">All Rabbits</a></li>
        </ul>
      </div>
    </div>
    <div class="mobile-cta-wrap">
      <a href="get-in-touch" class="mobile-cta">
        Get in Touch
        <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  </div>
</div>
`;

/* ---------------- FOOTER ---------------- */
var FOOTER_HTML = `
<footer id="cjm-footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="wordmark">
          <span class="cjm">CJM</span><span class="legacy">LEGACY</span><span class="rabbitry">RABBITRY</span>
        </div>
        <p>Southern Maryland rooted, ARBA member. Holland Lop &amp; Dwarf Hotot breeder established in 2024.</p>
      </div>
      <div class="footer-col">
        <h4>Why CJM</h4>
        <a href="why-buy">Why CJM?</a>
        <a href="what-is-arba">What is ARBA?</a>
        <a href="why-buy">Why Buy From Us</a>
      </div>
      <div class="footer-col">
        <h4>Learning Hub</h4>
        <a href="hl-sop">Holland Lop Guide</a>
        <a href="dh-sop">Dwarf Hotot Guide</a>
        <a href="hl-genetics">Genetics 101</a>
      </div>
      <div class="footer-col">
        <h4>Our Rabbits</h4>
        <a href="our-rabbits?breed=holland-lop">Holland Lops</a>
        <a href="our-rabbits?breed=dwarf-hotot">Dwarf Hotots</a>
        <a href="our-rabbits?status=available">Available Now</a>
      </div>
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <a href="get-in-touch">Contact Us</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 CJM LEGACY RABBITRY. ALL RIGHTS RESERVED.</span>
      <span>SOUTHERN MARYLAND, USA</span>
    </div>
    <p class="footer-legal">
      All photographs, records, graphics, educational materials, articles, guides, illustrations, website designs, and written content on this site are the property of CJM Legacy Rabbitry and may not be copied, downloaded, or reproduced without written permission.
    </p>
  </div>
</footer>
`;

/* ---------------- PEER REVIEW BLOCK ----------------
   Put <div data-peer-review></div> on any educational page
   and this block appears there. */
var PEER_REVIEW_HTML = `
<section class="cjm-peer-review">

  <!-- TOP RULE -->
  <div class="cjm-peer-review__outer-rule"></div>

  <!-- MAIN HEADING -->
  <h2 class="cjm-peer-review__title">
    <span class="cjm-peer-review__title-navy">
      Peer Review
    </span><br>
    <span class="cjm-peer-review__title-brass">
      Makes It Better.
    </span>
  </h2>

  <!-- INTRO -->
  <p class="cjm-peer-review__intro">
    Our educational pages are built from research, breed standards,<br>
    and reputable rabbitry resources — and we're always learning.
  </p>

  <!-- MIDDLE RULE -->
  <div class="cjm-peer-review__middle-rule"></div>

  <!-- SUBHEADING -->
  <div class="cjm-peer-review__subheading">
    Corrections, suggestions, additions,<br>and constructive critiques are welcome.
  </div>

  <!-- CLOSING -->
  <div class="cjm-peer-review__closing">
    See something we should revisit? Let us know.
  </div>

  <!-- BOTTOM RULE -->
  <div class="cjm-peer-review__outer-rule cjm-peer-review__bottom-rule"></div>

</section>
`;

/* Replace the placeholders (outerHTML so the sticky header works) */
var h = document.getElementById('site-header');
var f = document.getElementById('site-footer');
if (h) h.outerHTML = HEADER_HTML;
if (f) f.outerHTML = FOOTER_HTML;
/* "Soon" menu items aren't real links yet: remove their addresses so
   nobody (people or search engines) lands on a missing page. When a page
   is built, delete class="coming-soon" and the Soon tag from its link. */
document.querySelectorAll('a.coming-soon').forEach(function (a) {
  a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true');
});
document.querySelectorAll('[data-peer-review]').forEach(function (el) { el.outerHTML = PEER_REVIEW_HTML; });

/* ---------------- MENU BEHAVIOR ---------------- */
(function(){
    /* ---- desktop mega-menu / dropdown toggles ---- */
    var items = document.querySelectorAll('.nav-item[data-item]');
    function closeAll(except){
      items.forEach(function(it){ if(it!==except) it.classList.remove('active'); });
    }
    items.forEach(function(item){
      var trigger = item.querySelector('.nav-trigger');
      trigger.addEventListener('click', function(e){
        e.stopPropagation();
        var isActive = item.classList.contains('active');
        closeAll(item);
        item.classList.toggle('active', !isActive);
      });
    });
    document.addEventListener('click', function(){ closeAll(null); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeAll(null); });
    /* ---- mobile slide-in menu ---- */
    var menuBtn = document.getElementById('mobileMenuBtn');
    var closeBtn = document.getElementById('mobileCloseBtn');
    var overlay = document.getElementById('mobileOverlay');
    var panel = document.getElementById('mobileMenu');
    function openMobile(){
      menuBtn.classList.add('active');
      overlay.classList.add('open');
      panel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMobile(){
      menuBtn.classList.remove('active');
      overlay.classList.remove('open');
      panel.classList.remove('open');
      document.body.style.overflow = '';
    }
    menuBtn.addEventListener('click', function(){
      panel.classList.contains('open') ? closeMobile() : openMobile();
    });
    closeBtn.addEventListener('click', closeMobile);
    overlay.addEventListener('click', closeMobile);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMobile(); });
    /* ---- mobile accordion sections ---- */
    document.querySelectorAll('[data-mobile-section]').forEach(function(sec){
      var trigger = sec.querySelector('.mobile-section-trigger');
      trigger.addEventListener('click', function(){
        var isOpen = sec.classList.contains('open');
        document.querySelectorAll('[data-mobile-section]').forEach(function(s){ s.classList.remove('open'); });
        if(!isOpen){ sec.classList.add('open'); }
      });
    });
  })();

})();
