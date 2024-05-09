import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";


export default function ItemIconCard() {

    const navBar = {
        logo: "<Apple>",
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
        searchIcon: "<Search>",
        shopIcon: "<Shop>"


    }

    const [navBarHover, setNavBarHover] = useState(false)

    function onHoverHandler() {
        setNavBarHover(!navBarHover)
    }

    return (
        <Box>
            <Box onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler} sx={{ display: "flex", justifyContent: 'center', gap: "10px" }}>
                {Object.entries(navBar).map(([key, value]) => (<Typography sx={{ fontSize: '15px' }} key={key}>{value}</Typography>))}
            </Box>
            <Box sx={{ opacity: navBarHover ? 1 : 0, transition: "1s", height: navBarHover ? '500px' : '0px' }}>
                <Box display='flex' sx={{ justifyContent: 'center', my: 5 }}>
                    Hello world this is menu
                </Box>
            </Box>
        </Box>
    )
}