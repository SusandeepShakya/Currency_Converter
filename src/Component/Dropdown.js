import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Dropdown = (props) => {
    const {
        label,
        required,
        options,
        placeholder,
        handleChange,
        disabled,
        variant,
        value,
    } = props;
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    variant={variant}
                    disabled={disabled}
                    required={required}
                >
                    {options?.map((item, index) => <MenuItem value={item} key={index}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown