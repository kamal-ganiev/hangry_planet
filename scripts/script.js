import {
  burgersList,
  breakfastList,
  sidesList,
  listOfEvents,
  reviewsArray,
} from "./constantArrayLists.js";
import { switchMenu, toggleSwitch } from "./utils.js";

const date = new Date();

// Constants for header

const header = document.querySelector(".header");
const headerBackground = document.querySelector(".header__background");
const logo = document.querySelector(".header__logo-contaner");
const headerTitle = document.querySelector(".header__title");

// Constants for menu

const menuContainer = document.querySelector(".menu__list");
const menuTemplate = document.querySelector(".menu__template").content;
const menuNavbar = document.querySelector(".menu__nav");
const menuNavItems = document.querySelectorAll(".menu__nav-item");

// Constants for calendar

// const month = document.querySelector(".calendar__month");
// const monthName = month.querySelector(".calendar__month-name");
// let monthNum = date.getMonth();
// let currentMonth = listOfEvents[monthNum].month;

// const eventBack = month.querySelector(".calendar__month-switch-b");
// const eventForward = month.querySelector(".calendar__month-switch-f");

// monthName.textContent = currentMonth;

// const calendarList = document.querySelector(".calendar__list");
// const calendarTemplate = document.querySelector(".calendar__template").content;

// Constants for review

const reviewContainer = document.querySelector(".review__content");
const reviewTemplate = document.querySelector(".review__template").content;

const reviewForwardButton = document.querySelector(".review__arrow-f");
const reviewBackwardButton = document.querySelector(".review__arrow-b");

// Header shrinking function

function shrinkHeader() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerTitle.classList.add("header__title_disappear");
    header.classList.add("header_shrinked");
    logo.classList.add("header__logo_shrinked");
    headerTitle.classList.add("header__title_disable");
  } else {
    header.classList.remove("header_shrinked");
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

// Menu functions calls

switchMenu(
  burgersList,
  ".menu__item-name",
  ".menu__item-price",
  ".menu__item-description",
  ".menu__veggie-sign",
  menuContainer,
  menuTemplate
);

menuNavbar.children[0].addEventListener("click", (e) => {
  e.stopPropagation();
  e.target;
  menuContainer.innerHTML = "";
  switchMenu(
    burgersList,
    ".menu__item-name",
    ".menu__item-price",
    ".menu__item-description",
    ".menu__veggie-sign",
    menuContainer,
    menuTemplate
  );

  toggleSwitch(
    menuNavItems,
    e.target,
    "menu__nav-checkbox-checked",
    "menu__nav-checkbox-inner_visible"
  );
});

menuNavbar.children[1].addEventListener("click", (e) => {
  e.stopPropagation();
  e.target;
  menuContainer.innerHTML = "";
  switchMenu(
    breakfastList,
    ".menu__item-name",
    ".menu__item-price",
    ".menu__item-description",
    ".menu__veggie-sign",
    menuContainer,
    menuTemplate
  );

  toggleSwitch(
    menuNavItems,
    e.target,
    "menu__nav-checkbox-checked",
    "menu__nav-checkbox-inner_visible"
  );
});

menuNavbar.children[2].addEventListener("click", (e) => {
  e.stopPropagation();
  e.target;
  menuContainer.innerHTML = "";
  switchMenu(
    sidesList,
    ".menu__item-name",
    ".menu__item-price",
    ".menu__item-description",
    ".menu__veggie-sign",
    menuContainer,
    menuTemplate
  );

  toggleSwitch(
    menuNavItems,
    e.target,
    "menu__nav-checkbox-checked",
    "menu__nav-checkbox-inner_visible"
  );
});

// Calendar functions calls

// const calendarMap = document.querySelector(".calendar__embeded-map");
// const calendarCover = document.querySelector(".calendar__map-cover");

// function switchCalendar(list) {
//   list.forEach((item) => {
//     const newCard = calendarTemplate.cloneNode(true);

//     const cardName = newCard.querySelector(".calendar__event-name");
//     const cardAddress = newCard.querySelector(".calendar__event-address");
//     const cardDate = newCard.querySelector(".calendar__event-date");
//     const cardContainer = newCard.querySelector(".calendar__event");

//     cardName.textContent = item.eventName;
//     cardDate.textContent = item.eventDate;
//     cardAddress.textContent = item.eventAddress;

//     cardContainer.addEventListener("click", () => {
//       if (window.innerWidth >= 1200) {
//         calendarCover.textContent = `Loading ${item.eventName}...`;
//         calendarMap.src = "";
//         setTimeout(() => {
//           calendarMap.src = `https://www.google.com/maps?&q=${item.eventAddress}, Columbus, OH&output=embed`
//         }, 200);
//       }
//       else {
//         window.open(`http://maps.google.com/?q=${item.eventAddress}`, "_blank");
//       }})

//     calendarList.appendChild(newCard);
//   })
// }

// switchCalendar(listOfEvents[monthNum].data);

// if (listOfEvents[monthNum].data.length === 0) {
//   calendarList.innerHTML = `
//         <li class="calendar__message">
//             There's no events for this month &#128542;
//         </li>`;
// }

// if (monthNum === 0) {
//   eventBack.style = "display: none";
//   monthNum = 0;
// } else if (monthNum === 12) {
//   eventForward.style = "display: none";
//   monthNum = 12;
// } else {
//   eventBack.style = "display: inline";
//   eventForward.style = "display: inline";
// }

// eventBack.addEventListener("click", () => {
//   monthNum -= 1;

//   monthName.textContent = listOfEvents[monthNum].month;

//   calendarList.innerHTML = "";
//   switchCalendar(listOfEvents[monthNum].data);

//   if (listOfEvents[monthNum].data.length === 0) {
//     calendarList.innerHTML = `
//         <li class="calendar__message">
//             There's no events for this month &#128542;
//         </li>`;
//   }

//   if (monthNum === 0) {
//     eventBack.style = "display: none";
//   } else {
//     eventBack.style = "display: inline";
//     eventForward.style = "display: inline";
//   }
// });

// eventForward.addEventListener("click", () => {
//   monthNum += 1;

//   monthName.textContent = listOfEvents[monthNum].month;

//   calendarList.innerHTML = "";
//   switchCalendar(listOfEvents[monthNum].data);

//   if (listOfEvents[monthNum].data.length === 0) {
//     calendarList.innerHTML = `
//         <li class="calendar__message">
//             There's no events for this month &#128542;
//         </li>`;
//   }

//   if (monthNum === 11) {
//     eventForward.style = "display: none";
//   } else {
//     eventBack.style = "display: inline";
//     eventForward.style = "display: inline";
//   }
// });

// Review functions calls

function postReview(data) {
  reviewContainer.innerHTML = "";

  const newReview = reviewTemplate.cloneNode(true);

  const reviewContent = newReview.querySelector(".review__text");
  const reviewAuthor = newReview.querySelector(".review__author");

  reviewContent.textContent = data.review;
  reviewAuthor.textContent = data.author;

  reviewContainer.appendChild(newReview);
}

postReview(reviewsArray[1]);

function reviewSlideForward() {
  const firstEl = reviewsArray.shift();
  reviewsArray.push(firstEl);

  postReview(reviewsArray[1]);
}

function reviewSlideBackward() {
  const lastEl = reviewsArray.pop();
  reviewsArray.unshift(lastEl);

  postReview(reviewsArray[1]);
}

reviewForwardButton.addEventListener("click", () => reviewSlideForward());
reviewBackwardButton.addEventListener("click", () => reviewSlideBackward());
