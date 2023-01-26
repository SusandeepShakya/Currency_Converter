import React, { useState, useEffect } from 'react';
import ExchangeRates from '../Component/ExchangeRates';
import DatePickerCustom from '../Component/DatePickerCustom';
import Dropdown from '../Component/Dropdown';
import moment from 'moment';
import InputText from '../Component/InputText';
import CustomButton from '../Component/Button';
import { Box } from '@mui/material';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

const Converter = ({ params, forexData }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDatesRate, setSelectedDatesRate] = useState();
    const [firstCurrency, setFirstCurrency] = useState("");
    const [secondCurrency, setSecondCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [output, setOutput] = useState("");

    const filterDataByDate = (value) => {
        setSelectedDate(value.$d);
        let date = moment(value.$d).format("YYYY-MM-DD");
        const filteredRates = forexData.find(rates => rates.date === date);
        setSelectedDatesRate(filteredRates);
    }

    const currencyOptions = selectedDatesRate && selectedDatesRate.rates?.map(item => item.currency.iso3);

    const handleCurrencyOne = (e => {
        setFirstCurrency(e.target.value)
    })

    const handleCurrencyTwo = (e => {
        setSecondCurrency(e.target.value)
    })

    const handleInput = (e) => {
        setAmount(e.target.value)
    }

    //Function to swap currency
    const handleSwap = async () => {
        let swap = firstCurrency;
        let swaps = secondCurrency;
        setSecondCurrency(swap);
        setFirstCurrency(swaps)
    }

    //handles the conversion of the currency.
    const handleConversion = () => {
        let from = selectedDatesRate.rates.find(rate => rate.currency.iso3 === firstCurrency).buy;
        let to = selectedDatesRate.rates.find(rate => rate.currency.iso3 === secondCurrency).buy;
        debugger;
        setOutput("");
        switch (firstCurrency) {

            case 'JPY':
                setOutput((((amount / 10) * from) / to).toFixed(5).concat(" ", secondCurrency))
                break;

            case 'KRW':
                setOutput((((amount / 100) * from) / to).toFixed(5).concat(" ", secondCurrency))

                break;

            default:
                setOutput(((amount * from) / to).toFixed(5).concat(" ", secondCurrency));
                break;
        }

    }

    //Used to Swap Currency when state of Both Currency are changed
    useEffect(() => {
        if (firstCurrency && secondCurrency) handleConversion();

    }, [firstCurrency, secondCurrency])

    return (
        <>
            <div className='container'>
                <Box className='heading'>
                    <h1>Convert Currency</h1>
                </Box>
                <Box className='convertContainer'>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <DatePickerCustom label={'Exchange Rate From'} selected={selectedDate} minDate={params.from.$d} maxDate={params.to.$d} onChange={filterDataByDate} />
                        <InputText label={"Amount"} variant={'standard'} onChange={handleInput} />
                        <Dropdown label={'Change From:'} variant={'standard'} options={currencyOptions} value={firstCurrency} handleChange={handleCurrencyOne} />
                        <SwapHorizontalCircleIcon display="flex" justifyContent="center" alignItems="center" onClick={() => { handleSwap() }} />
                        <Dropdown label={'Change To:'} variant={'standard'} options={currencyOptions} value={secondCurrency} handleChange={handleCurrencyTwo} />
                    </Box>
                </Box>
            </div>
            <Box textAlign='center'>
                <h1 >Converted Value : {`${output}`}</h1>
            </Box>
            <ExchangeRates selectedDatesRate={selectedDatesRate} />
        </>
    );
}

export default Converter
