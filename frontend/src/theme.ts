'use client'
import { Inter, Kanit, Roboto } from "next/font/google";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Kanit"
    }
})

export default theme