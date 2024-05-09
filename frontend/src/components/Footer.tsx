import { Box, Typography } from "@mui/material";

export default function Footer() {

    return (
        <Box mt={10}>
            <Box sx={{ height: '0.5px', backgroundColor: 'gray', my: 3}} />
            <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                <Typography>
                    Copyright © 2024 Apple Inc. สงวนสิทธิ์ทุกประการ
                </Typography>
                <Typography>
                    ไทย | English
                </Typography>
            </Box>
        </Box>
    )
}