/**
 * Classic & Professional Student Portfolio
 * Lightweight, accessible Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Shadow on Scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');
    });

    // Close menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!siteHeader.contains(e.target) && navMenu.classList.contains('is-open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      }
    });
  }

  // 3. Active Nav Link on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // 4. Copy Email Feature & Toast
  const copyBtn = document.getElementById('btn-copy-email');
  const emailTextElem = document.getElementById('direct-email-address');
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message, duration = 3000) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  if (copyBtn && emailTextElem) {
    copyBtn.addEventListener('click', async () => {
      const email = emailTextElem.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email address copied to clipboard!');
      } catch (err) {
        // Fallback for older browsers or restricted permissions
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          showToast('Email address copied to clipboard!');
        } catch (e) {
          showToast('Failed to copy. Please manually copy: ' + email);
        }
        document.body.removeChild(textArea);
      }
    });
  }

  // 5. Resume Download Handler & Guidance Modal
  const resumeButtons = document.querySelectorAll('.action-download-resume');
  const resumeModal = document.getElementById('resume-modal');
  const modalCloseBtns = document.querySelectorAll('.modal-close');

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('active');
      resumeModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('active');
      resumeModal.setAttribute('aria-hidden', 'true');
    }
  }

  modalCloseBtns.forEach(btn => btn.addEventListener('click', closeResumeModal));

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResumeModal();
      if (navMenu && navMenu.classList.contains('is-open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      }
    }
  });

  resumeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Check if resume.pdf exists via fetch or download directly
      // If the resume file hasn't been placed yet, show the guide modal
      const resumeUrl = btn.getAttribute('href');
      if (!resumeUrl || resumeUrl === '#' || resumeUrl.includes('placeholder')) {
        e.preventDefault();
        openResumeModal();
        return;
      }

      // Check if file is accessible
      fetch(resumeUrl, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            e.preventDefault();
            openResumeModal();
          }
        })
        .catch(() => {
          // In local file:// protocol or offline, allow standard download link default action
        });
    });
  });

  // 6. Back to Top Button
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 7. Update current year automatically in footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
