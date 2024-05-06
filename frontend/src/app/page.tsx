import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import { Container, fontFamily } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { useEffect } from "react";

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







export default function Home() {


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

  console.log(itemData[3].img.src)






  return (
    <Container >
      <Box sx={{ display: "flex", justifyContent: 'center', gap: "10px" }}>
        {Object.entries(navBar).map(([key, value]) => (<Typography sx={{ fontSize: '15px' }} key={key}>{value}</Typography>))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: "10vh" }}>
        <Box sx={{ maxWidth: '600px' }}>
          <Typography variant="h3" component='span'>ร้านของเรา{' '}
            <Typography variant="h3" component='span' sx={{ color: 'grey', display: 'inline' }}>
              คือที่ที่ดีที่สุดในการซื้อผลิตภัณฑ์ที่คุณรัก
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Box>
            <Box my={3}>
              <Typography>ต้องการความช่วยเหลือในการช้อปปิ้งใช่มั้ย</Typography>
              <Link>ถาม Specialist ได้เลย</Link>
            </Box>
            <Box my={3}>
              <Typography>แวะไปที่ Apple Store</Typography>
              <Link>ค้นหาร้านที่อยู่ใกล้คุณ</Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Image List */}
      <Box >
        <ImageList sx={{ flexWrap: 'nowrap', }} cols={itemData.length} >
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


    </Container >
  );
}

