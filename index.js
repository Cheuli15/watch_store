
let menu = document.getElementById("navigation");
let scrollposition = menu.offsetTop;
window.onscroll = ()=>{
  if(window.scrollY >= scrollposition){
    menu.classList.add("sticky");
  }else{
    menu.classList.remove("sticky");
  }
}


// toggle nav menu when screen turn small
let menuButton = document.getElementById("menu");
let navigation = document.getElementById("navigation-bar");
menuButton.addEventListener("click", ()=>{
 menuButton.classList.toggle("change");

  navigation.classList.toggle("active");
} );

// cart section
// open and close cart section
let openCart = document.querySelector(".openCart");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".closeCart");

openCart.onclick = ()=>{
  cart.classList.add("active");
}

closeCart.onclick = ()=>{
  cart.classList.remove("active");
}

// cart working
//  cart Products

const product = [
  {
    id: 0,
    image: 'images/image1.png',
    title: 'Bretling Navitime 01 | Leather  ',
    details: 'Breitling SA Navitimer 01 Watch Chronograph with black leather strip',
    price: 205,
  },
  {
    id: 1,
    image: 'images/image2.png',
    title: 'G-Shock WR220BAR ',
    details: 'G-Shock WR220BAR Solar-powered watch Casio Wave Ceptor',
    price: 550,
  },
  {
    id: 2,
    image: 'images/image3.png',
    title: 'Rolex Datejust ',
    details: 'Rolex Datejust Submariner Watch Colored gold',
    price: 480,
  },
  {
    id: 3,
    image: 'images/image4.png',
    title: 'Rolex GMT Master II ',
    details: 'Rolex Submariner Rolex Daytona Rolex Datejust Rolex GMT Master II',
    price: 550,
  },
  {
    id: 4,
    image: 'images/image5.png',
    title: 'Cartier Tank | Blue ',
    details: "Blue Cartier Tank watch men's watch",
    price: 500,
  },
  {
    id: 5,
    image: 'images/image6.png',
    title: ' Tissot',
    details: 'Tissot Luxury mechanical watch',
    price: 650,
  },
  {
    id: 6,
    image: 'images/image7.png',
    title: ' G-Shock Frogman ',
    details: 'Casio G-Shock Frogman Watch Clock',
    price: 500,
  },
  {
    id: 7,
    image: 'images/image8.png',
    title: ' Tissot Seiko',
    details: 'Chronograph Jaeger-LeCoultre Tissot Seiko, Aristocrat watch',
    price: 770,
  },
  {
    id: 8,
    image: 'images/image1.png',
    title: 'Bretling Navitime 01 | Leather  ',
    details: 'Breitling SA Navitimer 01 Watch Chronograph with black leather strip',
    price: 470,
  },
  {
    id: 9,
    image: 'images/image2.png',
    title: 'G-Shock WR220BAR ',
    details: 'G-Shock WR220BAR Solar-powered watch Casio Wave Ceptor',
    price: 550,
  },
  {
    id: 10,
    image: 'images/image3.png',
    title: 'Rolex Datejust ',
    details: 'Rolex Datejust Submariner Watch Colored gold',
    price: 480,
  }
];

// display product on Home Page
const categories = [...new Set(product.map((item)=>{ return item}))]

let c = 0;
  if (c > 1){
    console.log(c)
  }
  document.getElementById("cartRoot").innerHTML = categories.map((item)=>
  {
    let {image, title, details, price, id} = item;
    return(
      `<div class="card"> 
        <img src= ${image} > </img>
        <span> $  ${price}</span>
        <h2>${title} ${id}</h2>
        <p>${details} </p>`+
        "<button id='cardBtn' class='cardBtn' onclick='addtocart("+(c++)+")'>Add to cart </button>"+
      `</div> `

    )
  }).join('');

  
  let cat =[];
  let uniqueIds = new Set(cat);

  // remove products to cart
function delElement(a){
  cat.splice(a, 1);
  displayCart();
}

  // add  products to cart
  function addtocart(c){
    cat.push({...categories[c]});
    displayCart(c);


}



function displayCart (c){
  let d = 0;
  let total = 0;

  if (cat.length === 0){
    document.getElementById("cartContent").innerHTML = `<h2 class="cartTitle">Your cart is empty</h2>`
    document.getElementById("totalPrice").innerHTML = `$ ${total}`;
  } else {
    document.getElementById("itemQuantity").innerHTML = cat.length;
    document.getElementById("cartContent").innerHTML = cat.map((item)=>{
      let{ image, title, price} = item;

            
      total += price  ;
      document.getElementById("totalPrice").innerHTML = `$ ${total}`;
      
      
      return(
        `<div class="cartBox">
        <img src=${image} class="cartImg"></img>
        <div class="cartDetails">
          <div class="cartProductTitle" >${title}</div>
          <div class="cartprice"> &dollar;${price} </div>
          <input type="number" value="1" min="1" max="99"  class="cartQuantity id="cartQuantity">
        </div>`+
        "<button class='removeBtn' onclick='delElement("+(d++)+")'> X </button>" +

       `</div>`
       

      )
    }).join('');


  }
}


