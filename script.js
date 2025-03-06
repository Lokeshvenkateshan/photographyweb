function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
  }

  window.addEventListener("load", function() {
    document.querySelector(".loader-container ").style.display = "none"; 
    document.querySelector(".main-con").style.display = "block"; 
});