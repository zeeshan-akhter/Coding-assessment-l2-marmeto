async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function generateProductCard(product) {
  const discount = Math.round(
    (1 - product.price / product.compare_at_price) * 100
  );
  let detailsClass = "";

  if (product.title === "RCB Tshirt") {
    detailsClass = "rcb-tshirt-details";
  } else if (product.title === "Yellow casual dress") {
    detailsClass = "yellow-casual-dress-details";
  }

  return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <div class="product-details ">
                ${
                  product.badge_text
                    ? `<span class="badge">${product.badge_text}</span>`
                    : ""
                }
                <div class=" pd ${detailsClass}">
                    <div class="top">
                        <h3 class="title">${product.title}</h3>
                        <p class="vendor">•     ${product.vendor}</p>
                    </div>
                    <div class="bottom">    
                        <p class="price">Rs ${product.price}.00</p>
                        <p class="compare-price">${
                          product.compare_at_price
                        }.00</p>
                        <p class="discount">${discount}% Off</p>
                    </div> 
                </div>   
            </div>
            <button class="add-to-cart-btn">Add to cart</button>
        </div>
    `;
}

function displayProducts(categoryIndex, data) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  data.categories[categoryIndex].category_products.forEach((product) => {
    const productCard = generateProductCard(product);
    productContainer.innerHTML += productCard;
  });
}

function setActiveTab(tabIndex) {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button, index) => {
    if (index === tabIndex) {
      button.classList.add("active");
      button.style.backgroundColor = "#000";
      button.style.color = "#fff";
    } else {
      button.classList.remove("active");
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  });
}

async function initialize() {
  const url =
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";
  try {
    const data = await fetchData(url);

    displayProducts(0, data);
    setActiveTab(0);

    document.getElementById("men-tab").addEventListener("click", () => {
      displayProducts(0, data);
      setActiveTab(0);
    });

    document.getElementById("women-tab").addEventListener("click", () => {
      displayProducts(1, data);
      setActiveTab(1);
    });

    document.getElementById("kids-tab").addEventListener("click", () => {
      displayProducts(2, data);
      setActiveTab(2);
    });
  } catch (error) {
    console.log(error);
  }
}

initialize();
