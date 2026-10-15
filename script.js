const products = [
    // FASHION
    {
        name: "Classic Hoodie",
        Category: "Fashion",
        price: 35000,
        image: "images/hoodie.jpg"
    },
    {
        name: "Oversized T-Shirt",
        Category: "Fashion",
        price: 18500,
        image: "images/oversized t-shirt.jpg"
    },
    {
        name: "Cargo Trousers",
        Category: "Fashion",
        price: 28000,
        image: "images/cargo-trouser.jpg"
    },
    {
        name: "Denim Jacket",
        Category: "Fashion",
        price: 45000,
        image: "images/denim jacket.jpg"
    },
    {
        name: "Linen Shirt",
        Category: "Fashion",
        price: 24000,
        image: "images/Linen shirt.jpg"
    },
    {
        name: "Wide-Leg Trousers",
        Category: "Fashion",
        price: 45000,
        image: "images/mid-leg-trouser.jpg"
    },
    // BAGS
    {
        name: "Mini Shoulder Bag",
        Category: "Bags",
        price: 24000,
        image: "images/mini shoulder bag.jpg"
    },
    {
        name: "Leather Tote",
        Category: "Bags",
        price: 14000,
        image: "images/leather-totes.jpg"
    },
    {
        name: "Crossbody Bag",
        Category: "Bags",
        price: 28000,
        image: "images/cross-body-bag.jpg"
    },
    {
        name: "Laptop Bag",
        Category: "Bags",
        price: 35000,
        image: "images/laptop-bag.jpg"
    },
    {
        name: "Travel Backpack",
        Category: "Bags",
        price: 38000,
        image: "images/travel-backpack.jpg"
    },
    {
        name: "Core Hand Bag",
        Category: "Bags",
        price: 24000,
        image: "images/Core Hand Bag.jpg",
    },
    // SHOES
    {
        name: "Classic Sneakers",
        Category: "Shoes",
        price: 24000,
        image: "images/classic sneakers.jpg"
    },
    {
        name: "Running Shoes",
        Category: "Shoes",
        price: 48000,
        image: "images/running-shoes.jpg"
    },
    {
        name: "Leather Shoes",
        Category: "Shoes",
        price: 30000,
        image: "images/leather shoes.jpg"
    },
    {
        name: "Canvas Sneakers",
        Category: "Shoes",
        price: 58000,
        image: "images/canvas sneakers.jpg"
    },
    {
        name: "Boots",
        Category: "Shoes",
        price: 77000,
        image: "images/boots.jpg"
    },
    {
        name: "BirkenStock",
        Category: "Shoes",
        price: 32000,
        image: "images/birkenstock.jpg"
    },
    // ACCESSORIES
    {
        name: "Minimalist Watch",
        Category: "Accessories",
        price: 55000,
        image: "images/minimalist watch.jpg"
    },
     {
        name: "Sunglasses",
        Category: "Accessories",
        price: 22000,
        image: "images/Sunglasses.jpg"
    },
     {
        name: "Leather Belt",
        Category: "Accessories",
        price: 18000,
        image: "images/leather belt.jpg"
    },
     {
        name: "Classic Cap",
        Category: "Accessories",
        price: 12000,
        image: "images/classic cap.jpg"
    },
     {
        name: "Silk Scarf",
        Category: "Accessories",
        price: 20000,
        image: "images/silk-scarf.jpg"
    },
     {
        name: "Statement Earrings",
        Category: "Accessories",
        price: 15000,
        image: "images/statement earrings.jpg"
    },
]

let cart = [];
const productContainer = document.getElementById ("product-container");
const categoryButtons = document.querySelector (".categories");
const productCountText =document.getElementById ("product-count-text");
const  searchInput = document.getElementById ("search-input");

const cartButton = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const closeCart = document.getElementById("close-cart");
const header = document.querySelector("header");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenuIcon = mobileMenuToggle.querySelector("i");
const mobileNavClose = document.querySelector(".mobile-nav-close");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");

const cartCount =document.getElementById ("cart-count");
const productModal = document.getElementById("product-modal");
const productDetails = document.getElementById("product-details");
const closeProductModal = document.getElementById("close-product-modal");

function setMobileMenuOpen(isOpen) {
    header.classList.toggle("mobile-menu-open", isOpen);
    mobileMenuToggle.setAttribute("aria-expanded", isOpen);
    mobileMenuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    mobileNavOverlay.setAttribute("aria-hidden", !isOpen);
    mobileNavOverlay.tabIndex = isOpen ? 0 : -1;
}

mobileMenuToggle.addEventListener("click", () => {
    setMobileMenuOpen(!header.classList.contains("mobile-menu-open"));
});

mobileNavClose.addEventListener("click", () => {
    setMobileMenuOpen(false);
});

mobileNavOverlay.addEventListener("click", () => {
    setMobileMenuOpen(false);
});

document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", () => {
        setMobileMenuOpen(false);
    });
});

function displayProducts(productsToDisplay) {
    productContainer.innerHTML = "";
    productCountText.textContent = `${productsToDisplay.length} products to explore`

    productsToDisplay.forEach(product => {
        const productCard = document.createElement("article");
        productCard.style.cursor = "pointer"

        productCard.classList.add("product-card");
        productCard.addEventListener("click", (event) => {
        if (!event.target.closest(".product-image")) return;
        productDetails.innerHTML = `
    <div class="product-modal-image">
        <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-modal-info">
        <p class="product-modal-category">${product.Category}</p>

        <h2>${product.name}</h2>

        <p class="product-modal-price">#${product.price.toLocaleString()}</p>

        <p class="product-modal-description">
            A thoughtfully selected piece from the LUME collection.
        </p>

        <button class="modal-add-to-cart" data-product-name="${product.name}">
            Add to Cart
        </button>
    </div>
`;

        productModal.classList.add("open");
        });

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">
                <p class="product-category">${product.Category}</p>

                <h3>${product.name}</h3>

                <div class="product-bottom">
                    <p class="product-price">₦${product.price.toLocaleString()}</p>

                    <button class="add-to-cart" data-product-name ="${product.name}">
                        <span>+</span> Add to Cart
                    </button>
                </div>
            </div>
        `;

        productContainer.appendChild(productCard);
    });
}

displayProducts(products);

categoryButtons.addEventListener("click", (event) => {
    if (!event.target.classList.contains("category-btn")) return;

    categoryButtons.querySelectorAll(".category-btn").forEach(button => {
    button.classList.remove("active");
    });

    event.target.classList.add("active");
    const selectedCategory = event.target.textContent;

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.Category === selectedCategory);

    displayProducts(filteredProducts);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
});

cartButton.addEventListener("click", () => {
    cartDrawer.classList.add("open");
});

closeCart.addEventListener("click", () => {
    cartDrawer.classList.remove("open");
});

productContainer.addEventListener("click", (event) => {
    if (!event.target.closest(".add-to-cart")) return;

    const button = event.target.closest(".add-to-cart");
    const productName = button.dataset.productName;

    const product = products.find(product => product.name === productName);

    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    displayCart();

    console.log(cart);
});

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    

    cartItems.innerHTML = "";

    const subtotal = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

    const tax = subtotal * 0.075;
    const total = subtotal + tax;

    document.getElementById("cart-subtotal").textContent =
        `#${subtotal.toLocaleString()}`;
    
    document.getElementById("cart-tax").textContent =
        `#${tax.toLocaleString()}`;

    document.getElementById("cart-total").textContent =
        `#${total.toLocaleString()}`;
    
    cart.forEach(product => {
        const cartItem = document.createElement("div");
        cartItem.classList.add ("cart-item")

        cartItem.innerHTML = `
            <p>${product.name}</p>
            <p>#${product.price.toLocaleString()}</p>
            <div>
                <button class="quantity-minus" data-product-name="${product.name}">-</button>
                <span>${product.quantity}</span>
                <button class="quantity-plus" data-product-name="${product.name}">+</button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });
}

const cartItems = document.getElementById ("cart-items");
cartItems.addEventListener("click", (event) => {
    const productName = event.target.dataset.productName;

    if (!productName) return;

    const product = cart.find(item => item.name === productName);

    if (event.target.classList.contains("quantity-plus")) {
        product.quantity += 1;
    }

    if (event.target.classList.contains("quantity-minus")) {
        product.quantity -= 1;

        if (product.quantity === 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    }

    cartCount.textContent = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    displayCart();
});

productDetails.addEventListener("click", (event) => {
    if (!event.target.classList.contains("modal-add-to-cart")) return;

    const productName = event.target.dataset.productName;

    const product = products.find(product => product.name === productName);

    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    cartCount.textContent = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    displayCart();

});

closeProductModal.addEventListener("click", () => {
    productModal.classList.remove("open");
});

const checkoutButton = document.getElementById ("checkout-button");
const checkoutModal = document.getElementById ("checkout-modal");

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        return;
    }
    checkoutModal.classList.add("open");
});

const closeModal = document.getElementById("close-modal");
const continueShopping = document.getElementById("continue-shopping");

closeModal.addEventListener("click", () => {
    checkoutModal.classList.remove("open");
});

continueShopping.addEventListener("click", () => {
    checkoutModal.classList.remove("open");
    cartDrawer.classList.remove("open");

    document.getElementById("shop").scrollIntoView({
        behavior: "smooth"
    });
});