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
    
    gold.amountElement = document.getElementById('gold');
    gold.capElement = document.getElementById('goldCap');
    gold.amountElement.innerHTML = gold.amount;
    gold.capElement.innerHTML = gold.cap;
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
    var i = document.getElementById('gold').innerHTML;
    console.log("Calling decreaseGold");
      
    i = parseInt(document.getElementById('gold').innerHTML);
    
    if (i >= 5) {
        document.getElementById('gold').innerHTML = i-amount;
    }
    else {
        alert("You do not have enough gold!")
    }
    console.log("Decreased gold by 5");
      
}

// ELIXIR (Used to upgrade spells, research, etc) 
function increaseElixir(amount) {
    var i = document.getElementById('elixir').innerHTML;
    console.log("Calling increaseElixir");
    i = parseInt(document.getElementById('elixir').innerHTML);

    document.getElementById('elixir').innerHTML = i+amount;
      
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
    var currentAmount = document.getElementById('goldCap').innerHTML;
    console.log("Calling goldCap function");
    
    currentAmount = parseInt(document.getElementById('goldCap').innerHTML);
    
    if (i === amount) {
        document.getElementById('gold').innerHTML = currentAmount-amount;
        document.getElementById('goldCap').innerHTML = i*2;
    }
      
    console.log("Increase gold capacity");
    
}