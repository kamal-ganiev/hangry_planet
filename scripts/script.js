import {
  burgersList,
  breakfastList,
  sidesList,
  listOfEvents,
} from "./constantArrayLists.js";

const date = new Date();

const header = document.querySelector(".header");
const headerBackground = document.querySelector(".header__background");
const logo = document.querySelector(".header__logo-contaner");
const headerTitle = document.querySelector(".header__title");

const menuContainer = document.querySelector(".menu__list");
const menuTemplate = document.querySelector(".menu__template").content;
const menuNavbar = document.querySelector(".menu__nav");
const menuNavItems = document.querySelectorAll(".menu__nav-item");

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

function switchMenu(list) {
  list.forEach((item) => {
    const newCard = menuTemplate.cloneNode(true);

    const cardName = newCard.querySelector(".menu__item-name");
    const cardPrice = newCard.querySelector(".menu__item-price");
    const cardDescription = newCard.querySelector(".menu__item-description");
    const cardIsVeg = newCard.querySelector(".menu__veggie-sign");

    cardName.textContent = item.name;
    cardPrice.textContent = item.price;
    cardDescription.textContent = item.ingredients;
    if (item.isVeg) {
      cardIsVeg.style = "display: block";
    } else {
      cardIsVeg.style = "display: none";
    }

    menuContainer.appendChild(newCard);
  });
}

switchMenu(burgersList);

function toggleSwitch(list, target) {
  list.forEach((e) => {
    e.children[0].classList.remove("menu__nav-checkbox-checked");
    e.children[0].children[0].classList.remove(
      "menu__nav-checkbox-inner_visible"
    );
  });

  target.children[0].classList.add("menu__nav-checkbox-checked");
  target.children[0].children[0].classList.add(
    "menu__nav-checkbox-inner_visible"
  );
}

menuNavbar.children[0].addEventListener("click", (e) => {
  e.stopPropagation();
  e.target;
  menuContainer.innerHTML = "";
  switchMenu(burgersList);

  toggleSwitch(menuNavItems, e.target);
});

menuNavbar.children[1].addEventListener("click", (e) => {
  e.stopPropagation();
  e.target;
  menuContainer.innerHTML = "";
  switchMenu(breakfastList);

  toggleSwitch(menuNavItems, e.target);
});

menuNavbar.children[2].addEventListener("click", (e) => {
  e.stopPropagation();
  e.target;
  menuContainer.innerHTML = "";
  switchMenu(sidesList);

  toggleSwitch(menuNavItems, e.target);
});

const month = document.querySelector(".calendar__month");
const monthName = month.querySelector(".calendar__month-name");
let monthNum = date.getMonth();
let currentMonth = listOfEvents[monthNum].month;

const eventBack = month.querySelector(".calendar__month-switch-b");
const eventForward = month.querySelector(".calendar__month-switch-f");

monthName.textContent = currentMonth;

const calendarList = document.querySelector(".calendar__list");
const calendarTemplate = document.querySelector(".calendar__template").content;

function switchCalendar(list) {
  list.forEach((item) => {
    const newCard = calendarTemplate.cloneNode(true);

    const cardName = newCard.querySelector(".calendar__event-name");
    const cardAddress = newCard.querySelector(".calendar__event-address");
    const cardDate = newCard.querySelector(".calendar__event-date");

    cardName.textContent = item.eventName;
    cardDate.textContent = item.eventDate;
    cardAddress.textContent = item.eventAddress;

    calendarList.appendChild(newCard);
  });
}

switchCalendar(listOfEvents[monthNum].data);

if (listOfEvents[monthNum].data.length === 0) {
  calendarList.innerHTML = `
        <li class="calendar__message">
            There's no events for this month &#128542;
        </li>`;
}

if (monthNum === 0) {
  eventBack.style = "display: none";
  monthNum = 0;
} else if (monthNum === 12) {
  eventForward.style = "display: none";
  monthNum = 12;
} else {
  eventBack.style = "display: inline";
  eventForward.style = "display: inline";
}

eventBack.addEventListener("click", () => {
  monthNum -= 1;

  monthName.textContent = listOfEvents[monthNum].month;

  calendarList.innerHTML = "";
  switchCalendar(listOfEvents[monthNum].data);

  if (listOfEvents[monthNum].data.length === 0) {
    calendarList.innerHTML = `
        <li class="calendar__message">
            There's no events for this month &#128542;
        </li>`;
  }

  if (monthNum === 0) {
    eventBack.style = "display: none";
  } else {
    eventBack.style = "display: inline";
    eventForward.style = "display: inline";
  }
});

eventForward.addEventListener("click", () => {
  monthNum += 1;

  monthName.textContent = listOfEvents[monthNum].month;

  calendarList.innerHTML = "";
  switchCalendar(listOfEvents[monthNum].data);

  if (listOfEvents[monthNum].data.length === 0) {
    calendarList.innerHTML = `
        <li class="calendar__message">
            There's no events for this month &#128542;
        </li>`;
  }

  if (monthNum === 11) {
    eventForward.style = "display: none";
  } else {
    eventBack.style = "display: inline";
    eventForward.style = "display: inline";
  }
});
