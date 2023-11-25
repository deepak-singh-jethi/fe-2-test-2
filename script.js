// responsive navbar =>

const menu = document.getElementById("menu");
const sideBar = document.querySelector(".sideBar");
const topNav = document.querySelector(".topNav");
const close = document.querySelector("#close");

menu.addEventListener("click", () => {
  sideBar.style.left = "0px";
});

close.addEventListener("click", () => {
  sideBar.style.left = "-400px";
});

const products = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: true,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const productList = document.querySelector(".productList");
const allBtn = document.getElementById("all");
const vegBtn = document.getElementById("veg");
const nonvegBtn = document.getElementById("non-veg");
const radioButtons = document.querySelectorAll('input[name="rating"]');

const searchButton = document.querySelector(".searchBox button");
const searchvalue = document.querySelector(".searchBox input");

const handleLikeClick = (product) => {};

function printProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const item = document.createElement("div");
    const { name, type, time, imageSrc, rating, isLiked } = product;
    item.className = "product";

    item.innerHTML = ` <div class="pImg">
              <img src="${imageSrc}" alt="${name}" />
            </div>
            <p id="type">${type}</p>
            <div class="name">
              <div class="nameAndRating">
                <h3>${name}</h3>
                <p><span class="material-icons star"> star </span>${rating}</p>
              </div>
              <div class="deliveryAndLike">
                <h4>${time}</h4>
                <span class="material-icons like-icon ${
                  isLiked ? "liked" : ""
                }" onClick={handleLikeClick}> favorite </span>
              </div>
            </div>`;

    productList.appendChild(item);
  });
}
printProducts(products);
/*  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  }, */

window.onload = () => {
  localStorage.clear();
};
//print products based on buttons

const filterMethods = {
  all: (products) => products,
  veg: (products) => {
    return products.filter((p) => {
      if (p.type === "veg") {
        return true;
      }
    });
  },
  nonVeg: (products) => {
    return products.filter((p) => {
      if (p.type === "non-veg") {
        return true;
      }
    });
  },
  above: (products) => {
    return products.filter((p) => {
      if (p.rating >= 4) {
        return true;
      }
    });
  },
  below: (products) => {
    return products.filter((p) => {
      if (p.rating < 4) {
        return true;
      }
    });
  },
  search: (products, searchQuery) => {
    return products.filter((p) => {
      return p.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  },
};

const handleFilters = () => {
  const foodType = localStorage.getItem("foodType") || "all";
  const foodRating = localStorage.getItem("foodRating") || "";
  const searchQuery = localStorage.getItem("searchQuery") || "";

  let filteredProducts = products;
  filteredProducts = filterMethods[foodType](filteredProducts);
  if (foodRating) {
    filteredProducts = filterMethods[foodRating](filteredProducts);
  }
  if (searchQuery) {
    filteredProducts = filterMethods.search(filteredProducts, searchQuery);
  }

  printProducts(filteredProducts);
};

allBtn.addEventListener("click", () => {
  localStorage.setItem("foodType", "all");
  handleFilters();
});

vegBtn.addEventListener("click", () => {
  localStorage.setItem("foodType", "veg");
  handleFilters();
});

nonvegBtn.addEventListener("click", () => {
  localStorage.setItem("foodType", "nonVeg");
  handleFilters();
});

//print products based on rating
radioButtons.forEach(function (ratingButton) {
  ratingButton.addEventListener("change", function () {
    // Loop through radio buttons to find the selected one
    radioButtons.forEach(function (button) {
      if (button.checked) {
        const inputvalue = button.value;
        if (button.value === "4.5") {
          localStorage.setItem("foodRating", "above");
          handleFilters();
        } else if (button.value === "4") {
          localStorage.setItem("foodRating", "below");
          handleFilters();
        }
      }
    });
  });
});

// search recipes button

searchButton.addEventListener("click", () => {
  const searchQuery = searchvalue.value;
  localStorage.setItem("searchQuery", searchQuery);
  handleFilters();
});
