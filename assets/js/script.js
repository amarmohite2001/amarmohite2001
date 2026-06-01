'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * content binding from assets/js/content.js
 */

const portfolioContent = window.PORTFOLIO_CONTENT || null;

function setLogoText(anchor, name, dot) {
  if (!anchor) return;
  const span = anchor.querySelector("span");
  if (anchor.firstChild && anchor.firstChild.nodeType === Node.TEXT_NODE) {
    anchor.firstChild.nodeValue = name;
  } else {
    anchor.insertBefore(document.createTextNode(name), span || null);
  }
  if (span) {
    span.textContent = dot;
    span.style.display = dot ? "inline-block" : "none";
  }
}

function setText(el, value) {
  if (el && typeof value === "string") el.textContent = value;
}

function setLink(el, href) {
  if (el && typeof href === "string") el.setAttribute("href", href);
}

function setPageTitle(title) {
  if (typeof title === "string" && title.trim()) {
    document.title = title;
  }
}

function findBlogPostBySlug(blogData, slug) {
  if (!blogData || !Array.isArray(blogData.posts) || !slug) return null;
  return blogData.posts.find(function (post) {
    return post.slug === slug;
  }) || null;
}

function renderBlogList(blogData) {
  const blogList = document.querySelector(".blog-page .blog-list");
  if (!blogList || !Array.isArray(blogData.posts)) return;

  blogList.innerHTML = "";
  blogData.posts.forEach(function (post) {
    const li = document.createElement("li");
    li.className = "blog-card";

    const link = document.createElement("a");
    link.className = "blog-card-link";
    link.href = `./blog-post.html?slug=${encodeURIComponent(post.slug || "")}`;
    link.setAttribute("aria-label", post.title || "Blog post");

    const meta = document.createElement("div");
    meta.className = "blog-meta";

    const date = document.createElement("p");
    date.className = "blog-date";
    date.textContent = post.date || "";

    const readTime = document.createElement("p");
    readTime.className = "blog-read-time";
    readTime.textContent = post.readTime || "";

    meta.appendChild(date);
    if (post.readTime) {
      meta.appendChild(readTime);
    }

    const title = document.createElement("h3");
    title.className = "blog-title";
    title.textContent = post.title || "";

    const excerpt = document.createElement("p");
    excerpt.className = "blog-excerpt";
    excerpt.textContent = post.excerpt || "";

    const cta = document.createElement("span");
    cta.className = "blog-link-label";
    cta.textContent = "Read article";

    link.appendChild(meta);
    link.appendChild(title);
    link.appendChild(excerpt);
    link.appendChild(cta);
    li.appendChild(link);
    blogList.appendChild(li);
  });
}

function renderBlogPost(blogData) {
  const postPage = document.querySelector(".blog-post-page");
  if (!postPage) return;

  const params = new URLSearchParams(window.location.search);
  const post = findBlogPostBySlug(blogData, params.get("slug"));

  const subtitleEl = postPage.querySelector(".section-subtitle");
  const titleEl = postPage.querySelector(".inner-page-title");
  const introEl = postPage.querySelector(".inner-page-text");
  const metaEl = postPage.querySelector(".blog-post-meta");
  const contentEl = postPage.querySelector(".blog-post-content");
  const backLink = postPage.querySelector(".blog-post-backlink");

  if (backLink) backLink.setAttribute("href", "./blog.html");
  if (!contentEl) return;

  if (!post) {
    setPageTitle("Amar Mohite - Blog");
    setText(subtitleEl, blogData?.subtitle || "Blog");
    setText(titleEl, "Post not found");
    setText(introEl, "The article you requested is unavailable. You can return to the blog index to browse the published posts.");
    metaEl.textContent = "";
    contentEl.innerHTML = "<p>The requested blog post could not be loaded.</p>";
    return;
  }

  setPageTitle(`Amar Mohite - ${post.title || "Blog"}`);
  setText(subtitleEl, post.category || blogData?.subtitle || "Blog");
  setText(titleEl, post.title || "");
  setText(introEl, post.intro || post.excerpt || "");
  metaEl.textContent = [post.date, post.readTime].filter(Boolean).join(" · ");
  contentEl.innerHTML = "";

  (post.sections || []).forEach(function (section) {
    const articleSection = document.createElement("section");
    articleSection.className = "blog-post-section";

    if (section.heading) {
      const heading = document.createElement("h3");
      heading.className = "blog-post-heading";
      heading.textContent = section.heading;
      articleSection.appendChild(heading);
    }

    (section.paragraphs || []).forEach(function (paragraphText) {
      const paragraph = document.createElement("p");
      paragraph.textContent = paragraphText;
      articleSection.appendChild(paragraph);
    });

    if (Array.isArray(section.bullets) && section.bullets.length > 0) {
      const list = document.createElement("ul");
      list.className = "blog-post-list";

      section.bullets.forEach(function (bulletText) {
        const item = document.createElement("li");
        item.textContent = bulletText;
        list.appendChild(item);
      });

      articleSection.appendChild(list);
    }

    contentEl.appendChild(articleSection);
  });
}

function bindPortfolioContent() {
  if (!portfolioContent) return;

  if (portfolioContent.site && portfolioContent.site.title) {
    document.title = portfolioContent.site.title;
  }

  const headerLogo = document.querySelector(".header .logo a");
  const footerLogo = document.querySelector(".footer .logo a");
  setLogoText(headerLogo, portfolioContent.brand?.name || "", portfolioContent.brand?.dot || ".");
  setLogoText(footerLogo, portfolioContent.brand?.name || "", portfolioContent.brand?.dot || ".");

  const navLinks = document.querySelectorAll(".navbar-list .navbar-link");
  (portfolioContent.navigation || []).forEach((item, index) => {
    const link = navLinks[index];
    if (!link) return;
    if (typeof item === "string") {
      setText(link, item);
      return;
    }
    setText(link, item.label || "");
    setLink(link, item.href || "#");
  });

  setText(document.querySelector(".hero-title"), portfolioContent.hero?.title || "");
  const heroButton = document.querySelector(".hero-content .btn");
  setText(heroButton, portfolioContent.hero?.ctaLabel || "");
  setLink(heroButton, portfolioContent.hero?.ctaHref || "#contact");
  setText(document.querySelector(".scroll-down"), portfolioContent.hero?.scrollLabel || "");

  const heroSocialLinks = document.querySelectorAll(".hero-social-list .hero-social-link");
  (portfolioContent.hero?.socials || []).forEach((item, index) => {
    const link = heroSocialLinks[index];
    if (!link) return;
    setLink(link, item.href || "#");
    const icon = link.querySelector("ion-icon");
    const tooltip = link.querySelector(".tooltip");
    if (icon && item.icon) icon.setAttribute("name", item.icon);
    setText(tooltip, item.label || "");
  });

  const statsCards = document.querySelectorAll(".stats-list .stats-card");
  (portfolioContent.stats || []).forEach((item, index) => {
    const card = statsCards[index];
    if (!card) return;
    setLink(card, item.href || "#");
    const title = card.querySelector(".card-title");
    const strong = title ? title.querySelector("strong") : null;
    if (title) {
      title.childNodes[0].nodeValue = `${item.value || ""} `;
    }
    setText(strong, item.description || "");
  });

  setText(document.querySelector(".about .section-subtitle"), portfolioContent.about?.subtitle || "");
  setText(document.querySelector(".about .section-title"), portfolioContent.about?.title || "");
  setText(document.querySelector(".about .section-text"), portfolioContent.about?.text || "");
  const aboutButtons = document.querySelectorAll(".about .btn-group .btn");
  setText(aboutButtons[0], portfolioContent.about?.primaryButton?.label || "");
  setText(aboutButtons[1], portfolioContent.about?.secondaryButton?.label || "");
  setLink(aboutButtons[0], portfolioContent.about?.primaryButton?.href || "#contact");
  setLink(aboutButtons[1], portfolioContent.about?.secondaryButton?.href || "#");

  setText(document.querySelector(".skills .section-subtitle"), portfolioContent.skills?.subtitle || "");
  setText(document.querySelector(".skills .section-title"), portfolioContent.skills?.title || "");
  setText(document.querySelector(".skills .section-text"), portfolioContent.skills?.text || "");

  const skillTabs = document.querySelectorAll(".skills-toggle .toggle-btn");
  setText(skillTabs[0], portfolioContent.skills?.tabLabels?.[0] || "AI & LLM");
  setText(skillTabs[1], portfolioContent.skills?.tabLabels?.[1] || "Languages & Frameworks");
  setText(skillTabs[2], portfolioContent.skills?.tabLabels?.[2] || "Cloud & Tools");

  const aiTooltips = document.querySelectorAll(".ai-list .skill-card .tooltip");
  (portfolioContent.skills?.aiNames || []).forEach((name, index) => setText(aiTooltips[index], name));

  const skillTooltips = document.querySelectorAll(".skills-list .skill-card .tooltip");
  (portfolioContent.skills?.skillNames || []).forEach((name, index) => setText(skillTooltips[index], name));

  const toolTooltips = document.querySelectorAll(".tools-list .skill-card .tooltip");
  (portfolioContent.skills?.toolNames || []).forEach((name, index) => setText(toolTooltips[index], name));

  setText(document.querySelector(".project .section-subtitle"), portfolioContent.projects?.subtitle || "");
  setText(document.querySelector(".project .section-title"), portfolioContent.projects?.title || "");
  setText(document.querySelector(".project .section-text"), portfolioContent.projects?.text || "");

  const projectCards = document.querySelectorAll(".project-list .project-card");
  (portfolioContent.projects?.cards || []).forEach((item, index) => {
    const card = projectCards[index];
    if (!card) return;
    setLink(card, item.href || "#");
    setText(card.querySelector(".card-title"), item.title || "");
    const dateEl = card.querySelector(".publish-date");
    setText(dateEl, item.dateLabel || "");
    if (dateEl && item.dateTime) dateEl.setAttribute("datetime", item.dateTime);
    const imgEl = card.querySelector(".card-banner img");
    if (imgEl) {
      if (item.image) imgEl.setAttribute("src", item.image);
      if (item.imageAlt) imgEl.setAttribute("alt", item.imageAlt);
    }
  });

  setText(document.querySelector(".load-more"), portfolioContent.projects?.loadMoreLabel || "Load more work");

  setText(document.querySelector(".contact .section-subtitle"), portfolioContent.contact?.subtitle || "");
  setText(document.querySelector(".contact .section-title"), portfolioContent.contact?.title || "");
  setText(document.querySelector(".contact .section-text"), portfolioContent.contact?.text || "");

  const contactItems = document.querySelectorAll(".contact-list-item");
  const addressItem = contactItems[0];
  const phoneItem = contactItems[1];
  const emailItem = contactItems[2];

  setText(addressItem?.querySelector(".contact-item-title"), portfolioContent.contact?.addressTitle || "Address:");
  setText(addressItem?.querySelector("address.contact-info"), portfolioContent.contact?.address || "");

  setText(phoneItem?.querySelector(".contact-item-title"), portfolioContent.contact?.phoneTitle || "Phone:");
  const phoneLinks = phoneItem?.querySelectorAll("a.contact-info") || [];
  (portfolioContent.contact?.phones || []).forEach((phone, index) => {
    setText(phoneLinks[index], phone.label || "");
    setLink(phoneLinks[index], phone.href || "#");
  });

  setText(emailItem?.querySelector(".contact-item-title"), portfolioContent.contact?.emailTitle || "Email:");
  const emailLinks = emailItem?.querySelectorAll("a.contact-info") || [];
  (portfolioContent.contact?.emails || []).forEach((email, index) => {
    setText(emailLinks[index], email.label || "");
    setLink(emailLinks[index], email.href || "#");
  });

  const contactSocialLinks = document.querySelectorAll(".contac-social-list .contact-social-link");
  (portfolioContent.contact?.socials || []).forEach((item, index) => {
    const link = contactSocialLinks[index];
    if (!link) return;
    setLink(link, item.href || "#");
    const icon = link.querySelector("ion-icon");
    const tooltip = link.querySelector(".tooltip");
    if (icon && item.icon) icon.setAttribute("name", item.icon);
    setText(tooltip, item.label || "");
  });

  setText(document.querySelector("label[for='name']"), portfolioContent.contact?.form?.labels?.name || "Name");
  setText(document.querySelector("label[for='email']"), portfolioContent.contact?.form?.labels?.email || "Email");
  setText(document.querySelector("label[for='phone']"), portfolioContent.contact?.form?.labels?.phone || "Phone");
  setText(document.querySelector("label[for='message']"), portfolioContent.contact?.form?.labels?.message || "Message");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  if (nameInput) nameInput.placeholder = portfolioContent.contact?.form?.placeholders?.name || "";
  if (emailInput) emailInput.placeholder = portfolioContent.contact?.form?.placeholders?.email || "";
  if (phoneInput) phoneInput.placeholder = portfolioContent.contact?.form?.placeholders?.phone || "";
  if (messageInput) messageInput.placeholder = portfolioContent.contact?.form?.placeholders?.message || "";

  setText(document.querySelector(".contact-form .btn.btn-primary"), portfolioContent.contact?.form?.submitLabel || "Send");

  const footerCopyright = document.querySelector(".footer .copyright");
  if (footerCopyright) {
    const year = portfolioContent.footer?.copyrightYear || "2022";
    const name = portfolioContent.footer?.copyrightName || "codewithsadee";
    const href = portfolioContent.footer?.copyrightHref || "#";
    const suffix = portfolioContent.footer?.suffix || "";
    footerCopyright.innerHTML = `&copy; ${year} <a href="${href}">${name}</a>${suffix}`;
  }

  // Certifications section
  const certData = portfolioContent.certifications;
  if (certData) {
    setText(document.querySelector(".certifications .section-subtitle"), certData.subtitle);
    setText(document.querySelector(".certifications .section-title"), certData.title);

    const certList = document.querySelector(".cert-list");
    if (certList && Array.isArray(certData.items)) {
      certList.innerHTML = "";
      certData.items.forEach(function (item) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href || "#";
        a.className = "cert-card";
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        const img = document.createElement("img");
        img.src = item.image || "";
        img.alt = item.imageAlt || item.label || "";
        img.className = "cert-badge";

        const p = document.createElement("p");
        p.className = "cert-label";
        p.textContent = item.label || "";

        a.appendChild(img);
        a.appendChild(p);
        li.appendChild(a);
        certList.appendChild(li);
      });
    }
  }

  // Experience section
  const expData = portfolioContent.experience;
  if (expData) {
    setText(document.querySelector(".experience .section-subtitle"), expData.subtitle || "Experience");
    setText(document.querySelector(".experience .section-title"), expData.title || "Professional Journey");
    setText(document.querySelector(".experience .section-text"), expData.text || "");

    const expList = document.querySelector(".experience-list");
    if (expList && Array.isArray(expData.items)) {
      expList.innerHTML = "";
      expData.items.forEach(function (item) {
        const li = document.createElement("li");
        li.className = "experience-card";

        const header = document.createElement("div");
        header.className = "experience-head";

        const h3 = document.createElement("h3");
        h3.className = "h4 experience-role";
        h3.textContent = item.role || "";

        const period = document.createElement("p");
        period.className = "experience-period";
        period.textContent = item.period || "";

        const company = document.createElement("p");
        company.className = "experience-company";
        company.textContent = item.company || "";

        const points = document.createElement("ul");
        points.className = "experience-points";

        const highlightList = Array.isArray(item.highlights) ? item.highlights : [];
        if (highlightList.length > 0) {
          highlightList.forEach(function (point) {
            const pointItem = document.createElement("li");
            pointItem.textContent = point;
            points.appendChild(pointItem);
          });
        } else {
          const fallback = document.createElement("li");
          fallback.textContent = item.summary || "";
          points.appendChild(fallback);
        }

        header.appendChild(h3);
        header.appendChild(period);
        li.appendChild(header);
        li.appendChild(company);
        li.appendChild(points);
        expList.appendChild(li);
      });
    }
  }

  // Blog page
  const blogData = portfolioContent.blog;
  if (blogData) {
    setText(document.querySelector(".blog-page .section-subtitle"), blogData.subtitle || "Blog");
    setText(document.querySelector(".blog-page .inner-page-title"), blogData.title || "Engineering Notes");
    setText(document.querySelector(".blog-page .inner-page-text"), blogData.text || "");
    renderBlogList(blogData);
    renderBlogPost(blogData);
  }

  // Resume page
  const resumeData = portfolioContent.resume;
  if (resumeData) {
    setText(document.querySelector(".resume-page .section-subtitle"), resumeData.subtitle || "Resume");
    setText(document.querySelector(".resume-page .inner-page-title"), resumeData.title || "View Resume");
    setText(document.querySelector(".resume-page .inner-page-text"), resumeData.text || "");

    const resumeBtn = document.querySelector(".resume-page .resume-download-btn");
    setText(resumeBtn, resumeData.buttonLabel || "Download PDF");
    setLink(resumeBtn, resumeData.file || "#");

    const resumeFrame = document.querySelector(".resume-page .resume-frame");
    if (resumeFrame) {
      resumeFrame.setAttribute("src", resumeData.file || "");
      resumeFrame.setAttribute("title", resumeData.frameTitle || "Resume");
    }
  }
}

bindPortfolioContent();

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    if (header) header.classList.add("active");
    if (goTopBtn) goTopBtn.classList.add("active");
  } else {
    if (header) header.classList.remove("active");
    if (goTopBtn) goTopBtn.classList.remove("active");
  }

});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

if (navToggleBtn && navbar) {
  navToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
  });

  // Close mobile nav when any link is clicked
  navbar.querySelectorAll(".navbar-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbar.classList.contains("active")) {
        elemToggleFunc(navToggleBtn);
        elemToggleFunc(navbar);
        elemToggleFunc(document.body);
      }
    });
  });
}

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

toggleBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    toggleBtns.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    if (toggleBtnBox) toggleBtnBox.dataset.active = index;
    if (skillsBox) skillsBox.dataset.active = index;
  });
});

/**
 * dark & light theme toggle
 */

/**
 * contact form — send via WhatsApp
 */

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name    = (contactForm.querySelector("#name")?.value    || "").trim();
    const email   = (contactForm.querySelector("#email")?.value   || "").trim();
    const phone   = (contactForm.querySelector("#phone")?.value   || "").trim();
    const message = (contactForm.querySelector("#message")?.value || "").trim();

    const text = [
      "Hi Amar! I found you through your portfolio.",
      "",
      `Name: ${name}`,
      email   ? `Email: ${email}`   : "",
      phone   ? `Phone: ${phone}`   : "",
      message ? `\nMessage:\n${message}` : ""
    ].filter(Boolean).join("\n");

    window.open(
      "https://wa.me/16024224344?text=" + encodeURIComponent(text),
      "_blank",
      "noopener,noreferrer"
    );
  });
}

/**
 * dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {

    elemToggleFunc(themeToggleBtn);

    if (themeToggleBtn.classList.contains("active")) {
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");

      localStorage.setItem("theme", "light_theme");
    } else {
      document.body.classList.add("dark_theme");
      document.body.classList.remove("light_theme");

      localStorage.setItem("theme", "dark_theme");
    }

  });
}

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  if (themeToggleBtn) themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  if (themeToggleBtn) themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
