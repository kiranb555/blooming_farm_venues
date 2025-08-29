"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BookingSteps from "@/components/booking-steps";
import Testimonial from "@/components/testimonial";
import Slider from "@/components/slider";

// Dynamically import Locate component with SSR disabled
const Locate = dynamic(
  () => import("@/components/locate"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <section>
        <Slider />
      </section>

      {/* Additional Content */}
      <section className="container mx-auto px-4 py-16">
         <h2 className="text-3xl font-bold text-center mb-8">Welcome to Blooming Farm Venue</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Premium Venue</h3>
            <p className="text-gray-600">
              Discover our stunning farm venue perfect for your special occasion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Exceptional Service</h3>
            <p className="text-gray-600">
              Our dedicated team ensures your event is nothing short of perfect.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Perfect Location</h3>
            <p className="text-gray-600">
              Our beautiful farm venue offers the perfect setting for your event.
            </p>
          </motion.div>
        </div>
      </section>
      <section>
        <Locate />
      </section>
      <section>
        <BookingSteps />
      </section>
      <section>
        <Testimonial />
      </section>
    </main>
  );
}