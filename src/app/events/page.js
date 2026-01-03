"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Events from "./events.json";

const actualVenue = [
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43942379/original/a23ddcf8-955d-4132-96d7-92af1db38047.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43942379/original/837fe27a-7a10-4237-8cfc-64dd6930f9cb.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/68eac9df-85d6-49cb-ab6a-5e7847ab8856.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/cdb1a035-cd13-42bf-bebd-7e3ceaab5743.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43942379/original/2d498c0f-25c9-4536-a11b-344429679fb0.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/6a30cb4e-0055-437e-a4e4-d4e8fea4f39c.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/47413c7f-d52a-4256-abfe-7f07d23d55b5.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/25e794b2-1e5c-4fa7-b60c-b380b1e584ba.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/a009d809-fcc5-4255-bac1-5f96634203ef.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/9f3e1657-17e8-4fbb-a337-1d7fe6c0d5a2.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/79518e9f-51f3-4b9b-b85e-1929862d0ff0.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43942379/original/70a6b445-d44b-42f6-a515-db74d267340d.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43942379/original/851acd6a-44f3-4641-9142-5425a4145f25.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/9dd77622-9a95-4aa4-8631-a551103b5e67.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/b6187ca2-e5c1-4cdf-b8b7-7c3de0571191.jpeg?im_w=1200",
  "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43942379/original/60eec663-b33a-445f-afde-e662335ae9fa.jpeg?im_w=1440",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDM5NDIzNzk=/original/80afe816-ce04-4ded-b972-f9ff7b7921f3.jpeg?im_w=1440",
];

// console.log({ Events });
const events = Events?.events || [];
console.log({ events });

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllVenueImages, setShowAllVenueImages] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState([]);

  const openLightbox = (images, index = 0) => {
    setCurrentGallery(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navigate = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? currentGallery.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentGallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigate('prev');
          break;
        case 'ArrowRight':
          navigate('next');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const VenueGallery = () => (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Venue Gallery</h2>
      <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        Explore the beautiful spaces and amenities our venue has to offer for your next event.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(showAllVenueImages ? actualVenue : actualVenue.slice(0, 8)).map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-500"
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(actualVenue, index)}
          >
            <Image
              src={image}
              alt={`Venue Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        ))}
      </div>
      {!showAllVenueImages && actualVenue.length > 8 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllVenueImages(true)}
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            View More Photos
          </button>
        </div>
      )}
    </div>
  );

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
                  src={`${process.env.NODE_ENV === 'production' ? '/blooming_farm_venues' : ''}/recentevents/recent_${event.id}.jpeg`}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={event.id === 1}
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
        {/* {
          selectedEvent && <EventVideos selectedEvent={selectedEvent} openLightbox={openLightbox} /> 
        } */}

        {/* Venue Gallery Section */}
        <VenueGallery />

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                priority
              />
              <button 
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              className="absolute left-4 p-2 text-white hover:bg-black/30 rounded-full transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft size={32} />
            </button>
            
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  src={currentGallery[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                  {currentImageIndex + 1} / {currentGallery.length}
                </div>
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              className="absolute right-4 p-2 text-white hover:bg-black/30 rounded-full transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}