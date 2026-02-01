"use client";

import { ADDRESS, EMAIL, PHONE } from "@/components/utils/constants";
import { motion } from "framer-motion";
import { termsAndConditions } from "@/data/termsAndConditions";

const Terms = () => {
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
            Last updated: {termsAndConditions.lastUpdated}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-green max-w-none">
          <div className="space-y-8">
            {termsAndConditions.sections.map((section, index) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                
                {section.content && (
                  <div className="space-y-4 text-gray-600">
                    {section.content.map((paragraph, i) => (
                      <p key={`${section.id}-p-${i}`}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.items && section.items.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                    {section.items.map((item, i) => (
                      <li key={`${section.id}-item-${i}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}

            {/* Contact Us Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: termsAndConditions.sections.length * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {termsAndConditions.sections.length + 1}. Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2 text-gray-800 font-medium">
                Email: <a href={`mailto:${EMAIL}`} className="text-emerald-700 hover:text-emerald-800">{EMAIL}</a><br />
                Phone: <a href={`tel:${PHONE}`} className="text-emerald-700 hover:text-emerald-800">{PHONE}</a><br />
                Address: {ADDRESS}
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;