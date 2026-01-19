"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EMAIL, FORMATED_PHONE, PHONE } from "@/components/utils/constants";

const faqs = [
    {
      question: "What types of events can be hosted at your farm venue?",
      answer: "Our farm venue is perfect for weddings, corporate events, family reunions, birthday parties, quinceañera, gender reveal parties, graduation parties, sweet 16 parties, and photography sessions. We offer both indoor and outdoor spaces to accommodate various event types and sizes."
    },
    {
      question: "What is the maximum capacity of your venue?",
      answer: "Our venue accommodates up to 200 guests for seated events and 300 for standing receptions."
    },
    {
      question: "What furniture is included with the venue rental?",
      answer: "We provide up to 20 round tables and 200 chairs for your use, the final quantity provided is based on your specific requirements and confirmed guest count."
    },
    {
      question: "Is there on-site parking available?",
      answer: "Yes, we have on-site parking available for 70 vehicles. We also have designated areas for accessible parking. For larger events, we can recommend nearby overflow parking options."
    },
    {
      question: "Can we bring in our own caterer?",
      answer: "Yes! We invite you to bring in a caterer of your choice to personalize your event. As we do not provide in-house food services, you'll have full control over your menu selection."
    },
    {
      question: "What is your alcohol policy?",
      answer: "Alcohol service is permitted via our licensed bartenders. To comply with state ABC spirit laws, guests serving hard liquor must secure a Limited Special Occasion Permit prior to the event. All alcohol service must comply with state laws."
    },
    {
      question: "Do you have a noise ordinance?",
      answer: "Yes, outdoor music must end by 11:00 PM to comply with local noise ordinances. Indoor events can continue later with adjusted sound levels."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require a 50% deposit to secure your date, which is refundable up to 90 days before your event. Cancellations within 90 days of the event will result in forfeiture of the deposit."
    },
    {
      question: "Is the venue accessible for guests with disabilities?",
      answer: "We strive to accommodate all guests. While the main stage is fully accessible, some of our secondary rooms have limited accessibility. Please let us know your requirements when booking so we can ensure you have a seamless experience."
    },
    {
      question: "Do you offer on-site accommodations?",
      answer: "Yes, we have a charming on-site home available that can accommodate 6-9 guests for the night of your event."
    },
    {
      question: "Still have questions?",
      answer:  `Contact us at ${EMAIL} or call us at ${FORMATED_PHONE}`
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
            <a href={`mailto:${EMAIL}`} className="text-green-600 hover:text-green-500">
              {EMAIL}
            </a>{" "}
            or call us at{" "}
            <a href={`tel:${PHONE}`} className="text-green-600 hover:text-green-500">
              {FORMATED_PHONE}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}