import { fetchExchangeRates, currencies } from '../components/data/fetchData'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'

function Home() {
  const [currentArbitrageCurrency, setCurrentArbitrageCurrency] = useState(null)
  const [loading, setLoading] = useState(true)
  const [prices, setPrices] = useState(null)
  const [
    arbitrageOpportunitiesCount,
    setArbitrageOpportunitiesCount,
  ] = useState(0)

  async function findArbitrage(currency, prices) {
    console.log('arbitrage for ', currency)
    for (const exchange1 of prices) {
      for (const exchange2 of prices) {
        const profit = exchange2.price - exchange1.price
        if (exchange1.exchangeName !== exchange2.exchangeName && profit > 0) {
          AddOpportunity(
            `<b>Arbitrage opportunity</b> for <b>${currency.toUpperCase()}</b> : buy from <b>${exchange1.exchangeName.toUpperCase()}</b> and sell on <b>${exchange2.exchangeName.toUpperCase()}</b> for a profit of <b>${profit} USD</b>.`,
          )
        }
      }
    }
  }

  async function TrainModel() {
    let _prices = null
    _prices = await fetchExchangeRates()
    if (!_prices) {
      console.log('Please refresh the page')
      setLoading(false)
      return
    }
    console.log(_prices)
    setPrices(_prices)

    let currenciesArray = currencies.split(',')
    for (const currency of currenciesArray) {
      let ExchangesPrices = _prices[currency]
      await findArbitrage(currency, ExchangesPrices)
    }
  }

  function AddOpportunity(opportunity) {
    setArbitrageOpportunitiesCount((prev) => prev + 1)
    let parentElement = document.getElementById('opportunities')
    const childElement = document.createElement('p')
    childElement.innerHTML = opportunity
    parentElement.appendChild(childElement)
  }

  useEffect(() => {
    // setInterval(() => {
    TrainModel()

    // }, 6000);
  }, [])

  return (
    <>
    <Navbar/>
    <Introduction/>
      <div>
        <h1>DeFi Arbitrage Platform </h1>
      </div>

      {!prices && loading && <h2>Loading Prices ....</h2>}
      <div>
        <h2>Finding Arbitrage Opportunities</h2>
        <h3>Found {arbitrageOpportunitiesCount}</h3>
      </div>

      <div id="opportunities"></div>
    </>
  )
}

export default Home
