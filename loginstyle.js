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


const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault();
 forms.classList.toggle("show-signup");
})
})

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}