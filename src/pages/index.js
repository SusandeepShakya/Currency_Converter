import React, { useState } from 'react';
import ForexRates from './ForexRates';
import '../../src/assets/css/Converter.css';
import { url_params } from '../utils/constant';
import Converter from './Converter';
import axios from 'axios';
import { BASE_URL } from '../utils/common';
import moment from 'moment';

const CurrencyConverter = () => {
    const [nrbParams, setNrbParams] = useState(url_params)
    const [forexData, setForexData] = useState()
    
    const handleSubmit = () => {
        const params = {
            ...nrbParams,
            from: moment(nrbParams.from.$d).format('YYYY-MM-DD'),
            to: moment(nrbParams.to.$d).format('YYYY-MM-DD'),
        }
        axios.get(`${BASE_URL}/rates`, { params })
            .then(res => {
                if (res) {
                    setForexData(res.data.data.payload);
                }
            })
    }

    return (
        <>
            <ForexRates params={nrbParams} setParams={setNrbParams} handleSubmit={handleSubmit} />
            {forexData && <Converter params={nrbParams} forexData={forexData} />}
        </>
    )
}

export default CurrencyConverter