'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import { Container, fontFamily } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Hidden, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import ImageLists from "@/components/ImageLists";
import ImageCard1 from "@/components/ImageCard1";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import NavBar from "@/components/NavBar";
import HeroBannerContainer from "@/components/HeroBannerContainer";
import Footer from "@/components/Footer";









export default function Home() {













  return (
    <Box>
      <Container >
        <NavBar />
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
      </Container >

      <ImageLists />

      <Container>
        <Box sx={{ my: 10 }}>
          <Typography variant="h4">ผลิตภัณฑ์ล่าสุดของเรา มาดูว่ามีอะไรใหม่บ้างได้เลย</Typography>

        </Box>
      </Container>
      <ImageCard1 />
      <HeroBannerContainer />
      <Container>
        <Footer />
      </Container>
    </Box>







  );
}

