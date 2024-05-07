import { Box } from "@mui/material";


export default function HeroBanner({ img }: { img: string }) {

    return (

        <img src={img} style={{ maxWidth: '100%', maxHeight: '100%' }}></img>

    )
}