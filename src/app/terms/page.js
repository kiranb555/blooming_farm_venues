"use client";

import { ADDRESS, EMAIL, PHONE } from "@/components/utils/constants";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 to-amber-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-green max-w-none">
          <div className="space-y-12">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Blooming Farm Venues. These Terms and Conditions ("Terms") govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Booking and Reservations</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>All bookings are subject to availability and our confirmation.</li>
                <li>A non-refundable deposit of 30% is required to secure your booking.</li>
                <li>Full payment is due 30 days prior to the event date.</li>
                <li>We require a security deposit of $500, refundable after the event pending inspection.</li>
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Cancellations made more than 60 days before the event: Deposit is forfeited.</li>
                <li>Cancellations made 30-60 days before the event: 50% of total booking fee.</li>
                <li>Cancellations made less than 30 days before the event: No refund.</li>
                <li>In case of extreme weather conditions, we will work with you to reschedule.</li>
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Venue Rules</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>No smoking inside any buildings.</li>
                <li>No open flames except in designated areas.</li>
                <li>No pets allowed, except service animals.</li>
                <li>Music must end by 11:00 PM on weekdays and 12:00 AM on weekends.</li>
                <li>All decorations must be approved in advance.</li>
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Liability and Insurance</h2>
              <p className="text-gray-600 mb-4">
                Blooming Farm Venues is not responsible for any loss, damage, or injury to persons or property during your event. 
                We strongly recommend that you obtain event insurance to cover any unforeseen circumstances.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We respect your privacy and are committed to protecting your personal information. 
                Your information will only be used in accordance with our Privacy Policy.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website.
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2 text-gray-800 font-medium">
                Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                Phone: <a href={`tel:${PHONE}`}>{PHONE}</a><br />
                Address: {ADDRESS}
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}