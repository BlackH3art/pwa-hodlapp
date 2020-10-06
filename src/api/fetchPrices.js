import axios from 'axios';

const URL = 'https://api.binance.com/api/v3/ticker/price?';
const URL_BTC = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';


export const fetchPrices = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      symbol: query + 'USDT',
    }
  })

  return data;
}

export const fetchBtcPrice = async () => {
  const { data } = await axios.get(URL_BTC)
  return data;
}
