"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 to-amber-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-green max-w-none">
          <div className="space-y-8">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Contact details (name, email, phone)</li>
                <li>Event information and preferences</li>
                <li>Payment and billing information</li>
                <li>Website usage data and analytics</li>
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Process bookings and payments</li>
                <li>Communicate about your event</li>
                <li>Improve our services</li>
                <li>Send marketing communications (with consent)</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Data Sharing & Security</h2>
              <p className="text-gray-600 mb-4">We do not sell your personal information. We may share it with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Service providers (e.g., payment processors)</li>
                <li>Legal authorities when required</li>
                <li>Business partners (with your consent)</li>
              </ul>
              <p className="text-gray-600">We implement security measures to protect your data, but no system is 100% secure.</p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Your Rights</h2>
              <p className="text-gray-600 mb-4">You can:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access and update your information</li>
                <li>Request data deletion</li>
                <li>Opt-out of marketing</li>
                <li>Withdraw consent</li>
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Contact Us</h2>
              <p className="text-gray-600">
                For privacy-related questions or requests, contact us at:
              </p>
              <p className="mt-2 text-gray-800 font-medium">
                Email: privacy@bloomfarmvenues.com<br />
                Phone: (800) 400-8667<br />
                Address: 123 Farm Road, Countryside, CA 90210
              </p>
              <p className="mt-4 text-gray-600">
                We may update this policy periodically. Please check back for changes.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}