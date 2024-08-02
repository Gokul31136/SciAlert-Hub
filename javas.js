// Get all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Get all content sections
const contentSections = document.querySelectorAll('.content');

// Function to handle navigation
function navigate(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);

  // Hide all content sections
  contentSections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the targeted content section
  document.getElementById(targetId).classList.add('active');

  // Update active class for navigation links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  this.classList.add('active');
}

// Attach click event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', navigate);
});

document.getElementById("homelink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "begin.html";
});

document.getElementById("BDODLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "bdod.html";
});

document.getElementById("ADODLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "adod.html";
});

document.getElementById("techLink").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "technology.html";
});

document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "contact.html";
});

document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});

document.getElementById("articles").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "articles.html";
});


// JavaScript for pagination controls
let currentPage = 1;
const itemsPerPage = 5; 

function showPage(page) {
    const newsItems = document.querySelectorAll('.newsitem-adod');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    newsItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageNumber();
        showPage(currentPage);
    }
}

function nextPage() {
    const newsItems = document.querySelectorAll('.newsitem-adod');
    if (currentPage < Math.ceil(newsItems.length / itemsPerPage)) {
        currentPage++;
        updatePageNumber();
        showPage(currentPage);
    }
}

function updatePageNumber() {
    const pageNumber = document.querySelector('.page-number');
    pageNumber.textContent = currentPage;
}

// Initial setup
showPage(currentPage);


