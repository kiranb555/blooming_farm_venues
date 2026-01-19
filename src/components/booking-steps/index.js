"use client";

import { motion } from "framer-motion";
import { PhoneIcon, CalendarIcon, CreditCardIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    number: 1,
    title: "Contact Us",
    description: "Get in touch with our team to discuss your event requirements",
    icon: <PhoneIcon className="w-5 h-5" />,
  },
  {
    number: 2,
    title: "Check Availability",
    description: "We'll help you find the perfect date for your event",
    icon: <CalendarIcon className="w-5 h-5" />,
  },
  {
    number: 3,
    title: "Payment",
    description: "Confirm your booking with a 50% secure deposit",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
];

export default function BookingSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Booking Process</h2>
          <p className="text-lg text-gray-600">Plan your perfect event in just a few easy steps</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Left side (or right for even steps) */}
                <div className={`w-full md:w-1/2 p-6 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                }`}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Center number */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-500 z-10">
                  <span className="text-lg font-bold text-blue-600">{step.number}</span>
                </div>

                {/* Right side (or left for even steps) - Empty for spacing */}
                <div className="hidden md:block w-1/2 p-6"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}