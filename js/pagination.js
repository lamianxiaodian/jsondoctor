// Blog Pagination Script
document.addEventListener('DOMContentLoaded', function() {
  const blogCards = Array.from(document.querySelectorAll('.blog-card'));
  const itemsPerPage = 6;
  let currentPage = 1;
  
  function displayPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    blogCards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    updatePagination(page);
  }
  
  function updatePagination(page) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(blogCards.length / itemsPerPage);
    
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.disabled = page === 1;
    prevButton.addEventListener('click', () => {
      if (page > 1) {
        displayPage(page - 1);
      }
    });
    paginationContainer.appendChild(prevButton);
    
    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.className = i === page ? 'active' : '';
      pageButton.addEventListener('click', () => {
        displayPage(i);
      });
      paginationContainer.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = page === totalPages;
    nextButton.addEventListener('click', () => {
      if (page < totalPages) {
        displayPage(page + 1);
      }
    });
    paginationContainer.appendChild(nextButton);
  }
  
  // Initial display
  if (blogCards.length > 0) {
    displayPage(currentPage);
  }
});
