
//* Render (HTML Body) -------------------------------------------

function render() {
  let searchInput = document.getElementById('search-input').value;

  searchInput = searchInput.toLowerCase();
  document.getElementById('groups').innerHTML = "";

  for (let i = 0; i < dishesSelect.length; i++) {
    const dish = dishesSelect[i];
    for (let j = 0; j < dish.length; j++) {
      const food = dish[j];
      controlIfincludes(i, j, food, searchInput);
    }
  }
  mealBtn();
}


//*Herz-Button ------------------------------------------------
const toggle = document.getElementById("heart");

toggle.addEventListener("click", function () {
  if (toggle.className == "bi bi-suit-heart")
    toggle.className = "bi bi-suit-heart-fill";
  else toggle.className = "bi bi-suit-heart";
});

//*Nav-Bar-Gerichte -------------------------------------------

let Beliebt = [
  {
    meal: "Cheeseburger",
    description: "mit Käse",
    choice: "",
    price: 6.5,
  },
  {
    meal: "Pizza Neapolitana",
    description: "mit Ricotta und Pfeffer",
    choice: "Ø 28cm oder Ø 32cm",
    price: 7.0,
  },
  {
    meal: "Döner-Pizza ",
    description: "mit Drehspießfleisch und Zwiebeln",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.5,
  },
];

let Salate = [
  {
    meal: "Gemischter Salat",
    description: "",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 8.5,
  },
  {
    meal: "Krautsalat",
    description: "mit Zwiebeln, Peperoni und Sauce, ohne gemischtem Salat",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 8.0,
  },
  {
    meal: "Thunfisch Salat",
    description: "mit Ei",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 9.5,
  },
  {
    meal: "Chef Salat",
    description: "mit Käse, Formvorderschinken, Thunfisch, Ei und Oliven",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 11.0,
  },
  {
    meal: "Hawaii Salat",
    description: "mit Formvorderschinken, Ananas und Käse",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 9.5,
  },
  {
    meal: "Döner Salat",
    description: "dazu Pizzabrot",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 11.5,
  },
];

let Pizza = [
  {
    meal: "Pizza Margherita",
    description: "",
    choice: "Ø 28cm oder Ø 32cm",
    price: 7.0,
  },
  {
    meal: "Pizza Salami",
    description: "mit Salami",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.0,
  },
  {
    meal: "Pizza Schinken",
    description: "mit Fomvorderschinken",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.0,
  },
  {
    meal: "Pizza Pepperoniwurst",
    description: "mit Pepperoniwurst",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.0,
  },
  {
    meal: "Pizza Funghi",
    description: "mit Champignons",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.5,
  },
  {
    meal: "Pizza Tonno",
    description: "mit Thunfisch und Zwiebeln",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.5,
  },
  {
    meal: "Pizza Döner",
    description: "mit Drehspießfleisch und Zwiebeln",
    choice: "Ø 28cm oder Ø 32cm",
    price: 8.5,
  },
  {
    meal: "Pizza 4 Jahreszeiten",
    description: "mit Formvorderschinken, Pilzen, Salami und Paprika",
    choice: "Ø 28cm oder Ø 32cm",
    price: 9.0,
  },
];

let Calzone = [
  {
    meal: "Calzone Napoli",
    description: "mit Formvorderschinken, Salami und Pilzen",
    choice:
      "mit Ananas, mit Broccoli, mit Champignons, mit Drehspießfleisch, mit Ei und mehr.",
    price: 9.0,
  },
  {
    meal: "Calzone Tonno",
    description: "mit Thunfisch",
    choice:
      "mit Ananas, mit Broccoli, mit Champignons, mit Drehspießfleisch, mit Ei und mehr.",
    price: 9.5,
  },
  {
    meal: "Calzone Hawaii",
    description: "mit Formvorderschinken und Ananas",
    choice:
      "mit Ananas, mit Broccoli, mit Champignons, mit Drehspießfleisch, mit Ei und mehr.",
    price: 9.5,
  },
  {
    meal: "Calzone Frutti di Mare",
    description: "mit Meeresfrüchten",
    choice:
      "mit Ananas, mit Broccoli, mit Champignons, mit Drehspießfleisch, mit Ei und mehr.",
    price: 11.0,
  },
  {
    meal: "Calzone Döner",
    description: "mit Dönerfleisch",
    choice:
      "mit Ananas, mit Broccoli, mit Champignons, mit Drehspießfleisch, mit Ei und mehr.",
    price: 9.5,
  },
];

let Drehspieß = [
  {
    meal: "Jumbo Döner",
    description: "mit gemischtem Salat, Krautsalat und Zwiebeln",
    choice:
      "mit Salatsauce, mit Tzatziki, ohne Sauce, ohne Eisbergsalat, ohne Gurken und mehr.",
    price: 9.0,
  },
  {
    meal: "Döner Fladenbrot",
    description: "mit gemischtem Salat, Krautsalat und Zwiebeln",
    choice:
      "mit Salatsauce, mit Tzatziki, ohne Sauce, ohne Eisbergsalat, ohne Gurken und mehr.",
    price: 7.0,
  },
  {
    meal: "Döner Hawaii",
    description: "mit Ananas, Gouda und Tzatziki",
    choice:
      "mit Salatsauce, mit Tzatziki, ohne Sauce, ohne Eisbergsalat, ohne Gurken und mehr.",
    price: 8.0,
  },
  {
    meal: "Vegetarischer Döner",
    description: "mit Hirtenkäse und Salat",
    choice:
      "mit Salatsauce, mit Tzatziki, ohne Sauce, ohne Eisbergsalat, ohne Gurken und mehr.",
    price: 6.5,
  },
  {
    meal: "Döner Premium",
    description:
      "mit Drehspießfleisch und Sauce Hollandaise und mit Käse überbacken",
    choice:
      "mit Salatsauce, mit Tzatziki, ohne Sauce, ohne Eisbergsalat, ohne Gurken und mehr.",
    price: 8.5,
  },
  {
    meal: "Döner Spezial",
    description: "mit Drehspießfleisch, Pommes frites und Salat",
    choice:
      "mit Salatsauce, mit Tzatziki, ohne Sauce, ohne Eisbergsalat, ohne Gurken und mehr.",
    price: 8.5,
  },
];

let Teller = [
  {
    meal: "Dönerteller",
    description: "mit Salat und Tzatziki",
    choice:
      "mit Dressing, italienisch, mit Salatsauce, ohne Dressing und mit Pizzabrot.",
    price: 11.5,
  },
  {
    meal: "Dönerteller Hollandaise",
    description:
      "mit Sauce Hollandaise, Salat und Tzatziki und mit Käse überbacken",
    choice: "",
    price: 12.5,
  },
  {
    meal: "Dönerauflauf",
    description: "mit Nudeln und Sauce Hollandaise und mit Käse überbacken",
    choice: "mit Pommes frites, mit Reis oder ohne Beilage.",
    price: 10.5,
  },
  {
    meal: "Iskender",
    description:
      "Drehspießfleisch auf gerösteten Brotwürfeln mit spezieller Tomatensauce, dazu Salat und Salatsauce",
    choice: "mit Pommes frites, mit Reis oder ohne Beilage.",
    price: 12.0,
  },
  {
    meal: "Chicken Picks (12 Stück)",
    description: "mit Salat, ohne Drehspießfleisch",
    choice: "mit Pommes frites, mit Reis oder ohne Beilage.",
    price: 10.5,
  },
];

let Pasta = [
  {
    meal: "Gnocchi mit Tomatensoße",
    description: "",
    choice: "",
    price: 8.5,
  },
  {
    meal: "Gnocchi Chef",
    description:
      "Kartoffelnudeln mit Sahnesauce, Champignons, Broccoli und mit Käse überbacken, ohne Brot",
    choice: "",
    price: 9.5,
  },
  {
    meal: "Gnocchi Gorgonzola",
    description:
      "Kartoffelnudeln mit Sahnesauce, Champignons und Broccoli, ohne Brot",
    choice: "",
    price: 10.0,
  },
  {
    meal: "Spaghetti Napoli",
    description: "mit Tomatensoße",
    choice: "",
    price: 8.0,
  },
  {
    meal: "Spaghetti Bolognese",
    description: "mit Hackfleischsoße",
    choice: "",
    price: 9.0,
  },
  {
    meal: "Spaghetti Carbonara",
    description: "mit Formvorderschinken und Ei-Sahnesauce",
    choice: "",
    price: 9.5,
  },
  {
    meal: "Spaghetti Frutti di Mare",
    description: "mit Meeresfrüchten",
    choice: "",
    price: 11.0,
  },
];

let Baguettes = [
  {
    meal: "Baguette Salami",
    description: "mit Tomaten und Zwiebeln",
    choice: "",
    price: 9.0,
  },
  {
    meal: "Baguette Schinken",
    description: "mit Tomaten, Formvorderschinken und Zwiebeln",
    choice: "",
    price: 9.0,
  },
  {
    meal: "Baguette Thunfisch",
    description: "mit Tomaten und Zwiebeln",
    choice: "",
    price: 9.5,
  },
  {
    meal: "Baguette Hawaii",
    description: "mit Tomaten, Formvorderschinken und Ananas",
    choice: "",
    price: 9.5,
  },
  {
    meal: "Baguette Mix",
    description: "",
    choice: "",
    price: 10.0,
  },
  {
    meal: "Baguette Döner",
    description: "mit Tomaten und Zwiebeln",
    choice: "",
    price: 9.5,
  },
];

let Schnitzel = [
  {
    meal: "Schnitzel Wiener Art",
    description: "",
    choice: "",
    price: 12.5,
  },
  {
    meal: "Schnitzel Gorgonzola",
    description: "mit Ananas und Sahnesauce",
    choice: "",
    price: 13.5,
  },
  {
    meal: "Schnitzel Curry",
    description: "mit Curry-Sahnesauce",
    choice: "",
    price: 13.5,
  },
  {
    meal: "Schnitzel Käse",
    description: "mit vier Käsesorten und Sahnesauce",
    choice: "",
    price: 14.0,
  },
  {
    meal: "Jägerschnitzel",
    description: "mit Jägersauce und Pilzen",
    choice: "",
    price: 14.5,
  },
  {
    meal: "Zigeunerschitzel",
    description: "mit Zigeunersauce, Pilzen, Paprika, Zwiebeln und Peperoni",
    choice: "",
    price: 15.0,
  },
  {
    meal: "Hawaii Schnitzel",
    description: "mit Ananas und Marsala-Sahnesauce und mit Käse überbacken",
    choice: "",
    price: 15.0,
  },
];

let Burger = [
  {
    meal: "Hamburger",
    description: "mit Tomaten und Zwiebeln",
    choice: "",
    price: 6.0,
  },
  {
    meal: "Doppel Hamburger",
    description: "mit Tomaten und Zwiebeln und doppeltem Geschmack",
    choice: "",
    price: 7.5,
  },
];

let dishesSelect = [
  Beliebt,
  Salate,
  Pizza,
  Calzone,
  Drehspieß,
  Teller,
  Pasta,
  Baguettes,
  Schnitzel,
  Burger,
];

let dishes = [
  "Beliebt",
  "Salate",
  "Pizza",
  "Calzone",
  "Drehspieß",
  "Teller",
  "Pasta",
  "Baguettes",
  "Schnitzel",
  "Burger",
];
let dishesImg = [
  "Salate",
  "Pizza",
  "Calzone",
  "Drehspieß",
  "Teller",
  "Pasta",
  "Baguettes",
  "Schnitzel",
  "Burger",
];

function HTMLTemplate(i, j, food) {
  if (i == 0 && j == 0) {
    // Titel ohne Bild mit Gericht
    return /*html*/ `

      <div class="dish-title"> 
        <h2 id="Beliebt">${dishes[i]}</h2>
      </div>
      <div class="dishes">  
        <div class="dishes-title">
            <h3>${food["meal"]}</h3>
            <span class="plus"><img src="img/png/plus.png"></span>        
          </div>   
        <span>${food["description"]}</span>
        <span>${food["choice"]}</span>
        <h3>${food["price"].toFixed(2)} €</h3>
    </div>

        `;
  } else if (j == 0) {
    // Titel mit Bild und Gerichte
    return /*html*/ `

      <div class="dish-title">
        <img id="${dishesImg[i - 1]}" src="img/${dishesImg[i - 1]}.jpg">
        <h2>${dishes[i]}</h2>
      </div>
      <div class="dishes">  
        <div class="dishes-title">
            <h3>${food["meal"]}</h3>
            <span class="plus"><img src="img/png/plus.png"></span>
        </div>   
        <span>${food["description"]}</span>
        <span>${food["choice"]}</span>
        <h3>${food["price"].toFixed(2)} €</h3>
    </div>  
        `;
  } else {
    // ohne Titel und Bild nur Gerichte
    return /*html*/ `
    
    <div class="dishes">  
        <div class="dishes-title">
            <h3>${food["meal"]}</h3>
            <span class="plus"><img src="img/png/plus.png"></span>        
          </div>   
        <span>${food["description"]}</span>
        <span>${food["choice"]}</span>
        <h3>${food["price"].toFixed(2)} €</h3>
    </div>

    `;
  }
}

const myButton = document.querySelector(".meal-buttons");
const clickedButton = myButton.getElementsByTagName("a");
let lastClickedButton = clickedButton[0];

for (let i = 0; i < clickedButton.length; i++) {

  clickedButton[i].addEventListener('click', function () {

    lastClickedButton.classList.remove("clickedButton");
    clickedButton[i].classList.add("clickedButton");
    lastClickedButton = clickedButton[i];
  })
}
//Nav-Bar Scroll-Funktion -------------------------------------------
const container = document.querySelector('.search-buttons');
const content = document.querySelector('.meal-buttons');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');


scrollRightBtn.addEventListener('click', () => {
  content.scrollBy({ left: 200, behavior: 'smooth' });
});

scrollLeftBtn.addEventListener('click', () => {
  content.scrollBy({ left: -200, behavior: 'smooth' })
});

// Serach

function searchShow() {
  let searchContainer = document.getElementById('search-nav')
  let searchInput = document.getElementById('search-input')

  searchContainer.classList.toggle("d-none");
  searchInput.classList.toggle("d-none");
}

function controlIfincludes(i, j, food, searchInput) {
  if (food["meal"].toLowerCase().includes(searchInput)) {
    document.getElementById('groups').innerHTML += HTMLTemplate(i, j, food)
  }
}

