import { Box, TextField } from '@mui/material'
import React from 'react'

const InputText = (props) => {
    const { variant, label, onChange } = props
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="filled-basic" label={label} variant={variant} onChange={onChange} />
        </Box>
    )
}

export default InputText