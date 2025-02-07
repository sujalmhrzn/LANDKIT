import React, { useRef } from "react";
import { Box, Flex, Heading, HStack, IconButton, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Instagram from '../icons/Instagram'
import Airbnb from "../icons/Airbnb";
import Photo1 from "../assets/photo-1.jpg";
import Photo26 from "../assets/photo-26.jpg";
import PrevButton from "./PreviousButton";
import NextButton from "./NextButton";
import { Swiper as SwiperType } from "swiper";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <Box mx="auto" overflow="hidden" borderRadius='lg' maxW='1300px'>
      <Flex direction='row' alignItems='center' borderRadius='lg'>
        <PrevButton swiperRef={swiperRef} /> {/* Pass the ref to PrevButton */}
        
        {/* Left Arrow Button */}
        <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}

        loop={true}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <HStack bg='gray.100' h={500} borderRadius='lg' overflow='hidden'>
              <img src={Photo1} width="50%" />
              <Flex direction="column" alignItems='center' mx='50px' px='50px'>
                <Box width='200px' height='100px'><Airbnb /></Box>
                <Text textAlign="center" py='20px' fontSize="20px">"Landkit is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project."</Text>
                <Text py='20px'>DAVE GAMACHE</Text>
              </Flex> 
            </HStack>
          </SwiperSlide>
          <SwiperSlide>
            <HStack bg='gray.100' h={500} borderRadius='lg'>
              <img src={Photo26} width="50%" />
              <Flex direction="column" alignItems="center" mx='50px' px='50px'>
                <Box width='200px' height='100px'><Instagram /></Box>
                <Text textAlign="center" py='20px' fontSize="20px">"I've never used a theme as versatile and flexible as Landkit. It's my go to for bulding landing sites on almost any project."</Text>
                <Text py='20px'>RUSS D'SA</Text>
              </Flex>
            </HStack>
          </SwiperSlide>
        </Swiper>
        <NextButton swiperRef={swiperRef} /> {/* Pass the ref to NextButton */}
      </Flex>
    </Box>
    
  );
};

const Testimonial = () => {
  return (
    <Box>
      <Heading as="h1" fontSize='30px' textAlign='center' pb={5}>Our customers are our biggest fans.</Heading>
      <Text textAlign='center' fontSize='20px'>We don't like to brag, but we don't mind letting our customers do it for us.</Text>
      <Text textAlign='center' pb={10} fontSize='20px'>Here are a few nice things folks have said about our themes over the years.</Text>
      <Box pt={4}>
        <Carousel />
      </Box>
    </Box>
  );
};

export default Testimonial;
