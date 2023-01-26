import React from 'react'
import { perPageOptions } from '../utils/common'
import Dropdown from '../Component/Dropdown'
import DatePickerCustom from '../Component/DatePickerCustom'
import CustomButton from '../Component/Button'
import moment from 'moment'
import { Box } from '@mui/material'

const ForexRates = ({ params, setParams, handleSubmit }) => {

    const handleChange = (event) => {
        setParams({ ...params, per_page: event.target.value });
    };
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Fetch data from Nepal Rastriya Bank</h1>
            </div>
            <Box className="fetchBlock"  >
                <Dropdown label={'Per Page'} variant={'standard'} options={perPageOptions} value={params.per_page} handleChange={handleChange} />
                <DatePickerCustom label={'From Date'} selected={params.from} minDate={params.per_page && moment().subtract(params.per_page , 'days')} maxDate={moment()} onChange={(value) => setParams({ ...params, from: value })} />
                <DatePickerCustom label={'To Date'} selected={params.to} minDate={params.per_page && moment().subtract(params.per_page , 'days')} maxDate={moment()} onChange={(value) => setParams({ ...params, to: value })} />
            </Box>
            <CustomButton variant="contained" label="Fetch Data from NRB" onClick={handleSubmit} />
        </div>
    )
}

export default ForexRates