console.log("connecté");

const links = document.querySelectorAll("nav a");


const btn =document.createElement("nav-toggle");
 
btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    console.log(btn)
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
    
});
