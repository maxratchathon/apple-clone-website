import { Box, Typography } from "@mui/material";


export default function HeroBanner({ img, textArr }: { img: string, textArr: any }) {

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '90vh' }}>
            <img src={img} alt="Your Image" style={{ objectFit: 'cover', width: '100%', height: '90vh' }} />
            <Box sx={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant='h3' color={textArr.color} >{textArr.title}</Typography>
                <Typography variant='h6' color={textArr.color} >{textArr.des}</Typography>
                <Typography variant='h6' color={textArr.color} >{textArr.day}</Typography>
            </Box>
        </Box >



    )
}