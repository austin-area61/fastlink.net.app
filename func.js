// Add this code to func.js
document.getElementById('searchButton').addEventListener('click', function() {
  searchAndScroll();
});

document.getElementById('searchBox').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchAndScroll();
  }
});

function searchAndScroll() {
  const keyword = document.getElementById('searchBox').value.toLowerCase();
  const sections = document.querySelectorAll('section');
  let found = false;

  sections.forEach(section => {
    if (section.textContent.toLowerCase().includes(keyword)) {
      section.scrollIntoView({ behavior: 'smooth' });
      found = true;
      return;
    }
  });

  if (!found) {
    alert('Entered keyword does not exist');
  }
}
