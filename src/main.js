// Portofolio Core Script

// 1. Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const nextState = !isExpanded;

    mobileMenuBtn.setAttribute('aria-expanded', String(nextState));
    mobileMenu.classList.toggle('hidden', isExpanded);
    menuIconOpen.classList.toggle('hidden', nextState);
    menuIconClose.classList.toggle('hidden', !nextState);
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      menuIconOpen.classList.remove('hidden');
      menuIconClose.classList.add('hidden');
    });
  });
}

// 2. Project Detail Modal (R-26: native accessible dialog)
const projectModal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalDismissBtn = document.getElementById('modal-dismiss-btn');
const modalTitle = document.getElementById('modal-project-title');
const modalTag = document.getElementById('modal-project-tag');
const modalDesc = document.getElementById('modal-project-desc');
const detailBtns = document.querySelectorAll('.project-detail-btn');

const projectData = {
  omnidesk: {
    tag: '// 01. Enterprise Tool',
    title: 'OmniDesk Engine - Detail Arsitektur',
    desc: 'Dibangun dengan arsitektur modular yang memisahkan event broker WebSocket dari layer query database. Menggunakan PostgreSQL dengan pooling koneksi teroptimasi untuk menahan ribuan event update per detik tanpa lonjakan latensi.'
  },
  commercecore: {
    tag: '// 02. E-Commerce Backend',
    title: 'CommerceCore API - Detail Arsitektur',
    desc: 'Menggunakan Go untuk performa konkurensi tinggi dan penggunaan memori yang efisien. Menyediakan antarmuka gRPC internal antar-service serta caching terdistribusi dengan Redis untuk melindungi database dari thundering herd problem saat flash sale.'
  },
  devpulse: {
    tag: '// 03. Developer Observability',
    title: 'DevPulse Analytics - Detail Arsitektur',
    desc: 'Menghubungkan webhook pipeline CI/CD ke service ingestion berbasis FastAPI. Metrik log disimpan di ClickHouse untuk analisis agregasi kolom berkecepatan tinggi, divisualisasikan dengan Vite dan Tailwind CSS yang ringan.'
  }
};

detailBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-project');
    const item = projectData[key];
    if (item && projectModal) {
      modalTag.textContent = item.tag;
      modalTitle.textContent = item.title;
      modalDesc.textContent = item.desc;
      projectModal.showModal();
    }
  });
});

const closeModal = () => {
  if (projectModal && projectModal.open) {
    projectModal.close();
  }
};

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);

// 3. Contact Form Validation and Submission (R-26 & R-27)
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const feedbackSuccess = document.getElementById('form-feedback-success');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.classList.remove('hidden');
      nameInput.classList.add('border-rose-500');
      isValid = false;
    } else {
      nameError.classList.add('hidden');
      nameInput.classList.remove('border-rose-500');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-rose-500');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
      emailInput.classList.remove('border-rose-500');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.classList.remove('hidden');
      messageInput.classList.add('border-rose-500');
      isValid = false;
    } else {
      messageError.classList.add('hidden');
      messageInput.classList.remove('border-rose-500');
    }

    if (isValid) {
      // Show loading/progress feedback
      submitBtn.disabled = true;
      submitBtn.textContent = 'Menyiapkan Pesan...';

      setTimeout(() => {
        feedbackSuccess.classList.remove('hidden');
        submitBtn.textContent = 'Pesan Terkirim';

        // Prepare mailto fallback
        const subject = encodeURIComponent(`Diskusi Proyek dari ${nameInput.value.trim()}`);
        const body = encodeURIComponent(
          `Nama: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nPesan:\n${messageInput.value.trim()}`
        );
        window.location.href = `mailto:gilang.ramadan.dev@example.com?subject=${subject}&body=${body}`;

        // Reset inputs
        contactForm.reset();
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirimkan Pesan Sekarang';
        }, 3000);
      }, 400);
    }
  });
}
