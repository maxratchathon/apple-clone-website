'use client'
import { Box, Button, ImageListItem, Typography } from "@mui/material";
import card1 from '../../public/home-items/card-1/card1.jpeg'
import card2 from '../../public/home-items/card-1/card2.jpeg'
import card3 from '../../public/home-items/card-1/card3.jpeg'
import card4 from '../../public/home-items/card-1/card4.jpeg'
import card5 from '../../public/home-items/card-1/card5.jpeg'
import card6 from '../../public/home-items/card-1/card6.jpeg'
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";



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
        { img: card1, title: "IPHONE 15 PRO", description: "ไทเทเนียม", price: "เริ่มต้นที่ ฿41,900", textColor: 'white' },
        { img: card2, title: "HOMEPOD", description: "เสียงอันล้ำลึก", price: "฿11,490", textColor: 'white' },
        { img: card3, title: "HOMEPOD MINI", description: "สีสันใหม่แห่งการฟัง", price: "฿ 3,890", textColor: 'black' },
        { img: card4, title: "MACBOOK AIR", description: "ออกแบบมาให้ไปไหนไปกัน", price: "เริ่มต้นที่ ฿ 34,900", textColor: 'black' },
        { img: card5, title: "APPLE WATCH SERIES 9", description: "ฉลาดขึ้น สว่างขึ้น ทรงพลังขึ้น", price: "เริ่มต้นที่ ฿ 15,900", textColor: 'white' },
        { img: card6, title: "IPAD", description: "รักเลย วาดเลย เอาใจไปเลย", price: "เริ่มต้นที่ ฿ 14,900", textColor: 'black' },
    ]
    console.log('result: ' + itemsData[0].img.src)

    const slideLeft = () => {
        const slider: any = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        const slider: any = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Box id='slider' sx={{
                display: 'flex', gap: 2.5, overflowX: 'scroll', scrollBehavior: 'smooth',
            }}>
                <Box sx={{
                    position: 'absolute', top: '40%', display: 'flex', justifyContent: "space-between    ", zIndex: 1, width: '100%', opacity: '30%',

                }}>
                    <IoCaretBackCircle color="grey" onClick={slideLeft} size={90} />
                    <IoCaretForwardCircle color="grey" onClick={slideRight} size={90} />
                </Box>
                {itemsData.map((item) => (
                    <Box sx={{
                        aspectRatio: 4 / 5, backgroundImage: `url(${item.img.src})`, width: 400, height: 500, borderRadius: 5, my: 5, backgroundSize: 'contain', boxShadow: 20, ":hover": {
                            transform: 'scale(1.02)',
                            display: 'block'

                        }, transition: '1s'
                    }}>
                        <Box sx={{ p: 4, color: item.textColor, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography>{item.title}</Typography>
                            <Typography variant="h5">{item.description}</Typography>
                            <Typography>{item.price}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box >




    )
}