import HeroBanner from "./HeroBanner";
import homepodImg from "../../public/hero_banner/homepod.jpg"
import homepodMiniImg from "../../public/hero_banner/homepod_mini.jpg"
import { Box } from "@mui/material";

export default function HeroBannerContainer() {

    const bannerText1 = {
        title: "HOMEPOD",
        des: "เสียงอันล้ำลึก",
        day: "เริ่มวางจำหน่าย 10 พค.",
        color: "white"
    }

    const bannerText2 = {
        title: "HOMEPOD MINI",
        des: "เสียงอันล้ำลึก แถมพกพาได้",
        day: "เริ่มวางจำหน่าย 10 พค.",
        color: "black"
    }



    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -5 }}>
            <HeroBanner textArr={bannerText1} img={homepodImg.src}></HeroBanner>
            <HeroBanner textArr={bannerText2} img={homepodMiniImg.src}></HeroBanner>
        </Box>
    )
}