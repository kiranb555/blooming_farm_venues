"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
      question: "What types of events can be hosted at your farm venue?",
      answer: "Our farm venue is perfect for weddings, corporate events, family reunions, birthday parties, and photography sessions. We offer both indoor and outdoor spaces to accommodate various event types and sizes."
    },
    {
      question: "What is the maximum capacity of your venue?",
      answer: "Our venue can comfortably accommodate up to 200 guests for seated events and up to 300 for standing receptions. For more intimate gatherings, we have smaller spaces available as well."
    },
    {
      question: "Do you provide tables, chairs, and linens?",
      answer: "Yes, we provide basic event furniture including tables, chairs, and basic white linens. We can also recommend rental companies for any additional items you might need to match your event's theme."
    },
    {
      question: "Is there on-site parking available?",
      answer: "Yes, we have ample free parking space for all your guests. We also have designated areas for accessible parking and can arrange for valet services upon request."
    },
    {
      question: "Can we bring in our own caterer?",
      answer: "We have a list of preferred caterers who are familiar with our venue, but you're welcome to bring in your own licensed and insured caterer. All outside caterers must provide proof of insurance and meet our kitchen requirements."
    },
    {
      question: "What is your alcohol policy?",
      answer: "Alcohol is permitted but must be served by our licensed bartenders. We offer bar packages or you can provide your own alcohol with our bartending service. All alcohol service must comply with state laws."
    },
    {
      question: "Do you have a noise ordinance?",
      answer: "Yes, outdoor music must end by 10:00 PM on weekdays and 11:00 PM on weekends to comply with local noise ordinances. Indoor events can continue later with adjusted sound levels."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require a 50% deposit to secure your date, which is refundable up to 90 days before your event. Cancellations within 90 days of the event will result in forfeiture of the deposit."
    },
    {
      question: "Is the venue accessible for guests with disabilities?",
      answer: "Yes, our venue is fully accessible with ramps, accessible restrooms, and designated parking. Please let us know about any specific accessibility needs when you book."
    },
    {
      question: "Do you offer on-site accommodations?",
      answer: "While we don't have on-site lodging, we're happy to provide a list of nearby hotels, bed and breakfasts, and other accommodations that our guests have enjoyed. Some offer special rates for our event clients."
    }
  ];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our farm venue</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                  <div 
                    className="cursor-pointer ml-4" // Added cursor-pointer and margin
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent double-triggering
                      toggleAccordion(index);
                    }}
                  >
                    <svg
                      className={`w-5 h-5 text-green-600 transition-transform duration-200 ${
                        activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: { duration: 0.3 }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { duration: 0.2 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-gray-900">Still have questions?</h3>
          <p className="mt-2 text-gray-600">
            Contact us at{" "}
            <a href="mailto:info@bloomfarmvenues.com" className="text-green-600 hover:text-green-500">
              info@bloomfarmvenues.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:8004008667" className="text-green-600 hover:text-green-500">
              (800) 400-8667
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}