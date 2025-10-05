"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaUsers,
  FaUtensils,
  FaParking,
  FaMusic,
} from "react-icons/fa";
import FaqPricing from "./FaqPricing";
import CtaPricing from "./CtaPricing";

const pricingTiers = [
  {
    name: "Half Day",
    description: "Perfect for daytime or evening events",
    timeSlots: [
      {
        type: "Weekday",
        slots: [
          {
            name: "Morning",
            hours: "9:00 AM - 4:00 PM (7 hours + 1 hour wrap-up)",
            price: "$550",
          },
          {
            name: "Evening",
            hours: "5:00 PM - 10:00 PM (5 hours + 1 hour wrap-up)",
            price: "$650",
          },
        ],
      },
      {
        type: "Weekend",
        slots: [
          {
            name: "Morning",
            hours: "9:00 AM - 4:00 PM (7 hours + 1 hour wrap-up)",
            price: "$700",
          },
          {
            name: "Evening",
            hours: "5:00 PM - 10:00 PM (5 hours + 1 hour wrap-up)",
            price: "$850",
          },
        ],
      },
    ],
    features: [
      "Dressing/Freshen-up space for up to 9 people",
      "Seating for up to 100 to 150 guests",
      "10 to 15 round tables",
      "Up to 60 car parking spaces",
      "Decorative lighting",
      "Full access to all indoor and outdoor spaces",
      "Bounce house available on request",
      "20 * 40 Tent option available on request",
    ],
    popular: false,
  },
  {
    name: "Full Day with Overnight",
    description:
      "Perfect for weddings and large events with overnight accommodation",
    timeSlots: [
      {
        type: "24-Hour Access",
        slots: [
          {
            name: "Full Day",
            hours: "9:00 AM - Next Day 9:00 AM (24 hours)",
            price: "$1250",
            note: "Includes overnight accommodation",
          },
        ],
      },
    ],
    features: [
      "24-hour venue access",
      "Seating for up to 100 to 150 guests",
      "10 to 15 round tables",
      "Up to 60 car parking spaces",
      "Decorative lighting",
      "Full access to all indoor and outdoor spaces",
      "Overnight accommodation for up to 9 guests",
      "Bounce house available on request",
      "20 * 40 Tent option available on request",
    ],
    popular: true,
  },
];

const eventTypes = [
  {
    name: "Weddings",
    icon: <FaUsers className="h-8 w-8 text-pink-500" />,
    description: "Your dream wedding in a picturesque farm setting",
  },
  {
    name: "Corporate Events",
    icon: <FaUtensils className="h-8 w-8 text-blue-500" />,
    description: "Professional meetings and team building activities",
  },
  {
    name: "Birthday Parties",
    icon: <FaMusic className="h-8 w-8 text-yellow-500" />,
    description: "Unforgettable celebrations with loved ones",
  },
  {
    name: "Photoshoots",
    icon: <FaParking className="h-8 w-8 text-green-500" />,
    description: "Stunning backdrops for your special moments",
  },
];

const whatsIncluded = [
  "Basic setup (tables & chairs)",
  "Standard lighting arrangements",
  "Access to restrooms",
  "Parking space",
  "Basic sound system",
  "On-site staff assistance",
];

const additionalServices = [
  "Catering Services (vendor contacts available)",
  "Decorations (vendor contacts available)",
  "Photography/Videography (vendor contacts available)",
  "Kids Play Area Setup",
  "Bounce House Rentals",
  "Dance Floor Setup",
  "Tent Rentals",
  "Event Planning Services",
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
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Types of Events We Host
          </h2>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.name}
                </h3>
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${
                      tier.popular ? "ring-2 ring-green-500" : ""
                    }`}
                  >
                    <div className="p-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {tier.name}
                          </h3>
                          <p className="mt-1 text-gray-600">
                            {tier.description}
                          </p>
                        </div>
                        {tier.popular && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="mt-6 space-y-4">
                        {tier.timeSlots.map((timeSlot, timeSlotIndex) => {
                          const slots = timeSlot.slots || [timeSlot];
                          return (
                            <div
                              key={timeSlotIndex}
                              className="border border-gray-200 rounded-lg p-4"
                            >
                              {timeSlot.type && (
                                <h4 className="font-semibold text-gray-800 mb-3">
                                  {timeSlot.type}{" "}
                                  {timeSlot.type.includes("Rates")
                                    ? ""
                                    : "Rates"}
                                </h4>
                              )}
                              <div className="space-y-3">
                                {slots.map((slot, slotIndex) => (
                                  <div
                                    key={slotIndex}
                                    className="bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors"
                                  >
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <p className="font-medium text-gray-800">
                                          {slot.name || slot.type}{" "}
                                          {slot.name && slot.type ? "Slot" : ""}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                          {slot.hours}
                                        </p>
                                        {slot.note && (
                                          <p className="text-sm text-green-600 mt-1">
                                            {slot.note}
                                          </p>
                                        )}
                                      </div>
                                      {slot.price && (
                                        <p className="text-xl font-bold text-gray-900">
                                          {slot.price}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-8">
                        <h4 className="font-semibold text-gray-800 mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-3">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Custom Event Packages
                </h3>
                <p className="text-gray-600 mb-8">
                  We understand every event is unique. Contact us for custom
                  packages tailored to your specific needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included in All Packages
                    </h4>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Additional Services
                    </h4>
                    <ul className="space-y-3">
                      {additionalServices.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready to plan your event?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Contact us for a personalized quote based on your specific
                    requirements.
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
        <FaqPricing />

        {/* CTA Section */}
        <CtaPricing />
      </div>
    </div>
  );
}
