import {
    db,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    doc,
    onSnapshot,
} from "./firebase.js";

const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const productImg = document.querySelector("#product-img");
const allProducts = document.querySelector(".allProducts");

const myCollectionReference = collection(db, "products");

// Function to handle form submission
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Product object to be added to Firestore
    const myProduct = {
        productName: productName.value,
        productPrice: Number(productPrice.value),
        productImg: null, // File upload functionality can be implemented later
        productDetail: productDetail.value,
        createdAt: serverTimestamp(),
    };
    
    try {
        await addDoc(myCollectionReference, myProduct);
        // Reset the form after successful submission
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

// Function to load and display products
async function loadProducts() {
    allProducts.innerHTML = ""; // Clear existing products
    
    const querySnapshot = await getDocs(myCollectionReference);
    
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        
        // HTML content to append
        allProducts.innerHTML += `
            <div>
            <!-- <img src="" alt=""> -->
                <h3>${product.productName}</h3>
                <span>${product.createdAt?.toDate()}</span>
                <p class="price">Rs.${product.productPrice}</p>
                <p>${product.productDetail}</p>
                </div>
                `;
                form.reset(); // Reset the form after successful submission
    });
}

loadProducts();









 
  