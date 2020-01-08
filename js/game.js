 let gold = {
    amount: 0,
    cap: 100,
    amountElement: null,
    capElement: null
};

let elixir = {
    amount: 0,
    cap: 100,
    amountElement: null,
    capElement: null
}

// Initializaton
function initialization() {
    // GOLD 
    gold.amountElement = document.getElementById('gold');
    gold.capElement = document.getElementById('goldCap');
    gold.amountElement.innerHTML = gold.amount;
    gold.capElement.innerHTML = gold.cap;
    // ELIXIR
    elixir.amountElement = document.getElementById('elixir');
    elixir.capElement = document.getElementById('elixirCap');
    elixir.amountElement.innerHTML = elixir.amount;
    elixir.capElement.innerHTML = elixir.cap;

    console.log("initialized");
}

//Increase Gold (Used to upgrade your character, building, and to buy items) 
function increaseGold(amount) {
    console.log("Calling increaseGold");
    let tempAmount = gold.amount + amount;

    if( tempAmount < gold.cap) {
        gold.amount = tempAmount;   
    } 

    if (tempAmount >= gold.cap) {
        gold.amount = gold.cap;
    }
    gold.amountElement.innerHTML = gold.amount;

    console.log("Increased gold by 5");
      
}

// Decrease Gold
function decreaseGold(amount) {
    
    console.log("Calling decreaseGold");
      
    let tempAmount = gold.amount - amount;

    if( tempAmount < gold.cap) {
        gold.amount = tempAmount;   
    } 

    if (tempAmount >= gold.cap) {
        gold.amount = gold.cap;
    }
    gold.amountElement.innerHTML = gold.amount;

    console.log("Decreased gold by 5");
      
}

// ELIXIR (Used to upgrade spells, research, etc) 
function increaseElixir(amount) {
    console.log("Calling increaseElixir");
    let tempAmount = elixir.amount + amount;

    if( tempAmount < elixir.cap) {
        elixir.amount = tempAmount;   
    } 

    if (tempAmount >= elixir.cap) {
        elixir.amount = elixir.cap;
    }
    elixir.amountElement.innerHTML = elixir.amount;
      
    console.log("Increased elixir by 5");
      
}


// COMBO BUTTON 
function combo(amount) {
  var i = document.getElementById('combo').innerHTML;
  console.log("Calling combo");
  i = parseInt(document.getElementById('combo').innerHTML);

  document.getElementById('combo').innerHTML = i+amount;
      
  console.log("Increased gold and elixir by 10");
      
}

// BUY
function buyArmor(amount) {
    var i = document.getElementById('buy').innerHTML;
    console.log("Calling buy function");
      
    i = parseInt(document.getElementById('buy').innerHTML);

    if(i < 10) {
        document.getElementById('buy').innerHTML = i-amount;
    } 
    if (i >= 10) {
        document.getElementById('buy').disabled=true;
    }
      
    console.log("Bought armor for 5 gold");
    
}

// INCREASE GOLD CAPACITY
function increaseGoldCap(amount) {
    
    console.log("Calling goldCap function");
    
    var tempCap = 0;
    let tempAmount = gold.amount + amount;

    if (gold.cap = tempAmount) {

        tempAmount = gold.amount - amount;
        tempCap = gold.cap * gold.cap;
        
    }
    console.log(gold.cap);
    gold.amountElement.innerHTML = 0;
    gold.capElement.innerHTML = gold.cap;
      
    console.log("Increase gold capacity");
    
}