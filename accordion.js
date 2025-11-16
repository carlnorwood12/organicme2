document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);
        const isActive = this.classList.contains('active');
        
        // Close all accordion items
        accordionButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        document.querySelectorAll('.accordion-content').forEach(item => {
          item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't already open
        if (!isActive) {
          this.classList.add('active');
          content.classList.add('active');
        }
      });
    });
  });
  