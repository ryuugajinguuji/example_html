(function () {
  'use strict';

  // Smooth scroll for anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form submit (demo: prevent default and show message)
  var form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // ここで送信処理を実装（例: フォーム送信API、メールリンクなど）
      alert('送信機能はバックエンドと連携後に有効にできます。');
    });
  }

  // Optional: Fade-in on scroll for sections
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.about, .area, .contact').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.about, .area, .contact').forEach(function (el) {
      el.classList.add('scroll-reveal');
    });
  });

  // Add .is-visible styles via a small style injection for scroll reveal
  var style = document.createElement('style');
  style.textContent = '.scroll-reveal.is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
})();
