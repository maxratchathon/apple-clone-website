import { Box, ImageListItem, Typography } from "@mui/material";
import card1 from '../../public/home-items/card-1/card1.jpeg'
import card2 from '../../public/home-items/card-1/card2.jpeg'
import card3 from '../../public/home-items/card-1/card3.jpeg'
import card4 from '../../public/home-items/card-1/card4.jpeg'
import card5 from '../../public/home-items/card-1/card5.jpeg'
import card6 from '../../public/home-items/card-1/card6.jpeg'



export default async function ImageCard1() {

    // interface Item {
    //     title: string;
    //     description: string;
    //     img: {
    //         src: string;
    //     }
    //     price: string
    // }

    const itemsData = [
        { img: card1, title: "iPhone 15 Pro", description: "ไทเทเนียม", price: "" },
        { img: card2, title: "Home Pod", description: "", price: "" },
        { img: card3, title: "hello", description: "", price: "" },
        { img: card4, title: "hello", description: "", price: "" },
        { img: card5, title: "hello", description: "", price: "" },
        { img: card6, title: "hello", description: "", price: "" },
    ]
    console.log('result: ' + itemsData[0].img.src)

    return (
        <Box sx={{ display: 'flex', gap: 2.5 }}>
            {itemsData.map((item) => (
                <Box sx={{ aspectRatio: 4 / 5, backgroundImage: `url(${item.img.src})`, width: 400, height: 500, borderRadius: 5, my: 5 }}>
                    <Box sx={{ p: 4, }}>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>



    )
}