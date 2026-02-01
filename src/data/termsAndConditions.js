export const termsAndConditions = {
  lastUpdated: new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    // month: 'long', 
    // day: 'numeric' 
  }),
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: [
        'Welcome to Blooming Farm Venues. These Terms and Conditions ("Terms") govern your use of our website and services.',
        'By accessing or using our services, you agree to be bound by these Terms.'
      ]
    },
    {
      id: 'booking-reservations',
      title: '2. Booking and Reservations',
      items: [
        'All bookings are subject to availability and our confirmation.',
        'A non-refundable deposit of 50% is required to secure your booking.',
        'Full payment is due 30 days prior to the event date.',
        // 'We require a security deposit of $500, refundable after the event pending inspection.'
      ]
    },
    {
      id: 'cancellation-policy',
      title: '3. Cancellation Policy',
      content: [
        'Cancellations made more than 30 days before the event will receive a full refund of their deposit. Cancellations within 30 days are non-refundable.',
        'In case of extreme weather conditions, we will work with you to reschedule.'
      ]
    },
    {
      id: 'venue-rules',
      title: '4. Venue Rules',
      items: [
        'No open flames except in designated areas.',
        'Music must end by 11:00 PM on all days.',
        'All decorations must be approved in advance.'
      ]
    },
    {
      id: 'liability-insurance',
      title: '5. Liability and Insurance',
      content: [
        'Blooming Farm Venues is not responsible for any loss, damage, or injury to persons or property during your event.',
        'We strongly recommend that you obtain event insurance to cover any unforeseen circumstances.'
      ]
    },
    {
      id: 'privacy-policy',
      title: '6. Privacy Policy',
      content: [
        'We respect your privacy and are committed to protecting your personal information.',
        'Your information will only be used in accordance with our Privacy Policy.'
      ]
    },
    {
      id: 'changes-to-terms',
      title: '7. Changes to Terms',
      content: [
        'We reserve the right to modify these Terms at any time.',
        'Any changes will be effective immediately upon posting on our website.'
      ]
    }
  ]
};
