import axios from "axios";
import { CachedData } from "./Cache";
export const exchanges ="binance,bitfinex,bitstamp,coinbase,gemini,kraken,huobi,bittrex,poloniex,hitbtc,cex,coinbase-pro";
export const exchangesList = exchanges.split(",");
export const currencies = "ethereum,litecoin,ripple,eos,chainlink,binance-coin,tezos,zcash,maker,dai,usd-coin,wrapped-bitcoin,uniswap,compound,tether,binance-usd";
export const currenciesList = currencies.split(",");
export const symbolToCurrencyMap = {
  eth: "ethereum",
  ltc: "litecoin",
  xrp: "ripple",
  eos: "eos",
  link: "chainlink",
  bnb: "binance-coin",
  xtz: "tezos",
  zec: "zcash",
  mkr: "maker",
  dai: "dai",
  usdc: "usd-coin",
  wbtc: "wrapped-bitcoin",
  uni: "uniswap",
  comp: "compound",
  usdt: "tether",
  busd: "binance-usd"
  };
export const currencySymbolMap = {
  ethereum: "eth",
  litecoin: "ltc",
  ripple: "xrp",
  eos: "eos",
  chainlink: "link",
  "binance-coin": "bnb",
  tezos: "xtz",
  zcash: "zec",
  maker: "mkr",
  dai: "dai",
  'usd-coin': "usdc",
  'wrapped-bitcoin': "wbtc",
  uniswap: "uni",
  compound: "comp",
  tether: "usdt",
  'binance-usd': "busd"
};

export const getPrices = async (returnCached) => {
  try {
    if (returnCached) {
      return CachedData;
    }
    let exchangesArray = exchangesList;
    let prices = [];

    for (const exchange of exchangesArray) {
      // console.log(`https://api.coingecko.com/api/v3/simple/price?ids=${currencies}&vs_currencies=usd&exchanges=${exchange}`)
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${currencies}&vs_currencies=usd&exchanges=${exchange}`
      );

      const currencyArray = currenciesList;
      // console.log(res);

      for (const currency of currencyArray) {
        let price = res.data[currency]?.usd;
        if (exchange === "binance") {
          price += 1;
        }

        let existingPrices = prices[currency] ? prices[currency] : [];
        existingPrices.push({
          exchangeName: exchange,
          price: price,
        });
        // console.log("prices are ", existingPrices);
        prices[currency] = existingPrices;
      }
    }

    // console.log(prices);
    return prices;
  } catch (error) {
    console.error(error);
  }
};
