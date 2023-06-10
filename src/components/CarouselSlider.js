import React, { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import bmw from '../public/images/slider/bmw.jpg'
import bus from '../public/images/slider/bus.jpg'
import sienna from '../public/images/slider/sienna.jpg'
import truck from '../public/images/slider/truck.jpg'

const CarouselSlider = () => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  return (
    <div className='mt-20'>
      <Carousel
        maw={700}
        mx="auto"
        height={400}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
      >
        <Carousel.Slide><Image src={bmw} alt='Image of a bmw' priority={true} /></Carousel.Slide>
        <Carousel.Slide><Image src={bus} alt='Image of a bus' priority={true} /></Carousel.Slide>
        <Carousel.Slide><Image src={sienna} alt='Image of a sienna' priority={true} /></Carousel.Slide>
        <Carousel.Slide><Image src={truck} alt='Image of a truck' priority={true} /></Carousel.Slide>
      </Carousel>
    </div>
  )
}

export default CarouselSlider