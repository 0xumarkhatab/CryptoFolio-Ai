import axios from "axios";
import xml2js from 'xml2js';
const binance_api_key = "JbpeTnLodNCwUKv1ylT2bRfoyKewzujVaddqnQd52GIik9oZXjhvVrzqDXxXgnqC"
const binance_secret_key = "6FuAfelCINwwwz19xBZJHOuQudeo0cwBLwU6CmG0wGXfIDWHBz8Ga87pJ6VNLYRl"
const binance_client_id = "jl2FwREez4"
let redirect_uri ="https://umaresso-obscure-broccoli-rw566gq4vx6cxv4q-3000.preview.app.github.dev/";

async function ConnectBinance() {    
  let res = await axios.get(
    `https://accounts.binance.com/en/oauth/authorize?response_type=code&client_id=${binance_client_id}&redirect_uri=${redirect_uri}&state=CSRF_TOKEN&scope=user:openId`
  );
  let xmlData = res.data;
let jsonData;
console.log(res)
xml2js.parseString(xmlData, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    jsonData = result;
    console.log("response is ", jsonData);

  }
});



}

export async function connectExchange(exchangeName) {
  let name = exchangeName.toString().toLowerCase();
console.log({name})


switch (name) {
    case "binance":
      let res = await ConnectBinance();
      return res;
      break;

    default:
      break;
  }
}
