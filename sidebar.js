// Sidebar toggle logic for responsive sidebar
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarOverlay = document.getElementById('sidebar-overlay');
function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  sidebarOverlay.classList.remove('hidden');
}
function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  sidebarOverlay.classList.add('hidden');
}
sidebarToggle && sidebarToggle.addEventListener('click', openSidebar);
sidebarOverlay && sidebarOverlay.addEventListener('click', closeSidebar);
// Close sidebar on resize to md and up
window.addEventListener('resize', function() {
  if(window.innerWidth >= 768) {
    closeSidebar();
  }
}); 

// function showPage(pageId) {
//   const pages = document.querySelectorAll('.page');
//   pages.forEach(page => {
//     page.classList.add('hidden');
//     page.classList.remove('block');
//   });

//   const activePage = document.getElementById(pageId);
//   if (activePage) {
//     activePage.classList.remove('hidden');
//     activePage.classList.add('block');
//   }
// }

// // Show default page
// // showPage('home');

// // Handle clicks on sidebar
// document.querySelectorAll('nav a').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const pageId = this.getAttribute('href').substring(1); // remove #
//     showPage(pageId);
//   });
// });