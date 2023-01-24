import './App.css';
import React, { useState, useEffect } from 'react';
// import { url_params } from './constant';
// import axios from 'axios';
import { forexRate } from './forexRates';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  // const [params, setParams] = useState(url_params);
  // const [data, setData] = useState();
  // const base_url = ' https://www.nrb.org.np/api/forex/v1';
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDatesRate, setSelectedDatesRate] = useState();
  const [firstCurrency, setFirstCurrency] = useState();
  const [secondCurrency, setSecondCurrency] = useState();
  const [amount, setAmount] = useState();
  const [output, setOutput] = useState();

  //Fetch Data From Api and stored in JSON Fil named ForexRates
  // useEffect(() => {
  //   axios.get(`${base_url}/rates`, {params })
  //     .then(res => {
  //       if (res) {
  //         console.log(res.data.data.payload)
  //         setData(res.data.data.payload);
  //       }
  //     })
  // }, [params])


  const filteredDate = (e) => {
    setSelectedDate(e.target.value);
    const filteredRates = forexRate.find(rates => rates.date === e.target.value);
    setSelectedDatesRate(filteredRates);
  }

  const handleCurrencyOne = (e => {
    setFirstCurrency(e.target.value)
  })
  const handleCurrencyTwo = (e => {
    setSecondCurrency(e.target.value)
  })
  const handleInput = (e) => {
    setAmount(e.target.value)
  }
  const handleConversion = () => {
    let from = selectedDatesRate.rates.find(rate => rate.currency.iso3 === firstCurrency).buy;
    let to = selectedDatesRate.rates.find(rate => rate.currency.iso3 === secondCurrency).buy;
    switch (firstCurrency) {
      case 'JPY':
        setOutput(((amount / 10) * from) / to)
        break;

      case 'KRW':
        setOutput(((amount / 100) * from) / to)

        break;

      default:
        setOutput((amount * from) / to);
        break;
    }

  }

  //Function to swap currency
  const handleSwap = () => {
    let swap = firstCurrency;
    setFirstCurrency(secondCurrency);
    setSecondCurrency(swap);
    handleConversion()
  }


  return (
    <div className='main'>
      <div className='heading'>
        <h1>Convert Currency</h1>
      </div>
      <div className='container'>
        <div className='dateContainer mb-3'>
          <div className="date">
            <span >Rates From : </span>
            <input className='form-control' type="date" value={selectedDate} onChange={filteredDate} />
          </div>
        </div>
        <div className='amountContainer mb-3'>
          <span className='p-3' >Amount :</span>
          <input className='form-control' type="text" value={amount} onChange={handleInput} />
        </div>
        <div className='firstCurrency mb-3'>
          <span >Change From:</span>
          <select className="form-select" name="currency-code" value={firstCurrency} onChange={handleCurrencyOne}>
            <option>Choose a currency</option>
            {selectedDatesRate && selectedDatesRate.rates.map((items, index) => {
              return (<option key={index} value={items.currency.iso3}>{items.currency.iso3}</option>)
            })}
          </select>
        </div>
        <div className='switch mb-2 d-flex align-items-center justify-content-center'>
          <button className='btn btn-success ' onClick={handleSwap}> - swap -</button>
        </div>
        <div className='secondCurrency mb-3'>
          <span >Change To:</span>
          <select className="form-select" name="currency-code1" value={secondCurrency} onChange={handleCurrencyTwo} >
            <option>Choose a currency</option>
            {selectedDatesRate && selectedDatesRate.rates.map((items, index) => {
              return (<option key={index} value={items.currency.iso3}>{items.currency.iso3}</option>)
            })}
          </select>
        </div>
        <div className='switch mb-2 d-flex align-items-center justify-content-center'>
          <button className=' m-2 btn btn-primary btn-block ' type="submit" onClick={handleConversion} >Convert </button>
        </div>
      </div>

      <div className="result mb-3">
        <h1 className='mt-3'>Converted Value : {output}</h1>
      </div>
      <div className='allRates'>

        <h3>Nepali Exchange Rate</h3>
        <table className="mt-4 table table-bordered">
          <thead>
            <tr>
              <th>Country</th>
              <th>Buy</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody>
            {selectedDatesRate && selectedDatesRate.rates.map((items, index) => {
              return (
                <tr>
                  <td >{items.currency.iso3}</td>
                  <td >{items.buy}</td>
                  <td >{items.sell}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
