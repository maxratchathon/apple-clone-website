import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import { Container, fontFamily } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
import { useEffect } from "react";






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






  return (
    <Container >
      <Box sx={{ display: "flex", justifyContent: 'center', gap: "10px" }}>
        {Object.entries(navBar).map(([key, value]) => (<Typography key={key}>{value}</Typography>))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: "10vh" }}>
        <Box sx={{ maxWidth: '600px' }}>
          <Typography variant="h3">ร้านของเรา{' '}
            <Typography variant="h3" sx={{ color: 'grey', display: 'inline' }}>
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
    </Container >
  );
}

