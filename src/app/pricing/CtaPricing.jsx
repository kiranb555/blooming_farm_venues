import React from 'react'
import { PHONE, FORMATED_PHONE } from '@/components/utils/constants'
import Link from 'next/link'
const CtaPricing = () => {
  return (
    <div className="text-center bg-green-50 rounded-2xl p-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Ready to Book Your Event?
    </h2>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Contact us today to check availability and start planning your
      perfect event at Blooming Farm.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
      >
        Contact Us
      </Link>
      <Link
        href={`tel:+1${PHONE}`}
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50"
      >
        Call Now: {FORMATED_PHONE}
      </Link>
    </div>
  </div>
  )
}

export default CtaPricing