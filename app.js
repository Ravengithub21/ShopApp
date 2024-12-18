const products = [
  {
    name: "Sony Playstation 5",
    url: "https://i.ibb.co/zHmZnWx/playstation-5.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "https://i.ibb.co/rFFMDH7/samsung-galaxy.png",
    category: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "https://i.ibb.co/mhm1hLq/cannon-eos-camera.png",
    category: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "https://i.ibb.co/LS9TDLN/sony-a7-camera.png",
    category: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "https://i.ibb.co/QHgFnHk/lg-tv.png",
    category: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "https://i.ibb.co/L0L9SdG/nintendo-switch.png",
    category: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "https://i.ibb.co/C8rBVdT/xbox-series-x.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "https://i.ibb.co/Pj1nm4B/samsung-tv.png",
    category: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "https://i.ibb.co/5F58zmH/google-pixel.png",
    category: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "https://i.ibb.co/5Wy3RZ9/sony-zv1f-camera.png",
    category: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "https://i.ibb.co/FxM6rXq/toshiba-tv.png",
    category: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "https://i.ibb.co/5vc7J6s/iphone-14.png",
    category: "smartphones",
    price: 999.99,
  },
];

// Select DOM Elements

const productsWrapper = document.getElementById("products-wrapper");
const filtersContainer = document.getElementById("filters-container");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");
const categories = ["Smartphones", "Games", "Televisions", "Cameras"];
let itemCartIndex = 1;
const cart = [];
const iconz = document.querySelector(".iconz");
const submitBtn = document.querySelector(".status");

let cartItemCount = 1;

const renderProducts = (array) => {
  let html = "";
  for (let i = 0; i < array.length; i++) {
    html += `<div class="item space-y-2">
        <div
            class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl"
        > 
          <img
            src="${array[i].url}"
            alt=""
            class="w-full h-full object-cover"
          />
          <button
            class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
            onClick="countCart()"
            id="id"
            
          >
            Add To Cart
          </button>
        </div>
        <p class="text-xl">${array[i].name}</p>
        <strong>${array[i].price}</strong>
      </div>`;
  }
  productsWrapper.innerHTML = html;
};

renderProducts(products);

function renderCheckBoxes() {
  let html = "";
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    html += `<div>
            <input
              onchange="filterCheckBoxes(${categories[i]})" 
              type="checkbox"
              class="check"
              value="${categories[i]}"
              id="${categories[i]}"
              
            />
            <label for="${categories[i]}">${categories[i]}</label>
          </div>`;
  }
  filtersContainer.innerHTML = html;
}

renderCheckBoxes();

function filterCheckBoxes(checkboxValue) {
  const isChecked = checkboxValue.checked;
  const category = checkboxValue.value.toLowerCase();
  if (isChecked) {
    const newProduct = products.filter((product) =>
      product.category.toLowerCase().includes(category)
    );
    renderProducts(newProduct);
  } else {
    renderProducts(products);
  }
}

function countCart() {
  let html = "";
  html += `${itemCartIndex}</small`;
  console.log(cart);
  console.log(itemCartIndex);
  iconz.innerHTML = html;
  if (itemCartIndex < 12) {
    itemCartIndex++;
  } else {
    itemCartIndex = 0;
  }
}
