// Initialize an array to store products
const products = [];

// Function to add a product to the array
function addProduct(productData) {
    // Add the product to the array
    products.push(productData);

    // Display the updated list of products
    displayProducts();
}

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('product-container');

    // Clear the existing product container
    productContainer.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-div';

        productDiv.innerHTML = `
            <div><img src="${product.image}" alt="" height="auto" width="267px"></div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="by">By <span class="by-">${product.brand}</span></div>
                <div class="price">
                    <div>Rs. ${product.price}</div>
                    <div class="old-price">Rs. ${product.oldPrice}</div>
                    <div class="offer">${product.offer}!</div>
                </div>
            </div>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Example: Add a product when the page loads
addProduct({
    image: "./Assets/f13-crystal-lake-killer-oversized-t-shirt-india-back-255x340.jpg",
    name: "Crystal Lake Killer - Friday The 13th",
    brand: "Friday the 13th",
    price: 799,
    oldPrice: 999,
    offer: "20% off",
});
addProduct({
      image: "./Assets/dc-atlantis-lifeguard-hoodie-india-255x340.jpg",
      name: "Atlantis Lifeguard - Aquaman Offici",
      brand: "DC Comics",
      price: 999,
      oldPrice: 1499,
      offer: "33% off",
   });
addProduct({
   image: "Assets/naruto-hero-of-hidden-leaf-oversized-t-shirt-india-back-255x340.jpg",
   name: "Hero Of Hidden Leaf Village - Narut",
   brand: "Naruto",
   price: 799,
   oldPrice: 999,
   offer: "20% off",
});
addProduct({
   image: "./Assets/harry-potter-hogwarts-college-hoodie-india-255x340.jpg",
   name: "Hogwarts College - Harry Potter O",
   brand: "Harry Potter",
   price: 1099,
   oldPrice: 1499,
   offer: "27% off",
})
addProduct({
   image: "./Assets/garfield-fuelled-by-coffee-and-sarcasm-t-shirt-india-255x340.jpg",
   name: "Fuelled By Coffee & Sarcasm - Garfi",
   brand: "Garfield",
   price: 549,
   oldPrice: 699,
   offer: "21% off",
})
addProduct({
   image: "./Assets/naruto-kakashi-cosplay-jacket-india-255x340.jpg",
   name: "Kakashi Cosplay - Naruto Official Ja",
   brand: "Naruto",
   price: 1199,
   oldPrice: 1499,
   offer: "20% off",
})
addProduct({
   image: "./Assets/made-with-adamantium-drop-cut-t-shirt-india-255x340.jpg",
   name: "Made With Adamantium - Marvel O",
   brand: "Marvel",
   price: 649,
   oldPrice: 899,
   offer: "28% off",
})
addProduct({
   image: "./Assets/marvel-captain-america-worthy-t-shirt-india-255x340.jpg",
   name: "Worthy - Marvel Official T-shirt",
   brand: "Marvel",
   price: 599,
   oldPrice: 699,
   offer: "14% off",
})
addProduct({
   image: "./Assets/peanuts-snoopy-do-what-makes-you-happy-t-shirt-255x340.jpg",
   name: "Do What Makes You Happy - Peanu",
   brand: "Peanuts",
   price: 549,
   oldPrice: 699,
   offer: "21% off",
})
addProduct({
   image: "./Assets/isro-1969-dropcut-t-shirt-india-255x340.jpg",
   name: "ISRO 1969 - ISRO Official Drop Cut T",
   brand: "ISRO",
   price: 649,
   oldPrice: 899,
   offer: "28% off",
})
addProduct({
   image: "./Assets/marvel-spider-gwen-stacy-hoodie-india-255x340.jpg",
   name: "Spider-Gwen Suit - Marvel Official H",
   brand: "Marvel",
   price: 1199,
   oldPrice: 1499,
   offer: "20% off",
})
addProduct({
   image: "./Assets/peanuts-snoopy-please-dont-talk-to-me-t-shirt-india-255x340.jpg",
   name: "Don't Talk To Me - Peanuts Official ",
   brand: "Peanuts",
   price: 449,
   oldPrice: 699,
   offer: "36% off",
})
addProduct({
   image: "./Assets/marvel-loki-master-of-mischief-hoodie-india-back-255x340.jpg",
   name: "Master Of Mischief - Marvel Official",
   brand: "Marvel",
   price: 1099,
   oldPrice: 1499,
   offer: "27% off",
})
addProduct({
   image: "./Assets/marvel-wolverine-violent-mutant-oversized-t-shirt-india-back-255x340.jpg",
   name: "Violent Mutant - Marvel Official Ov",
   brand: "Marvel",
   price: 799,
   oldPrice: 999,
   offer: "20% off",
})
addProduct({
   image: "./Assets/dc-comics-superman-logo-sweatshirt-india-255x340.jpg",
   name: "Superman: Logo - Superman Officia",
   brand: "DC Comics",
   price: 999,
   oldPrice: 1499,
   offer: "33% off",
})
addProduct({
   image: "./Assets/batman-emblem-full-sleeve-t-shirt-india-255x340.jpg",
   name: "Batman Emblem - Batman Official F",
   brand: "DC Comics",
   price: 649,
   oldPrice:799,
   offer: "19% off",
})
addProduct({
   image: "./Assets/harry-potter-hogwarts-alumni-drop-cut-t-india-255x340.jpg",
   name: "Hogwarts Alumni - Harry Potter O",
   brand: "Harry Potter",
   price: 649,
   oldPrice: 899,
   offer: "28% off",
})
addProduct({
   image: "./Assets/marvel-arc-reactor-suit-drop-cut-t-shirt-india-255x340.jpg",
   name: "Arc Reactor Suit - Marvel Official Dro",
   brand: "Marvel",
   price: 699,
   oldPrice: 899,
   offer: "22% off",
})
addProduct({
   image: "./Assets/naruto-akatsuki-cloud-jacket-india-255x340.jpg",
   name: "Shinobi Clan Cloud - Naruto Official ",
   brand: "Naruto",
   price: 1199,
   oldPrice: 1499,
   offer: "20% off",
})
addProduct({
   image: "./Assets/garfield-normal-is-boring-t-shirt-india-255x340.jpg",
   name: "Normal Is Boring - Garfield Official ",
   brand: "Garfield",
   price: 599,
   oldPrice: 699,
   offer: "14% off",
})

