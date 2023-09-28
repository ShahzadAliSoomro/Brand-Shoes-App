// Select elements from the DOM (Document Object Model)
const wrapper = document.querySelector(".sliderWrapper"); // Selects the slider wrapper element.
const menuItems = document.querySelectorAll(".menuItem"); // Selects all menu items.

// Define an array of products with their details
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

// Initialize a variable to track the chosen product (initially set to the first product)
let choosenProduct = products[0];

// Select various elements representing the current product details
const currentProductImg = document.querySelector(".productImg"); // Image of the product.
const currentProductTitle = document.querySelector(".productTitle"); // Title of the product.
const currentProductPrice = document.querySelector(".productPrice"); // Price of the product.
const currentProductColors = document.querySelectorAll(".color"); // Color options.
const currentProductSizes = document.querySelectorAll(".size"); // Size options.

// Add event listeners to each menu item (likely representing different products)
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide by adjusting the wrapper's transformation.
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

     // Update the chosen product based on the selected menu item.
    choosenProduct = products[index];

    // Update the displayed product's title, price, and image.
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

      // Add event listeners to color options to change the displayed product image.
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// Add event listeners to size options to change the selected size's appearance.
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    // Reset the appearance of all size options.
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    // Highlight the selected size.
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Add an event listener to the "BUY NOW!" button to display the payment section.
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Add an event listener to the "close" button in the payment section to hide it.
close.addEventListener("click", () => {
  payment.style.display = "none";
});