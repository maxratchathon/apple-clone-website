import HeroBanner from "./HeroBanner";
import homepodImg from "../../public/hero_banner/homepod.jpg"
import homepodMiniImg from "../../public/hero_banner/homepod_mini.jpg"
import { Box } from "@mui/material";

export default function HeroBannerContainer() {



    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <HeroBanner img={homepodImg.src}></HeroBanner>
            <HeroBanner img={homepodMiniImg.src}></HeroBanner>
        </Box>
    )
}