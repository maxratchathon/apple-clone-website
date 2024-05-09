import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import appleLogo from '../../public/apple_logo.png'


export default function ItemIconCard() {

    const navBar = {
        store: "Store",
        mac: "Mac",
        ipad: "iPad",
        iphone: "iphone",
        watch: "Watch",
        airPods: "AirPods",
        tvAndHome: "TV & Home",
        entertainment: "Entertainment",
        accessories: "Accessories",
        support: "Support",



    }

    const [navBarHover, setNavBarHover] = useState(false)

    function onHoverHandler() {
        setNavBarHover(!navBarHover)
    }

    return (
        <Box>
            <Box onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler} sx={{ display: "flex", justifyContent: 'center', gap: "15px" }}>
                <img src={appleLogo.src} width={17} ></img>
                {Object.entries(navBar).map(([key, value]) => (<Typography sx={{
                    fontSize: '15px', ":hover": {
                        scale: '1.2',
                        cursor: 'pointer'

                    },
                    transition: '0.5s'

                }} key={key}>{value}</Typography>))}
            </Box>
            <Box sx={{ opacity: navBarHover ? 1 : 0, transition: "1s", height: navBarHover ? '500px' : '0px' }}>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ justifyContent: 'center', my: 5 }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>Welcome to Apple</Typography>
                    <Typography variant="body1" sx={{ maxWidth: 600, textAlign: 'center' }}>
                        Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.
                    </Typography>
                    <Box mt={4}>
                        <img src="https://via.placeholder.com/400x200" alt="Apple Products" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}