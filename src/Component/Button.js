import React from 'react'
import Button from '@mui/material/Button';

//Button Component
const CustomButton = (props) => {
    const { label, variant, onClick, size } = props
    return (
        <Button variant={variant} onClick={onClick} size={size}>{label}</Button>
    )
}

export default CustomButton