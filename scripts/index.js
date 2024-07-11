document.addEventListener("DOMContentLoaded", function () {
  //IMAGE SLIDER VARIABLES
  const sliderImgsContr = document.querySelector(".sliderImgsContr");
  const sliderLeftArrow = document.getElementById("sliderArrowLeft");
  const sliderRightArrow = document.getElementById("sliderArrowRight");
  const indicators = document.querySelectorAll(".indicator");
  const sliderModalContr = document.querySelector(".sliderModalContr");
  const sliderModalTitle = document.querySelector(".sliderModalContr h1");
  const sliderModalText = document.querySelector(".sliderModalContr p");

  //CARD SLIDER VARIABLES
  const cardCarouselContr = document.querySelector(".cardCarouselContr");
  const carouselCards = document.querySelectorAll(".carouselCard");
  const cardLeftArrow = document.getElementById("cardArrowLeft");
  const cardRightArrow = document.getElementById("cardArrowRight");

  //IMAGE SLIDER
  let currentIndex = 0;

  sliderLeftArrow.addEventListener("click", () => {
    if (currentIndex < 1) {
      currentIndex = 4;
    } else {
      currentIndex--;
    }
    slideImg(currentIndex);
    console.log(currentIndex);
  });

  sliderRightArrow.addEventListener("click", () => {
    if (currentIndex > 3) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    slideImg(currentIndex);
    console.log(currentIndex);
  });

  function slideImg(index) {
    sliderImgsContr.style.transform = `translateX(${-index * 20}%`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("selected", index === currentIndex);
    });
    changeSliderText(index);
  }

  function changeSliderText(index) {
    if (index === 0) {
      sliderModalTitle.innerHTML = "Heiko Brath Metzgermeister";
      sliderModalText.innerHTML =
        "Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollitargumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.";
    } else if (index === 1) {
      sliderModalTitle.innerHTML = "Beste Gewürze";
      sliderModalText.innerHTML =
        "Unser Familienbetrieb bietet seit drei Generationen erstklassige Fleischwaren an. Die Spezialität des Hauses ist unsere hausgemachte Bratwurst, die nach einem geheimen Rezept hergestellt wird.";
    } else if (index === 2) {
      sliderModalTitle.innerHTML = "Wurstspezialitäten";
      sliderModalText.innerHTML =
        "In Schmidts Metzgerei findet man über 30 verschiedene hausgemachte Wurstsorten. Besonders beliebt ist die preisgekrönte Thüringer Rostbratwurst, die nach einem alten Familienrezept hergestellt wird";
    } else if (index === 3) {
      sliderModalTitle.innerHTML = "Frische und Qualität";
      sliderModalText.innerHTML =
        "Bei Metzgerei Bauer wird täglich frisch geschlachtet und verarbeitet. Die Kunden schätzen die hohe Qualität und den ausgezeichneten Service des freundlichen Teams.";
    } else if (index === 4) {
      sliderModalTitle.innerHTML = "Bio-Fleisch vom Feinsten";
      sliderModalText.innerHTML =
        "Die Biometzgerei Grün bezieht ihr Fleisch ausschließlich von lokalen Bio-Bauernhöfen. Neben dem klassischen Sortiment bietet sie auch eine große Auswahl an vegetarischen und veganen Alternativen an";
    }
  }

  //CARD SLIDER
  /* let currentCard = 1;

  cardLeftArrow.addEventListener("click", ()=> {
    slideCard();
  });
  cardRightArrow.addEventListener("click", ()=> {
    currentCard++;
    slideCard(currentCard++);
  });

  function slideCard(){
    carouselCards.forEach((card, index)=> {console.log(card, index)
      if(index === 1){
        card.classList.toggle("active");
      }

    } );
  } */
  console.log(cardCarouselContr);

  carouselCards.forEach((card, index) => {
    console.log(card, index);
    if (index === 0) {
      card.classList.add("prev");
    } else if (index === 1) {
      card.classList.add("active");
    } else {
      card.classList.add("next");
    }
  });

  cardLeftArrow.addEventListener("click", () => {
    prevCard();
  });

  cardRightArrow.addEventListener("click", () => {
    nextCard();
  });

  function nextCard() {
    let items = Array.from(carouselCards);
    console.log(items);
    let lastCard = items.pop();
    items.unshift(lastCard);
    console.log(items);
  }

  /* function gotoPrev() {
    if (currentCard > 0) {
      gotoNum(currentCard - 1);
    } else {
      gotoNum(carouselCards.length - 1);
    }
  }

  function gotoNext() {
    if (currentCard < 2) {
      gotoNum(currentCard + 1);
    } else {
      gotoNum(0);
    }
  }

  function gotoNum(number) {
    currentCard = number;
    prevCard = currentCard - 1;
    nextCard = currentCard + 1;

    for (let i = 0; i < carouselCards.length; i++) {
      carouselCards[i].classList.remove("active");
      carouselCards[i].classList.remove("prev");
      carouselCards[i].classList.remove("next");
    }

    if (nextCard == 3) {
      nextCard = 0;
    }

    if (prevCard == -1) {
      prevCard = 2;
    }

    carouselCards[currentCard].classList.add("active");
    carouselCards[prevCard].classList.add("prev");
    carouselCards[nextCard].classList.add("next");
  } */

  //NAVBAR MENU
  const menu = document.getElementById("mobileMenu");
  const menuLinks = document.querySelector(".navbarMenu");

  console.log(menuLinks);

  menu.addEventListener("click", function () {
    menu.classList.toggle("isActiveMenu");
    menuLinks.classList.toggle("activeMenu");
  });

  //DARK MODE

  const darkModeCb = document.getElementById("darkModeCb");
  const darkModeElements = document.querySelectorAll(".darkTheme");
  const darkCards = document.querySelectorAll(".darkCard");

  darkModeCb.addEventListener("click", changeTheme);

  function changeTheme() {
    if(darkModeCb.checked){
      darkModeElements.forEach((element)=>{
        element.style.background = "#fff";
        element.style.color = "#111";
      });
      darkCards.forEach((card)=>{
        card.style.boxShadow = "1px 2px 37px -7px rgba(0,0,0,0.75)";
        card.style.background = "#f0f0f0"
        card.style.color = "#111";
      });
    }else{
      darkModeElements.forEach((element) =>{
        element.style.background = "#000";
        element.style.color = "#fff";
      });
      darkCards.forEach((card)=>{
        card.style.boxShadow = "none";
        card.style.background = "#333"
        card.style.color = "#fff";
      });
    }
  }
});
