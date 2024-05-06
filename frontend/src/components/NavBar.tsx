import { Box, Typography } from "@mui/material";
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

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: 'center', gap: "10px" }}>
                {Object.entries(navBar).map(([key, value]) => (<Typography sx={{ fontSize: '15px' }} key={key}>{value}</Typography>))}
            </Box>
        </Box>
    )
}