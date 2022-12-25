import axios from "axios";
// export const exchanges = [
//   'Binance',
//   'Coinbase',
//   'Kraken',
//   'Bitfinex',
//   'Gemini',
//   'Poloniex',
//   'Bittrex',
//   'Huobi',
//   'OKEx',
//   'CME',
//   'CBOT',
//   'CBOE',
//   'NYMEX',
//   'COMEX',
//   'LSE',
//   'NYSE',
//   'NASDAQ',
//   'TSX',
//   'Euronext',
//   'LSE',
//   'HKEX',
//   'SGX',
//   'TSE',
//   'SSE',
//   'SZSE',
//   'BM&F Bovespa',
//   'NSE',
//   'BSE',
//   'NSEI',
//   'NIFTY',
//   'S&P BSE SENSEX',
//   'JSE',
//   'BIT',
//   'ASX',
//   'KRX',
//   'TWSE',
//   'SET',
//   'TWDQ',
//   'IDX',
//   'KLSE',
//   'FBMKLCI',
//   'PSE',
//   'SEHK',
//   'SZSE',
//   'TPEx',
//   'WSE',
//   'BIT',
//   'BME',
//   'BOVESPA',
//   'CHX',
//   'LSE',
//   'NYSE',
//   'NYSE MKT',
//   'NYSE Arca',
//   'TSX',
//   'TSX-V',
//   'BME'
// ];
export const exchanges =
  "binance,bitfinex,bitstamp,coinbase,gemini,kraken,huobi,bittrex,poloniex,kex,hitbtc,cex,coinbase-pro";

export const assets = [
  "ETH",
  "LTC",
  "XRP",
  "EOS",
  "LINK",
  "BNB",
  "XTZ",
  "ZEC",
  "MKR",
  "DAI",
  "USDC",
  "WBTC",
  "UNI",
  "COMP",
  "USDT",
  "BUSD",
];

export const currencies =
  "ethereum,litecoin,ripple,eos,chainlink,binance-coin,tezos,zcash,maker,dai,usd-coin,wrapped-bitcoin,uniswap,compound,tether,binance-usd";

const getPrices = async () => {
  try {
    let exchangesArray = exchanges.split(",");
    let prices = [];
    for (const exchange of exchangesArray) {
      // console.log(`https://api.coingecko.com/api/v3/simple/price?ids=${currencies}&vs_currencies=usd&exchanges=${exchange}`)
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${currencies}&vs_currencies=usd&exchanges=${exchange}`
      );

      const currencyArray = currencies.split(",");
      // console.log(res);

      for (const currency of currencyArray) {
        let price = res.data[currency]?.usd;
        if(exchange==="binance"){
          price+=1;
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

export const fetchExchangeRates = async () => {
  try {
    let rates = await getPrices();
    return rates;
  } catch (error) {
    console.log("errt");
    console.error(error); // log the error message to the console
  }
};
