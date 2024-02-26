
function toggleDropdown() {
  var dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('show');

  var dropdownToggle = document.querySelector('.dropdown-toggle');
  dropdownToggle.textContent = dropdownMenu.classList.contains('show') ? '∨' : '+';
}