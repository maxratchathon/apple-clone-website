'use client'
import item1 from "../../public/home-items/mac.png"
import item2 from "../../public/home-items/iphone.png"
import item3 from "../../public/home-items/ipad.png"
import item4 from "../../public/home-items/apple-watch.png"
import item5 from "../../public/home-items/airpod.png"
import item6 from "../../public/home-items/airtag.png"
import item7 from "../../public/home-items/apple-tv.png"
import item8 from "../../public/home-items/home-pod.png"
import item9 from "../../public/home-items/others.png"
import item10 from "../../public/home-items/gift-card.png"
import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
import { useRef } from "react"




export default function ImageLists() {
    const itemData = [
        { img: item1, title: 'Mac' },
        { img: item2, title: 'iPhone' },
        { img: item3, title: 'iPad' },
        { img: item4, title: 'Apple Watch' },
        { img: item5, title: 'AirPod' },
        { img: item6, title: 'AirTag' },
        { img: item7, title: 'Apple TV' },
        { img: item8, title: 'HomePod' },
        { img: item9, title: 'อุปกรณ์เสริม' },
        { img: item10, title: 'บัตรของขวัญ Apple Store' }
    ];

    const containerRef = useRef(null)

    const handleScroll = () => {
        console.log(containerRef.current)
        // if (containerRef.current) {
        //     const scrollLeft = containerRef.current;
        //     // Do something with the scrollLeft value
        //     console.log('Scroll left:', scrollLeft);
        // }
    };


    return (

        < Box sx={{}}  >
            <ImageList sx={{
                position: 'relative',
                flexWrap: 'nowrap',
                scrollBehavior: 'smooth',
                overflowX: 'scroll'

            }
            } onScroll={handleScroll} ref={containerRef} cols={itemData.length}  >
                {itemData.map((item) => (
                    <ImageListItem key={item.title} sx={{ mx: 2 }}>
                        <img
                            src={item.img.src}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '120px', objectFit: 'contain' }}
                        />
                        <Typography align="center">{item.title}</Typography>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )

}