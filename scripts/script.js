const header = document.querySelector(".header");
const headerBackground = document.querySelector(".header__background");
const logo = document.querySelector(".header__logo-contaner");
const headerTitle = document.querySelector(".header__title");

function shrinkHeader() {
  if (document.body.scrollTop > 72 || document.documentElement.scrollTop > 72) {
    headerTitle.classList.add("header__title_disappear");
    header.classList.add("header_shrinked");
    headerBackground.classList.add("header__background_shrinked");
    logo.classList.add("header__logo_shrinked");
    headerTitle.classList.add("header__title_disable");
  } else {
    header.classList.remove("header_shrinked");
    headerBackground.classList.remove("header__background_shrinked");
    logo.classList.remove("header__logo_shrinked");
    headerTitle.classList.remove("header__title_disappear");
    setTimeout(() => {
      headerTitle.classList.remove("header__title_disable");
    }, 300);
  }
}

window.onscroll = () => {
  shrinkHeader();
};
