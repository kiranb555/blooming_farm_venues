"use client";

import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { 
  EnvelopeIcon as SolidEnvelopeIcon,
  PhoneIcon as SolidPhoneIcon,
  ChatBubbleBottomCenterTextIcon as SolidChatIcon
} from '@heroicons/react/24/solid';
import { FaInstagram, FaYoutube, FaFacebookF  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PHONE, EMAIL, SOCIAL_MEDIA, FORMATED_PHONE, ADDRESS } from '@/components/utils/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleCall = () => {
    window.location.href = `tel:${PHONE}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We will get back to you soon.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialButtons = [
    { 
      icon: <FaInstagram className="w-8 h-8" />,
      label: "Instagram",
      url: SOCIAL_MEDIA.INSTAGRAM,
      color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
    },
    { 
      icon: <FaFacebookF className="w-8 h-8" />,
      label: "Facebook",
      url: SOCIAL_MEDIA.FACEBOOK,
      color: "bg-[#1877F2] hover:bg-[#166FE5]"
    },
    { 
      icon: <FaYoutube className="w-8 h-8" />,
      label: "YouTube",
      url: SOCIAL_MEDIA.YOUTUBE,
      color: "bg-red-500 hover:bg-red-600"
    },
    { 
      icon: <SolidChatIcon className="w-8 h-8" />,
      label: "WhatsApp",
      url: SOCIAL_MEDIA.WHATSAPP,
      color: "bg-green-500 hover:bg-green-600"
    },
    { 
      icon: <SolidEnvelopeIcon className="w-8 h-8" />,
      label: "Email",
      url: `mailto:${EMAIL}`,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    { 
      icon: <SolidPhoneIcon className="w-8 h-8" />,
      label: "Call",
      onClick: handleCall,
      color: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        {/* Phone Number Section */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PhoneIcon className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h2>
          <button
            onClick={handleCall}
            className="mt-4 text-4xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300 focus:outline-none flex items-center justify-center mx-auto"
            aria-label={`Call ${FORMATED_PHONE}`}
          >
            <DevicePhoneMobileIcon className="w-8 h-8 mr-3" />
            {FORMATED_PHONE}
          </button>
          <p className="mt-3 text-gray-500">Available 24/7 for your inquiries</p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <motion.a
            href={`mailto:${EMAIL}`}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 block"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <EnvelopeIcon className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 break-all">{EMAIL}</p>
          </motion.a>
          {/* Address */}
          <motion.a
            href="https://maps.google.com/maps/dir/35.4542331,-80.745409"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 block"
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MapPinIcon className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">{ADDRESS}</p>
          </motion.a>
        </div>

        {/* Social Media Section */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialButtons.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                onClick={social.onClick}
                target={social.url?.startsWith('http') ? "_blank" : undefined}
                rel={social.url?.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`${social.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-lg mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Send Us a Message</h2>
          
          {submitStatus.message && (
            <motion.div
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 placeholder-gray-400"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800 placeholder-gray-400"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}