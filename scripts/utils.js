function toggleSwitch(list, target, classActive, classDisactive) {
  list.forEach((e) => {
    e.children[0].classList.remove(classActive);
    e.children[0].children[0].classList.remove(classDisactive);
  });

  target.children[0].classList.add(classActive);
  target.children[0].children[0].classList.add(classDisactive);
}

function switchMenu(list, name, price, description, sign, container, template) {
  list.forEach((item) => {
    const newCard = template.cloneNode(true);

    const cardName = newCard.querySelector(name);
    const cardPrice = newCard.querySelector(price);
    const cardDescription = newCard.querySelector(description);
    const cardIsVeg = newCard.querySelector(sign);

    cardName.textContent = item.name;
    cardPrice.textContent = item.price;
    cardDescription.textContent = item.ingredients;
    if (item.isVeg) {
      cardIsVeg.style = "display: block";
    } else {
      cardIsVeg.style = "display: none";
    }

    container.appendChild(newCard);
  });
}

export { toggleSwitch, switchMenu };
