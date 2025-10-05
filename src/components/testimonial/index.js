"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Groom's Father",
    content: "Blooming Farms made our son's Haldi ceremony magical. Perfect setting, perfect execution!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Wedding Planner",
    content: "The perfect venue for our clients' special day. The team was incredibly professional and the space was stunning!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Corporate Event Manager",
    content: "Exceptional service and beautiful grounds. Our corporate retreat was a huge success thanks to this venue.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Birthday Party Host",
    content: "A magical setting that made my daughter's birthday unforgettable. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonial() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
          <p className="text-gray-600">Hear from people who have experienced our venue</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #9CA3AF;
            opacity: 0.6;
            margin: 0 4px !important;
          }
          .swiper-pagination-bullet-active {
            background: #1F2937;
          }
          .swiper-pagination {
            bottom: 0 !important;
          }
        `}</style>
      </div>
    </section>
  );
}