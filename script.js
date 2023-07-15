

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".nav-toggle");

  btn.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    console.log(btn);
  });

  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      navbar.classList.remove("active");
    });
  })
 
}
 console.log( toggleMenu);
toggleMenu();
