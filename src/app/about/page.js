"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Replace with your actual founder image
import founderImage from "../../../public/founder.jpg";

const services = [
  {
    title: "Wedding Venues",
    description:
      "Breathtaking farm venues perfect for your special day, surrounded by nature's beauty.",
    icon: "💒",
  },
  {
    title: "Haldi Functions",
    description:
      "Vibrant and colorful Haldi ceremonies in a natural, open-air farm setting.",
    icon: "🌼",
  },
  {
    title: "Graduation Parties",
    description:
      "Celebrate academic achievements with a memorable outdoor graduation party.",
    icon: "🎓",
  },
  {
    title: "Birthday Celebrations",
    description:
      "Fun-filled birthday parties with plenty of space for games and entertainment.",
    icon: "🎉",
  },
  {
    title: "Gender Reveal Parties",
    description:
      "Create unforgettable memories with a beautiful farm backdrop for your special reveal.",
    icon: "👶",
  },
  {
    title: "Corporate Events",
    description:
      "Unique outdoor spaces for corporate retreats, team building, and company celebrations.",
    icon: "👔",
  },
  {
    title: "Photography Spots",
    description:
      "Picturesque locations that provide the perfect backdrop for professional photoshoots.",
    icon: "📸",
  },
  {
    title: "Farm Stays",
    description:
      "Experience farm life with our comfortable and authentic farm stay accommodations.",
    icon: "🏡",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 to-amber-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Creating unforgettable experiences in the heart of nature
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-gray-900">
              Welcome to Blooming Farms
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Nestled in the picturesque countryside, Blooming Farms is a
              family-owned venue that brings people together to celebrate life's
              most precious moments. Our passion for nature and hospitality
              creates the perfect setting for your special events.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16 rounded-2xl shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center"> */}
            {/* <div className="relative h-64 md:h-96 lg:relative lg:min-h-[400px]">
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '/blooming_farm_venues' : ''}/founder.jpg`}
                alt="Founder"
                width={500}
                height={600}
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div> */}
            <div className="mt-10 lg:mt-0 items-center">
              <div className="text-base max-w-prose lg:max-w-none">
                <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
                  Our Founder
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Venkat
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  With over 15 years of experience in hospitality and a deep
                  love for nature, Venkat founded Blooming Farms with a vision to
                  create a space where people could connect with nature while
                  celebrating life's important moments. His dedication to
                  sustainability and community has made Blooming Farms a beloved
                  destination for events of all kinds.
                </p>
                <div className="mt-6">
                  <blockquote className="relative">
                    <div className="relative text-lg font-medium text-gray-900">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-8 -translate-y-2 h-8 w-8 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative italic">
                        "Our mission is to provide a sanctuary where nature and
                        celebration come together to create memories that last a
                        lifetime."
                      </p>
                    </div>
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-green-600">
                        Venkat
                      </p>
                      <p className="text-base text-gray-500">Founder & CEO</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="pt-6"
                >
                  <div className="group relative bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-amber-200 h-full">
                    {/* Icon Container */}
                    <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-amber-50 text-amber-500 text-2xl group-hover:bg-amber-100 transition-colors duration-300">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-amber-800">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your journey with us?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-100">
            Contact us today to book your event or schedule a tour of our
            beautiful farm venues.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 sm:w-auto"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </div>
  );
}
