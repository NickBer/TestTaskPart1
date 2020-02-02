// const fetch = require('node-fetch');
// const atob = require('atob');

const URL = "http://54.39.188.42/";

async function encodeData(url) {
    let res = await fetch(url);
    if (res.ok) {
        let base64str = await res.text();
        let productsList = JSON.parse(atob(base64str));
        return productsList;
    } else {
        alert(`Ошибка HTTP: ${res.status}`);
    }
}

function createProductLiElement(product) {
    let elt = document.createElement('li');
    let [options] = product.options;
    elt.innerHTML = `
    <p class="title">${product.title}</p>
    <p class="title">${product.sku}</p>
    <img src="${product.image}" alt="Product image" class="product-image">
    <h3 class="optionsTitle">PRODUCT OPTIONS:</h3>  
    <p class="option">Metal type: ${options.metal_type}</p>
    <p class="option">Metal color: ${options.metal_color}</p>
    <p class="option">Stone shape: ${options.stone_shape}</p>
    <p class="option">Gemstone color: ${options.gemstone_color}</p>
    <p class="price">${Number(product.price).toFixed(2)} ${product.currency}</p>
    `;
    return elt;
}



encodeData(URL).then(productArr=>{
    let list = document.getElementById("productList");
    productArr.map(product=>{
        list.appendChild(createProductLiElement(product));
    });
});