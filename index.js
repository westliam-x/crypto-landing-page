var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")

var settings ={
    "async":true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"Get",
    "headers":{}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});

if (window.innerWidth < 1024) {
  alert("Sorry, your screen size is not optimized for this website. Please adjust your screen size or try viewing this website on a different device.");
}
