"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1741441033653-aaea80f10c1a?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Colorful Haldi Celebration",
    title: "Haldi on the Farm",
    subtitle: "Traditional ceremonies surrounded by nature"
  },
  {
    src: "https://images.unsplash.com/photo-1685524482347-b81b4ebfa400?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Outdoor wedding ceremony in farm setting",
    title: "Farm Wedding",
    subtitle: "Perfect blend of nature and celebration"
  },
  {
    // src: "https://images.unsplash.com/photo-1670211589390-a1bc427fc204?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   src:"https://images.unsplash.com/photo-1670211589390-a1bc427fc204",
    alt: "Gender Reveal Party",
    title: "Gender Reveal Party",
    subtitle: "Unwrap the surprise with a gender reveal party"
  },
  // Birthday Parties
  {
    // src: "https://images.unsplash.com/photo-1598845243320-c43cf5fd4af9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src:"https://plus.unsplash.com/premium_photo-1692912319629-ba546cfaa546?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Farm Birthday Party",
    title: "Farm Birthday Celebrations",
    subtitle: "Unforgettable birthday parties in natural settings"
  },
  {
    src: "https://images.unsplash.com/photo-1717205963725-e2a7ac8f23ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kids Birthday on Farm",
    title: "Kid's Farm Parties",
    subtitle: "Fun-filled celebrations with farm animals and activities"
  },
  {
    src: "https://images.unsplash.com/photo-1758270703824-a6565c6a33a8?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Graduation Party",
    title: "Graduation Party",
    subtitle: "Celebrate with friends and family in a natural setting"
  },
  // Plant Nursery
  // {
  //   src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3",
  //   alt: "Farm Plant Nursery - coming soon",
  //   title: "Plant Nursery",
  //   subtitle: "Discover our collection of farm-fresh plants and saplings"
  // },
  // {
  //   src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3",
  //   alt: "Organic Farm Produce",
  //   title: "Fresh Farm Produce",
  //   subtitle: "Locally grown, organic plants and seeds"
  // },
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