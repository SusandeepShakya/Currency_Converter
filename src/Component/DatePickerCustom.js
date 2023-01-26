import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import moment from 'moment';

function DatePickerCustom(props) {
    const { label, selected, onChange, minDate, maxDate, inputFormat } = props
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DesktopDatePicker
                variant={'standard'}
                    value={selected}
                    label={label}
                    onChange={onChange}
                    minDate={minDate && moment(minDate).toDate()}
                    maxDate={maxDate && moment(maxDate).toDate()}
                    inputFormat={inputFormat || "YYYY-M-D"}
                    renderInput={(params) => <TextField {...params} />}
                />

            </Stack>
        </LocalizationProvider>
    );
}

export default DatePickerCustom;


// import { DatePicker } from '@mui/x-date-pickers';
// import moment from 'moment';
// import React from 'react'
// import ReactDatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";


// const DatePickerCustom = (props) => {
//     const { label, placeholder, selected, onChange, minDate, maxDate, inputFormat } = props
//     return (
//         <>
//             <span>{label}</span>
//             {/* <DatePicker
//                 variant="inline"
//                 label="Basic example"
//                 value={selected}
//                 onChange={onChange}
//             /> */}
//             <ReactDatePicker
//                 selected={selected}
//                 placeholder={placeholder}
//                 onChange={onChange}
//                 minDate={minDate && moment(minDate).toDate()}
//                 maxDate={maxDate && moment(maxDate).toDate()}
//                 format={inputFormat || "YYYY-M-D"}
//             />
//         </>
//     )
// }

// export default DatePickerCustom
