import React from "react";

const EventVideos = ({selectedEvent, openLightbox}) => {
  return (
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
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedEvent.title}
            </h2>
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
                onClick={() => openLightbox(selectedEvent.images, index)}
              >
                <Image
                  src={image}
                  alt={`${selectedEvent.title} - ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventVideos;
