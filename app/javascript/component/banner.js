import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["BOOOOOO", "Trick Or Treat"],
    typeSpeed: 50,
    loop: true
  });
  console.log("happening");
}

export { loadDynamicBannerText };
