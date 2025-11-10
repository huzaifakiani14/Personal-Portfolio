document.addEventListener("DOMContentLoaded", function () {
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuIcon.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("closing");
      setTimeout(() => {
        mobileMenu.classList.remove("closing");
      }, 320); 
    } else {
      mobileMenu.classList.add("active");
    }
  });


  // Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectGrid = document.querySelector('.project-grid');

  function updateGridLayout() {
    const visibleCards = Array.from(projectCards).filter(card => !card.classList.contains('hide'));
    
    if (visibleCards.length === 0) {
      projectGrid.style.display = 'none';
      return;
    }

    projectGrid.style.display = 'grid';
    
    if (window.innerWidth <= 768) {
      projectGrid.style.gridTemplateColumns = 'minmax(300px, 600px)';
    } else {
      const columns = Math.min(visibleCards.length, 3); // Max 3 columns
      const columnWidth = `minmax(300px, ${100 / columns}%)`;
      projectGrid.style.gridTemplateColumns = `repeat(${columns}, ${columnWidth})`;
    }
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('hide');
        } else {
          const categories = card.getAttribute('data-category').split(' ');
          if (categories.includes(filterValue)) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        }
      });

      updateGridLayout();
    });
  });

  window.addEventListener('resize', updateGridLayout);

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18), 0 1.5px 0 #000';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0.5px 4px 0 black';
    });
  });
});

// Animated particle background on scroll
window.addEventListener('scroll', function() {
  const particleBg = document.getElementById('particle-background');
  if (particleBg) {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    particleBg.style.transform = `translateY(${rate}px)`;
  }
});

