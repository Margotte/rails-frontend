const initUpdateNavbarOnScroll = ()=> {
  const navbar = document.querySelector(".navbar-lewagon");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-lewagon-black');
    } else {
      navbar.classList.remove('navbar-lewagon-black');
    }
  });
}

export { initUpdateNavbarOnScroll }
