"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube, FaImages, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// Using Unsplash placeholder images with specific dimensions
const events = [
  {
    id: 1,
    title: "Summer Wedding Celebration",
    date: "June 15, 2025",
    location: "Blooming Farm",
    description: "A beautiful outdoor wedding ceremony followed by reception under the stars.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Wedding Highlights" },
      { id: "9bZkp7q19f0", title: "Bride & Groom First Dance" },
      { id: "JGwWNGJdvx8", title: "Reception Highlights" }
    ],
    images: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80"
    ],
    tags: ["Wedding", "Outdoor", "Reception"]
  },
  {
    id: 2,
    title: "Corporate Retreat 2025",
    date: "May 28, 2025",
    location: "Blooming Farm",
    description: "Annual corporate team building and strategy sessions in a serene farm setting.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Team Building Activities" },
      { id: "9bZkp7q19f0", title: "Strategy Sessions" },
      { id: "JGwWNGJdvx8", title: "Awards and Recognition" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009c5fdc8780?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505373876331-9ed56d0a2a2d?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Corporate", "Team Building", "Conference"]
  },
  {
    id: 3,
    title: "Birthday Bash",
    date: "April 10, 2025",
    location: "Blooming Farm",
    description: "A fun-filled birthday celebration with friends and family by the lake.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Birthday Wishes" },
      { id: "9bZkp7q19f0", title: "Cake Cutting Ceremony" },
      { id: "JGwWNGJdvx8", title: "Birthday Party Highlights" }
    ],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&auto=format&fit=crop&q=80",
    ],
    tags: ["Birthday", "Family", "Celebration"]
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
          <p className="text-xl text-gray-600">Relive the magical moments from our recent celebrations</p>
        </div>

        {/* Event List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedEvent.id === event.id ? 'ring-2 ring-green-500 scale-105' : 'hover:shadow-xl'
              }`}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative h-48">
                <Image
                  src={event.images[0]}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {event.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Event Details */}
        {selectedEvent && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            {/* Video Section */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedEvent.videos.map((video, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <h3 className="font-medium text-gray-900">{video.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Info */}
            <div className="p-6 md:p-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                  <div className="flex items-center mt-2 text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span className="mr-4">{selectedEvent.date}</span>
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
              
              {/* Photo Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FaImages className="mr-2" /> Photo Gallery
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {selectedEvent.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-500"
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${selectedEvent.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                className="absolute -top-10 right-0 text-white text-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] w-auto mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}