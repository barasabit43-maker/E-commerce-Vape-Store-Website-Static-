const button = document.getElementById("actionBtn");
const searchInput = document.getElementById("searchInput");
const product= document.querySelectorAll(".product-card");

console.log(button);
console.log(searchInput);
;

//click button
button.addEventListener("click", () => {
    console.log("button succesfully");
});
searchInput.addEventListener("click", () => {
    const value = searchInput.value;
    console.log(value);
});

const searchResult = document.getElementById("searchResult");
searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim();

    if (value === "") {
        searchResult.textContent = "";
    } else {
        searchResult.textContent = " Searching for: " + value;
    }
});

searchInput.addEventListener("input",() => {
    const keyword = searchInput.value.toLowerCase().trim();
    
    product.forEach(product => {
        const productName = product.dataset.name.toLowerCase();

        if(productName.includes(keyword)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
        
    });
});
console.log(product);

let selectedProduct = "";

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    selectedProduct = card.querySelector("h4").innerText;
  });
});

// whatsaap float
const waFloat = document.querySelector(".wa-float");

waFloat.addEventListener("click", () => {
  const phone = "6285880106951";
  const msg = selectedProduct 
    ? `Halo, saya ingin membeli ${selectedProduct}`
    : "Halo, saya ingin bertanya tentang produk";

  waFloat.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
});

const products = document.querySelectorAll("[data-name]");

products.forEach(product => {
  product.addEventListener("click", () => {
    // hapus aktif dari semua
    products.forEach(p => p.classList.remove("active"));

    // aktifkan yang diklik
    product.classList.add("active");
  });
});


