"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaUsers, FaUtensils, FaParking, FaMusic } from "react-icons/fa";
import { PHONE, FORMATED_PHONE } from "@/components/utils/constants";

const pricingTiers = [
    {
      name: "Hourly Rental",
      description: "Perfect for short events and meetings",
      price: "$60",
      duration: "per hour",
      features: [
        "Minimum 4 hours booking",
        "Basic seating arrangement",
        "Standard lighting",
        "Access to restrooms",
        "Parking space (limited)",
        "Basic sound system"
      ],
      popular: false
    },
    {
      name: "Half Day",
      description: "Ideal for small gatherings and celebrations",
      price: "$300",
      duration: "(6 hours)",
      features: [
        "Up to 6 hours of event time",
        "Seating for up to 50 guests",
        "Decorative lighting",
        "Access to outdoor spaces",
        "Ample parking",
        "Basic sound system"
      ],
      popular: true
    },
    {
      name: "Full Day",
      description: "Perfect for weddings and large events",
      price: "$540",
      duration: "(12 hours)",
      features: [
        "Up to 12 hours of event time",
        "Seating for up to 200 guests",
        "Premium lighting setup",
        "Full access to all areas",
        "Dedicated parking area",
        "Professional sound system"
      ],
      popular: false
    }
  ];

const eventTypes = [
  {
    name: "Weddings",
    icon: <FaUsers className="h-8 w-8 text-pink-500" />,
    description: "Your dream wedding in a picturesque farm setting"
  },
  {
    name: "Corporate Events",
    icon: <FaUtensils className="h-8 w-8 text-blue-500" />,
    description: "Professional meetings and team building activities"
  },
  {
    name: "Birthday Parties",
    icon: <FaMusic className="h-8 w-8 text-yellow-500" />,
    description: "Unforgettable celebrations with loved ones"
  },
  {
    name: "Photoshoots",
    icon: <FaParking className="h-8 w-8 text-green-500" />,
    description: "Stunning backdrops for your special moments"
  }
];

const whatsIncluded = [
  "Basic furniture setup (tables & chairs)",
  "Standard lighting arrangements",
  "Access to restrooms",
  "Parking space",
  "Basic sound system",
  "On-site staff assistance"
];

const additionalServices = [
    { name: "Catering Services", price: "Starts at $6 per plate" },
    { name: "Decorations", price: "Starts at $120" },
    { name: "Photography/Videography", price: "Starts at $180" },
    { name: "Additional Hours", price: "$36 per hour" },
    { name: "Security Personnel", price: "$12 per person per event" },
    { name: "Dance Floor Setup", price: "$60" }
  ];

export default function PricingPage() {
  const [selectedTab, setSelectedTab] = useState("hourly");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for your perfect event at Blooming Farm
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Types of Events We Host</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{event.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setSelectedTab("hourly")}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  selectedTab === "hourly"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Hourly & Daily Rates
              </button>
              <button
                onClick={() => setSelectedTab("packages")}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  selectedTab === "packages"
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Event Packages
              </button>
            </div>
          </div>

          {selectedTab === "hourly" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                    tier.popular ? "ring-2 ring-green-500" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="mt-2 text-gray-600">{tier.description}</p>
                    <div className="mt-6">
                      <p className="text-4xl font-bold text-gray-900">{tier.price}</p>
                      <p className="mt-1 text-gray-600">{tier.duration}</p>
                    </div>
                    <ul className="mt-8 space-y-4">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Event Packages</h3>
                <p className="text-gray-600 mb-8">
                  We understand every event is unique. Contact us for custom packages tailored to your specific needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included in All Packages</h4>
                    <ul className="space-y-3">
                      {whatsIncluded.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Services</h4>
                    <ul className="space-y-3">
                      {additionalServices.map((service, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="text-gray-700">{service.name}</span>
                          <span className="font-medium text-gray-900">{service.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to plan your event?</h4>
                  <p className="text-gray-600 mb-4">
                    Contact us for a personalized quote based on your specific requirements.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
                  >
                    Get a Custom Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">What is included in the rental fee?</h3>
              <p className="mt-2 text-gray-600">
                The rental fee includes the venue space, basic furniture setup, standard lighting, restroom access, and on-site staff assistance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Do you require a deposit?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we require a 30% deposit to secure your booking, with the remaining balance due 14 days before the event.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">What is your cancellation policy?</h3>
              <p className="mt-2 text-gray-600">
                Cancellations made more than 30 days before the event will receive a full refund of their deposit. Cancellations within 30 days are non-refundable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-green-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Event?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and start planning your perfect event at Blooming Farm.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Contact Us
            </a>
            <a
              href={`tel:+1${PHONE}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50"
            >
              Call Now: {FORMATED_PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}