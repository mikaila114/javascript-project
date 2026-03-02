const products = [{
    id: 1, name: 'Toyota', priceCent: 18000
}, {
    id: 2, name: 'Honda', priceCent: 15000
}, {
    id: 3, name: 'Nisan', priceCent: 12000
}, {
    id: 4, name: 'Ford', priceCent: 18000
}, {
    id: 5, name: 'Chevoleta', priceCent: 15000
}, {
    id: 6, name: 'BMW', priceCent: 120000
}, {
    id: 7, name: 'Marcedens-Benz', priceCent: 450000
}, {
    id: 8, name: 'Audi', priceCent: 250000
}, {
    id: 9, name: 'Volkwagen', priceCent: 20000
}, {
    id: 10, name: 'Hyundai', priceCent: 180000
}, {
    id: 11, name: 'Kia', priceCent: 170000
}, {
    id: 12 ,name: 'Peugeot', priceCent: 190000
}, {
    id: 13, name: 'Renault', priceCent: 180000
}, {
    id: 14, name: 'Ferari', priceCent: 250000
}, {
    id: 15, name: 'Lamborghini', priceCent: 300000
}, {
    id: 16, name: 'Tesla', priceCent: 350000
}, {
    id: 17, name: 'Sabaru', priceCent: 400000
}];
 
 
 





let productHTML = '';

products.forEach((product) => {
   productHTML += `
   <div class="inner-container">
   <p>${product.name}</p>
   <p><strong>Price:</strong> $${(Number(product.priceCent)/100).toFixed(2)}</p>
   <button class="add-to-cart" data-product-name="${product.name}" data-product-price="${product.priceCent}">Add to cart</button>
   </div>
   `
})
document.querySelector('.main-container')
.innerHTML = productHTML;
document.querySelectorAll('.add-to-cart').forEach((button)=> {
button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    const productPrice = button.dataset.productPrice;

    alert(`You Click: ${productName}, price: $${(Number(productPrice)/100) .toFixed()}`);

})
    });