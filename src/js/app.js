const destinations = [
  {
    title: "Bali, Indonesia",
    description:
      "Opplev de tropiske strendene, frodige junglene og imponerende templer på Bali. Perfekt for deg som søker både eventyr og avslapning.",
    duration: 2,
    price: 12000,
    dealOffer: true,
    imageUrl: "./assets/images/destinations/alexa-west-bali.jpg",
  },
  {
    title: "Santorini, Hellas",
    description:
      "Opplev solnedgangen over de hvitkalkede husene i Santorini, og nyt gresk gjestfrihet på sitt beste. Et romantisk paradis for par.",
    duration: 1,
    price: 9000,
    dealOffer: false,
    imageUrl: "./assets/images/destinations/chloe-lefleur-santorini.jpg",
  },
  {
    title: "Phuket, Thailand",
    description:
      "Besøk Thailands vakreste strender, snorkle i klart blått vann og nyt deilig thaimat i tropiske omgivelser.",
    duration: 2,
    price: 11000,
    dealOffer: true,
    imageUrl: "./assets/images/destinations/maria-ivanova-phuket.jpg",
  },
  {
    title: "Cancún, Mexico",
    description:
      "Utforsk maya-ruiner, nydelige strender og fargerik kultur i Cancún. Perfekt for både fest og avslapning.",
    duration: 3,
    price: 15000,
    dealOffer: false,
    imageUrl: "./assets/images/destinations/alex-braga-cancun.jpg",
  },
  {
    title: "Maui, Hawaii",
    description:
      "Opplev vulkanske landskap, frodige regnskoger og vakre strender på Maui. En unik destinasjon for naturelskere.",
    duration: 2,
    price: 20000,
    dealOffer: false,
    imageUrl: "./assets/images/destinations/neora-aylon-maui.jpg",
  },
  {
    title: "Maldivene",
    description:
      "Krystallklart vann og hvite sandstrender venter deg på Maldivene. Den ultimate destinasjonen for luksus og avslapning.",
    duration: 1,
    price: 25000,
    dealOffer: true,
    imageUrl: "./assets/images/destinations/syd-sujuaan-maldives.jpg",
  },
  {
    title: "Barcelona, Spania",
    description:
      "Kombiner strandliv med storbyfølelse i Barcelona. Opplev Gaudís arkitektur, fantastisk mat og levende kultur.",
    duration: 1,
    price: 8000,
    dealOffer: false,
    imageUrl: "./assets/images/destinations/enes-barcelona.jpg",
  },
  {
    title: "Dubai, UAE",
    description:
      "Utforsk futuristiske skyskrapere, luksuriøse kjøpesentre og ørkeneventyr i Dubai. En by som kombinerer gammelt og nytt.",
    duration: 2,
    price: 17000,
    dealOffer: true,
    imageUrl: "./assets/images/destinations/christoph-schulz-dubai.jpg",
  },
  {
    title: "Cape Town, Sør-Afrika",
    description:
      "Utforsk Table Mountain, vakre strender og vinmarker i Cape Town. En destinasjon som byr på kultur og natur.",
    duration: 2,
    price: 13000,
    dealOffer: false,
    imageUrl: "./assets/images/destinations/shashank-kumar-cape-town.jpg",
  },
  {
    title: "Sydney, Australia",
    description:
      "Besøk Operahuset, Bondi Beach og det vakre landskapet rundt Sydney. En by med noe for alle.",
    duration: 3,
    price: 22000,
    dealOffer: false,
    imageUrl: "./assets/images/destinations/dan-freeman-sydney.jpg",
  },
];

// Get DOM Elements

const shoppingCartBadge = document.querySelector(".cart-badge");
// sort-buttons
const sortButtons = document.querySelectorAll(".sort-button");
const destionationsCardsContainer = document.querySelector(
  ".destionations__cards-container"
);

window.addEventListener("DOMContentLoaded", renderDestinations(destinations));

// Render destinations
function renderDestinations(destinations) {
  destionationsCardsContainer.textContent = ""; //Fjerne innholdet som allerede er der

  destinations.forEach((destination) => {
    const card = document.createElement("article");
    card.classList.add("destinations__cards");

    const image = document.createElement("img");
    image.src = destination.imageUrl;

    const cardContent = document.createElement("div");
    cardContent.classList.add("cards__content");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = destination.title;

    const description = document.createElement("p");
    description.textContent = destination.description;

    const duration = document.createElement("p");
    duration.textContent = `Varighet: ${destination.duration} uker`;

    const price = document.createElement("p");
    price.textContent = `Pris: ${destination.price}kr`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-button");
    addToCartButton.textContent = "Legg til i handlekurven";

    //TODO: EVENT LISTENERS FOR SHOPPING CART
    const dealOfferBadge = document.createElement("div");

    if (destination.dealOffer) {
      dealOfferBadge.classList.add("deal-offer-badge");
      dealOfferBadge.textContent = "Tilbud";
    }

    //APPENDNING ELEMENTS
    cardContent.append(cardTitle, description, duration, price);
    card.append(image, cardContent, addToCartButton, dealOfferBadge);
    destionationsCardsContainer.append(card);
  });
}

// Sort destinations
const sortDestinations = (e) => {
  let sortedDestinations = [...destinations];

  const sortType = e.target.dataset.sort;
  if (sortType === "price-high") {
    sortedDestinations = sortedDestinations.sort((a, b) => b.price - a.price);
  } else if (sortType === "price-low") {
    sortedDestinations = sortedDestinations.sort((a, b) => a.price - b.price);
  } else if (sortType === "duration") {
    sortedDestinations = sortedDestinations.sort(
      (a, b) => a.duration - b.duration
    );
  } else if (sortType === "deal-offer") {
    sortedDestinations = sortedDestinations.filter(
      (destination) => destination.dealOffer
    );
  } else if (sortType === "all") {
    sortedDestinations = [...destinations];
  }

  renderDestinations(sortedDestinations);
};

sortButtons.forEach((button) => {
  button.addEventListener("click", (e) => sortDestinations(e));
});
