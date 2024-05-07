import HeroBanner from "./HeroBanner";
import homepodImg from "../../public/hero_banner/homepod.jpg"
import homepodMiniImg from "../../public/hero_banner/homepod_mini.jpg"
import { Box } from "@mui/material";

export default function HeroBannerContainer() {

    const bannerText1 = {
        title: "HOMEPOD",
        des: "description",
        day: "day",
        color: "white"
    }

    const bannerText2 = {
        title: "HOMEPOD MINI",
        des: "description",
        day: "day",
        color: "black"
    }



    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -5 }}>
            <HeroBanner textArr={bannerText1} img={homepodImg.src}></HeroBanner>
            <HeroBanner textArr={bannerText2} img={homepodMiniImg.src}></HeroBanner>
        </Box>
    )
}