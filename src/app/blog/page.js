"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaUsers, FaUtensils, FaParking, FaWifi, FaMusic, FaSnowflake } from "react-icons/fa";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blooming Farm Blog</h1>
          <p className="text-xl text-gray-600">Expert advice and inspiration for your next event</p>
        </div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&auto=format&fit=crop&q=80"
              alt="Wedding venue with beautiful decorations"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-10">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-1" />
                June 15, 2025
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <FaClock className="mr-1" />
                10 min read
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Essential Questions to Ask Before Booking Your Dream Venue
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Choosing the perfect venue is one of the most important decisions you'll make when planning your event. 
              To help you make an informed choice, we've compiled a comprehensive list of questions to ask before signing any contracts.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Availability and Booking</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Is my preferred date available? Are there any blackout dates?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>How far in advance should I book to secure my date?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>What is your cancellation policy?</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Capacity and Layout</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex items-center text-gray-700 mb-2">
                  <FaUsers className="text-green-600 mr-2" />
                  <span className="font-medium">Pro Tip:</span>
                </div>
                <p className="text-gray-600">
                  Always verify the venue's capacity for both seated and standing arrangements. 
                  A space that fits 200 standing might only accommodate 120 seated with tables.
                </p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>What is the maximum capacity for both seated and standing arrangements?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Can we see a floor plan or 3D layout of the space?</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Food and Beverage</h2>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg mb-6">
                <FaUtensils className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600">
                  Many venues have preferred or exclusive caterers. If you have specific dietary needs or cultural 
                  requirements, discuss these upfront to ensure they can be accommodated.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Logistics</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FaParking className="text-green-600 mr-2" />
                    Parking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Is there sufficient parking? Is it free? What about valet services?
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FaWifi className="text-green-600 mr-2" />
                    Technology
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Is there reliable Wi-Fi? What AV equipment is available?
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FaMusic className="text-green-600 mr-2" />
                    Entertainment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Are there any noise restrictions or time limits for music?
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FaSnowflake className="text-green-600 mr-2" />
                    Climate Control
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Is the venue air-conditioned/heated? Can temperature be adjusted?
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Budget Considerations</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-700">
                  <span className="font-bold">Important:</span> Always ask about additional fees that might not be included in the initial quote, 
                  such as service charges, gratuity, cleaning fees, or overtime charges.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Final Checklist</h2>
              <p className="text-gray-700 mb-4">
                Before you sign the contract, make sure you have clear answers to these final questions:
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>What is the payment schedule?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>What is the bad weather contingency plan for outdoor events?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Are there any restrictions we should know about (decorations, candles, etc.)?</span>
                </li>
              </ul>

              <div className="bg-green-50 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Tour Our Venue?</h3>
                <p className="text-gray-700 mb-4">
                  Now that you know what to ask, we'd love to show you around Blooming Farm Venues. 
                  Contact us today to schedule a tour and see how our space can bring your event vision to life.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}