import React from 'react'

const FaqPricing = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">
          What is included in the rental fee?
        </h3>
        <p className="mt-2 text-gray-600">
          The rental fee includes the venue space, basic furniture setup,
          standard lighting, restroom access, Parking space, and on-site staff
          assistance.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">
          Do you require a deposit?
        </h3>
        <p className="mt-2 text-gray-600">
          Yes, we require a 50% deposit to secure your booking.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">
          What is your cancellation policy?
        </h3>
        <p className="mt-2 text-gray-600">
          Cancellations made more than 30 days before the event will
          receive a full refund of their deposit. Cancellations within 30
          days are non-refundable.
        </p>
      </div>
    </div>
  </div>
  )
}

export default FaqPricing