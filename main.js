var defaultPrices = [1.29, 2.99, 2.99, 2.99, 1.99, 1.99];
//parseFloat(document.getElementById('price-calc').lastChild.innerHTML); //"7.99"
var defaultPrice;
var updatedPrice = document.getElementById('price-calc').lastChild.innerHTML;
var count;

function getDefaultPrice(){    
    if(document.getElementById('bun-name').innerHTML=='Original'){
        defaultPrice=defaultPrices[0];
    }else if(document.getElementById('bun-name').innerHTML=='Blackberry'){
        defaultPrice=defaultPrices[1];
    }else if(document.getElementById('bun-name').innerHTML=='Walnut'){
        defaultPrice=defaultPrices[2];
    }else if(document.getElementById('bun-name').innerHTML=='Gluten Free'){
        defaultPrice=defaultPrices[3];
    }else if(document.getElementById('bun-name').innerHTML=='Pumpkin Spice'){
        defaultPrice=defaultPrices[4];
    }else if(document.getElementById('bun-name').innerHTML=='Caramel Pecan'){
        defaultPrice=defaultPrices[5];
    }
    return defaultPrice;
}

function selectGlaze() {
    getDefaultPrice();
    var price = defaultPrice;
    var image;
    if(document.getElementById('none').checked){
        image = 'Images/Glaze-none.png';
    }
    else if(document.getElementById('sugar').checked) {
        price += 0.99;
        image = 'Images/Glaze-SugarMilk.png';
    }else if(document.getElementById('vanilla').checked) {
        price +=1.19;
        image = 'Images/Glaze-VanillaMilk.png';
    }else if(document.getElementById('chocolate').checked) {
        price +=1.29;
        image = 'Images/Glaze-DoubleChocolate.png';
    }
    document.getElementById('price-calc').lastChild.innerHTML = price.toFixed(2);
    updatedPrice = price.toFixed(2);
    document.getElementById('glazeImage').src = image;
}



function selectBox(){
    var quantPrice = updatedPrice;
    var quantImage;
    
    if(document.getElementById('1').checked){
        quantImage = "Images/Box-1.png";
        quantPrice = parseFloat(quantPrice);
    }
    else if(document.getElementById('6').checked){
        quantImage = "Images/Box-6.png";
        quantPrice = quantPrice * 6;
    }
    else if(document.getElementById('3').checked){
        quantImage = "Images/Box-3.png";
        quantPrice = quantPrice * 3;
    }
    else if(document.getElementById('12').checked){
        quantImage = "Images/Box-12.png";
        quantPrice = quantPrice* 12;
    }

    document.getElementById('price-calc').lastChild.innerHTML = quantPrice.toFixed(2);
    document.getElementById('quantityImage').src= quantImage;
}

function displayAlert(){
    count = parseInt(document.getElementById('cart-counter-text').innerHTML);
    count += 1;
    console.log(count);
    document.getElementById('cart-counter-text').innerHTML = count;
}