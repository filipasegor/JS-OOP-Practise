// import Wallet from "wallet.js";
// import { Ether, Bitcoin } from "coins.js";



// Не удаляйте ключевое слово "export"

class Coin {
  // Сделать: constructor, collect(), getValue(), getMessage()
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = 0;
  }
  collect(){
    this.count++;
    console.log(this.count)
    return;
  }

  getValue(){
    let value = 0
    value = this.price * this.count
    return value;
    console.log(value)
  }

  getMessage(){
    return this.count
  }

}

class Ether extends Coin {
  // Сделать: constructor и наследование
  constructor(name, price, count) {
    super(name, price, count)
    this.name = "Ether";
    this.price = 3000;
  }

  getMessage(){
    return `${this.count} ETH в кошельке`
  }

  // getValue(){
  //   this.price * this.count
  //   console.log(this.price * this.count)
  //   return;
  // }
}

class Bitcoin extends Coin {
  // Сделать: constructor и наследование
  constructor(name, price, count) {
    super(name, price, count)
    this.name = "Bitcoin";
    this.price = 50000;
  }

  getMessage(){
    return `${this.count} BTC в кошельке`
  }

  // getValue(){
  //   return this.price * this.count
  // }
}

class Wallet {
  // Сделать: constructor, addCoin() и getBalance()
  constructor(coins, ether, bitcoin){
    this.coins = []
    this.ether = ether
    this.bitcoin = bitcoin
  }

  addCoin(coin){
    return this.coins.push([ether, bitcoin])

  }

  getBalance(){
    return this.coins.forEach((coin) => {
      return `${this.сoin.getValue()}`
    });
  }

  // getValue(){
  //   this.price * this.count
  //   console.log("this.price * this.count")
  //   return;
  // }
}




const ether = new Ether();
const bitcoin = new Bitcoin();
const wallet = new Wallet();
try {
  wallet.addCoin(ether);
  wallet.addCoin(bitcoin);
} catch (error) {
  console.error(error);
}

const addEth = document.querySelector("#add-eth");
const addBtc = document.querySelector("#add-btc");
const ethBalance = document.querySelector("#eth-balance");
const btcBalance = document.querySelector("#btc-balance");
const totalBalance = document.querySelector("#total-balance");

const render = () => {
  try {
    ethBalance.textContent = ether.getMessage();
    btcBalance.textContent = bitcoin.getMessage();
    totalBalance.textContent = wallet.getBalance();
  } catch (error) {
    console.error(error);
  }
};

addEth.addEventListener("click", () => {
  ether.collect();
  render();
});
addBtc.addEventListener("click", () => {
  bitcoin.collect();
  render();
});
