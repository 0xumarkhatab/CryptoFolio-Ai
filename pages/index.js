import {
  getPrices,
  currenciesList,
  exchangesList,
} from "../components/data/fetchData";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import { Heading } from "@chakra-ui/react";
import ArbitrageList from "../components/ArbitrageList";
import { connectExchange } from "../components/ExchangeIntegration/Connect";
import LoginButton from "../components/LoginButton";

import {
  Box,
  
} from "@chakra-ui/react";

const binance_client_id = "JbpeTnLodNCwUKv1ylT2bRfoyKewzujVaddqnQd52GIik9oZXjhvVrzqDXxXgnqC"
const binance_api_key = "6FuAfelCINwwwz19xBZJHOuQudeo0cwBLwU6CmG0wGXfIDWHBz8Ga87pJ6VNLYRl"
const binance_secret_key = "jl2FwREez4"


function Home() {
  const [currentArbitrageCurrency, setCurrentArbitrageCurrency] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState(null);
  const [arbitrageOpportunitiesCount, setArbitrageOpportunitiesCount] =
    useState(0);
  const [arbitrageOpportunitiesList, setArbitrageOpportunitiesList] = useState(
    []
  );

  function findArbitrage(currency,ExchangePrices) {
    let opportunitiesList = [];
    let totalOpportunities = 0;
    for (const exchange1 of ExchangePrices) {
      for (const exchange2 of ExchangePrices) {
        const profit = exchange2.price - exchange1.price;
        if (exchange1.exchangeName !== exchange2.exchangeName && profit > 0) {
          let opportunity = {
            source: exchange1.exchangeName,
            sink: exchange2.exchangeName,
            price: profit.toFixed(2),
            currency:currency,
          };
          opportunitiesList.push(opportunity);

          totalOpportunities++;
          // AddOpportunity(
          //   `<b>Arbitrage opportunity</b> for <b>${currency.toUpperCase()}</b> : buy from <b>${exchange1.exchangeName.toUpperCase()}</b> and sell on <b>${exchange2.exchangeName.toUpperCase()}</b> for a profit of <b>${profit} USD</b>.`
          // );
        }
      }
    }
    setArbitrageOpportunitiesCount((prev) => prev + totalOpportunities);
    return opportunitiesList;
  }

  function CleanPricesData(theData) {
    let newData = [];
    let currenciesArray = currenciesList;
    let totalExchanges = exchangesList.length;
    let percentExchangesToAllow = 0.5 * totalExchanges;
    for (const currency of currenciesArray) {
      let ExchangePrices = theData[currency];
      let exchangePricesPresent = 0;
      ExchangePrices.map((item) => {
        if (item.price) {
          exchangePricesPresent++;
        }
      });

      if (exchangePricesPresent >= percentExchangesToAllow) {
        newData[currency] = ExchangePrices;
      }
    }

    return newData;
  }
  async function TrainModel() {
    let _prices = null;
    _prices = await getPrices(true); // return cached data

    if (!_prices) {
      console.log("Please refresh the page");
      setLoading(false);
      return;
    }
    _prices = CleanPricesData(_prices);
    setPrices(_prices);
    setLoading(false);

    let currenciesArray = currenciesList;
    let opportunities = [];
    for (const currency of currenciesArray) {
      let ExchangePrices = _prices[currency];
      let list = findArbitrage(currency,ExchangePrices);
      opportunities[currency] = list;
    }
    // console.log("full opportunities are ", opportunities);
    setArbitrageOpportunitiesList(opportunities);
  }

  function AddOpportunity(opportunity) {
    setArbitrageOpportunitiesCount((prev) => prev + 1);
    let parentElement = document.getElementById("opportunities");
    const childElement = document.createElement("p");
    childElement.innerHTML = opportunity;
    parentElement.appendChild(childElement);
  }

  useEffect(() => {

    // setInterval(() => {
    TrainModel();

    // }, 6000);
  }, []);

  return (
    <>
      <Navbar />
      <Introduction />

      {!prices && loading && <h2>Loading Prices ....</h2>}
      <ArbitrageList data={arbitrageOpportunitiesList} opportunitiesCount={arbitrageOpportunitiesCount} />
    </>
  );
}

export default Home;
