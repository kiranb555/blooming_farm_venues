"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

const sliderImages = [
  // Wedding Events
  // {
  //   src: "https://images.unsplash.com/photo-1606894039964-58496bb463ae?ixlib=rb-4.0.3",
  //   alt: "Elegant outdoor wedding setup in farm setting",
  //   title: "Elegant Farm Weddings",
  //   subtitle: "Traditional mandap setups in natural farm settings"
  // },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3",
    alt: "Bride and Groom in Farm",
    title: "Romantic Farm Settings",
    subtitle: "Capture your special moments in nature's lap"
  },
  // Haldi Celebrations
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3",
    alt: "Farm Haldi Ceremony",
    title: "Vibrant Haldi Functions",
    subtitle: "Celebrate with turmeric and flowers in open air"
  },
  {
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3",
    alt: "Colorful Haldi Celebration",
    title: "Haldi on the Farm",
    subtitle: "Traditional ceremonies surrounded by nature"
  },
  // Birthday Parties
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    alt: "Farm Birthday Party",
    title: "Farm Birthday Celebrations",
    subtitle: "Unforgettable birthday parties in natural settings"
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3",
    alt: "Kids Birthday on Farm",
    title: "Kids' Farm Parties",
    subtitle: "Fun-filled celebrations with farm animals and activities"
  },
  // Plant Nursery
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3",
    alt: "Farm Plant Nursery",
    title: "Plant Nursery",
    subtitle: "Discover our collection of farm-fresh plants and saplings"
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3",
    alt: "Organic Farm Produce",
    title: "Fresh Farm Produce",
    subtitle: "Locally grown, organic plants and seeds"
  }
];

export default function Slider() {
  return (
    <div className="relative h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-full w-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index < 3}
              quality={85}
              onError={(e) => {
                console.error(`Failed to load image: ${image.src}`);
                e.target.src = '/images/placeholder.jpg'; // Make sure to add a fallback image
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-4 font-serif"
              >
                {image.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-2xl"
              >
                {image.subtitle}
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white;
          width: 10px;
          height: 10px;
          opacity: 0.6;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f59e0b;
          transform: scale(1.3);
          width: 30px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}