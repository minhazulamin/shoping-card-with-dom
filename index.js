//for first card
document.getElementById('first-card').addEventListener('click', function(e){
    const productName = document.getElementById('first-name').innerText
    const productPrice = document.getElementById('first-price').innerText
    const productQuantity = document.getElementById('first-quantity').innerText

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    console.log(priceTotal) 
    // console.log(productName,productPrice,productQuantity)
    displayDate(productName,productPrice,productQuantity,priceTotal)
    disBtn('first-card' ) 
})
let serial = 0;

function displayDate(nameOfP,priceOfP,quantityOFP,resultOfP){
    const container = document.getElementById('table-container');
    serial += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOFP}</td>
    <td>${resultOfP}</td>
    `
    container.appendChild(tr);  
}

// for second-card 
document.getElementById('second-card').addEventListener('click', function(e){
    
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    displayDate(pName, pPrice, pQuantity,sumTotal)
    disBtn('second-card')
    
})

// for third card 

document.getElementById('third-card').addEventListener('click', function(e){
    
    const pNamed = e.target.parentNode.parentNode.children[0].innerText;
    const pPridce = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantfity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTsotal = parseInt(pPridce) + parseInt(pQuantfity);
    displayDate(pNamed, pPridce, pQuantfity,sumTsotal)
    disBtn('third-card')
    
})
document.getElementById('four-btn').addEventListener('click', function(e){
    
    const pNamed = e.target.parentNode.parentNode.children[0].innerText;
    const pPridce = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantfity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const sumTsotal = parseInt(pPridce) + parseInt(pQuantfity);
    displayDate(pNamed, pPridce, pQuantfity,sumTsotal)
    disBtn('four-btn')
    
})

document.getElementById('last-card').addEventListener('click', function(){
    const productName = document.getElementById('last-card').innerText
    const first = document.getElementById('first-input').value
    const second = document.getElementById('second-input').value
    
    const total = parseInt(first) / parseInt(second);


    displayDate(productName, first, second, total,)
    disBtn('last-card')


})

function disBtn(id){
    document.getElementById(id).setAttribute('disabled', true)
}